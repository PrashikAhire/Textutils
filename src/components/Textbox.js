import React , {useState} from 'react'

export default function Textbox(props) {
    const handleupclick = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted into Uppercase","success");
    }
    const handleLoclick = ()=>{
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Converted into Lowercase","success");

  }
  const handleclrclick = ()=>{
    let newtext = "";
    setText(newtext);
}
const handleCopy= ()=>{
  console.log("copied!!!");
  var text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
  props.showAlert("Copied to Clipboard ! ","success");
}
const handlespace = ()=>{
  let newtext = text.split(/[ ] +/);
  setText(newtext.join(" "));
}
  const  handleOnchange= (event)=>{
            setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
   <>
   <div className='container my-3' style={{color : props.mode==='dark'?'white':'black'}}>
<h1 className='mb-4' >  {props.heading}</h1>
<div className="mb-3 " >
  <textarea className="form-control" placeholder='Enter your text' value={text}  onChange={handleOnchange} style={{
    backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
    color: props.mode === 'dark' ? 'white' : '#042743'
  }}
   id="myBox" rows="8"></textarea>
</div>
<button disabled = {text.length===0} className="btn btn-primary mx-2  my-2" onClick={handleupclick}>
    Convert to Uppercase
</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoclick}>
  Convert to Lowercase
</button>
<button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
  Copy Text
</button>
 <button disabled = {text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleclrclick}>
  clear text 
  </button>
  <button disabled = {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlespace}>
    remove spaces
  </button>
<div className="container my-3">
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0 }).length} words and {text.length} characters</p>
  <p>{0.008*text.split(/\s+/).filter((element)=>{
   return element.length!==0
  }).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</div>
   </>
  );
}
