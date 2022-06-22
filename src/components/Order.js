import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];

            //making sure that fish is not sold while adding to cart    
            const isAvailable = fish && fish.status === 'available';

            if(isAvailable){
                return prevTotal + (count * fish.price);
            }
            //if it is not available, skip it   
            return prevTotal;
            //start at zero
        }, 0);

        return (
            <div className="order-wrap">
                <h2>Order</h2> 
                {orderIds} 
                <div className="total">
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;