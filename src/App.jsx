import './App.css'
import Home from './components/Home'

function App(){
  console.log("hello")
  const name ="Hello React.js!  "
  return (
    <div>
    <h1 style={{backgroundColor:"lightgreen",color:"red"}}>Hello</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOz395NKCq0SDJJsByW6qyr0J7uSTWz-vY-w&s" alt="" />
    <p className='intro'>React</p>
    <b>{name}</b>
    <Home/>

    </div>
  )
}

export default App