import React, { Component } from 'react';

import Title from './Components/Title/Title'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CountDown from './Components/CountDown/CountDown';
import Controller from './Components/Controler/Controller';
import Laps from './Components/Laps/Laps';

class App extends Component {

  constructor(props) {
    super()

    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0
      }, 
      laps: []
    }
  }

  getStart() {
    this.intervalId = setInterval(() => {
      let min = this.state.time.min
      let sec = this.state.time.sec
      let mili = this.state.time.mili

      if (mili >= 10) {
        sec = sec + 1
        mili = 0
      } 

      if (sec >= 60) {
        min = min + 1
        sec = 0
      }

      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1
        }
      })

    }, 100)
  }

  getPause() {
    clearInterval(this.intervalId)
  }

  getLap() {
    let time = {
      ...this.state.time
    }
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps]
    })
  }

  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mili: 0
      },
      laps: []
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <Title />
              <CountDown time={ this.state.time } />
              <Controller
                start = { this.getStart.bind(this) }
                pause = {this.getPause.bind(this)}
                laps = { this.getLap.bind(this) }
                reset = {this.getReset.bind(this)}
              />
              <Laps className="my-5" laps= {this.state.laps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
