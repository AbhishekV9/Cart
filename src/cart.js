import React from 'react';
import CartItem  from './CartItem';
class Cart extends React.Component{
     constructor(){
        super();  //we first need to call the constructor of parent class i.e constructor of component class in react
        this.state={
            products:[
                {
                  price:'1999',
                  title:'Watch',
                  qty:1,
                  img:'',
                  id:1
                },
                {
                    price:'999',
                    title:'Mobile Phone',
                    qty:10,
                    img:'',
                    id:2
                },
                {
                    price:'10000',
                    title:'Laptop',
                    qty:4,
                    img:'',
                    id:3
                  },
             
            ]
        }
       
    }
   render(){
       const { products } = this.state;
       return(
         <div className="cart">
             {/* <CartItem qty={1} price={1999} title={"Watch"} img={''} />   using props here       */}

             {/*passing product as props here in callback function */}
             { products.map((product) =>{
                 return (
                 <CartItem 
                 product={product} 
                 key={product.id}/>  
                 )
             })}
         </div>
       );
   }
}


export default Cart;