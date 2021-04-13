import React, { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';

import './TicTac.css';
import Icon from './Icon';

const itemArray = new Array(9).fill("");

const TicTac = () => {
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState(" ");
 
    const reloadGame = () => {
      setIsCross(false);
      setWinMessage("");
      itemArray.fill("empty", 0, 9);
    };

    const checkIsWinner = () => {
      if(itemArray[0] === itemArray[1] && itemArray[0] === itemArray[2] && itemArray[0] !== "empty")
        { 
          setWinMessage(`${itemArray[0]} Won`);
        }
      else if(itemArray[3] === itemArray[4] && itemArray[4] === itemArray[5] && itemArray[3] !== "empty")
        { 
          setWinMessage(`${itemArray[3]} Won`);
        }
      else if(itemArray[6] === itemArray[7] && itemArray[7] === itemArray[8] && itemArray[6] !== "empty")
        { 
          setWinMessage(`${itemArray[6]} Won`);
        }
      else if(itemArray[0] === itemArray[3] && itemArray[3] === itemArray[6] && itemArray[0] !== "empty")
        { 
          setWinMessage(`${itemArray[0]} Won`);
        }
      else if(itemArray[1] === itemArray[4] && itemArray[4] === itemArray[7] && itemArray[1] !== "empty")
        { 
          setWinMessage(`${itemArray[1]} Won`);
        }
      else if(itemArray[2] === itemArray[5] && itemArray[5] === itemArray[8] && itemArray[2] !== "empty")
        { 
          setWinMessage(`${itemArray[2]} Won`);
        }
      else if(itemArray[0] === itemArray[4] && itemArray[4] === itemArray[8] && itemArray[0] !== "empty")
        { 
          setWinMessage(`${itemArray[0]} Won`);
        }
      else if(itemArray[2] === itemArray[4] && itemArray[4] === itemArray[6] && itemArray[2] !== "empty")
        { 
          setWinMessage(`${itemArray[2]} Won`);
        } 
    
  };

  const changeItem = itemNumber => {
      if(winMessage){
        return toast(winMessage, {type: 'success'});
      }
      else if(itemArray[itemNumber] === "empty") {
        itemArray[itemNumber] = isCross ? "cross" : "circle"
        setIsCross(!isCross)
      }
      else{
        return toast("Already filled", {type: 'error'});
      }
      
      checkIsWinner();
   };

 return (
   <>
    <Container className="p-2">
   
        <ToastContainer position="bottom-center" />
          <Row>
            <Col md={6} className="offset-md-3">
            { winMessage ? (
               <div className="mb-2 mt-2">
                 <h1 className="text-success text-uppercase text-center ">
                   {winMessage}
                 </h1>
                 <Button color="success" block onClick={reloadGame}>Reload Game 1</Button>
               </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "cross" : "circle"} Turns
              </h1>
            ) }
              <div className="grid">
              { itemArray.map( (item,index) => {
                  return( 
                    <Card color="warning" className="p-2" onClick={ ()=> changeItem(index) }>
                        <CardBody className="box bg-info">
                            <Icon name={item} className="icon text-light" /> 
                        </CardBody>
                    </Card>
                  )
                } )
              } 
              </div>
            </Col>
          </Row>
    </Container>
  </>
)

}
export default TicTac;
