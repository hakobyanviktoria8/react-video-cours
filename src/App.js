import logo from './logo.svg';
import './App.css';
import Game1 from "./Components/Game1/Game1";
import Game2 from "./Components/Game2/Game2";

function App() {
    return (
        <div className="App">
            {/*<Game1 a={1} b={1} c={1}/>*/}
            {/*<Game1 a={1} b={10} c={1}/>*/}
            <Game1 />
            <hr/>
            <Game2/>
        </div>
    );
}

export default App;
