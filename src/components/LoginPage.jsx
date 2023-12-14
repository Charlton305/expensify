import {startLogin} from "../actions/auth.js"

const LoginPage = () => {
  return (
    <div>
      <button onClick={startLogin}>Login</button>
    </div>
  )
}

export default LoginPage