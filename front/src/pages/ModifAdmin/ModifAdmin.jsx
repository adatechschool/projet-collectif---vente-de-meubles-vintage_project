import Navbar from '../../composants/Navbar/Navbar';
import Footer from '../../composants/Footer/Footer'
import ModifTable from '../../composants/Table/ModifTable'


function modificationMeuble () {
    // let navigate = useNavigate()

    return(
        <div className='bg-beige'>
            <Navbar/>
            <h1 className='text-base text-dark-brown p-6'>Modification d'un article en cours</h1>
            <ModifTable/>
            <Footer/>
        </div>
    )
}


export default modificationMeuble