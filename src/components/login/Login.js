import { useState,useContext} from "react";
import { Link,useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { MyContext } from "../../context";
import axios from "../../Axios"

export function Login () {
	const[email,setEmail] =useState("");
    const [password,setPassword]=useState("");
	const [error] = useState("");
	const navigate=useNavigate();
	const{ setUser} = useContext(MyContext);

	function handleSubmit(e) {
		e.preventDefault();
		if(!email || !password){
		  return alert("Please fill out fields");
		}
			axios.post("/login",{email,password})
			.then(({data})=>{
			  localStorage.setItem("token", data.token);
			  setUser(data);
			  navigate("/dresses");
			})
			.catch((error)=>console.warn(error));
		
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							name="email"
                            placeholder="Enter email"  
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
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

