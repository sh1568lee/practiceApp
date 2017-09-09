import React from 'react';
import Counter from './Counter';
import Buttons from './Button';
import Option from './Option';


class App extends React.Component {
    render () {
        return (
            <div style = {{textAligh: 'center'}}>
                <Counter/>
                <Option/>  
                <Buttons/>
            </div>
        )
    }
}

export default App;