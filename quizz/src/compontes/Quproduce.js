export default function QuProduce(props) {
    return (
        <div className="que">
            <h2 className='choseq'> {props.Q}</h2>
            <div className="choose">
                <button className="ch" onClick={() => props.Click(props.C1.id)} id={props.C1.id}>{props.C1.value}</button>
                <button className="ch" onClick={() => props.Click(props.C2.id)} id={props.C2.id}>{props.C2.value}</button>
                <button className="ch" onClick={() => props.Click(props.C3.id)} id={props.C3.id}>{props.C3.value}</button>
                <button className="ch" onClick={() => props.Click(props.C4.id)} id={props.C4.id}>{props.C4.value}</button>
            </div>
        </div>
    )
}
