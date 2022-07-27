import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
// import { MyContext } from "../../context";
import axios from "../../Axios"


export function Signup() {
	const navigate=useNavigate();
	const[email,setEmail] =useState("");
    const[password,setPassword] = useState("");
    // const{ setUser} = useContext(MyContext);
	const [error, setError] = useState("");
	const [msg, setMsg] = useState("");

	

	async function handleSubmit(e){
		e.preventDefault();
		if(!email || !password){
		  return alert("Please fill out fields");
		}
	await axios.post("/users",{email,password})
		.then(({data})=>{
		//   setUser(data)
		//   localStorage.setItem("token",data.token);
		setTimeout(()=>{navigate("/login")},2500)
		  setMsg("successfull signup")
         
		})
		.catch((error)=> {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError("email-id already exit");
			}
		});
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="email"
							placeholder="Enter Email"
							name="email"
							onChange={(e) =>setEmail(e.target.value)}
							value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={(e)=>setPassword(e.target.value)}
							value={password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						{msg && <div className={styles.success_msg}>{msg}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

