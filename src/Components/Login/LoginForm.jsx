import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {

  const [userName, setUserName] = React.useState('')
  const [userPassword, setUserPassword] = React.useState('')

  const handleSubmit = (target) => {
      target.preventDefault()
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: userName, password: userPassword})

      })
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(res => console.log(res))
  }

  return (
    <section>

      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={({target}) => setUserName(target.value)}/>
        <input type="password" value={userPassword} onChange={({target}) => setUserPassword(target.value)}/>
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>

    </section>
  )
}

export default LoginForm