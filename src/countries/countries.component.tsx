import { Component } from 'react';
import { CheckmarkFilled, Misuse } from '@carbon/icons-react'
import Flags from 'country-flag-icons/react/3x2';

import { http } from '../core';
import { CountryDto } from '../core/dtos';

import './countries.component.css';

class CountriesComponent extends Component<any, { countries: CountryDto[], isHandset: boolean }> {

  async componentDidMount() {
    this.setState({
      countries: await http.getCountries(),
      isHandset: window.innerWidth < 768 ? true : false,
    });
  }

  

  render() {
    return <div className="countries-component left-container">
      { this.state?.isHandset ? '' : <h1>Compatible Countries</h1> }
      <div>
        {
          this.state?.countries.map((e, i) => {
            const Flag = Flags[e.code as keyof typeof Flags];

            return <div className="country" key={e.code}>
              
              <div className='status-svg'>
                <svg width="4" height={ this.state.isHandset ? '70' : '48' } viewBox="0 0 4 48" fillRule='evenodd' xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0C2.20914 0 4 1.79086 4 4V44C4 46.2091 2.20914 48 0 48V0Z" fill={ e.otpInAppEnabled ? '#00AD09' : '#FF0000' }/>
                </svg>
              </div>

              <div className='left-content'>
                <div className='country-flag'>
                  <Flag />
                </div>
                <div className='country-name'>
                  <div>{ e.name }</div>
                  <div style={{ color: '#5F5F5F' }}>{ e.defaultTimezone }</div>

                  { this.state.isHandset ? <div>
                    <div className='country-code' style={{ marginBottom: '10px' }}>
                      Country Code: { e.code }
                    </div>
                  </div> : '' }
                </div>
              </div>

              { !this.state?.isHandset ? <div className='right-content'>
                <div className='country-code'>
                  Country Code: { e.code }
                </div>
              </div> : '' }

              <div className='status'>
                <div className='country-status'>
                  { e.otpInAppEnabled ? <CheckmarkFilled size={24} style={{ color: '#00AD09' }}/> : <Misuse size={24} style={{ color: 'red' }} /> }
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  }
}
export default CountriesComponent;