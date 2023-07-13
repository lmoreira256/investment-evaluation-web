import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StockComponent } from './stock/stock.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EarningComponent } from './earning/earning.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material.module';
import { CustomMatPaginatorIntl } from 'src/config/CustomMatPaginatorIntl';
import { MatPaginatorIntl } from '@angular/material/paginator';
import Formatter from 'src/utils/Formatter';
import { HistoricTableComponent } from './earning/historic-table/historic-table.component';
import { FormsModule } from '@angular/forms';
import {
  CurrencyMaskModule,
  CurrencyMaskConfig,
  CURRENCY_MASK_CONFIG,
} from 'ng2-currency-mask';
import { NewEarningDialogComponent } from './earning/new-earning-dialog/new-earning-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NewStockDialogComponent } from './stock/new-stock-dialog/new-stock-dialog.component';
import { EditStockDrawerComponent } from './general/edit-stock-drawer/edit-stock-drawer.component';
import { StockInfoComponent } from './general/edit-stock-drawer/stock-info/stock-info.component';
import { StockValueComponent } from './general/edit-stock-drawer/stock-value/stock-value.component';
import { StockReturnComponent } from './general/edit-stock-drawer/stock-return/stock-return.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/list/item-list/item-list.component';
import { GeneralComponent } from './general/general.component';
import { RealEstateFundComponent } from './real-estate-fund/real-estate-fund.component';
import { SummaryComponent } from './components/summary/summary.component';
import { CheckpointComponent } from './checkpoint/checkpoint.component';

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
