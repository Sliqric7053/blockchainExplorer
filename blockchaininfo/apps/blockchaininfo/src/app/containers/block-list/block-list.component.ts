import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Block } from '../../blocks/models/blocks.model';
import { BlocksService } from '../../blocks/blocks.service';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'blockchaininfo-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  public dataSource$: Observable<Block[]>;
  private refresh$ = new BehaviorSubject<string>('');

  constructor(
    private readonly dialog: MatDialog,
    private readonly blockService: BlocksService
  ) {}

  ngOnInit() {
    this.dataSource$ = this.refresh$.pipe(
      switchMap(_ => this.blockService.getLatestBlocks()),
      tap(console.log)
    );
  }
}
