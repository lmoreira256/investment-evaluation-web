import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EarningComponent } from './pages/earning/earning.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StockComponent } from './pages/stock/stock.component';
import { GeneralComponent } from './pages/general/general.component';
import { RealEstateFundComponent } from './pages/real-estate-fund/real-estate-fund.component';
import { CheckpointComponent } from './pages/checkpoint/checkpoint.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'checkpoint', component: CheckpointComponent },
  { path: 'real-estate-fund', component: RealEstateFundComponent },
  { path: 'stock', component: StockComponent },
  { path: 'earning', component: EarningComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
