import logo from './logo.svg';
import './App.css';
import AwesomeComponent from '../test_sub_repo/AwesomeComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AwesomeComponent text='А это второй репозиторий'/>
      </header>
    </div>
  );
}

export default App;
