import React from "react"
import "./Components.css";
import questions from "./questions.json"
import {Link} from "react-router-dom";
class ResultComponent extends React.Component{

    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                <i className="fa fa-check-circle" aria-hidden="true"></i>
                        <h1 className='result'>Result</h1>
                        
                    <div className='result-content'>
                    {this.props.correct*10<60 ?
                        <h1 id="h2">You need more practice !</h1>
                            :
                        <h1>Well Done</h1>
                    }
                       
                        <h1 id="score">Your Score: {this.props.correct*10}</h1>
                        <div id="stats">
                        <div id="inner1">
                        <p>Total number of questions </p>
                        <p>Number of attempted questions</p>
                        <p>Number of Correct Answers</p>
                        <p>Number of Wrong Answers</p>
                        </div>
                        <div id="inner2">
                        <p>{questions.length}</p>
                        <p>{this.props.attempt}</p>
                        <p>{this.props.correct}</p>
                        <p>{this.props.wrong}</p>
                        </div>
                        </div>
                    </div>
                    <div className="button-controls">
                    <Link to='/Play'><button id="play">Play Again</button></Link>
                    <Link to='/'><button id="home">Back to Home</button></Link>
                       
                    </div>
            </div>
            </center>
            </React.Fragment>
        )
    }

}
export default ResultComponent;