import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { XR, ARButton, Controllers} from '@react-three/xr'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    const checkXRSupport = async () => {
      if (navigator.xr) {
        const isARSupported = await navigator.xr.isSessionSupported('immersive-ar')
        if (!isARSupported) {
          alert('AR is not supported on this device')
        }
      } else {
        alert('WebXR is not supported on this browser')
      }
    }

    checkXRSupport()
  }, [])

  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Controllers/>
          <Experience/>
        </XR>
      </Canvas>
    </>    
    
  )
}

export default App
