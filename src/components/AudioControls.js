import {ReactComponent as Play} from "../assets/icons/play.svg";
import {ReactComponent as Pause} from "../assets/icons/pause.svg";
import {ReactComponent as Arrow} from "../assets/icons/arrow.svg";
import {ReactComponent as Random} from "../assets/icons/random.svg";

const AudioControls = ({playing, handlePlaying, handleSetSong, setRandomSong, randomSong}) => {
  return (
    <ul className='buttons-list'>
      <li className='buttons-list__item'>
        <button
          className={randomSong ? 'button active' : 'button'}
          onClick={() => setRandomSong(!randomSong)}
          title='random'
        >
          <Random/>
        </button>
      </li>
      <li className='buttons-list__item'>
        <button
          className='button previous'
          onClick={() => handleSetSong(false, randomSong)}
          title='previous track'
        >
          <Arrow/>
        </button>
      </li>
      <li className='buttons-list__item'>
        <button
          className='button play'
          onClick={() => playing ? handlePlaying(false) : handlePlaying(true)}
          title={playing ? 'pause' : 'play'}
        >
          {playing ? <Pause/> : <Play/>}
        </button>
      </li>
      <li className='buttons-list__item'>
        <button
          className='button'
          onClick={() => handleSetSong(true, randomSong)}
          title='next track'
        >
          <Arrow/>
        </button>
      </li>
    </ul>
  )
}

export default AudioControls;