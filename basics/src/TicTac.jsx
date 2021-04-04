import React, { useState } from 'react';
import './TicTac.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import Icon from './Icon';


const itemArray = new Array(9).fill("empty");

const TicTac = () => {
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const reloadGame = () => {

    }
    const checkIsWinner = () => {

    } 
    const changeItem = itemNumber => {

    }
  
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
              <Icon name='circle'/>
          </div>
            <ToastContainer/>
        </>
    )
}
export default TicTac;

