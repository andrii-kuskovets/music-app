import Library from "./Library";
import AudioPlayer from "./AudioPlayer";
import {useState} from "react";
import {chillHop} from "../data";

const MusicApp = () => {
  const [songsList] = useState([...chillHop()]);
  const [activeSongIndex, setActiveSongIndex] = useState(0);
  
  return <div className='app-wrapper'>
    <Library
      songsList={songsList}
      activeSongIndex={activeSongIndex}
      setActiveSongIndex={setActiveSongIndex}
    />
    <AudioPlayer
      activeSongIndex={activeSongIndex}
      songsList={songsList}
      setActiveSongIndex={setActiveSongIndex}
    />
  </div>
}
export default MusicApp;