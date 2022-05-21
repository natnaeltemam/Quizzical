import React from 'react'
import Quesions from './Quproduce'
import data from './data'
import { nanoid } from 'nanoid'
function Quizzes() {
    const [quizzs, setQuizzes] = React.useState(data['results'])
    function ChooseSelect() {
        console.log("This is select")
    }
    const Quizz = quizzs.map(data => {
        const choose = [data.correct_answer, data.incorrect_answers[0]
            , data.incorrect_answers[1], data.incorrect_answers[2]]
        const shufflechose = choose.sort((a, b) => 0.5 - Math.random())
        const id = nanoid()
        return (
            <Quesions
                key={id}
                Q={data.question}
                C1={shufflechose[0]}
                C2={shufflechose[1]}
                C3={shufflechose[2]}
                C4={shufflechose[3]}
                Click={ChooseSelect}
                isHeld={false} />
        )
    }
    )

    return (
        <div className='Quis'>
            <div className='allQ'>

                {Quizz}

                <button> Check answers </button>
            </div>
        </div>
    )
}

export default Quizzes;

{/* <div className="que">
<h2 className='choseq'> How would one say goodbye in Spanish? </h2>
<div className="choose">
    <button className="ch chty">Adiós</button>
    <button className="ch">Hola</button>
    <button className="ch">Au Revoir</button>
    <button className="ch">Salir</button>
</div>
</div> */}
{/* <div className="que">
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

</div> */}