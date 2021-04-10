import React,{useEffect, useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";

const HomePage=(props)=>{
    const [username,changeUsername]=useState("");

    
    useEffect(()=>{
        const cookie=Cookies.get('x-auth-token');
        const fetchData = async () => {
            try {
                const res=await axios.get(process.env.REACT_APP_BACKEND_API_URL+'/home/?token='+cookie, {
                });
                if(res.status===200)
                {
                    changeUsername(res.data.username)
                }
            } catch (error) {
                window.location="/error";
            }
        };
        fetchData();
    },[])
    return(
        <div>
            <h1>POSTBOOK HOME</h1>
            {username && <h6>Welcome {username}</h6>}
        </div>
    )
}

export default HomePage;