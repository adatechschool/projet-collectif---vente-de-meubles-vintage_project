import React from 'react'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from 'react-router-dom'

function Icon_admin({admin}) {
    if(admin===true){
        return (
            <div>
                <li className='flex-3 mr-2.5'>
            <Link to="/admin" className='text-dark-brown'>
              < SupervisorAccountIcon sx={{fontSize:70}}/>
            </Link>
          </li>
            </div>
          )
    }
  
}

export default Icon_admin