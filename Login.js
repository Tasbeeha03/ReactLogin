import React, {useState} from 'react';
import "./Login.css"
function Login(){
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const [allEntry, setAllEntry]  = useState([]);
    const submitForm =(e)=>{
       e.preventDefault();
 const newEntry = {email:email, password:password};
 setAllEntry([...allEntry, newEntry]);
 console.log(allEntry);
    }
    return(
        <>
        <div className="modal fade" id="myModal" role="dialog">
      <div className="modal-dialog" >
		<div className="modal-content">
			<div className="modal-header">
				<h4><span className="glyphicon glyphicon-lock"></span>LOGIN HERE!</h4>
			</div>
<div className="modal-body">
        <form onSubmit={submitForm} role="form">
        <h1>Login</h1>
        <div className="form-group">
        <input style={{
            color:"black"
        }}
        type="email"  id="email" placeholder="Enter Email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        >
            </input></div><br></br><br></br>
            <div className="form-group">
        <input style={{
            color:"black"
        }}
        type="password"  id="password" placeholder="Enter Password"
        className="form-control"
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        ></input></div><br></br><br></br>
        <button type="submit" className="btn btn-block" >Login</button>
        </form>
        </div>
        <div>
        {
            allEntry.map((curElem) =>{
                return(
                    <div>
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                    </div>
                )
            }
            )
        }
    </div>
    </div>
    </div>
    </div>
        </>
    );
}
export default Login;