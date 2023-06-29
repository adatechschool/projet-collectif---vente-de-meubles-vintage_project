import React from 'react'
import Bouton from '../Bouton/Bouton'

function Table({data}) {
  return (
    <div>
        <table className='border-4 table-auto'>
            <thead class="text-red-600">
                <tr>
                    <th className='border-2 text-2xl'>Nom</th>
                    <th className='border-2 text-2xl'>Prix</th>
                    <th className='border-2 text-2xl'>Actions</th>
                </tr>
            </thead>
            <tbody className='border-4'>
                {
                    data.map(el => (
                        <tr>
                            <td className='border-2 px-2'>{el.nom}</td>
                            <td className='border-2 px-2'>{el.prix} €</td>
                            <td className='flex mx-2'>
                            <div className='mr-2'>
                                <Bouton texteBouton="Supprimer" />
                            </div>
                            <div className="ml-2">
                                <Bouton texteBouton="Modifier" />
                            </div>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
      </table>
    </div>
  )
}

export default Table