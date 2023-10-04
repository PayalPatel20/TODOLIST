import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ListCom from "./ListCom";
 
const ToDoList = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const listOfItems = () => {
        setNewItem((prevValue) =>{
            return [...prevValue,item];
        });
    };
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" value={item} placeholder="Add an Items" onChange={itemEvent} />
                <button className="newBtn" onClick={listOfItems}>
                    <AddIcon/>
                </button>
                <br></br>
                <br></br>
                    <ol>
                      {  newItem.map((val) => {
                            return <ListCom text={val}/>
                        })

                      }
                    </ol> 
                </div>
            </div>
        </>
    ) 
}
export default ToDoList;