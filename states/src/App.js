import "./App.css";
import StateTutorial from "./useState/stateEx";
import EffectTutorial from "./useEffect/effectEx";
import RefTutorial from "./useRef/refEx";
import LayoutTutorial from "./useLayout/layoutEx";
import ContextTutorial from "./useContext/contextEx";


function App() {
  return (
    <div className="App">
      <StateTutorial />
      <EffectTutorial />
      <RefTutorial />
      <LayoutTutorial />
      <ContextTutorial />
    </div>
  );
}

export default App;

















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
