import { StockTypeEnum } from "src/enums/StockHistoricTypeEnum"

export interface IStockHistoric {
    id: string
    actualValue: number
    amount: number
    cashReturn: number
    createdAt: Date
    historicType: StockTypeEnum
    profitability: number
    purchaseValue: number
}
