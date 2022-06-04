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
    console.log(props.Q.question);
    var htmlEntities = {
        nbsp: ' ',
        cent: '¢',
        pound: '£',
        yen: '¥',
        euro: '€',
        copy: '©',
        reg: '®',
        lt: '<',
        gt: '>',
        quot: '"',
        amp: '&',
        apos: '\''
    };

    function unescapeHTML(str) {
        return str.replace(/\&([^;]+);/g, function (entity, entityCode) {
            var match;

            if (entityCode in htmlEntities) {
                return htmlEntities[entityCode];
                /*eslint no-cond-assign: 0*/
            } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
                return String.fromCharCode(parseInt(match[1], 16));
                /*eslint no-cond-assign: 0*/
            } else if (match = entityCode.match(/^#(\d+)$/)) {
                return String.fromCharCode(~~match[1]);
            } else {
                return entity;
            }
        });
    };
    const question = unescapeHTML(props.Q.question)
    const chosseA = unescapeHTML(props.C1.value)
    const chosseB = unescapeHTML(props.C2.value)
    const chosseC = unescapeHTML(props.C3.value)
    const chosseD = unescapeHTML(props.C4.value)

    return (
        <div className="que">
            <h2 className='choseq'> {question}</h2>
            <div className="choose">
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C1.id)}
                    id={props.C1.id}
                    style={Style(props.C1)}
                >
                    {chosseA}
                </button>
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C2.id)}
                    id={props.C2.id}
                    style={Style(props.C2)}
                >
                    {chosseB}
                </button>
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C3.id)}
                    id={props.C3.id}
                    style={Style(props.C3)}>
                    {chosseC}</button>
                <button className="ch"
                    disabled={val === 'notChecked' ? false : true}
                    onClick={() => props.Click(props.C4.id)}
                    id={props.C4.id}
                    style={Style(props.C4)}>
                    {chosseD}
                </button>
            </div>
        </div>
    )
}
