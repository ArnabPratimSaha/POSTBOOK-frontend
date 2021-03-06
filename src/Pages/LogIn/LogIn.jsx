import axios from "axios";
import React ,{useState}from "react";
import Cookies from "js-cookie";

const LogIn=(()=>{


    const [isValidEmail, setisValidEmail]=useState(true);
    const [isValidPassword, setisValidPassword]=useState(true);

    const[isAllCredentialsValid, setisAllCredentialsValid]=useState(true);

    const [isCheckboxChecked, setisCheckboxChecked]=useState(false);

    const onLogInSubmitHandler=async (event)=>{
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;

        let allInformationValid=true;

        if(!email.trim()){
            setisValidEmail(false);
            allInformationValid=false;
        }

        if(!password.trim()){
            setisValidPassword(false);
            allInformationValid=false;
        }

        if(allInformationValid)
        {
            
            try {
                const response=await axios.post(process.env.REACT_APP_BACKEND_API_URL+"/login",{
                    email:email,
                    password:password
                })
                if(response.data.credentials==="valid")
                {
                    setisAllCredentialsValid(true);
                    Cookies.set('x-auth-token', response.data.token);
                    window.location="/home";
                }
                else
                {
                    setisAllCredentialsValid(false); 
                }
            } catch (error) {
                setisAllCredentialsValid(false);
                console.log({"error":error});
            }
        }
    }

    const checkboxHandler=()=>{
        setisCheckboxChecked(!isCheckboxChecked);
    }

    return(
        <div>
            <h1>LogIn Here</h1>
            <form onSubmit={onLogInSubmitHandler}>
                <input type="email" name="email" placeholder="Enter your Email"/>
                <br/>
                {!isValidEmail && <p>Invalid Email Entered</p>}
                <input type={isCheckboxChecked? "text":"password"} name="password" placeholder="Enter your Password"/>
                <br/>
                {!isValidPassword && <p>Invalid Password Entered</p>}
                <input onClick={checkboxHandler} type="checkbox"/>
                <br/>
                {!isAllCredentialsValid && <p>Credentials Invalid</p>}
                <button type="submit">LogIn</button>
                <br/>
                <span>Not registered yet ?<a href="/signup">SignUp</a></span>
            </form>
        </div>
    );

})

export default LogIn;