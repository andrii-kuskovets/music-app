import Song from "./Song";

const Library = ({songsList, activeSongIndex, setActiveSongIndex}) => {
  return (
    <div className='library'>
      <h2 className='library__title'>Library</h2>
      <ul className='songs'>
        {
          songsList.map((song, index)=>(
            <Song
              key={song.id}
              song={song}
              activeSongIndex={activeSongIndex}
              setActiveSongIndex={setActiveSongIndex}
              index={index}
            />
          ))
        }
      </ul>
      </div>)
}

export default Library;