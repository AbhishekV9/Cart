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
      </div>
    );
  }
}

export default App;
