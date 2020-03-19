import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PreviewComponent } from './preview/preview.component';
import { ReportComponent } from './report/report.component';

const ROUTE_TABLE: Routes = [
  { path: '', component: ReportComponent},
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTE_TABLE)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
