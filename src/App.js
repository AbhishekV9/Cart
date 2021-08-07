import React from "react";
import Cart from "./cart";
import Navbar from "./Navbar";
import firebase from "firebase";

class App extends React.Component {

  constructor(){
    super();  //we first need to call the constructor of parent class i.e constructor of component class in react
    this.state={
        products:[ ],
        loading:true

    }
    this.db=firebase.firestore();
   
}


componentDidMount(){
  //just getting the data from firebase


  // firebase
  // .firestore()     //because we are getting the data from firestore
  // .collection('products') //chaining functions
  // .get()                  //get returns a promise
  // .then((snapshot)=>{
  //   console.log(snapshot);

  //   snapshot.docs.map((doc)=>{
  //     console.log(doc.data());
  //   })

  //   const products=snapshot.docs.map((doc)=>{
  //     const data=doc.data();
  //     data['id']=doc.id;
  //     return data;
  //   })

  //   this.setState({
  //     products,
  //     loading:false
  //   })

  // })

//getti ng the data with attaching listner
  this.db   
  .collection('products') 
  .onSnapshot((snapshot)=>{  //on snapshot is called with first snapshop nad then whenever there is some change in our product collection
      console.log(snapshot);
  
      snapshot.docs.map((doc)=>{
        console.log(doc.data());
      })
  
      const products=snapshot.docs.map((doc)=>{
        const data=doc.data();
        data['id']=doc.id;
        return data;
      })
  
      this.setState({
        products,
        loading:false
      })
  
    })
 
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

addProduct=()=>{
  this.db
  .collection('products')
  .add({ //.add will give me a promise with refference of this object
    img:'',
    price:999,
    qty:3,
    title:'Washing Machine'
  })
  .then((docRef)=>{ //docref will have that refference
    console.log(docRef);
  })
  .catch((error)=>{
    console.log(error);
  })
}

  render (){
    const {products,loading}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a  product</button>
        <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity} 
            onDecreaseQuantity={this.handleDecreaseQuantity} //passing refference of function as this
            onDeleteProduct={this.handleDeleteProduct}       
        />
        {loading && <h1>Loading Products</h1>}
        <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
