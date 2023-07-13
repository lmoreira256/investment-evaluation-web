import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EarningComponent } from './pages/earning/earning.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { StockComponent } from './pages/stock/stock.component';
import { GeneralComponent } from './pages/general/general.component';
import { RealEstateFundComponent } from './pages/real-estate-fund/real-estate-fund.component';
import { CheckpointComponent } from './pages/checkpoint/checkpoint.component';
import { StockCheckpointComponent } from './pages/stock-checkpoint/stock-checkpoint.component';
import { RealEstateFundCheckpointComponent } from './pages/real-estate-fund-checkpoint/real-estate-fund-checkpoint.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'checkpoint', component: CheckpointComponent },
  { path: 'stock-checkpoint', component: StockCheckpointComponent },
  {
    path: 'real-estate-fund-checkpoint',
    component: RealEstateFundCheckpointComponent,
  },
  { path: 'real-estate-fund', component: RealEstateFundComponent },
  { path: 'stock', component: StockComponent },
  { path: 'earning', component: EarningComponent },
  { path: '', redirectTo: '/general', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
