import React from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Table(data) {
  return (
    <div className='flex flex-col justify-around items-center min-h-[75vh] mt-3'>
        <table className='border-4 table-auto mx-auto'>
            <thead className="text-red-600">
                <tr>
                    <th className='border-2 text-2xl'>nom</th>
                    <th className='border-2 text-2xl'>prix</th>
                    <th className='border-2 text-2xl'>Actions</th>
                </tr>
            </thead>
            <tbody className='border-4'>
                {
                    data.map(el => (
                            <tr key={el.id} className="border-2">
                                <td className='px-2'>{el.nom}</td>
                                <td className='border-2 px-2'>{el.prix} €</td>
                                <td className='flex mx-2 my-auto'>
                                    <div className='mr-2 '>
                                        <DeleteForeverIcon className="text-red-600" sx={{fontSize:50}}/>
                                    </div>
                                    <div className="ml-2">
                                        <EditIcon sx={{fontSize:50}}/>
                                    </div>
                                    </td>
                            </tr>
                    ))
                }   
            </tbody>
      </table>
      <AddCircleIcon className='text-dark-brown' sx={{fontSize:50}}/>
    </div>
  )
}

export default Table