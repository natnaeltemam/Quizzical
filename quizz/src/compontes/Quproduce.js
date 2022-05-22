export default function QuProduce(props) {
    const style = {

    }
    return (
        <div className="que">
            <h2 className='choseq'> {props.Q}</h2>
            <div className="choose">
                <button className="ch"
                    onClick={() => props.Click(props.C1.id)}
                    id={props.C1.id}
                    style={{ backgroundColor: props.C1.isHeld ? 'rgb(255, 166, 0)' : '#F5F7FB' }}
                >
                    {props.C1.value}
                </button>
                <button className="ch"
                    onClick={() => props.Click(props.C2.id)}
                    id={props.C2.id}
                    style={{ backgroundColor: props.C2.isHeld ? 'rgb(255, 166, 0)' : '#F5F7FB' }}
                >
                    {props.C2.value}
                </button>
                <button className="ch"
                    onClick={() => props.Click(props.C3.id)}
                    id={props.C3.id}
                    style={{ backgroundColor: props.C3.isHeld ? 'rgb(255, 166, 0)' : '#F5F7FB' }}>
                    {props.C3.value}</button>
                <button className="ch"
                    onClick={() => props.Click(props.C4.id)}
                    id={props.C4.id}
                    style={{ backgroundColor: props.C4.isHeld ? 'rgb(255, 166, 0)' : '#F5F7FB' }}>
                    {props.C4.value}
                </button>
            </div>
        </div>
    )
}
