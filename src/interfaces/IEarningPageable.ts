import { IEarning } from "./IEarning"

export interface IEarningPageable {
    content: IEarning[]
    empty: boolean
    first: boolean
    last: boolean
    number: number
    numberOfElements: number
    size: number
    totalElements: number
    totalPages: number
}