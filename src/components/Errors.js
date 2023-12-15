import React from 'react'
import { ERROR_IMG } from '../utilis/constants'
import { useRouteError } from 'react-router-dom'
import Header from './Header';
import { Link } from 'react-router-dom';

const Errors = () => {
    const err = useRouteError();
   
  return (
    <div>
        <Header/>
    <div className='errorContainer'>
        <img className="error_img" src={ERROR_IMG}/>
        <h1>We'll be back shortly</h1>
        <p>We are fixing a temporary glitch. Sorry for the inconvenience.</p>
        <p>{err.status} : {err.statusText}</p>
       <Link to={"/"}> <button>Go Back Home</button></Link>
        
    </div>
    </div>
  )
}

export default Errors