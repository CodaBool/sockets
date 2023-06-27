import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div style={{height: '100vh', backgroundColor: '#171717'}}></div>}>
      <App />
      {/* <Canvas style={{height: '100vh', overflow: 'hidden'}} camera={{position: [-5,2,5], fov: 175}}>
        <App />
      </Canvas> */}
    </Suspense>
  </React.StrictMode>
)