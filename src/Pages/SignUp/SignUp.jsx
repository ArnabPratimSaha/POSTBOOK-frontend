import React,{useState} from "react"


const SignUp=(()=>{

    const [isUsernameValid, setisUsernameValid]=useState(true);
    const [isEmailvalid, setisEmailvalid]=useState(true);
    const [isPassword1, setisPassword1]=useState(true);
    const [isPassword2, setisPassword2]=useState(true);

    const onFormSubmitHandler=(event)=>{
        event.preventDefault();

        if(event.target.username.value.trim().length<5){
            setisUsernameValid(false);
        }

        if(!event.target.email.value.trim()){
            setisEmailvalid(false);
        }

        if(event.target.password1.value.trim().length<5){
            setisPassword1(false);
            }
        if(!event.target.password2.value.trim()){
            setisPassword2(false);
            }
            else if(event.target.password1.value!==event.target.password2.value)
            {
                setisPassword2(false); 
            }
        
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
                <input type="password" name="password1" placeholder="Enter your Password"/>
                <br/>
                {!isPassword1 && <p>password Not valid</p>}
                <input type="password" name="password2" placeholder="Confirm your Password"/>
                <br/>
                {!isPassword2 && <p>password Not valid</p>}
                <input type="checkbox"/>
                <br/>
                <button type="submit">SignUp</button>
                <br/>
                <span>Already registered <a href="/login">login</a></span>
            </form>
        </div>
    );

})

export default SignUp;