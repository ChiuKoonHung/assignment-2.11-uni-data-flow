
function ChildListInput(props) {
    const input = {
        id: 0,
        sum: 0,
    }
    return (
        <ul>
            {props.input.map(i =>
                <li key={i.id}>
                    {i.sum}
                </li>)}
        </ul>
    );
}

export default ChildListInput;