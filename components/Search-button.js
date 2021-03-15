import React from 'react';
import { useState } from 'react';

const SearchButton = (props)  => {
    // using state to save search value input
    const [searchInput, setSearchInput] = useState("");

    // takes input, saves to state
    const handleSearchInputChanges = (event) => {
        setSearchInput(event.target.value);
    }

    // resets input field to empty string
    const resetSearchInputField = () => {
        setSearchInput("");
    }
    // gets searchValue from props, preventDefault prevents a browser refresh
    const callSearchFunction = (event) => {
        event.preventDefault();
        props.search(searchInput);
        resetSearchInputField();
    }


   return (
     <form>
       <input
       value={searchInput}
       onChange={handleSearchInputChanges}
       type="text"
       placeholder="Search a film..."/>
       <input onClick={callSearchFunction} type="submit" value="FIND MY MOVIE!" />
     </form>
   )
}

export default SearchButton