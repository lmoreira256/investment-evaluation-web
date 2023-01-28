import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EarningComponent } from './earning/earning.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'stock', component: StockComponent },
  { path: 'earning', component: EarningComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
