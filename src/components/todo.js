import { useState } from "react";
function FunctionalComponentFunction() {
    const [input, setInput] = useState('');
    
    return (
      <div>
      <label>Please specify:</label>
      <input value={input} onInput={e => setInput(e.target.value)}/>
      <ul>
          <li>{input}</li>
          
      </ul>
      </div>
       
    );

    
  }

 
export default FunctionalComponentFunction