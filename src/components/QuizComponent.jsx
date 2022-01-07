import React from "react"
import "./Components.css"
import questions from "./questions.json"
import {Link} from "react-router-dom";

class QuizComponent extends React.Component{


        constructor(props) {
            super(props)
            this.state = { 
              index_value: 0,
              datas:questions,
              attempt: 0
            
            };
          }
          next = () => {
            if(this.state.index_value<(questions.length-1)){
              this.setState({index_value: this.state.index_value + 1});
              // setTimeout(this.hide, 1000)
            }
            else{
              alert("Quiz Completed Quit Now")
            }
          };
        
          prev = () => {
            if(this.state.index_value === 0){
              alert("Please Start");
            }
            else if(this.state.index_value>0){
              this.setState({index_value:this.state.index_value-1 });
            }
          };

          verifyAns = (e)=>{
            let ans = e.target.value
            let btn = document.getElementById('ans')
            //console.log(this.state.datas[this.state.index_value].answer +" " +ans)
            this.props.isAttempt()
            if (this.state.datas[this.state.index_value].answer===ans)
            {   
                btn.innerText="Correct!"
                btn.style.backgroundColor='rgb(139, 241, 71)'
                btn.style.display="block"
                btn.style.border="2px solid rgb(139, 241, 71)"
                this.next()
                this.setState({
                    correct : this.state.correct+1
                })
                this.props.checkCorrect()
            }
            else
            {
                btn.innerText = "Wrong!!!"
                btn.style.backgroundColor = 'rgb(241, 71, 71)'
                // btn.style.animation = 'hideIt 10s forwards'
                btn.style.display = "block"
                btn.style.border="2px solid rgb(241, 71, 71)"
                this.next()
                this.setState({
                  wrong: (this.state.attempt - this.state.correct) + 1
                })
                this.props.checkWrong()
            }
        }
    
    render()
    {
        return(
            <React.Fragment>
                <center>
                <div className="container">
                    <div className='quiz-content'>
                        <h1 className='header'>Question</h1>
                        <p id='p01'>{this.state.index_value+1} of {questions.length}</p>
                        
                        <p id='p2'>{this.state.datas[this.state.index_value].question}</p>
                        
                        <div className="row">
                            <button id="ans"></button>
                        </div>
                        <div className='options'>
                        <button className='btncls' onClick={this.verifyAns} value={this.state.datas[this.state.index_value].optionA}>{this.state.datas[this.state.index_value].optionA}</button>
                        <button className='btncls' onClick={this.verifyAns} value={this.state.datas[this.state.index_value].optionB}>{this.state.datas[this.state.index_value].optionB}</button>
                        <button className='btncls' onClick={this.verifyAns} value={this.state.datas[this.state.index_value].optionC}>{this.state.datas[this.state.index_value].optionC}</button>
                        <button className='btncls' onClick={this.verifyAns} value={this.state.datas[this.state.index_value].optionD}>{this.state.datas[this.state.index_value].optionD}</button>
                        </div>          
                        <div className='button-items'>
                        <button id="prev" onClick={this.prev}>Previous</button>
                        <button id="nxt" onClick={this.next}>Next</button>
                        <Link to='/Result'><button id="qt">Quit</button></Link>
                        
                        </div>

            </div>
            </div>
            </center>
            </React.Fragment>
        )
    }

}
export default QuizComponent;