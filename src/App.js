import React from 'react';

import { Cards, Chart, CountryPicker } from './components';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World!</h1>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;