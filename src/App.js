
import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import Alert from './Component/Alert';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
function App() {
  const[mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
     },1500)
  }
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert('Dark Mode Is Enabled','success')
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light Mode Is Enabled','success');
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
      <BrowserRouter>
    <div className="App">
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter , Remove Extra Spaces" mode={mode} />} />
      <Route  exact path="/about" element={<About  mode={mode}/>}/>
      </Routes>
      </div>
    </div>
      </BrowserRouter>
      </>
  );
}

export default App;
