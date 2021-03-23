import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Saved from './pages/Saved/saved';
import Search from './pages/Search/search';
import Header from './components/Header/header';
import TitleCard from './components/TitleCard/titleCard';

function App() {

  return (

    <div className="container">
      <BrowserRouter>
        <Header />
        <TitleCard />
        <Switch>
          <Route path="/" exact component={() => <Saved />} />
          <Route path="/saved" exact component={() => <Saved />} />
          <Route path="/search" exact component={() => <Search />} />
        </Switch>
      </BrowserRouter >
    </ div>

  );
}

export default App;
