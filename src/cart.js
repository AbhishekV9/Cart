import React from 'react';
import CartItem  from './CartItem';

const Cart=(props)=>{
    
    const { products } = props;
    return(
        <div className="cart">
            {/* <CartItem qty={1} price={1999} title={"Watch"} img={''} />   using props here       */}

            {/*passing product as props here in callback function */}
            { products.map((product) =>{
                return (
                <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity={props.onIncreaseQuantity} 
                onDecreaseQuantity={props.onDecreaseQuantity} //passing refference of function as props
                onDeleteProduct={props.onDeleteProduct}
                />  
                )
            })}
        </div>
    );
   
}


export default Cart;