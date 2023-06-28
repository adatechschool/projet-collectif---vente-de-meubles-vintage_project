import React from 'react'
import Vignette from '../Vignette/Vignette'

function Main() {
  return (
    <div className='h-96 flex'>
      {function() {
        let vignettes = [];
        for (let i=0; i<2; i++) {
          vignettes.push(<Vignette/>)
        }
        return vignettes;
      }()
      }
    </div>
  )
}

export default Main