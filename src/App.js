import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";

class App extends React.Component {

  constructor(){
    super();  //we first need to call the constructor of parent class i.e constructor of component class in react
    this.state={
        products:[
            {
              price:'1999',
              title:'Watch',
              qty:1,
              img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
              id:1
            },
            {
                price:'999',
                title:'Mobile Phone',
                qty:10,
                img:'https://images.unsplash.com/photo-1580910051074-3eb694886505?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80',
                id:2
            },
            {
                price:'10000',
                title:'Laptop',
                qty:4,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                id:3
              },
         
        ]
    }
   
}
handleIncreaseQuantity=(product)=>{
    console.log('increase qty of',product);
    const {products} =this.state;
    const index=products.indexOf(product);
    products[index].qty +=1;
    this.setState({
        //products:products
        //first products is the property of the state that we want to change and second products is that
        //we have in this function which we want to send,when both have same variable name i can write like product only this means
        //products:products only
        products

    });
}
handleDecreaseQuantity=(product) =>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    products[index].qty -=1;
    this.setState({
        products
    });
    
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id);//this line will return an array and this array will contain
    //products whose id is not equal to the id wich is being passed to this function
    this.setState({
        products:items
    })
}

getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product)=>{
    count +=product.qty;
  })

  return count;
}
getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{
    if(product.qty>0){
    cartTotal =cartTotal+product.qty*product.price;
    }
    return '';
  })
  return cartTotal;
}

  render (){
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity} 
            onDecreaseQuantity={this.handleDecreaseQuantity} //passing refference of function as this
            onDeleteProduct={this.handleDeleteProduct}       
        />
        <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
