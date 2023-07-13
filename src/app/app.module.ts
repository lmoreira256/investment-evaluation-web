import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StockComponent } from './pages/stock/stock.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EarningComponent } from './pages/earning/earning.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { CustomMatPaginatorIntl } from 'src/config/CustomMatPaginatorIntl';
import { MatPaginatorIntl } from '@angular/material/paginator';
import Formatter from 'src/utils/Formatter';
import { HistoricTableComponent } from './pages/earning/historic-table/historic-table.component';
import { FormsModule } from '@angular/forms';
import {
  CurrencyMaskModule,
  CurrencyMaskConfig,
  CURRENCY_MASK_CONFIG,
} from 'ng2-currency-mask';
import { NewEarningDialogComponent } from './pages/earning/new-earning-dialog/new-earning-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NewStockDialogComponent } from './pages/stock/new-stock-dialog/new-stock-dialog.component';
import { EditStockDrawerComponent } from './pages/general/edit-stock-drawer/edit-stock-drawer.component';
import { StockInfoComponent } from './pages/general/edit-stock-drawer/stock-info/stock-info.component';
import { StockValueComponent } from './pages/general/edit-stock-drawer/stock-value/stock-value.component';
import { StockReturnComponent } from './pages/general/edit-stock-drawer/stock-return/stock-return.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/list/item-list/item-list.component';
import { GeneralComponent } from './pages/general/general.component';
import { RealEstateFundComponent } from './pages/real-estate-fund/real-estate-fund.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CheckpointComponent } from './pages/checkpoint/checkpoint.component';
import { StockCheckpointComponent } from './pages/stock-checkpoint/stock-checkpoint.component';
import { RealEstateFundCheckpointComponent } from './pages/real-estate-fund-checkpoint/real-estate-fund-checkpoint.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockComponent,
    PageNotFoundComponent,
    EarningComponent,
    HistoricTableComponent,
    NewEarningDialogComponent,
    NewStockDialogComponent,
    EditStockDrawerComponent,
    StockInfoComponent,
    StockValueComponent,
    StockReturnComponent,
    TableComponent,
    ListComponent,
    ItemListComponent,
    GeneralComponent,
    RealEstateFundComponent,
    SummaryComponent,
    CheckpointComponent,
    StockCheckpointComponent,
    RealEstateFundCheckpointComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    CurrencyMaskModule,
  ],
  providers: [
    Formatter,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl,
    },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
