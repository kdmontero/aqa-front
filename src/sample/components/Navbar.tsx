import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      nav bar
      <div>
        <Link to="/">Home</Link>
        <Link to="/quotations">Quotations</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  )
}

export default Navbar