import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './home.css'



function Home() {
  const navigate = useNavigate()
  let [contarCliques, setContarCliques] = useState(0);
  

  return (
    <div className="container">
      <h1 >Home</h1>
      <button className="btn-clicar" onClick={() => {
        navigate('/auth/login');
        setContarCliques(contarCliques + 1);
      }}>
        Ir para Login
      </button>
    </div>
  )
}

export default Home
