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

  async getCountries() {
    const res = await this.axios.post<CountryQueryResponse>('/public', JSON.stringify({"operationName":null,"variables":{},"query":"{\n countryResolver {\ncode\n name\n iso3\n otpInAppEnabled\n dialCode\n defaultTimezone\n}\n}\n"}));

    // console.log(JSON.parse(res.data as any));
    
    console.log(new CountryQueryResponse(JSON.parse(res.data as any)));

    return res.data;
  }

  static getInstance() {
    if(!HttpService.http) {
      HttpService.http = new HttpService();
    }

    return HttpService.http;
  }
}

export let http = HttpService.getInstance();