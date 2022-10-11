import React from 'react';
//import { ReactDOM } from 'react';

export default function App() {
    const [m, setM] = React.useState();
    const [flipped, setFlipped] =React.useState(false);
    const onChange = (e) => {
        setM(e.target.value)
    }
    const onflip = () => {
        reset();
        setFlipped((current) => !current);
    }
    const reset = () => setM(0)
    return(
        <div>
            <h1>Super Converter</h1>
            <div>
            <label htmlFor='m'>m</label>
            <input
                value={flipped ? m / 100 : m}
                id='m' 
                placeholder='m' 
                type='number'
                onChange={onChange}
                disabled={flipped}
                />
            </div>
            <div>
            <label htmlFor='m'>cm</label>
            <input
                value={flipped ? m : m * 100} 
                id='cm' 
                placeholder='cm' 
                type='number'
                disabled={!flipped}
                onChange={onChange}
                />
            </div>
            <button onClick={reset}>reset</button>
            <button onClick={onflip}>flip</button>
        </div>
    );
}
//const root = document.getElementById("root")
//ReactDOM.render(<App/>, root);
