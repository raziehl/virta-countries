import { Component } from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { US } from 'country-flag-icons/react/3x2';

import { http } from '../core';
import { CountryDto } from '../core/dtos';

class CountriesComponent extends Component<any, { countries: CountryDto[] }> {

  async componentDidMount() {
    this.setState({
      countries: await http.getCountries()
    });
  }

  render() {
    return <div className="countries-component container">
      <h1>Compatible Countries</h1>


      {/* <div>
        { getUnicodeFlagIcon('US') }
        <US />
      </div> */}
      <div>
        { this.state?.countries.map((e, i) => 
          <div key={e.code}>
            { e.code }
          </div>)
        }
      </div>
    </div>
  }
}
export default CountriesComponent;