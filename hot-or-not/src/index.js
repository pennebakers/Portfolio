import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const images = [
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumj7CWQLq9VXmiMADNdlmvz_QGTNYce8Jyw&usqp=CAU', alt: 'Hello World'},
  {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78Oaw-lyMDFcbczHgT3mBU2fyWV-cQueCvA&usqp=CAU', alt: 'hot women'}
]

const [index, setIndex] = useState(0)

const DisplayPicture = () => {
  return(
    <div>
      <img src={images[0].src} alt={images[0].alt}/>
    </div>
  )
}

const App = () => {
  return(
    <div>
      <DisplayPicture />
      <HotButton />
    </div>
  )
}

const NextButton = () => {
  return(
    <div class>
      <button class="nextbutton">Next</button>
    </div>
  )
}


ReactDOM.render(
    <App />,
  document.getElementById('root')
);

