import Button from '@material-ui/core/Button';
import * as React from 'react';
import './App.css';
import { Geneset } from './components/Geneset/Geneset';
// import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Geneset />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}

export default App;
