import React from "react"

const LogIn=(()=>{

    return(
        <div>
            <h1>LogIn Here</h1>
            <form>
                <input type="email" name="email" placeholder="Enter your Email"/>
                <br/>
                <input type="password" name="password1" placeholder="Enter your Password"/>
                <br/>
                <input type="checkbox"/>
                <br/>
                <button type="submit">LogIn</button>
                <br/>
                <span>Not registered yet ?<a href="/signup">SignUp</a></span>
            </form>
        </div>
    );

})

export default LogIn;