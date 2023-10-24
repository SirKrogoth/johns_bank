export default interface iLifeInsurance{
    lifeInsuranceId: string,
    description: string,
    startVigidity: Date,
    endVigidity: Date | null,
    susepRegister: number,
    prizeAmount: number,
    situation: string
}