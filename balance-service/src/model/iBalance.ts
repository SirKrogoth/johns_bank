import { UUID } from "crypto";
import { balanceTypes } from "./balanceTypes";

export default interface iBalance{
    balanceId: string,
    accountId: string,
    balance: number,
    type: balanceTypes
}