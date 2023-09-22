import React from 'react';
import { Feedback } from "components/Feedback/Feedback";

export class App extends React.Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
  render() {
    return (
      <div >
        <Feedback />
     
      </div>
    );
  };
}

export default App;