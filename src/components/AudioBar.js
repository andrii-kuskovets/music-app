import {fromSecsToMinutesAndSeconds} from "../utils";

const AudioBar =({currentTime, duration, setClickedTime})=> {
  return (
    <div className='audio-player__bar'>
      <span className='subtitle'>{fromSecsToMinutesAndSeconds(Math.floor(currentTime))}</span>
      <input
        type="range"
        value={currentTime}
        step="1"
        min="0"
        max={duration}
        className="progress"
        onChange={(e)=>setClickedTime(e.target.value)}
      />
      <span className='subtitle'>{fromSecsToMinutesAndSeconds(Math.floor(duration))}</span>
    </div>
  )
}

export default AudioBar;