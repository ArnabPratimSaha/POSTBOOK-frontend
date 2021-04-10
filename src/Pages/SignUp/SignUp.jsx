import React,{useState} from "react"
import axios from "axios";
import "./SignUp.css"

const SignUp=(()=>{

    const [isUsernameValid, setisUsernameValid]=useState(true);
    const [isEmailvalid, setisEmailvalid]=useState(true);
    const [isPassword1, setisPassword1]=useState(true);
    const [isPassword2, setisPassword2]=useState(true);

    const[isChecked, setisChecked]=useState(false);

    const [isAllCredentialsValid, setisAllCredentialsValid]=useState(true);

    const onFormSubmitHandler=async(event)=>{
        event.preventDefault();

        let allConditionSatisfied=true;

        if(event.target.username.value.trim().length<5){
            setisUsernameValid(false);
            setisAllCredentialsValid(false);
            allConditionSatisfied=false;
        }

        if(!event.target.email.value.trim()){
            setisEmailvalid(false);
            setisAllCredentialsValid(false);
            allConditionSatisfied=false;
        }

        if(event.target.password1.value.trim().length<5){
            setisPassword1(false);
            setisAllCredentialsValid(false);
            allConditionSatisfied=false;
            }
        if(!event.target.password2.value.trim()){
            setisPassword2(false);
            setisAllCredentialsValid(false);
            allConditionSatisfied=false;
            }
            else if(event.target.password1.value!==event.target.password2.value)
            {
                setisPassword2(false);
                setisAllCredentialsValid(false); 
                allConditionSatisfied=false;
            }

            if(allConditionSatisfied)
            {
                try {
                    const response= await axios.post(process.env.REACT_APP_BACKEND_API_URL+"/signup",{
                        username:event.target.username.value,
                        email:event.target.email.value,
                        password:event.target.password1.value,
                        
                    })

                    if(response.data.credentials==="valid"){
                        setisAllCredentialsValid(true);
                    }
                    else{
                        setisAllCredentialsValid(false);
                    }
                    
                } catch (error) {
                    console.log(error);
                }
                
            }
        
    }

    const onCheckHandler=()=>{
        setisChecked(!isChecked);
    }

    return(
        <div>
            <h1>SignUp Here</h1>
            <form onSubmit={onFormSubmitHandler}>
                <input type="text" name="username" placeholder="Enter your UserName"/>
                <br/>
                {!isUsernameValid && <p>UserName Not valid</p>}
                <input type="email" name="email" placeholder="Enter your Email"/>
                <br/>
                {!isEmailvalid && <p>email Not valid</p>}
                <input type={isChecked ? "text":"password"} name="password1" placeholder="Enter your Password"/>
                <br/>
                {!isPassword1 && <p>password Not valid</p>}
                <input type={isChecked ? "text":"password"} name="password2" placeholder="Confirm your Password"/>
                <br/>
                {!isPassword2 && <p>password Not valid</p>}
                <input className="check-box" onClick={onCheckHandler} type="checkbox"/>
                <br/>
                <button type="submit">SignUp</button>
                <br/>
                {!isAllCredentialsValid && <p>Credentials Invalid</p>}
                <span>Already registered <a href="/login">login</a></span>
            </form>
        </div>
    );

})

export default SignUp;