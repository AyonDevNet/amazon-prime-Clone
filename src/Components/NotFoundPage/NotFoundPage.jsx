import React from 'react'
import { Link } from 'react-router-dom'
import Button from './NFP_button'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className='NotFoundPage_div_Page'>
        <div className='NotFoundPage_subDiv'>
            <h4>It's not here.</h4>
            <h4>There is nothing at the web address you've entered. Let's find you a great video to watch instead.</h4>
            <Link to={'/homePage'}>
            <Button>Go To Prime Video Home</Button>
            </Link>
        </div>
    </div>
  )
}

export default NotFoundPage