import React, { useRef, useEffect, useCallback } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from 'react-router-dom';


export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <div className='fixed flex  -translate-x-96   -translate-y-64    ' >
        
            <div className='sm:w-[385px] sm:min-w-[40vw] min-w-[70vw] min-h-[45vh]  space-y-7 items-center gap-2 p-6 bg-[#d4c4cb] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute' showModal={showModal}>
              <div className='text-[#2a435d]  mx-auto h-8 rounded-full bg-[#f7f7f7] w-8'><CheckIcon/></div>
              <div className='content-center items-center  text-sm space-y-6'>
                <h1>La réservation est un succès</h1>
                <p>Vos meubles vous attendent en magasin</p>
                <p>Ada Vintage Boutique : 116 rue du faubourg</p>
                <Link to="/accueil">
                <button className=' p-3 mt-6 bg-[#1c384d] rounded-lg w-full text-white'>Revenir à l'Accueil</button>
                </Link>
              </div>
              
            </div>
        </div>
      ) : null}
    </>
  );
};
