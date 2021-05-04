import React, { useState } from 'react';
import styles from '../styles/Search-button.module.css';
import PropTypes from 'prop-types';

const SearchButton = (search)  => {
    const [searchInput, setSearchInput] = useState("");

    // takes input, saves to state
    const handleSearchInputChanges = (event) => {
        setSearchInput(event.target.value);
    }

    const resetSearchInputField = () => {
        setSearchInput("");
    }
    // gets searchValue from props, preventDefault prevents a browser refresh
    const callSearchFunction = (event) => {
        event.preventDefault();
        search.search(searchInput);
        resetSearchInputField();
    }

    return (
        <form className={styles.search}>
            <input
                value={searchInput}
                onChange={handleSearchInputChanges}
                type="text"
                placeholder="Search a film..."/>
            <input className={styles.submit} onClick={callSearchFunction} type="submit"/>
        </form>
    )
}

export default SearchButton

SearchButton.propTypes = {
    search: PropTypes.func,
};

