import React , { useContext } from 'react'
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import { SettingsContext } from '../context/SettingsContext'
const CountdownAnimation = ({ timer, animate, children}) => {

  const { stopAimate, playSound } = useContext(SettingsContext)

    return (
      <CountdownCircleTimer
       // key={key}
        isPlaying={animate}
        duration={timer * 60}
        colors={[
          ['#FE6F6B', 0.33],
          ['#FE6F6B', 0.33],
          ['#FE6F6B', 0.33],
        ]}
        strokeWidth={6}
        size={220}
        trailColor="#151932"
        onComplete={ () => {
          stopAimate();
          playSound('https://freesound.org/data/previews/337/337049_3232293-lq.mp3')

          
        }}
      >
        {children}
      </CountdownCircleTimer>
    )
}

export default CountdownAnimation