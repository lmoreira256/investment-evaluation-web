import { Injectable } from '@angular/core';
import { StockTypeEnum } from 'src/app/enums/StockHistoricTypeEnum';

@Injectable({
  providedIn: 'root',
})
export default class Formatter {
  formatDate(date: Date) {
    return new Date(date).toLocaleDateString('pt-br');
  }

  formatDateTime(date: Date) {
    return new Date(date).toLocaleString('pt-br');
  }

  formatCurrency(value: number) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  formatPercent(value: number) {
    if (value == 0) {
      return '0,00%'
    }

    return (value / 100).toLocaleString(undefined, {
      style: 'percent',
      minimumFractionDigits: 2,
    });
  }

  formatEnum(value: string) {
    return StockTypeEnum[value as keyof typeof StockTypeEnum];
  }
}
