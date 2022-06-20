import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    //creates an empty reference
    myInput = React.createRef();

    //if you need to a access this inside of a custom method you must 
    //use this syntax   
    //declare a prop that is going to be set an arrow fn 
    goToStore = (event) => {
        //1. stop the form from submitting
        event.preventDefault();

        //2. get the text from the input

        const storeName = this.myInput.current.value;
;

        //3. change the page to /store/name-entered-by-user
        //change the url without having to refresh the page/loose memory
        this.props.history.push(`/store/${storeName}`)

        


    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter a Store</h2>

                <button type="submit">Visit Store →</button>
                <input 
                type="text" 
                //reference the dom
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