import React from 'react'
import { createContext, useContext, useState} from 'react';

function Panier() {

  const {panier} = useContext(panierContext);
  

  // useEffect(() => {

  //   // Fetch cart items from localStorage on component mount
  //   const storedCartItems = localStorage.getItem('cartItems');
  //   if (storedCartItems) {
  //     setCartItems(JSON.parse(storedCartItems));
  //   }
  // }, []);

  // useEffect(() => {
  //   // Update localStorage when cartItems change
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);







  return (
    <>
   <div>({panier})</div>
  {/* <div className="shopping-cart  box-border min-h-screen w-screen m-20 border-x-slate-800 rounded-md flex col-auto">
     <div className="title"> Shopping Bag </div>
   {/* Display les produits */}
    {/*{cartItems.map((item) => (
      <div className="item p-5  h-28 flex border-y-black border-t-black">
        <div className="buttons relative pt-8 mr-16">
          <span className="delete-btn inline-block cursor-pointer w-4 h-4"></span>
          <span className="like-btn inline-block cursor-pointer  absolute top-2 left-4 w-14 h-14"></span>
        </div>
 
        <div className="image mr-14"><img src={item.photo} alt="" />
        </div>
 
        <div className="description pt-3 mr-16 w-28">{item.titre}
        </div>
 
        <div className="total w-20 pt-7 text-center font-medium">{item.prix}
        </div>
      </div>
    ))}  
    </div> */}
  </>
  )
}

export default Panier;
