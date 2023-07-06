import React, { useEffect } from 'react'
import { createContext, useContext, useState} from 'react';
import { panierContext, reductionContext } from '../../App';
import { Modal } from '../../composants/Modal/Modal';
import Navbar from '../../composants/Navbar/Navbar';
import Footer from '../../composants/Footer/Footer';
import { Link } from 'react-router-dom';
const port=import.meta.env.VITE_PORT;
const host=import.meta.env.VITE_HOST;


function Panier() {

  const {panier} = useContext(panierContext);
  const {setPanier} = useContext(panierContext);
  console.log("panier", panier);

  const calculateSubtotal = (panier) => {
    const subtotal = panier.reduce((acc, item) => acc + parseFloat(item.prix), 0);
    return subtotal;
  };

  let subtotals = calculateSubtotal(panier)
  // let promotionString = 'ADATECH'
  
  let [promotionString, promotion] = useContext(reductionContext)

  // const total = (subtotals - promotion) > 0 ? subtotals - promotion : 0;

  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => {
      setShowModal(showModal=>!showModal);
  }


  const [promoMessage, setPromoMessage] = useState('');
  const [promoUpdated, setPromoUpdated] = useState('');

  const messageChange = (event) => {
    setPromoMessage(event.target.value);
  };

  const messagePress = (event) => {
    if (event.key === 'Enter') {
      setPromoUpdated(promoMessage);
    }
  };

  
  const codePromo = () =>{
    if( promotionString == promoUpdated){
      return promotion
    }
    return 0;
  }

  const [effectivePromotion, setEffectivePromotion] = useState(0);
  const [total, setTotal] = useState(subtotals)
  
  useEffect(() => {
    setEffectivePromotion(codePromo);
    let newTotal = subtotals - codePromo();
    newTotal > 0 ? setTotal(newTotal) : setTotal(0)
  },[promoUpdated, panier])

  const removeItemFromPanier = (indexInLocalStorage) => {
    let newCart = JSON.parse(localStorage.getItem('cartItems'));
    newCart.splice(indexInLocalStorage, 1);
    setPanier(newCart);
  }

  const confirmPanier = () => {
    // Quand le panier est confirmé, il est vidé
    setPanier([]);
    // Une modal avec les informations de livraison s'affiche
    openModal();
  }

  return (
    <>
      <Navbar />
      <div className='h-16 bg-beige  flex justify-start items-center'>
        <Link to="/accueil" className='text-dark-brown'>
        <p className='ml-[10%] bg-beige w-full'>Retour à la recherche</p>
        </Link>
      </div>

<section>


  <div className="mx-auto bg-beige max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

    <div className="mx-auto max-w-3xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Panier</h1>
      </header>

      <div className="mt-8">
      {panier.map((item, index) => (
        // pour le moment on peut ajouter plusieurs fois le même produit au panier, son "id" n'est pas unique
        // d'où l'utilisation d'index (position dans le panier) pour supprimer le bon produit si besoin
        <div key={index} className="mt-8 border-t border-gray-400 pt-8">
        <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img
              src={host+":"+port+"/images/"+item.photo}
              className="h-16 w-16 rounded object-cover"
            />

            <div>
              <h3 className="text-base  text-gray-900">{item.nom}</h3>

            </div>

            <div className="flex flex-1 items-center justify-end gap-2 font-medium text-base">
              <p>{item.prix}€</p>
    

              <button className="text-gray-600 transition hover:text-red-600"
              onClick={() => removeItemFromPanier(index)}
              >
                <span className="sr-only">Supprimer</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
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
        </div>
      ))}

        <div className="mt-8 flex justify-end border-t border-gray-400 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Sous-total</dt>
                <dd>{subtotals}€</dd>
              </div>

              <div className="flex justify-between">
                <dt>Taxes incluses</dt>
                <dd>20%</dd>
              </div>


              <div class="flex justify-between">
                <dt>Code Promo</dt>
                <dd><input placeholder='Code Promo' value={promoMessage} onChange={messageChange} onKeyDown={messagePress} className='  text-right border-solid border-gray-800' onen></input></dd>
                <dd>{effectivePromotion}€</dd>
              </div>

              <div className="flex justify-between !text-base font-medium ">
                <dt>Total</dt>
                <dd>{total}€</dd>
              </div>
            </dl>



            <div className="flex flex-col items-center justify-end">
              <button
               className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
               onClick={confirmPanier}> Payer en boutique</button>
               <Modal showModal={showModal} setShowModal = {setShowModal} />
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</section>
  </>
  )
}

export default Panier;
