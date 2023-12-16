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
    <div className='flex flex-col items-center p-2'>
        <img className="w-80" src={ERROR_IMG}/>
        <h1>We'll be back shortly</h1>
        <p>We are fixing a temporary glitch. Sorry for the inconvenience.</p>
        <p>{err.status} : {err.statusText}</p>
       <Link to={"/"}> <button className='bg-gray-100 px-4 py-2 rounded-full'>Go Back Home</button></Link>
        
    </div>
    </div>
  )
}

export default Errors