import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const ListCom = (props) => {
    const [line,setline]=useState(false);
    const cutIt = () => {
        setline(true);
    }
    return(
        <div className="todo_style">
        <span onClick={cutIt}>
            <DeleteIcon classname="deleteicon"/>
        </span>
     <li style={{textDecoration: line? "line-through":"none"}}>{props.text}</li>
     </div>
    )
};

export default ListCom;