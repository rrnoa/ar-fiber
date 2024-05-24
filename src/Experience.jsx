import React from 'react'
import { Controllers } from '@react-three/xr'
import { OrbitControls, Stage } from '@react-three/drei'

const Experience = () => {
  return (
    <>    
      <OrbitControls/>
      <ambientLight intensity={1.5}/>
      <mesh position={[0, 0, -2]}>
        <boxGeometry args={[0.8, 0.8, 0.8]}/>
        <meshStandardMaterial color={"#00ff00"}/>
      </mesh>
    </>
  )
}

export default Experience