import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { io } from "socket.io-client";
import React, { useState, useEffect } from 'react';
import Saved from './pages/Saved/saved';
import Search from './pages/Search/search';
import Header from './components/Header/header';
import TitleCard from './components/TitleCard/titleCard';
import Notification from './components/Notification/notification';

function App() {

  const [notification, setNotification] = useState();
  const [socket, setSocket] = useState();

  useEffect(() => {

    console.log("hello");
    const s = io();
    setSocket(s);
  }, []);


  useEffect(() => {
    if (socket) {
      socket.on('notify', (msg) => {

        setNotification(<Notification msg={msg} />);

        setTimeout(() => {
          setNotification();
        }, 10000);
      });
    }
  }, [socket]);





  return (

    <div className="container">
      <BrowserRouter>

        <Header />
        <TitleCard />
        <Switch>
          <Route path="/" exact component={() => <Saved socket={socket} />} />
          <Route path="/saved" exact component={() => <Saved socket={socket} />} />
          <Route path="/search" exact component={() => <Search socket={socket} />} />
        </Switch>
        {notification}
      </BrowserRouter >
    </ div>

  );
}

export default App;
