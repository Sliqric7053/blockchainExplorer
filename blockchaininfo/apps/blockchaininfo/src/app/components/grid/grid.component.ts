import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BlocksService } from '../../blocks/blocks.service';
import { Block } from '@blockchaininfo/api-interfaces';

@Component({
  selector: 'blockchaininfo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() dataSource: Block[];
  @Output() action: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = ['Block hash', 'Block time', 'Block height'];
  now = new Date().getTime();

  constructor(public dialog: MatDialog, private blockService: BlocksService) {}

  ngOnInit() {}

  openDialog(hash: string) {
    this.blockService.setHash(hash);

    this.dialog.open(DialogComponent, {
      disableClose: false,
      width: '600px',
      height: '600px'
    });
  }
}
