// REDUX is a form of frontend DATABASE  , altough this project can be made  without REDUX as there are less components 
// but what if in future this project become complex (if there woulf be more than 100+ components ) then management of states becomes a problem 
// as states are within the components , so we need somenting to store our states and whenever a data come we direct push it and fetch form it
// so we thought to create a centralized database to store our states and  it's REDUX



import { useState } from "react";

import { useDispatch } from "react-redux";
import { addNewToDo } from "../redux/actions";

const TodoForm =()=>{

    const [text,setText] =useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) =>{
        e.preventDefault();

        dispatch(addNewToDo(text));

        setText('');

    } 
    const onInputChange = (e) =>{
        // console.log(e);
        //console.log(e.target.value);
        setText(e.target.value);
    }

    return (
            <form className="form" onSubmit={onFormSubmit}>
                <input 
                
                placeholder="Enter new Task ...." 
                className="input"

                // as soon as the vlue is changed in form this below below function will be called
                onChange={onInputChange}
                value={text}
                />
            </form>
    )
}

export default TodoForm;