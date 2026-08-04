import React from 'react'
import Sbar from './components/Sbar'
import Player from './components/Player'
import Display from './components/Display'
import { useRef } from 'react'
import { useContext } from 'react'
import { PlayerContext } from './context/PlayerContext'



const App = () => {
  const {audioRef,track}=useContext(PlayerContext);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sbar/>
        <Display />


      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>

    </div>
  )
}

export default App
