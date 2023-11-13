import './Navbar.css'
import { BrowserRouter,NavLink,Route,Routes} from 'react-router-dom'
import Home from '../Components/Home'
import Laptop from '../Components/Laptop'
import Mobiles from '../Components/Mobiles'

import Watches from '../Components/Watches'
import Accessories from '../Components/Accessories'
import Television from '../Components/Television'
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
      <div className='nav'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/laptop">Laptop
      {/* <div className='sub-route'>
      <Link to="/laptop/Hp">HP</Link>
      <Link to="/laptop/dell">Dell</Link>
      <Link to="/laptop/Acer">Acer</Link>
      </div> */}
      </NavLink>
      <NavLink to="/mobile">Mobiles
      {/* <Link className="" to="/mobile/realme">Realme</Link>
      <Link to="/mobile/Vivo">Vivo</Link>
      <Link to="/mobile/samsung">Samsung</Link> */}
      </NavLink>
      <NavLink to="/watches">watches
      {/* <Link to="/watches/fastrack">Fastrack</Link>
      <Link to="/watches/Titan">Titan</Link>
      <Link to="/watches/casio">Casio</Link> */}
      </NavLink>
      <NavLink to="/television">Television
      {/* <Link to="/television/samsung">Samsung</Link>
      <Link to="/television/LG">LG</Link> */}
      </NavLink>
      <NavLink to="/accessories">Accessories
      {/* <Link to="/accessories/charger">charger</Link>
      <Link to="/accessories/headphone">headphone</Link> */}
      </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/laptop" element={<Laptop/>}/>
        <Route path="/mobile" element={<Mobiles/>}/>
        <Route path="/watches" element={<Watches/>}/>
        <Route path="/television" element={<Television/>}/>
        <Route path="/accessories" element={<Accessories/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
