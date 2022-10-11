import React from 'react';
//import { ReactDOM } from 'react';

export default function App() {
    const [minutes, setMinutes] = React.useState();
    const [flipped, setFlipped] = React.useState(false);
    const onchange = (e) => {
        //console.log(e.target.value);
        setMinutes(e.target.value)
    };
    const reset = () => setMinutes(0)
    const onFlip = () => {
    reset();
    setFlipped((current) => !current);
    }
    return(
        <div>
            <h1>Super Converter</h1>
            <div>
            <label htmlFor='minutes'>Minutes</label>
            <input 
                value={flipped ? minutes * 60 : minutes} 
                id='minutes' 
                placeholder='Minutes' 
                type="number"
                onChange={onchange}
                disabled={flipped}
            />
            </div>
            <div>
            <h4>You want to convert {minutes}</h4>
            <label htmlFor='hours'>Hours</label>
            <input 
                value={flipped ? minutes : Math.round(minutes / 60)} 
                id='hours' 
                placeholder='Hours' 
                type='number'
                disabled={!flipped}
                onChange={onchange}
            />
            </div>
            <button onClick={reset}>Reset</button>
            <button onClick={onFlip}>Flip</button>
        </div>
    );
}
//const root = document.getElementById("root")
//ReactDOM.render(<App/>, root);
