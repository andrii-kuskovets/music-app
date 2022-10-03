const AudioVolume = ({volume, handleSetValue})=> {
  return (
    <div className='audio-player__volume'>
      <span className='subtitle'>0</span>
      <input
        type="range"
        value={volume}
        step="0.1"
        min="0"
        max={1}
        className="progress"
        onChange={(e)=> handleSetValue(e.target.value)}
      />
      <span className='subtitle'>{volume === '0' ? 'Mute' : volume*100}</span>
    </div>
  )
}

export default AudioVolume;