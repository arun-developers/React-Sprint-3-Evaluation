import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";
// i



function Login() {
  // const [formState, setFormState] = useState({
  //   email: "",
  //   password: ""
  // });
  const [formState,setFormState]=useState({email:"",password:""
})
  // const auth = useContext(AuthContext);
  const navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/");
      })
      .catch((err) => {});
  }

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div>
          <label>
            Email
            <input
            value={formState.email}
            onChange={handleChange}
             data-testid="email-input"  type="email" placeholder="email" />
          </label>

        </div>
        <div>
          <label>
            Password
            <input
            value={formState.password}
            onChange={handleChange}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;