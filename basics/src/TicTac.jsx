import React, { useState } from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import './TicTac.css';
import Icon from './Icon';


const TicTac = () => {
    
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const itemArray = new Array(9).fill("s");

    const reloadGame = () => {
      setIsCross(false);
      setWinMessage("");
      itemArray.fill("empty", 0, 9);
    };

    const checkIsWinner = () => {
     

    };
    const changeItem = itemNumber => {
      if(winMessage){
        return toast(winMessage, {type: 'success'});
      }
      if(itemArray[itemNumber] === "empty") {
        itemArray[itemNumber] = isCross ? "cross" : "circle";
      }
      else{
        return toast("Already filled", {type: 'error'});
      }

    };
  
    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        } );
 
 return (
   <>
    <Container className="p-2">
     Tic tac
        <ToastContainer position="bottom-center" />
          <Row>
            <Col md={6} className="offset-md-3">
              <div className="grid">
                {itemArray.map ((item,  index) => {
                  return( 
                    <Card color="warning" className="p-2">
                        <CardBody className="box bg-info">
                            <Icon name={item} className="icon text-light" /> 
                        </CardBody>
                    </Card>
                  )
                })}
              </div>
            </Col>
          </Row>
    </Container>
   </>
  )
}


export default TicTac;

