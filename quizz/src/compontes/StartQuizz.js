import React from 'react'
import { useNavigate } from 'react-router-dom'
function Shope() {
    let navigate = useNavigate()
    return (
        <div className='Start'>
            <h1 className='ka'> Quizzical</h1>
            <p className='in'>Some Description</p>
            <button
                onClick={() => {
                    navigate('/about')
                }}>Start quiz</button>
        </div>
    )
}

export default Shope;