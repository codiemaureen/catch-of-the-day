import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    render() {
        return (
            //same as <React.Fragment> 

                <form className="store-selector">
                    <h2>Please Enter a Store</h2>

                    <button type="submit">Visit Store →</button>
                    <input type="text" 
                    required 
                    placeholder="Store Name" 
                    defaultValue={getFunName()}
                    />
                </form>

        )
    }
}

export default StorePicker;