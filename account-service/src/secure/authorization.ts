//Verifica se usuário está autorizado a fazer o que deseja fazer
import jwt from 'jsonwebtoken';
import fs from 'fs';
import authCommons, { Token } from 'ms-commons/secure/authorization';

const privateKey = fs.readFileSync('./keys/private.key', 'utf-8');
const jwtExpires = parseInt(`${ process.env.JWT_EXPIRES }`);
const jwtAlgorithm = "RS256";

function sign(accountId: string){
    const token: Token = { accountId }

    return jwt.sign(token, privateKey, {
        expiresIn: jwtExpires,
        algorithm: jwtAlgorithm
    });
}

export default {
    sign
}