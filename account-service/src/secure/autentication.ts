//Verificar se o usuário é quem diz que é.
import bcrypt from 'bcryptjs';

function hashPassword(password: string){
    return bcrypt.hashSync(password, 10);
}

function comparePassword(password: string, hashPassword: string){
    return bcrypt.compareSync(password, hashPassword);
}

export default{
    hashPassword,
    comparePassword
}