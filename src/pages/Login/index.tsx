import { useEffect, useState } from "react"
import { login } from "../../api/auth"
import axios from "axios"

const Login = () => {

  const [email, setEmail] = useState("admin")
  const [password, setPassword] = useState("admin")
  const [loading, setLoading] = useState(false)

  const [quotations, setQuotaions] = useState([])

  useEffect(()=>{
    console.log("lets get quotations")
    setLoading(true)
    setTimeout(()=>{
      axios({
        method: "get",
        url: "http://localhost:8000/api/quotations/",
        headers: {
          "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwNTQ2OTk2LCJpYXQiOjE2NjQ2MjY5OTYsImp0aSI6ImM0NTY5NzQyN2RmNjQwNjg4MjIxMTVmYzUwYzRkYzcxIiwidXNlcl9pZCI6MX0.nLKRroX8SED56ci_1cOM4RPoUZMZFiPeaLLyapQ5wTY"
        }
      }).then((res)=>{
        console.log(res)
        setQuotaions(res.data.results)
      }).catch(error=>{
        console.log("error", error.response)
      }).finally(()=>{
        setLoading(false)
      })
    }, 2000)
  }, [])

  const onSubmit = () => {
    console.log("email", email)
    console.log("password", password)
    setLoading(true)
    setTimeout(()=>{
      // axios({
      //   method: "post",
      //   url: "http://localhost:8000/api/token/",
      //   data: {
      //     username: email,
      //     password: password
      //   }
      // })
      login({username: email, password: password})
      .then(responseNiBackend=>{
        console.log(responseNiBackend.data)
        localStorage.setItem("accessToken", responseNiBackend.data.access)
      })
      .catch(error=>{
        console.log("error", error.response)
      })
      .finally(()=>{
        setLoading(false)
      })
    }, 2000)
  }

  return (
    <div>
      <h1>Login Page</h1>
        <div>
          <label>Email</label>
          <input
            className="border"
            value={email}
            onChange={e=>{
              setEmail(e.target.value)
            }}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            className="border"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={loading ? "bg-green-400 px-2 py-1 rounded" : "bg-blue-400 px-2 py-1 rounded"}
          onClick={(e)=>{
            e.preventDefault()
            onSubmit()
          }}
          disabled={loading}
        >Login</button>

        <div>
          {loading ? "Waiting for response" : "Submit the form"} <br />
          {loading ? "Waiting for quotations" : "Received quotations"}
        </div>

        <div>here lies the quotations</div>
        <div>
          {JSON.stringify(quotations)}
        </div>
    </div>
  )
}

export default Login