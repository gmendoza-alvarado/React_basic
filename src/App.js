import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [image, setImage] = useState('');


  const onChangeLine1 = function(evento){
    setLine1(evento.target.value)
  }
  const onChangeLine2 = function(evento){
    setLine2(evento.target.value)
  }
  const onChangeImage = function(evento){
    setImage(evento.target.value)
  }

  const onClickExport = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImage}>
        <option value = "flames"> Burning house </option>
        <option value = "futurama"> Futurama </option>
        <option value = "smart-guy"> Smart guy </option>
        <option value = "history"> History </option>
        <option value = "matrix"> Matrix </option>
        </select> <br />
        <input onChange = {onChangeLine1} type = "text"  placeholder='Line 1'/> <br />
        <input onChange = {onChangeLine2} type = "text"  placeholder='Line 2'/> <br />
        <button onClick={onClickExport}>Export</button>

        <div className="meme" id='meme'>
          <span>{line1}</span><br/>
          <span>{line2}</span>
          <img src={"/img/" + image + ".jpg"}/>
        </div>


    
    </div>
  );
}

export default App;
