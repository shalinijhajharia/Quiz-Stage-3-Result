import React from 'react';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import {Routes,Route} from "react-router-dom";
import './App.css';
import ResultComponent from './components/ResultComponent';

function Empty()
{
  return <h1>There's Nothing to display</h1>
}
class App extends React.Component{
  constructor(){
    super()
    this.state={
      correct: 0,
      attempt: 0, 
      wrong: 0
    }
  }
  checkCorrect = () => {
    this.setState({
      correct: this.state.correct+1
    })
  }

  isAttempt = () =>{
    this.setState({
      attempt: this.state.attempt+1
    })
  }

  checkWrong = () =>{
    this.setState({
      wrong: (this.state.attempt - this.state.correct)+1
    })
  }

  render (){
  return (
    
    <div className="App">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <Routes>
       <Route path="/" element={<HomeComponent/>}/>
       <Route path="play" element={<QuizComponent checkCorrect={this.checkCorrect} isAttempt={this.isAttempt} checkWrong={this.checkWrong} />}/>
       <Route path="result" element={<ResultComponent {...this.state}/>}/>
       <Route path="*" element={<Empty/>}/>
       
      </Routes> 
    </div>
  );
}
}

export default App;