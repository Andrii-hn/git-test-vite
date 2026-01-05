import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
      <h2>Home</h2>
        <nav>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/login">Login</Link>
            </button>
            <button>
                <Link to="/register">Register</Link>
            </button>
            <button>
                <Link to="/products">Products</Link>
            </button>
            <button>
                <Link to="/404">Not Found</Link>
            </button>
        </nav>
    </>
  )
}

export default Home