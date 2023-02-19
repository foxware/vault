import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AddItem } from './pages/AddItem'


function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addItem">Add Item</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addItem" element={<AddItem />}/>
      </Routes>
    </>
  )
  
}

export default App;