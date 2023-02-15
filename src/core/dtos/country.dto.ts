export class CountryDto {
  code: string;
  name: string;
  iso3: string;
  otpInAppEnabled: boolean;
  dialCode: string;
  defaultTimezone: string;

  constructor(country: CountryDto) {
    this.code = country.code;
    this.name = country.name;
    this.iso3 = country.iso3;
    this.otpInAppEnabled = country.otpInAppEnabled;
    this.dialCode = country.dialCode;
    this.defaultTimezone = country.defaultTimezone;

  }
}

export class CountryQueryResponse {
  data: { countryResolver: CountryDto[] } = { countryResolver: [] };

  constructor(res: CountryQueryResponse) {
    res.data.countryResolver.forEach(e => {
      this.data.countryResolver.push(new CountryDto(e));
    });
  }
}