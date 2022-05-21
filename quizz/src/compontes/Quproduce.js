export default function QuProduce(props) {
    return (
        <div className="que">
            <h2 className='choseq'> {props.Q}</h2>
            <div className="choose">
                <button className="ch chty" onClick={props.Click} id="4447">{props.C1}</button>
                <button className="ch" onClick={props.Click}>{props.C2}</button>
                <button className="ch" onClick={props.Click}>{props.C3}</button>
                <button className="ch" onClick={props.Click}>{props.C4}</button>
            </div>
        </div>
    )
}
