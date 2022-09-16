import { useState } from "react"
import { login } from "../../api/auth"

const Login = () => {

  const [email, setEmail] = useState<string>("")
  const [passwordInput, setPassword] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>("")

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    setLoading(true)
    setMessage("Sending info")
    setTimeout(()=>{
      login({ username: email, password: passwordInput })
      .then(response => {
        console.log(response.data.user.email)
        setLoading(false)
        setMessage("Message Recvied")
      })
      .catch(error=>{
        console.log(error.response)
        setLoading(false)
        setMessage(error.response.data.detail)
      })
    }, 5000)

  }

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            className="border border-red-300"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            className="border border-red-300"
            value={passwordInput}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-400 px-2 py-1 rounded"
          onClick={onSubmit}
        >Login</button>
      </form>

      <div>
        {message}
      </div>
    </div>
  )
}

export default Login