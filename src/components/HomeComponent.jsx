import React from "react"
import "./Components.css"
import {Link} from "react-router-dom";




class HomeComponent extends React.Component{

    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                    <div className='content'>
                        <h1 id='h1'>Quiz App</h1>
                        <Link to='play'><button id="btn" className="btncls">Play</button></Link>
      
            </div></div>
            </center>
  
            </React.Fragment>
        )
    }

}
export default HomeComponent;