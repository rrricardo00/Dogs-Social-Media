import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Forms/Button'
import Input from './Forms/Input'

const LoginForm = () => {

  const [username, setUserName] = React.useState('')
  const [password, setUserPassword] = React.useState('')

  const handleSubmit = (target) => {
      target.preventDefault()
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})

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
        <Input label="Usuário" name="username" type="text"/>
        <Input label="Senha" name="password"   type="password"/>
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>

    </section>
  )
}

export default LoginForm