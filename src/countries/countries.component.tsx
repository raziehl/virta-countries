import React from 'react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { US } from 'country-flag-icons/react/3x2'

function CountriesComponent() {
  return <div>
    <h2>Countries Component</h2>
    {/* <CharacterDecimal /> */}
    <div>
      { getUnicodeFlagIcon('US') }
      <US />
    </div>
  </div>
}
export default CountriesComponent;