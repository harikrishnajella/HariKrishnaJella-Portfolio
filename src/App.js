import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Projects from './components/Projects'

const App = () => (
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/aboutme' element={<Aboutme/>} />
      <Route exact path='/projects' element={<Projects/>} />
    </Routes>
)

export default App;