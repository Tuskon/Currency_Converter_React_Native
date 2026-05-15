
export interface CurrencyValueInteface {
    base: string,
    target: string,
    rate: number,
    timestamp: string
}

export interface CurrencyValueRequest {
    firstCountry:string,
    secondCountry:string
}