import { useState } from "react";

function Nav(props){

    const [itext,setItext]=useState("")
    
    return(
       <div className="navibar">
            <div className="searchbar">
                <input className="inputbox" placeholder='Enter city name' value={itext}
                onChange={(e)=>{setItext(e.target.value)
                 } }
                ></input>
                <button className="searchbutton" onClick={() => props.getcity(itext)} >search</button>

            </div>

        </div>
    )
    

}
export default Nav;
