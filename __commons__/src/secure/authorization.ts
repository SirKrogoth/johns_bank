import jwt, { VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const publicKey = fs.readFileSync(path.resolve(__dirname, '../../keys/public.key'), 'utf-8');
const jwtAlgorithm = 'RS256'

export type Token = { accountId: string }

async function verify(token: string){
    try {
        const decoded = await decodedToken(token);
        decoded?.accountId;
        
        return {
            accountId: decoded?.accountId
        }
    } catch (error) {
        console.error(`Houve um erro no Verify: ${error}`);
        return null;
    }
}

async function decodedToken(token: string){
    try {
        const decoded: Token = await jwt.verify(token, publicKey, {
            algorithms: [jwtAlgorithm]
        } as VerifyOptions) as Token;   

        return decoded;
    } catch (error) {
        console.error(error);
        return null;
    }        
}

export default { 
    verify,
    decodedToken
}