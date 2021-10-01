import { useState } from "react";

// function ChildAddForm(props) {
//     const defaultState = {
//         id: 0,
//         inputNumberOne: 0,
//         inputNumberTwo: 0,
//     };
//     const [newNumber, setNewNumber] = useState(defaultState);
//     const [sum, setSum] = useState('');

//     function handleOnChange(e) {
//         let update = newNumber;
//         update[e.target.name] = e.target.value;
//         setNewNumber(update);
//     }



//     function handleOnSubmit(e) {
//         e.preventDefault();

//         props.add({ ...newNumber });
//         sum = {defaultState.inputNumberOne} 
//         setSum(Number(inputNumberOne) + Number(inputNumberTwo));

//     }

//     return (
//         <div>
//             <form onSubmit={handleOnSubmit}>
//                 <input type='number' name='inputNumberOne' onChange={handleOnChange} />
//                 <input type='number' name='inputNumberTwo' onChange={handleOnChange} />
//                 <button>Show Answer</button>
//             </form>
//         </div>
//     )
// }

// export default ChildAddForm;

function ChildAddForm() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(number1 + number2);

    // function handleOnChange(e) {
    //     let update = newNumber;
    //     update[e.target.name] = e.target.value;
    //     setNewNumber(update);
    // }


    function handleOnSubmit(e) {
        e.preventDefault();
        setTotal(number1 + number2);

    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type='number' value={number1} onChange={e => setNumber1(+e.target.value)} />
                <input type='number' value={number2} onChange={e => setNumber2(+e.target.value)} />
                <button>Show Answer</button>
                {total}
            </form>
        </div>
    )
}

export default ChildAddForm;