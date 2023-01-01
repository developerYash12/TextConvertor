import React,{useState} from 'react'
export default function TextForm(props){
      const [text, setText]= useState('')
  
    function convertToUpperCase(){
    let newText = text.toUpperCase();
    setText(newText)
      props.showAlert('Conver to UpperCase', 'success')
    }
   function handelChange(event){
     setText(event.target.value)
   }
  function convertToLowerCase(){
    let newText = text.toLowerCase()
    setText(newText)
     props.showAlert('Conver to LowerCase', 'success')

  }
  function clearText(){
    setText('')
     props.showAlert('Clear Text', 'success')

  }

  
  return(   
    <div className='container' style={{color : props.mode === 'dark' ? 'white': '#042743'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea value={text} onChange={handelChange} style={{backgroundColor : props.mode === 'dark' ? '#6c757d': 'white' , color : props.mode ==='dark'? 'white' : '#042743'}} className="form-control" 
          id="mybox" rows="8"></textarea>
        </div>
      <button onClick={convertToUpperCase} class="btn btn-primary mx-1">Convert to UpperCase</button>
      <button onClick={convertToLowerCase} class="btn btn-danger mx-1">Convert to LowerCase</button>
      <button onClick={clearText} class="btn btn-primary mx-1">Clear Text</button>
      <div class='container my-3'>
        <h2>Your summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>Preview</p>
        <p>{text.length>0 ? text:'Enter something it previem it here'}</p>
      </div>
  
      
      
    </div>
  )
}    