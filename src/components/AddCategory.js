import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // avoids to refresh the page

        if (inputValue.trim().length > 1) {
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }

    }

    return <form onSubmit={ handleSubmit }>
        <input 
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
        </form>
}
//element from agroups every input element inside, so it works
// the same as a fragment in this snippet

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
}