import React, {useState} from "react";
import "./search.css";
import {Button} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import {useHistory} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";

function Search({hideButton =false}) {
    const [state, dispatch ] = useStateValue();
    const [input, setInput] = useState("");
    const history = useHistory();
    const search =(e)=>{
        e.preventDefault();
        console.log('you hit the search utton', input);
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history.push('./search')
    };
  return (
    <form className = 'Search'>
      <div className = 'Search_input'>
        <SearchIcon className ="search_input_icon"/>
        <input value={input} onChange ={e =>setInput(e.target.value)}/>
        <MicIcon />
      </div>
      {!hideButton ? (
          <div className ="search_buttons">
          <Button  type='submit' onClick= {search} variant ="outlined">Google search</Button>
          <Button variant ="outlined">I'm feeling lucky</Button>
      </div>
      ) :
      (<div className ="search_buttons">
          <Button className= "search_buttonsHidden" type='submit' onClick= {search} variant ="outlined">Google search</Button>
          <Button className= "search_buttonsHidden" variant ="outlined">I'm feeling lucky</Button>
      </div>)
}
    </form>
  );
}

export default Search