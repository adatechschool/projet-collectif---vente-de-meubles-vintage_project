import React from 'react'
import Vignette from '../Vignette/Vignette'

function Main() {
  return (
    <div className='h-96 flex'>
      {function() {
        let vignettes = [];
        // Tableau "infos" fictif, renvoyé par le serveur
        // A modifier quand on saura faire le lien avec des informations renvoyées par le serveur (back)
        let infos = [{'nom': 'Meuble', 'prix': 30},
         {'nom': 'Chaise', 'prix': 10},
         {'nom': 'Commode', 'prix': 120}];
        // Boucle for pour afficher plusieurs vignettes
        for (let i=0; i<infos.length; i++) {
          vignettes.push(<Vignette
          nom={infos[i].nom}
          prix={infos[i].prix}
          />)
        }
        return vignettes;
      }()
      }
    </div>
  )
}

export default Main