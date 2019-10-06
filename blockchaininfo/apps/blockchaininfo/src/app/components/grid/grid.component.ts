import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { BlocksService } from '../../blocks/blocks.service';
import { Block } from '@blockchaininfo/api-interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'blockchaininfo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<Block>;
  dataSourceLength: number;
  @Output() action: EventEmitter<string> = new EventEmitter();
  displayedColumns: string[] = ['Block hash', 'Block time', 'Block height'];
  now = new Date().getTime();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public dialog: MatDialog, private blockService: BlocksService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.blockService.getLatestBlocks().subscribe((blocks: Block[]) => {
      this.dataSource = new MatTableDataSource<Block>(blocks);
      this.dataSourceLength = blocks.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(hash: string) {
    this.blockService.setHash(hash);

    this.dialog.open(DialogComponent, {
      disableClose: false,
      width: '600px',
      height: '600px'
    });
  }
}
