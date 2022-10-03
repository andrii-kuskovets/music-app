const Song = ({song, activeSongIndex, setActiveSongIndex, index})=> {
  const handleSelectSong = ()=> {
    setActiveSongIndex(index);
  }
  return (
    <li className={activeSongIndex === index ? 'song active': 'song'} onClick={handleSelectSong}>
      <img className='song__img' src={song.cover} alt={'cover for ' + song.name}/>
      <div className="song__description">
        <h3 className='song__name'>{song.name}</h3>
        <h4 className='song__artist'>{song.artist}</h4>
      </div>
    </li>
  )
}

export default Song;