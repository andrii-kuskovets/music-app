import {useEffect, useState} from "react";
import usePlayer from "../usePlayer";
import AudioControls from "./AudioControls";
import AudioBar from "./AudioBar";
import AudioVolume from "./AudioVolume";
import Loading from "./Loading";
import {randomIntFromInterval} from "../utils";

const AudioPlayer = ({activeSongIndex, songsList, setActiveSongIndex}) => {
  const {cover, name, artist} = songsList[activeSongIndex];
  const [audio, setAudio] = useState(new Audio(songsList[activeSongIndex].audio));
  const [randomSong, setRandomSong] = useState(false);
  
  const {
    currentTime,
    duration,
    playing,
    setClickedTime,
    volume,
    songEnd,
    setSongEnd,
    handleSetValue,
    handlePlaying
  } = usePlayer(audio);
  
  useEffect(() => {
    audio.pause();
    setAudio(new Audio(songsList[activeSongIndex].audio));
  }, [activeSongIndex]);
  
  const getRandomIndex = (length) => {
    const randomIndex = randomIntFromInterval(length);
    return randomIndex === activeSongIndex ? getRandomIndex(length) : randomIndex
  };
  
  const setNextSong = (nextSong, isRandomSong) => {
    const songsListLength = songsList.length;
    if (isRandomSong) {
      setActiveSongIndex(getRandomIndex(songsListLength))
    } else if (nextSong) {
      const nextSongIndex = activeSongIndex + 1 > songsListLength - 1 ? 0 : activeSongIndex + 1;
      setActiveSongIndex(nextSongIndex);
    } else {
      const prevSongIndex = activeSongIndex - 1 < 0 ? songsListLength - 1 : activeSongIndex - 1;
      setActiveSongIndex(prevSongIndex)
    }
    setSongEnd(false);
  };
  
  useEffect(() => {
    if (songEnd) {
      setNextSong(true, randomSong);
    }
  }, [songEnd, randomSong]);
  
  return (
    <div className='audio-player'>
      <img className='audio-player__img' src={cover} alt={name}/>
      <div className="audio-player__img__description">
        <h4 className='audio-player__artist'>{artist}</h4>
        <h1 className='audio-player__name'>{name}</h1>
      </div>
      {audio.duration || duration ? <>
        <AudioBar
          currentTime={currentTime}
          duration={duration ? duration : audio.duration}
          setClickedTime={setClickedTime}
        />
        <div className='audio-player__controls'>
          <AudioControls
            playing={playing}
            handlePlaying={handlePlaying}
            handleSetSong={setNextSong}
            randomSong={randomSong}
            setRandomSong={setRandomSong}
          />
          <AudioVolume
            volume={volume}
            handleSetValue={handleSetValue}
          />
        </div>
      </> : <Loading/>}
    </div>
  )
}

export default AudioPlayer;