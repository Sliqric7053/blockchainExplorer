import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BlockListComponent } from './containers/block-list/block-list.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { GridComponent } from './components/grid/grid.component';
import { material } from './ui/ui-material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

const routes: Routes = [{ path: '', component: BlockListComponent }];

@NgModule({
  declarations: [
    AppComponent,
    BlockListComponent,
    DialogComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
    ...material,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
