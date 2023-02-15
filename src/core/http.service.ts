import { Axios } from 'axios';
import { CountryDto, CountryQueryResponse } from '../core/dtos';

export class HttpService {
  private static http: HttpService;
  axios: Axios;

  private constructor() {
    this.axios = new Axios({
      baseURL: "https://admin-core.test.virtaglobal.com",
      headers: {
        "Content-Type": 'application/json'
      }
    });
  }

  async getCountries(): Promise<CountryDto[]> {
    const res = await this.axios.post<CountryQueryResponse>('/public', JSON.stringify({
      "operationName": null,
      "variables": {},
      "query": `{
        countryResolver {
          code
          name
          iso3
          otpInAppEnabled
          dialCode
          defaultTimezone
        }
      }`
    }));

    return new CountryQueryResponse(JSON.parse(res.data as any)).data.countryResolver;
  }

  static getInstance() {
    if(!HttpService.http) {
      HttpService.http = new HttpService();
    }

    return HttpService.http;
  }
}

export let http = HttpService.getInstance();