import balanceModel, { iBalanceModel } from "./balanceModel";
import iBalance from "./iBalance";
import { QueryTypes } from "sequelize";

function add(balance: iBalance){
    return balanceModel.create(balance);
}

function findBalanceByAccount(accountId: string){
    return balanceModel.sequelize?.query(`
        SELECT
            IFNULL(((SELECT IFNULL(sum(balance),0) +
                (SELECT IFNULL(sum(balance),0) from balances WHERE type = 'T' 
                AND destinyId = '${accountId}') as transfers 
            FROM balances
            WHERE type = 'D' AND originId = '${accountId}')
            - 
            (SELECT IFNULL(sum(balance), 0)
            FROM balances 
            WHERE type != 'D' AND originId = '${accountId}')), 0) as balance
        FROM balances LIMIT 1;`, {
        type: QueryTypes.SELECT
    });
}

function findExtractByAccount(accountId: string){
    return balanceModel.sequelize?.query(`    
        SELECT * FROM balances
        WHERE (originId = '${accountId}' OR (destinyId = '${accountId}' && type = 'T'))
        ORDER BY createdAt DESC;`, {
        type: QueryTypes.SELECT
        });
}

export default {
    add,
    findBalanceByAccount,
    findExtractByAccount
}