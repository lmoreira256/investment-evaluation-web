import { IStock } from "./IStock"

export interface IStockPageable {
    content: IStock[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    size: number
    totalElements: number
    totalPages: number
}
