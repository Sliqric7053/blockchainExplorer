import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { Block, MovieDialogBoxOptions } from '../../blocks/models/blocks.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'blockchaininfo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dataSource: Block[];
  displayedColumns: string[] = ['Block hash', 'Block time', 'Block height'];

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    /* prevent error if no data is passed */
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MovieDialogBoxOptions
  ) {}

  ngOnInit() {}

  closeDialog() {
    this.dialogRef.close();
  }
}
