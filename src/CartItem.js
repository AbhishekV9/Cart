import React from 'react';

//class CartItem extends React.Component{ converting it into functional component
//and so removing this line and so removing render
const CartItem=(props) => {
    //this method should return some jsx
    // const { price,title,qty}=this.state; by this i am telling i want this properties from this object:-state
    //console.log(this.props); removing this.props from below two lines because it is not a class anymore so using "this" will not work
    const { price,title,qty}=props.product;
    const{product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props
    return(
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={product.img}/>
            </div>
            <div className='right-block'>
                {/* <div style={ { fontSize:25 } } >{this.state.title}</div>  just another way*/}
                <div style={ { fontSize:25 } } >{title}</div>
                <div style={ { color:'#777' } } >Rs {price}</div>
                <div style={ {color:'#777' } } >Qty: {qty}</div>
                <div className='cart-items-actions'>
                    {/* {buttons} */}
                    <img
                    alt="increase" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                    //onClick={this.increaseQuantity.bind(this)}

                    // onClick={this.increaseQuantity} //using arrow function so not required to bind

                    //  onClick={()=>this.props.onIncreaseQuantity(this.props.product)} if i haven't done like  onClick={()=>this.props.onIncreaseQuantity(this.props.product)} then i have to write like this
                        onClick={()=>onIncreaseQuantity(product)}
                    />

                    <img 
                    alt="decrease" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                    onClick={()=> onDecreaseQuantity(product)}
                    />

                    <img 
                    alt="delete" 
                    className="action-icons" 
                    src="https://image.flaticon.com/icons/png/512/1345/1345874.png" 
                    onClick={()=> onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>
    );
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