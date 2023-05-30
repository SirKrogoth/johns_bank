import { DestroyOptions } from 'sequelize';
import accountModel, { iAccountModel } from './accountModel';
import iAccount from './iAccount';

function add(account: iAccount){
    return accountModel.create(account);
}

function findByDocument(document: string){
    return accountModel.findOne<iAccountModel>({
        where: {
            document: document
        }
    });
}

export default {
    add,
    findByDocument
}