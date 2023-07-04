import { useLocation} from 'react-router-dom';
import {  useEffect, useState} from 'react';
const port=import.meta.env.VITE_PORT


function ModifTable(){
    const location=useLocation()
    console.log(location)
    const idTab= location.pathname.split('/')[2]
    console.log(idTab)

    const [produitDetail, setproduitDetail] = useState({});


    useEffect(() => {
    fetchData();
    }, []);
    
    const fetchData = async () => {

    try {
      const response = await fetch(`http://localhost:${port}/meubles/${idTab}`);
      const jsonData = await response.json();

      console.log(jsonData);
      setproduitDetail(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };


    // let navigate=useNavigate()
    return(
        
    <div className='flex flex-col justify-around items-center min-h-[75vh] mt-3'>
        <table className='border-4 table-auto mx-auto'>
            <thead className="text-red-600">
                <tr>
                    <th className='border-2 text-2xl'>Nom</th>
                    <th className='border-2 text-2xl'>Prix</th>
                    <th className='border-2 text-2xl'>Actions</th>
                </tr>
            </thead>
            {/* <tbody className='border-4'>
                <tr key={data.id} className="border-2">
                    <td className='px-2'>{data.titre}</td>
                    <td className='border-2 px-2'>{data.prix} €</td>
                    <td className='flex mx-2 my-auto'>
                        <div className="ml-2">
                            <button onClick ={() => {navigate(`/admin/${el.id}`)}}>valider</button>
                        </div>
                    </td>
                </tr>
            </tbody> */}
        </table>
    </div>
    )  
}


export default ModifTable