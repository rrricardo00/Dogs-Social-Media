import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from './Forms/Button'
import Input from './Forms/Input'

const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const handleSubmit = (target) => {
    target.preventDefault()
    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username.value, password: password.value})

      })
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(res => console.log(res))
    }
  }

  return (
    <section>

      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" name="username" type="text" {...username} />
        <Input label="Senha" name="password" type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>

    </section>
  )
}

export default LoginForm