import { useState, useEffect } from "react";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";



const IshopDashboard = () =>{

    const[cookies, setCookie, removeCookie]= useCookies();
    const[userid, setUserId] = useState();
    let navigate = useNavigate();

    useEffect(()=>{
       if(cookies["userid"]==undefined){
         navigate("/login");
       } else{
         setUserId(cookies["userid"]);
       }
    },[]);

 
    function handleSingout(){
        removeCookie("userid");
        navigate("/login");
    }
    return(
        <>
         <h2>User Dashboard - {userid} - <button onClick={handleSingout} className="btn btn-link">Signout</button></h2>

        </>
    )
}
export default IshopDashboard;