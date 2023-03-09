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
import { StockTableComponent } from './stock/stock-table/stock-table.component';
import { EditStockDialogComponent } from './stock/edit-stock-dialog/edit-stock-dialog.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule,CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { StockListComponent } from './components/stock-list/stock-list.component';
import { ItemComponent } from './components/stock-list/item/item.component';

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
    StockTableComponent,
    EditStockDialogComponent,
    StockListComponent,
    ItemComponent,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
