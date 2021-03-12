import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Button from '@material-ui/core/Button';


const TodoList = (props) => {

    return(
        <>
        <tr>
           <th scope="row"></th>
            <td className="allListItem"> 
              <Button  class="btn btn-md deleteIcon mr-3" 
                onClick={ 
                    ()=>{
                    props.onSelect(props.id);
                     }
                } >
                <HighlightOffIcon  style={{ color: "white" }}/>
              </Button>
                {props.item}
            </td>
        </tr>
        </>
       )
}

export default TodoList;
