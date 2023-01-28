import { StockHistoricTypeEnum } from "src/enums/StockHistoricTypeEnum"

export interface IStockHistoric {
    id: string
    actualValue: number
    amount: number
    cashReturn: number
    createdAt: Date
    historicType: StockHistoricTypeEnum
    profitability: number
    purchaseValue: number
}
