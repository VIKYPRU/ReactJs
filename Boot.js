import React from "react";
import './Boot.css'

export default function Boot(){
    return(
        <div className="bg-success container-fluid">
            <div className="row">
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                
            <h1 className=''>Pokeyman</h1>
            <h3>The cartoon</h3>
            </div>
           
            <div className="bk col-6">
            <img src="https://www.pngplay.com/wp-content/uploads/12/Zygarde-Pokemon-Transparent-Images.png" height={500} width={400} alt=""/>
            
            </div>

            </div>

        </div>
    )
}
function Pokeman(){
    return(
        <div className="d-flex justify-content space-between">
            <img src="https://www.pngplay.com/wp-content/uploads/12/Zygarde-Pokemon-Transparent-Images.png" height={500} width={400} alt=""/>
            <img src="https://www.pngplay.com/wp-content/uploads/12/Zygarde-Pokemon-Transparent-Images.png" height={500} width={400} alt=""/>
            <img src="https://www.pngplay.com/wp-content/uploads/12/Zygarde-Pokemon-Transparent-Images.png" height={500} width={400} alt=""/>

        </div>
    )
}

export {Pokeman}