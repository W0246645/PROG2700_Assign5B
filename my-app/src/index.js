import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';

//No longer need class for square. no state and just rendering
// class Square extends React.Component {
//   render() {
//     return (
//       <button 
//         className="square" 
//         onClick={() => this.setState({value: 'X'})}
//       >
//         {this.state.value}
//       </button>
//     );
//   }
// }





// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
