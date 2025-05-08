import { useState } from 'react';
import './/App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);
  const [showSecret, setshowSecret] = useState(false);
  const toggleSecret = () => setshowSecret(prev => !prev);

  return (
    <>
    <div className={`background ${count % 2 === 0 ? 'evenBackground' : 'oddBackground'}`}  >
      
      <h1 className="counterTitle">Counter App</h1>
      <p id="countNumber" > {count}</p>
      <div className="btnAction">
      <button className="btnIncrease" onClick={increase}>Increase</button>
      <button className="btnDecrease" onClick={decrease} style={{ marginLeft: '10px' }}>Decrease</button>
      </div>

      <div id="addReset">
        <button className="btnReset" onClick={reset}>Reset</button>
      </div>
      <div>
  <button className="btnToggle" onClick={toggleSecret}>
    {showSecret ? 'Hide Secret' : 'Show Secret'}
  </button>

  {showSecret && (
    <p className="secretMessage">🧠 Keep practicing and it’ll click naturally!</p>
  )}
</div>

    </div>
    </>
  );
}

export default App;

