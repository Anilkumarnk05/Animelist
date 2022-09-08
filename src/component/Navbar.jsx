import {Link} from 'react-router-dom'
import logo from "./images/logo.png"
const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={logo} />
           <div>
           <input type="search" />
            <button className='border border-danger'>Search</button>
           </div>
          <Link to="/wishlist">wishlist</Link>
        </div>
      );
}
 
export default Navbar;