import React from 'react'
import Bouton from '../Bouton/Bouton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function Table({data}) {
  return (
    <div>
        <table className='border-4 table-auto mx-auto my-20'>
            <thead className="text-red-600">
                <tr>
                    <th className='border-2 text-2xl'>Nom</th>
                    <th className='border-2 text-2xl'>Prix</th>
                    <th className='border-2 text-2xl'>Actions</th>
                </tr>
            </thead>
            <tbody className='border-4'>
                {
                    data.map(el => (
                            <tr key={el.id} className="border-2">
                                <td className='px-2'>{el.nom}</td>
                                <td className='border-2 px-2'>{el.prix} €</td>
                                
                                <div className='flex justify-center items-center'>
                                <td className='flex mx-2 my-auto'>
                                    <div className='mr-2 '>
                                        <DeleteForeverIcon className="text-red-600" sx={{fontSize:50}}/>
                                        {/* <Bouton texteBouton="Supprimer" /> */}
                                    </div>
                                    <div className="ml-2">
                                        <EditIcon sx={{fontSize:50}}/>
                                        {/* <Bouton texteBouton="Modifier" /> */}
                                    </div>
                                    </td>
                                </div>
                                
                                
                            </tr>
                    ))
                }
                
            </tbody>
      </table>
    </div>
  )
}

export default Table