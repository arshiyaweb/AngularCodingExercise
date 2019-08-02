export interface CountryEntity {
    alpha3Code: string;
    name: string;
    capital: string;  
    currencies: {
        symbol: string;
    }
    area: string;
    languages: {
        name: string;
    }  
    population: string;
}
