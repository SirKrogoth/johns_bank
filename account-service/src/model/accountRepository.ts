import { DestroyOptions } from 'sequelize';
import accountModel, { iAccountModel } from './accountModel';
import iAccount from './iAccount';

function add(account: iAccount){
    return accountModel.create(account);
}

export default {
    add
}