import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    myInput = React.createRef();

    //if you need to a access this inside of a custom method you must 
    //use this syntax   
    //declare a prop that is going to be set an arrow fn 
    goToStore = (event) => {
        //stop the form from submitting
        event.preventDefault();
        //get the text from the input
        console.log(this.myInput);
        //change the page to /store/name-entered-by-user
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>

                <button type="submit">Visit Store →</button>
                <input 
                type="text" 
                ref={this.myInput}
                required 
                placeholder="Store Name" 
                defaultValue={getFunName()}
                />

                <button type="submit">Click me!</button>
            </form>
        );
    }
}

export default StorePicker;