import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const { params } = this.props.match;

        //reinstate locaStore

        const localStorageRef = localStorage.getItem(params.storeId);
        if(localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)});
        }
        
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    };

    addFish = (fish) => {
        //take a copy of state
        const fishes = {...this.state.fishes};

        //add new fish
        fishes[`fish${Date.now()}`] = fish;

        //set new fishes object ot state
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updateFish) => {
        //1. Take copy of current state
        const fishes = {...this.state.fishes};
        //2.Update the state
        fishes[key] = updateFish;
        //3.set updated fish to state
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({fishes: sampleFishes});
    };

    addToOrder = (key) => {
        //1. Take a copy of state

        const order = {...this.state.order};
        //2. Add to the order or update the order
        order[key] = order[key] + 1 || 1;
        //3. Call setSate to update our state object
        this.setState({ order });
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="single-fish">
                        {Object.keys(this.state.fishes).map(key => (
                        <Fish 
                        key={key} 
                        index={key}
                        details={this.state.fishes[key]}
                        addToOrder={this.addToOrder}
                        />
                    ))}
                        
                    </ul>
                </div> 
                <Order 
                    fishes={this.state.fishes}
                    order={this.state.order}
                />
                <Inventory 
                    addFish={this.addFish}
                    updateFish={this.updateFish}
                    loadSampleFishes={this.loadSampleFishes }
                    fishes={this.state.fishes}
                />
            </div>
        )
    }
};

export default App;