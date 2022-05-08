import React from 'react'
import { useNavigate } from 'react-router-dom'
function Shope() {
    let navigate = useNavigate()
    return (
        <div>
            <h1> Shope Page</h1>
            <button
                onClick={() => {
                    navigate('/about')
                }}>About</button>
        </div>
    )
}

export default Shope;