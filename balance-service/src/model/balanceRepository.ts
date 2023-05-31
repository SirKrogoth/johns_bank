import balanceModel, { iBalanceModel } from "./balanceModel";
import iBalance from "./iBalance";

function add(balance: iBalance){
    return balanceModel.create(balance);
}

export default {
    add
}