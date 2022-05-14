import React from 'react'
import back from '../img/hr.webp'
function About() {
    return (
        <div className='Quis'>
            <div className="que">
                <h2 className='choseq'> How would one say goodbye in Spanish? </h2>
                <div className="choose">
                    <button className="ch">Adiós</button>
                    <button className="ch">Hola</button>
                    <button className="ch">Au Revoir</button>
                    <button className="ch">Salir</button>
                </div>
            </div>
            <div className="que">
                <h2 className='choseq'> Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores? </h2>
                <div className="choose">
                    <button className="ch">Cabbage Patch Kids</button>
                    <button className="ch">Transformers</button>
                    <button className="ch">Care Bears</button>
                    <button className="ch">Rubik’s Cube</button>
                </div>

            </div>
            <div className="que">
                <h2 className='choseq'> What is the hottest planet in our Solar System? </h2>
                <div className="choose">
                    <button className="ch">Mercury</button>
                    <button className="ch">Venus</button>
                    <button className="ch">Mars</button>
                    <button className="ch">Saturn</button>
                </div>
            </div>
            <div className="que">
                <h2 className='choseq'> In which country was the caesar salad invented? </h2>
                <div className="choose">
                    <button className="ch">Italy</button>
                    <button className="ch">Portugal</button>
                    <button className="ch">Mexico</button>
                    <button className="ch">France</button>
                </div>

            </div>
            <div className="que">
                <div className="quezz">
                    <h2 className='choseq'> How Many Hearts Does An Octopus Have? </h2>
                </div>
                <div className="choose">
                    <button className="ch">One</button>
                    <button className="ch">Two</button>
                    <button className="ch">Three</button>
                    <button className="ch">Four</button>
                </div>

            </div>



            <button> Check answers </button>

        </div>
    )
}

export default About;