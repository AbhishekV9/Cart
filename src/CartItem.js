import React from 'react';

class CartItem extends React.Component{
    //for a class component to be a react component we need to give it one method that is render here
    constructor(){
        super();//we first need to call the constructor of parent class i.e constructor of component class in react
        this.state={
            price:'999',
            title:'Mobile Phone',
            qty:1,
            img:''
        }

        //another way to bind is:-bind here like this and remove the binding from event and bind here in constructor
        //this.increaseQuantity=this.increaseQuantity.bind(this)

        //or another way is to use arrow funtions:-so whenever we are using arrow functions,arrow function will automa
        //-tically bind the value of this to the instace of this class

    }
    // increaseQuantity (){
    //     console.log('this.state',this.state); it can be used for binding during event or constructor
    // }

    increaseQuantity=() =>{
        //this.state.qty +=1; this will increase the qty in state but react will not know about it that's why we need 
        //to use setState fn wich is imported from component class.setState helps react to know about increased value
        //and render it
        console.log('this.state',this.state);
        //we can use setState in two ways 
        //1st:-
        // this.setState({
        //     qty:this.state.qty + 1 //shallow merging :-only changing the property that i want to change
        // });
        //2nd form:-instead of passing an object we can pass a fn wich is a callback,this fn will be called by react internally
        //and whem react does that it will pass the previous state to us
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
        });
    }
    decreaseQuantity=()=>{
        const{qty}=this.state;
        if(qty===0){
            return
        }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render(){
        //this method should return some jsx
        const { price,title,qty}=this.state; //by this i am telling i want this properties from this object:-state
        return(
            <div className='cart-item'>
                <div class='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ { fontSize:25 } } >{this.state.title}</div>
                    <div style={ { color:'#777' } } >Rs {price}</div>
                    <div style={ {color:'#777' } } >Qty: {qty}</div>
                    <div className='cart-items-actions'>
                        {/* {buttons} */}
                        <img
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992651.png" 
                        //onClick={this.increaseQuantity.bind(this)}
                        onClick={this.increaseQuantity} //using arrow function so not required to bind
                        />

                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/png/512/992/992683.png" 
                        onClick={this.decreaseQuantity}
                        />

                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://img-premium.flaticon.com/png/512/484/premium/484662.png?token=exp=1628010003~hmac=e12126e61f3fc0bb430c92b349acffe1" 
                        />
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