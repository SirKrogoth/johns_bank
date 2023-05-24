import { accountStatus } from "./accountStatus";

export default interface iAccount{  
    accountId: string,
    firstName: string,
    lastName: string,
    document: string,
    gender: boolean,
    age: number,
    status: accountStatus
}