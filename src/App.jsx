import Navbar from './components/Navbar'
import React, {useState} from 'react'
import Alert from './components/Alert'
import TextForm from "./components/TextForm"
import About from './components/About'



export default function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
  showAlert({
    msg: message,
    type: type
  })
    setTimeout(()=>{
      setAlert(null);
    },1500)
}
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      setAlert('Dark Mode has been enable', 'success')
    
    }
    else{
      setMode('light')
        document.body.style.backgroundColor='White'
      setAlert('Light Mode has been enable', 'success')
      
    }
  }

  
  
  return (
    <>
        <Navbar title={'Enable DarkMode'} mode={mode} toggleMode={toggleMode}/>
      <Alert Alert={alert}/>
        <div className='container my-3'>
          
          <TextForm mode={mode} heading = 'Enter the Text to analyze below' />
         
        </div>
      
    </>
  )
}
