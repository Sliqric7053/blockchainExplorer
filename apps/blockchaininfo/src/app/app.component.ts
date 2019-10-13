import { Component, OnInit } from '@angular/core';
import { BlocksService } from './blocks/blocks.service';
import { Observable } from 'rxjs';
import { Block } from '@blockchaininfo/api-interfaces';

@Component({
  selector: 'blockchaininfo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  blocks$: Observable<Block[]>;

  constructor(private blockService: BlocksService) {}

  ngOnInit() {
    this.blocks$ = this.blockService.getLatestBlocks();
  }
}
