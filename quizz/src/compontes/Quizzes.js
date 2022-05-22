import React from 'react'
import Quesions from './Quproduce'
import data from './data'
import { nanoid } from 'nanoid'
function Quizzes() {
    const [data_quizzs, setQuizzes] = React.useState(data['results'])
    const [each_quizz, seteachQuizz] = React.useState({})

    function ChooseSelect(id) {
        seteachQuizz(prevQuiz => {
            const value = []
            for (let i = 0; i < prevQuiz.length; i++) {
                const value1 = []
                const quiesion = each_quizz[i]
                value1.push(quiesion[0])
                for (let j = 0; j < quiesion.length; j++) {
                    if (j === 0) {

                    }
                    else if (quiesion[j].id === id) {

                        value1.push({ ...quiesion[j], isHeld: !quiesion[j].isHeld })

                    }

                    else {
                        value1.push({ ...quiesion[j] })
                    }
                }
                const value2 = []
                let value3 = 0
                for (let k = 0; k < value1.length; k++) {
                    if (k === 0) {
                        value2.push(value1[k])
                    }
                    else if (value1[k].id === id) {
                        value2.push(value1[k])
                        value3++
                    }
                    else {
                        value2.push({ ...value1[k], isHeld: false })
                    }
                }

                console.log(value2, "This is v2")
                value.push(value3 !== 0 ? value2 : value1)
            }

            return value
        })
    }

    React.useEffect(() => {
        seteachQuizz(data_quizzs.map(data => {
            const data_qu = []
            data_qu.push({ question: data.question })
            const choose = [data.correct_answer, data.incorrect_answers[0]
                , data.incorrect_answers[1], data.incorrect_answers[2]]
            const shufflechose = choose.sort((a, b) => 0.5 - Math.random())
            const id = []
            for (let i = 0; i < 4; i++) {
                id.push(nanoid())
            }
            data_qu.push({ value: shufflechose[0], id: id[0], isHeld: false, isCorrect: (data.correct_answer === shufflechose[0]) })
            data_qu.push({ value: shufflechose[1], id: id[1], isHeld: false, isCorrect: (data.correct_answer === shufflechose[1]) })
            data_qu.push({ value: shufflechose[2], id: id[2], isHeld: false, isCorrect: (data.correct_answer === shufflechose[2]) })
            data_qu.push({ value: shufflechose[3], id: id[3], isHeld: false, isCorrect: (data.correct_answer === shufflechose[3]) })

            return data_qu
        }))
    }, [])
    const Quizz = []
    for (let i = 0; i < each_quizz.length; i++) {
        const quiesion = each_quizz[i]
        const t_id = nanoid()
        Quizz.push(<Quesions
            key={t_id}
            Q={quiesion[0].question}
            C1={quiesion[1]}
            C2={quiesion[2]}
            C3={quiesion[3]}
            C4={quiesion[4]}
            Click={ChooseSelect} />)
    }




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

