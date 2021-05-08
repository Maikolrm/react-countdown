import React, { useState, useEffect } from 'react'
import './App.css'
import hills from './img/pattern-hills.svg'
import { handleCountDown } from './countDown'

function App() {
  const [count, setCount] = useState({})
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await handleCountDown('2021-08-05 24:00')
      setCount(response)
    }, 1000)
    return () => clearTimeout(interval)
  }, [])
  return(
    <>
      <h1 className="root__heading">We're launching soon</h1>
      <div className="countdown">
        <div className="countdown__el">
          <div className="countdown__counter">
            <div className="counter__hover">
              <span className="hover__circle hover__circle--left"></span>
              <span className="hover__circle hover__circle--right"></span>
            </div>
            <h3>{count.days ? count.days : '00' }</h3>
          </div>
          <h2 className="el__hading">Days</h2>
        </div>
        <div className="countdown__el">
          <div className="countdown__counter">
            <div className="counter__hover">
              <span className="hover__circle hover__circle--left"></span>
              <span className="hover__circle hover__circle--right"></span>
            </div>
            <h3>{count.hours ? count.hours : '00' }</h3>
          </div>
          <h2 className="el__hading">Hours</h2>
        </div>
        <div className="countdown__el">
          <div className="countdown__counter">
            <div className="counter__hover">
              <span className="hover__circle hover__circle--left"></span>
              <span className="hover__circle hover__circle--right"></span>
            </div>
            <h3>{count.minutes ? count.minutes : '00' }</h3>
          </div>
          <h2 className="el__hading">Minutes</h2>
        </div>
        <div className="countdown__el">
          <div className="countdown__counter">
            <div className="counter__hover">
              <span className="hover__circle hover__circle--left"></span>
              <span className="hover__circle hover__circle--right"></span>
            </div>
            <h3>{count.seconds ? count.seconds : '00' }</h3>
          </div>
          <h2 className="el__hading">Seconds</h2>
        </div>
      </div>
      <div className="hills">
        <div className="hills__social-media">
          <a href="https://github.com/Maikolrm" target="_blank" className="social-media__link"><i className="fab fa-github"></i></a>
        </div>
        <img src={hills} alt="Countdown hills" />
      </div>
    </>
  )
}

export default App
