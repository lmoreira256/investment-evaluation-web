import { IStockHistoric } from "./IStockHistoric"

export interface IPageable {
    content: IStockHistoric[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    size: number
    totalElements: number
    totalPages: number
}