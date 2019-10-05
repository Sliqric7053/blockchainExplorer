import { Component, OnInit, Input, Optional, Inject } from '@angular/core';
import { Block, MovieDialogBoxOptions } from '../../blocks/models/blocks.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BlocksService } from '../../blocks/blocks.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blockchaininfo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dataSource$: Observable<Block>;
  displayedColumns: string[] = ['Block hash', 'Block time', 'Block height'];
  hash: string;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private readonly blockService: BlocksService,
    /* prevent error if no data is passed */
    @Optional() @Inject(MAT_DIALOG_DATA) public data: MovieDialogBoxOptions
  ) {}

  ngOnInit() {
    this.hash = this.blockService.getHash();

    this.dataSource$ = this.blockService.getBlockDetails(this.hash);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
