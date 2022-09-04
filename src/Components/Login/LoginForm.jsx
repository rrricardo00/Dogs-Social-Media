import React from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST } from '../../api'
import useForm from '../../Hooks/useForm'
import Button from './Forms/Button'
import Input from './Forms/Input'

const LoginForm = () => {

  const username = useForm()
  const password = useForm()

  const handleSubmit = async(target) => {
    target.preventDefault()
    if (username.validate() && password.validate()) {

      const { url, options } = TOKEN_POST({ username: username.value, password: password.value })

      const response = await fetch(url, options)
      const json = await response.json()
      console.log(json)

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