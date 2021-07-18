import React, { useContext, useEffect } from "react";
import Button from "./component/Button";
import CountdownAnimation from "./component/CountdownAnimation";
import SetPomodoro from "./component/SetPomodoro";
import { SettingContext } from "./context/SettingsContext";

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute
  } = useContext(SettingContext);

  useEffect(() => {updateExecute(executing)},[executing,startAnimate])


  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Be production the right way.</small>
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={executing.active === "work" && "active-label"}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <Button
                title="Short Break"
                activeClass={executing.active === "short" && "active-label"}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <Button
                title="Long Break "
                activeClass={executing.active === "long" && "active-label"}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingBtn} />
          <div className="time-container">
            <div className="time-wrapper">
              <CountdownAnimation
              key={pomodoro}
              timer={pomodoro}
              animate={startAnimate}

              >
                {children}
                </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <Button title="Start" activeClass={startAnimate ? 'active-label' : undefined} _callback={startTimer} />
            <Button title="Pause" activeClass={!startAnimate ? 'active-label' : undefined} _callback={pauseTimer} />

          </div>
        </>
      )}
    </div>
  );
}

export default App;
