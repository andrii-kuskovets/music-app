import {useState, useEffect} from "react";

function useAudioPlayer(audio) {
  const [duration, setDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(null);
  const [volume, setVolume] = useState(1);
  const [songEnd, setSongEnd] = useState(false);
  
  const setAudioTime = () => {
    setCurrentTime(audio.currentTime)
  };
  
  const setAudioData = () => {
    setDuration(audio.duration);
    setCurrentTime(audio.currentTime);
    setVolume(audio.volume);
  };
  
  useEffect(() => {
    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
    }
  }, []);
  
  useEffect(() => {
    audio.addEventListener("timeupdate", setAudioTime);
    if(audio.currentTime === audio.duration) {
      setSongEnd(true);
    }
  }, [audio.currentTime]);
  
  useEffect(() => {
    if (clickedTime && clickedTime !== currentTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }
  }, [clickedTime]);
  
  const handleSetValue = (value)=> {
    setVolume(value);
    audio.volume = value;
  };
  
  const handlePlaying = (play) => {
    audio.addEventListener("timeupdate", setAudioTime);
    play ? audio.play() : audio.pause();
    setPlaying(play)
  };
  
  useEffect(() => {
    if (volume !== 1) audio.volume = volume
    setDuration(audio.duration);
    audio.play().then(() => {
      setPlaying(true)
    })
      .catch(error => {
        setPlaying(false)
        console.info(error, 'User has not interacted with document yet.');
      });
  }, [audio]);
  
  return {
    currentTime,
    duration,
    playing,
    setPlaying,
    setClickedTime,
    handlePlaying,
    volume,
    handleSetValue,
    songEnd,
    setSongEnd
  }
}

export default useAudioPlayer;