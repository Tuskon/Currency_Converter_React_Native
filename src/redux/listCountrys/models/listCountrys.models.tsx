
export interface ListCountryInteface {
    flags: FlagsDTO,
    name: NameDTO,
    currencies: CurrenciesDto
}

interface FlagsDTO {
    png: string,
    svg: string,
    alt: string
}

interface NameDTO {
    common: string,
    official: string,
    nativeName: NativeNameDTO
}

interface NativeNameDTO {
    eng: EngDTO
}

interface EngDTO {
    official: string,
    common: string
}

interface CurrenciesDto {
    [key: string]: CurrencyDto
}

interface CurrencyDto {
    name: string,
    symbol: string
}