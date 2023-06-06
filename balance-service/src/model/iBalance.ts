import { balanceTypes } from "./balanceTypes";

export default interface iBalance{
    balanceId: string,
    originId: string,
    destinyId: string,
    balance: number,
    type: balanceTypes
}