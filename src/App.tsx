import React from 'react';
import logo from './logo.svg';
import About from './info/info';
import './App.css';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import CountriesComponent from './countries/countries.component';

function App() {
  return (
    <div className="App">      

      <div className="header">
        <svg width="80" height="30" viewBox="0 0 80 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0 29.6296H80V0H0V29.6296ZM3.12048 26.3996H76.8801V3.23007H3.12048V26.3996ZM66.7141 22.5601H73.2313V7.07033H71.2651C67.1175 7.10189 63.219 8.72231 60.2885 11.6037C57.3196 14.5228 55.6859 18.4126 55.6859 22.5601H59.588C59.588 16.9535 63.8066 12.2507 69.3282 11.299V18.5207H66.7141V22.5601ZM58.3837 11.1088H52.9766V22.5601H49.0753V11.1088H44.1582V7.07031H58.3837V11.1088ZM35.9917 18.218C35.9917 14.311 39.0525 11.1395 42.7173 11.1088V7.07031C40.1765 7.09107 37.8112 8.03379 35.9917 9.6371V7.07031H32.0895V22.5601H35.9917V18.218ZM25.82 22.5602H29.7225V7.07036H25.82V22.5602ZM19.773 18.0269C22.7414 15.1077 24.3759 11.2179 24.3759 7.07034H20.473C20.473 12.6771 16.2553 17.3789 10.7328 18.3315V11.1098H13.3469V7.07034H6.83017V22.5602H8.79593C12.9438 22.5277 16.8423 20.9083 19.773 18.0269Z" fill="#212121"/>
        </svg>

        { window.innerWidth < 768 ? 
        <div className="page-title" style={{ flex: 4, textAlign: 'left', marginLeft: '12px' }}>Virta platform compatible countries</div> :
        <div className="page-title">Virta platform compatible countries</div> }

        <div style={{ flex: 1 }}></div>
      </div>

      <Router>
        <Routes>
          <Route path='/' element={<CountriesComponent />}></Route>
          <Route path='/about' element={< About />}></Route>
          {/* <Route path='/contact' element={< Contact />}></Route> */}
        </Routes>
      </Router>

      <svg className="background-svg" width="1256" height="352" viewBox="0 0 1256 352" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="624.825" cy="613.373" rx="391.438" ry="391.297" fill="white"/>
        <ellipse cx="624.825" cy="613.373" rx="391.438" ry="391.297" fill="#D2D7DC" fillOpacity="0.25"/>
        <ellipse cx="957.893" cy="905.221" rx="690.107" ry="689.859" fill="white"/>
        <ellipse cx="957.893" cy="905.221" rx="690.107" ry="689.859" fill="#D2D7DC" fillOpacity="0.55"/>
        <ellipse cx="775.044" cy="1065.24" rx="775.044" ry="774.764" fill="#D2D7DC"/>
        <path d="M610 183.108L610.971 181C627.86 188.573 643.118 188.573 656.86 181.042L658 183.066C643.575 190.971 627.537 190.971 610 183.108Z" fill="#D2D7DC"/>
        <path d="M562 183.108L562.971 181C579.86 188.573 595.118 188.573 608.86 181.042L610 183.066C595.575 190.971 579.537 190.971 562 183.108Z" fill="#D2D7DC"/>
        <path d="M611.444 222H609V177.888C609 174.636 611.736 172 615.111 172H620V174.355H615.111C613.086 174.355 611.444 175.937 611.444 177.888V222Z" fill="#D2D7DC"/>
        <path d="M658.444 223H656V178.888C656 175.636 658.736 173 662.111 173H667V175.355H662.111C660.086 175.355 658.444 176.937 658.444 178.888V223Z" fill="#D2D7DC"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M594.612 22.6424C594.612 22.9169 594.594 23.1878 594.559 23.4483H551.384C551.136 22.7779 551 22.0526 551 21.2911C551 18.2836 553.152 15.7749 556.008 15.212C555.971 14.8791 555.958 14.5369 555.958 14.19C555.958 7.64137 561.287 2.33658 567.855 2.33658C571.905 2.33658 575.475 4.34894 577.623 7.4253C578.386 7.19989 579.196 7.07842 580.032 7.07842C584.71 7.07842 588.502 10.8567 588.502 15.518C588.502 15.8333 588.483 16.1393 588.447 16.4453C591.854 16.4733 594.612 19.2379 594.612 22.6424Z" fill="#E2E6E8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M674.73 66.9259C674.73 67.2917 674.705 67.6529 674.657 68H616.33C615.995 67.1065 615.811 66.1398 615.811 65.1249C615.811 61.1165 618.718 57.7728 622.576 57.0225C622.527 56.5789 622.51 56.1228 622.51 55.6605C622.51 46.9323 629.709 39.8621 638.581 39.8621C644.053 39.8621 648.876 42.5442 651.777 46.6444C652.808 46.3439 653.903 46.182 655.032 46.182C661.352 46.182 666.475 51.2178 666.475 57.4304C666.475 57.8507 666.449 58.2585 666.4 58.6663C671.004 58.7037 674.73 62.3883 674.73 66.9259Z" fill="#E2E6E8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M844.429 22.6424C844.429 22.9169 844.41 23.1878 844.375 23.4483H801.201C800.952 22.7779 800.816 22.0526 800.816 21.2911C800.816 18.2836 802.969 15.7749 805.824 15.212C805.788 14.8791 805.775 14.5369 805.775 14.19C805.775 7.64137 811.104 2.33658 817.671 2.33658C821.721 2.33658 825.292 4.34894 827.439 7.4253C828.202 7.19989 829.012 7.07842 829.848 7.07842C834.526 7.07842 838.318 10.8567 838.318 15.518C838.318 15.8333 838.3 16.1393 838.263 16.4453C841.671 16.4733 844.429 19.2379 844.429 22.6424Z" fill="#E2E6E8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M987 66.9259C987 67.2917 986.975 67.6529 986.927 68H928.6C928.265 67.1065 928.081 66.1398 928.081 65.1249C928.081 61.1165 930.989 57.7728 934.846 57.0225C934.797 56.5789 934.78 56.1228 934.78 55.6605C934.78 46.9323 941.979 39.8621 950.851 39.8621C956.323 39.8621 961.146 42.5442 964.047 46.6444C965.078 46.3439 966.173 46.182 967.302 46.182C973.622 46.182 978.745 51.2178 978.745 57.4304C978.745 57.8507 978.719 58.2585 978.67 58.6663C983.274 58.7037 987 62.3883 987 66.9259Z" fill="#E2E6E8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M942.947 200.241C939.052 200.241 935.895 197.268 935.895 193.599V174.056C935.895 170.388 939.052 167.414 942.947 167.414C946.842 167.414 950 170.388 950 174.056V193.599C950 197.268 946.842 200.241 942.947 200.241Z" fill="#D2D7DC"/>
        <path d="M942.947 199.069V214.31" stroke="#D2D7DC" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M919.439 199.069C914.895 199.069 911.21 195.246 911.21 190.529V165.403C911.21 160.686 914.895 156.862 919.439 156.862C923.983 156.862 927.667 160.686 927.667 165.403V190.529C927.667 195.246 923.983 199.069 919.439 199.069Z" fill="#B4BBC3"/>
        <path d="M919.439 197.897V215.483" stroke="#B4BBC3" strokeWidth="2"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M892.424 197.455C887.219 197.455 883 193.248 883 188.056V160.4C883 155.209 887.219 151 892.424 151C897.629 151 901.849 155.209 901.849 160.4V188.056C901.849 193.248 897.629 197.455 892.424 197.455Z" fill="#697887" fillOpacity="0.7"/>
        <path opacity="0.704597" d="M892.424 196.724V217.937" stroke="#697887" strokeWidth="2"/>
        <rect width="30.4828" height="68.6333" transform="matrix(-1 0 0 1 774.826 222.366)" fill="#F4F5F6"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M742.115 290.916V226.211C742.115 222.78 744.882 219.999 748.282 219.999H769.843C773.243 219.999 775.998 222.78 775.998 226.211V276.87C775.998 280.018 774.721 282.869 772.67 284.94C770.605 287.011 767.768 288.289 764.649 288.289C758.388 288.289 753.3 283.153 753.3 276.834V267.522H753.278C751.226 266.977 749.701 265.096 749.701 262.859V256.836H752.081V261.652H756.853V256.836H759.244V262.859C759.244 265.096 757.708 266.977 755.657 267.522H755.645V276.834C755.645 281.852 759.69 285.922 764.649 285.922C769.62 285.922 773.653 281.852 773.653 276.834V226.211C773.653 224.093 771.953 222.366 769.843 222.366H748.282C746.172 222.366 744.46 224.093 744.46 226.211V290.916H742.115ZM765.96 233.67V242.887C765.96 244.084 764.996 245.058 763.81 245.058H754.676C753.49 245.058 752.525 244.084 752.525 242.887V233.67C752.525 232.472 753.49 231.498 754.676 231.498H763.81C764.996 231.498 765.96 232.472 765.96 233.67ZM750.18 233.67V242.887C750.18 245.388 752.198 247.425 754.676 247.425H763.81C766.288 247.425 768.305 245.388 768.305 242.887V233.67C768.305 231.168 766.288 229.132 763.81 229.132H754.676C752.198 229.132 750.18 231.168 750.18 233.67Z" fill="#19324B"/>
      </svg>

    </div>
  );
}

export default App;
