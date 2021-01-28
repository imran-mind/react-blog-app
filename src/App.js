import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import PostList from './pages/PostList';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Button label="Save"/>
        <PostList/>
      {/* </header> */}
    </div>
  );
}

export default App;
