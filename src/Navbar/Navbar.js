import './Navbar.css'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../Components/Home'
import Laptop from '../Components/Laptop'
import Mobiles from '../Components/Mobiles'

import Watches from '../Components/Watches'
import Accessories from '../Components/Accessories'
import Television from '../Components/Television'
import HP from '../Components/Laptop/HP'
import Dell from '../Components/Laptop/Dell'
import Acer from '../Components/Laptop/Acer'
import Realme from '../Components/Mobile/Realme'
import Samsung from '../Components/Mobile/Samsung'
import Vivo from '../Components/Mobile/Vivo'
import Fastrack from '../Components/Watches/Fastrack'
import Titan from '../Components/Watches/Titan'
import Casio from '../Components/Watches/Casio'
import LG from '../Components/Television/LG'
import Charger from '../Components/Accessories/Charger'
import Headphone from '../Components/Accessories/Headphone'
import DynamicCompo from '../Dynamic/DynamicCompo'
import Samsungtv from '../Components/Television/Samsung'
import Cart from '../Cart/Cart'
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/laptop" element={<Laptop/>}/>
        <Route path="/hp" element={<HP/>}/>
        <Route path="/dell" element={<Dell/>}/>
        <Route path="/acer" element={<Acer/>}/>


        <Route path="/mobile" element={<Mobiles/>}/>
        <Route path="/realme" element={<Realme/>}/>
        <Route path="/vivo" element={<Vivo/>}/>
        <Route path="/samsung" element={<Samsung/>}/>

        <Route path="/watches" element={<Watches/>}/>
        <Route path="/fastrack" element={<Fastrack/>}/>
        <Route path="/titan" element={<Titan/>}/>
        <Route path="/casio" element={<Casio/>}/>

        <Route path="/television" element={<Television/>}/>
        <Route path="/lg" element={<LG/>}/>
        <Route path="/samsungtv" element={<Samsungtv/>}/>

        <Route path="/accessories" element={<Accessories/>}/>
        <Route path="/charger" element={<Charger/>}/>
        <Route path="/headphone" element={<Headphone/>}/>
    
<Route path="/dynamic/:id" element={<DynamicCompo/>}/>
<Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
