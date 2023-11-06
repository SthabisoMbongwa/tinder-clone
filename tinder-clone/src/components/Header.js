import React from 'react';
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

function Header(){
    return(
        <div className='header'>
            <PersonIcon />
            <h2>I am a header</h2>
            <QuestionAnswerIcon />
        </div>
    )
}

export default Header;