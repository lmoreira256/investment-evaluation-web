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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StockComponent,
    PageNotFoundComponent,
    EarningComponent,
    HistoricTableComponent,
    StockTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    StockHistoricService,
    Formatter,
    {
      provide: MatPaginatorIntl,
      useClass: CustomMatPaginatorIntl
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
