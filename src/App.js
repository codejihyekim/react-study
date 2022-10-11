import React from 'react';
//import { ReactDOM } from 'react';

export default function App() {
    const [minutes, setMinutes] = React.useState();
    const onchange = (e) => {
        //console.log(e.target.value);
        setMinutes(e.target.value)
    };
    return(
        <div>
            <h1>Super Converter</h1>
            <div>
            <label htmlFor='minutes'>Minutes</label>
            <input 
                value={minutes} 
                id='minutes' 
                placeholder='Minutes' 
                type="number"
                onChange={onchange}
            />
            </div>
            <div>
            <h4>You want to convert {minutes}</h4>
            <label htmlFor='hours'>Hours</label>
            <input 
                value={minutes / 60} 
                id='hours' 
                placeholder='Hours' 
                type='number'
            />
            </div>
        </div>
    );
}
//const root = document.getElementById("root")
//ReactDOM.render(<App/>, root);
