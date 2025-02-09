export interface Country {
  name: {
    common: string;
    official: string;
  };
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string[];
}

export interface CountryDetails {
  borders: string[];
  capital: string[];
  currencies: { [key: string]: { name: string } };
  flags: { svg: string; alt: string };
  languages: { [key: string]: string };
  name: { common: string; nativeName: { [key: string]: { common: string } } };
  population: number;
  region: string;
  subregion: string;
  tld: string[];
}
