export default function QuProduce(props) {
    const val = props.Q.isAnswerCo
    function Style(choose) {
        let style = {}

        if (choose.isHeld) {
            if (val === 'notChecked') {
                style = { backgroundColor: 'rgb(255, 166, 0)' }
            }
            else if (choose.isCorrect) {
                style = { backgroundColor: '#00FA9A', cursor: 'cell' }
            }
            else {
                style = { backgroundColor: '#F08080', }
            }
        }
        else {
            if (val === 'notChecked') {
                style = { backgroundColor: '#F5F7FB' }
            }
            else if (choose.isCorrect) {
                style = { backgroundColor: '#00FA9A', }
            }
            else {
                style = { backgroundColor: '#F5F7FB', }
            }

        }

        return style
    }
    return (
        <div className="que">
            <h2 className='choseq'> {props.Q.question}</h2>
            <div className="choose">
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C1.id)}
                    id={props.C1.id}
                    style={Style(props.C1)}
                >
                    {props.C1.value}
                </button>
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C2.id)}
                    id={props.C2.id}
                    style={Style(props.C2)}
                >
                    {props.C2.value}
                </button>
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C3.id)}
                    id={props.C3.id}
                    style={Style(props.C3)}>
                    {props.C3.value}</button>
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C4.id)}
                    id={props.C4.id}
                    style={Style(props.C4)}>
                    {props.C4.value}
                </button>
            </div>
        </div>
    )
}
