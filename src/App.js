import React ,{components} from 'react'
import './App.css'
import Post from './components/Post'

function App() {
  return (
    <div className='app'>
      {/* <div className='app__header'> */}
      {/* <img
          className="app__headerImgae"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
          height="45px"
          alt="Logo" /> */}
        {/* </div> */}
        <Post/>
   </div>
  )
}

export default App


