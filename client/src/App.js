import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Saved from './pages/Saved/saved';
import Search from './pages/Search/search';

function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <Saved />} />
        <Route path="/saved" exact component={() => <Saved />} />
        <Route path="/search" exact component={() => <Search />} />
      </Switch>
    </BrowserRouter >

  );
}

export default App;
