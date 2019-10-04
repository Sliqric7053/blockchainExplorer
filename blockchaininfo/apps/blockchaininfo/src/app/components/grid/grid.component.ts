import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Block, MovieDialogBoxOptions } from '../../blocks/models/blocks.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BlocksService } from '../../blocks/blocks.service';

@Component({
  selector: 'blockchaininfo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() dataSource: Block[];
  @Output() action: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = ['Block hash', 'Block time', 'Block height'];

  constructor(
    public dialog: MatDialog,
    private readonly blockService: BlocksService
  ) {}

  ngOnInit() {}

  openDialog(hash: string) {
    console.log('TCL: GridComponent -> openDialog -> hash', hash);
    // TODO: pass this to dialog component for display
    // this.blockService.getBlockDetails(hash);

    this.dialog.open(DialogComponent, {
      disableClose: false,
      width: '600px',
      height: '600px'
    });
  }
}
