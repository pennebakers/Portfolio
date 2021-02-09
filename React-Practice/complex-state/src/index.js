import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClicks = () => {
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClicks = () => {
    setClicks({...clicks, right: clicks.right + 1})
  }

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClicks}>left</button>
      <button onClick={handleRightClicks}>right</button>
      {clicks.right}
    </div>
  )
}



const root = document.getElementById('root')

ReactDOM.render(
    <App />, root
);
