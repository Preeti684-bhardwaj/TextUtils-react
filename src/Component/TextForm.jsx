import React, { useState, useEffect } from 'react'

const TextForm = (props) => {

  const [text, setText] = useState('');

  const [summary, setSummary] = useState({ words: 0, characters: 0 });

  useEffect(() => {
    // Calculate the summary whenever the 'text' state changes
    const words = text.trim().split(/\s+/ ).filter((element)=>{return element.length!==0}).length;
    const characters = text.length;
    setSummary({ words, characters });
  }, [text]);

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Text changed To Uppercase','success')
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Text Changed To Lowercase','success')
  }
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    // Clear the Text Summary as well
    setSummary({ words: 0, characters: 0 });
    props.showAlert('Text Cleared','success')
  }

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied To Clipboard','success')
  }

  const removeSpace = () => {
   let newText=text.split(/[ ]+/);
   setText(newText.join(" "))
   props.showAlert('Extra Spaces Removed','success')
  }


  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2 className='mb-4'>{props.heading}</h2>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" placeholder='Enter Your Text In LowerCase' style={{backgroundColor:props.mode==='dark'?'#38516a':'white', color:props.mode==='dark'?'white':'black', height:'140px'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2  my-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={removeSpace}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{summary.words} Words and {summary.characters}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text To Preview"}</p>
      </div>
    </>
  )
}

export default TextForm