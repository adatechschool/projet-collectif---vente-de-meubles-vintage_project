import React from 'react'
import { createContext, useContext, useState} from 'react';
import { panierContext } from '../../App';

function Panier() {

  const {panier} = useContext(panierContext);
  console.log(panier);

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
  {/* <div className="shopping-cart  box-border min-h-screen w-screen m-20 border-x-slate-800 rounded-md flex col-auto">
     <div className="title"> Shopping Bag </div>

    {panier.map((item) => (
      <div className="item p-5  h-28 flex border-y-black border-t-black">
        <div className="buttons relative pt-8 mr-16">
          <span className="delete-btn inline-block cursor-pointer w-4 h-4"></span>
          <span className="like-btn inline-block cursor-pointer  absolute top-2 left-4 w-14 h-14"></span>
        </div>
 
        <div className="image mr-14">{item.photo}</div>
 
        <div className="description ">{item.nom}
        </div>
 
        <div className="total">{item.prix}
        </div>
      </div>
    ))}  
    </div> */}


<section>
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <header class="text-center">
        <h1 class="text-xl font-bold text-gray-900 sm:text-3xl">Ton Panier</h1>
      </header>

      <div class="mt-8">
      {panier.map((item) => (

        <ul class="space-y-4">
          <li class="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              class="h-16 w-16 rounded object-cover"
            />

            <div>
              <h3 class="text-sm text-gray-900">{item.nom}</h3>

            </div>

            <div class="flex flex-1 items-center justify-end gap-2">
              <h2>{item.prix}</h2>
    

              <button class="text-gray-600 transition hover:text-red-600">
                <span class="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>

        </ul>
      ))}

        <div class="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div class="w-screen max-w-lg space-y-4">
            <dl class="space-y-0.5 text-sm text-gray-700">
              <div class="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>

              <div class="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>

              <div class="flex justify-between">
                <dt>Discount</dt>
                <dd>-£20</dd>
              </div>

              <div class="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>£200</dd>
              </div>
            </dl>

            <div class="flex justify-end">
              <span
                class="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-ms-1 me-1.5 h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p class="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

            <div class="flex justify-end">
              <a
                href="#"
                class="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
              >
                Checkout
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  </>
  )
}

export default Panier;
