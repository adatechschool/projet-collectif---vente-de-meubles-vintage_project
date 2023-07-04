import { useState, useEffect } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';

const port = import.meta.env.VITE_PORT

function Table() {
    let navigate = useNavigate()
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:${port}/meubles`);
            const jsonData = await response.json();
            console.log("coucou", jsonData);
            setData(jsonData);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    return (
        <div className='flex flex-col justify-around items-center min-h-[75vh] mt-3'>
            <table className='border-4 table-auto mx-auto'>
                <thead className="text-red-600">
                    <tr>
                        <th className='border-2 text-2xl'>Nom</th>
                        <th className='border-2 text-2xl'>Prix</th>
                        <th className='border-2 text-2xl'>Description</th>
                        <th className='border-2 text-2xl'>Actions</th>
                    </tr>
                </thead>
                <tbody className='border-4'>
                    {data ? (
                        data.map(el => (
                            <tr key={el.id} className="border-2">
                                <td className='px-2'>{el.titre}</td>
                                <td className='border-2 px-2'>{el.prix} €</td>
                                <td className='border-2 px-2'>{el.description}</td>
                                <td className='flex mx-2 my-auto'>
                                    <div className='mr-2 '>
                                        <DeleteForeverIcon className="text-red-600" sx={{ fontSize: 50 }} />
                                    </div>
                                    <div className="ml-2">
                                    <button onClick ={() => {navigate(`/modif/${el.id}`)}}><EditIcon sx={{ fontSize: 50 }}  /></button>
                                    
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td><div>Loading...</div></td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            <AddCircleIcon className='text-dark-brown' sx={{ fontSize: 50 }} />
        </div>
    )
}

export default Table