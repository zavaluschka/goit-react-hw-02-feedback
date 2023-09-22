import { Component } from "react";
import  css from './Feedback.module.css'
export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    handleIncrement = () => {
       this.setState(prevState => {return {good: prevState.good +1}}) 
    }
    render() { return(
        <div>
            <h1>Please leave feedback</h1>
            <ul className={css.button}>
                {/* <li> <button type ="button" name ="good" onClick= {()=>{this.handleIncrement}}>Good</button></li> */}
                <li> <button>Neutral</button></li>
                <li> <button>Bad</button></li>
            </ul>
            <h2>Statistics</h2>
            <ul>
                <li>{this.state.good}</li>
                <li>{this.state.neutral}</li>
                <li>{this.state.bad}</li>
            </ul>

        </div>)
        
    }
}