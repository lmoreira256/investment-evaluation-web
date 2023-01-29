import { Injectable } from "@angular/core";
import { StockHistoricTypeEnum } from "src/enums/StockHistoricTypeEnum";

@Injectable({
    providedIn: 'root',
})
export default class Formatter {

    formatDate(date: Date) {
        return new Date(date).toLocaleDateString("pt-br");
    }

    formatCurrency(value: number) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    formatPercent(value: number) {
        return (value / 100).toLocaleString(undefined, { style: 'percent', minimumFractionDigits: 2 });
    }

    formatEnum(value: string) {
        return StockHistoricTypeEnum[value as keyof typeof StockHistoricTypeEnum];
    }


}