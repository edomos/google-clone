import React, { useState } from 'react';
import './Search.css'
import MicIcon from '@mui/icons-material/Mic';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../components/StateProvider'
import { actionTypes } from '../components/reducer'

const Search = ({ hideButtons = false }) => {
    const [{ }, dispatch] = useStateValue();

    const [input, setInput] = useState('')
    const navigate = useNavigate();

    const search = (e) => {
        e.preventDefault();
        console.log('You hit the search button >> ', input)
        
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        navigate('./search')
    }

    return (
        <form className='search'>
            <div className='search__input--container'>
                <SearchIcon className='search__input--icon' />
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='search__input--input' />
                <MicIcon />
            </div>
            {!hideButtons ? (
                <div className='search__buttons'>
                    <Button
                        type='submit'
                        onClick={search}
                        variant='outlined'>Google Search</Button>
                    <Button
                        variant='outlined'>I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className='search__buttons'>
                    <Button
                        type='submit'
                        onClick={search}
                        variant='outlined'
                        className='searchButtons__hidden'>
                        Google Search
                    </Button>
                    <Button
                        variant='outlined'
                        className='searchButtons__hidden'>
                        I'm Feeling Lucky
                    </Button>
                </div>
            )}
        </form>
    );
}

export default Search;
