import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark bg-light border-bottom">
          <a className="navbar-brand text-white font-weight-bold">
            <div className="border rounded pr-2 pl-2">
              Help Me!!!
            </div>
          </a>
        </nav>
        <div className="d-flex flex-grow-1">
          <div className="bg-primary d-flex flex-column flex-grow-1 align-items-center pt-2">
            <h3 className="font-weight-bold"> List: </h3>
            <p className="font-weight-bold">Cooked Meat should only be out for 2 hours.</p>
            <p className="font-weight-bold">Drink water regularly, 64oz a day.</p>
            <p className="font-weight-bold">Never lend anyone money.</p>
            <p className="font-weight-bold">Stay off public WIFI.</p>
            <p className="font-weight-bold">Get taxes done early!</p>
            <p className="font-weight-bold">Ask guy with one leg to find shortest route.</p>
            <p className="font-weight-bold">Don't underestimate the power of rednecks.</p>
            <p className="font-weight-bold">Be cautious of what you say.</p>
            <p className="font-weight-bold">Be mindfull of others.</p>
          </div>
          <div className="d-flex flex-column bg-dark flex-grow-1 align-items-center pt-2">
            <h3 className="font-weight-bold text-primary">Links:</h3>
            <a className="text-white font-weight-bold pb-3" href="https://www.getbellhops.com/blog/move-out-parents-house/">How to Move Out of Your Parents’ House (With a Checklist)</a>
            <a className="text-white font-weight-bold" href="https://www.moving.com/tips/how-to-move-out-of-your-parents-house-in-13-easy-steps/">How to Move Out of Your Parents’ House in 13 Easy Steps</a>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
