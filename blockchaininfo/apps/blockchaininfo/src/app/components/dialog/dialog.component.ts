import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BlockDetailsResults } from '@blockchaininfo/api-interfaces';

import { Observable } from 'rxjs';

import { BlocksService } from '../../blocks/blocks.service';

@Component({
  selector: 'blockchaininfo-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dataSource$: Observable<BlockDetailsResults>;
  block: BlockDetailsResults;
  hash: string;
  blogTotal = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private blockService: BlocksService,
    /* prevent error if no data is passed */
    @Optional() @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.hash = this.blockService.getHash();
    this.dataSource$ = this.blockService.getBlockDetails(this.hash);
    this.processDetails();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  processDetails() {
    this.dataSource$.subscribe(details => {
      this.block = details;
      details.details.tx.map(transaction => {
        transaction.out.map(outputItem => {
          this.blogTotal += Number(outputItem.value);
        });
      });
    });
  }
}
