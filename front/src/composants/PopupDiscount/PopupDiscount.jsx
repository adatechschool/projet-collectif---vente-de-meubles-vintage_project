
import React from 'react'
import discount from './discount.jpg'
import { useState, useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DiscountIcon from '@mui/icons-material/Discount';
import { reductionContext } from '../../App';

const PopupDiscount = () => {

  let [promotionString, promotion] = useContext(reductionContext)

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
    {isOpen && (
    <div className='  fixed inset-0 flex items-center justify-center z-50 '>
     
      <div className='  bg-zinc-700  bg-opacity-70 p-6 rounded-md   shadow w-1/2  flex  absolute'>
        
        <div className=' w-1/2'> 
            <img  className='w-full h-auto rounded-md ' src={discount} />
        </div>
         
        <div className='w-1/2 pl-6 font-ptMono  text-white text-xl mt-12 items-center content-center text-center space-y-3'>
          
            <h1 className=' font-bold '> Profitez des soldes</h1>
            <h2><DiscountIcon/>{promotion}€ offert avec le code </h2>
            <h2 className='  font-bold '> {promotionString} </h2>
           <div className='mt-4 float-right'>
              <CloseIcon className=' cursor-pointer '
                onClick={handleClose}
              />
          </div>
             
        </div>
    </div>
    </div>    
    )}
    </>

  )
}

export default PopupDiscount