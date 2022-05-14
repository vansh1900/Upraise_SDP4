import React from 'react'
import abc  from './indexpic.png'
import { Link } from 'react-router-dom'
import './Index.css'
import HomeHeader from '../HomeHeader/HomeHeader'

function Index() {
  return (
    <div>
      {/* <HomeHeader /> */}
        <div className='container'>
            <div className='navbar bgcolor'>
                <span className='d-flex justify-content-start ms-3'>Upraise Donation</span>
                <div className='d-flex justify-content-end row'>
                  <Link className='btn btn-success col m-3' to='/login'>login</Link>
                  <Link className='btn btn-success col m-3' to='/register'>Register</Link>
                </div>
            </div>
            <center>
              <img src={abc} className='img-fluid image'></img>
            </center>
            <center>
            {/* <div className='row paragraph'>
                <p>We at 'Upraise' maintain integrity and commitment towards the donations. We value the money of the donators who donated their valuable money and we are 100% sure that your money reach to the needy people.</p>
            </div> */}
            </center>
        </div>
    </div>
  )
}
export default Index