import React from 'react';
import './TicTac.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Icon from './Icon';

const TicTac = () => {
  
    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
 
    return (
        <>
          <div className="container bg-light">
              <Icon/>
          </div>  
        </>
    )

}
export default TicTac;

