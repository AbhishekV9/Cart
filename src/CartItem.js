import React from 'react';

class CartItem extends React.Component{
    //for a class component to be a react component we need to give it one method
    render(){
        //this method should return some jsx
        return(
            <div className='cart-item'>
                <div class='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ { fontSize:25 } } >Phone</div>
                    <div style={ { color:'#777' } } >Rs 999</div>
                    <div style={ {color:'#777' } } >Qty : 1</div>
                    <div className='cart-items-actions'>
                        {/* {buttons} */}
                    </div>
                </div>
            </div>
        );
    }
}
//since this is jsx:- a javascript syntax . we cannot style our elements like css.
//so what we can do is, we can style our elements using objects.

const styles={
//i can give diffrent properties to object
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;