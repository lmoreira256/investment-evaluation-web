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
import { StockHistoricService } from 'src/services/stock-historic.service';
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
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { ItemComponent } from './stock/stock-list/item/item.component';
import { NewEarningDialogComponent } from './earning/new-earning-dialog/new-earning-dialog.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NewStockDialogComponent } from './stock/new-stock-dialog/new-stock-dialog.component';
import { EditStockDrawerComponent } from './stock/edit-stock-drawer/edit-stock-drawer.component';
import { StockInfoComponent } from './stock/edit-stock-drawer/stock-info/stock-info.component';
import { StockValueComponent } from './stock/edit-stock-drawer/stock-value/stock-value.component';
import { StockReturnComponent } from './stock/edit-stock-drawer/stock-return/stock-return.component';
import { TableComponent } from './components/table/table.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/list/item-list/item-list.component';

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
    StockListComponent,
    ItemComponent,
    NewEarningDialogComponent,
    NewStockDialogComponent,
    EditStockDrawerComponent,
    StockInfoComponent,
    StockValueComponent,
    StockReturnComponent,
    TableComponent,
    ListComponent,
    ItemListComponent,
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
    StockHistoricService,
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
