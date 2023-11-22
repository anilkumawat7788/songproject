import React,{useState,useEffect} from 'react'
import MusicTable from './MusicTable';
import Sidebar from '../../components/Sidebar/Sidebar';
import TopBar from '../../components/Topbar/TopBar';
import song1 from "../../images/song1.mp3"
import song2 from "../../images/song2.mp3"
import  "./home.css"
import AudioControls from './AudioControls';
const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
 

  const data = [
    { title: 'Song 1',  source:"YouTube", uploadTime: '2023-01-01', file: 'song1.mp3', songUrl:song1 },
    { title: 'Song 2',  source:"YouTube", uploadTime: '2023-01-01', file: 'song2.mp3', songUrl:song2 },
    { title: 'Song 3',  source:"YouTube", uploadTime: '2023-01-01', file: 'song1.mp3', songUrl:song1 },
    { title: 'Song 4',  source:"YouTube", uploadTime: '2023-01-01', file: 'song3.mp3', songUrl:song2 },
    { title: 'Song 5',  source:"YouTube", uploadTime: '2023-01-01', file: 'song4.mp3' , songUrl:song1},
    { title: 'Song 6',  source:"YouTube", uploadTime: '2023-01-01', file: 'song5.mp3' , songUrl:song1},
    { title: 'Song 7',  source:"YouTube",  uploadTime: '2023-01-01', file: 'song7.mp3' , songUrl:song1},
    { title: 'Song 8',  source:"YouTube",  uploadTime: '2023-01-01', file: 'song8.mp3' , songUrl:song1},
    { title: 'Song 9',  source:"YouTube",  uploadTime: '2023-01-01', file: 'song9.mp3' , songUrl:song1},
    { title: 'Song 10', source:"YouTube",   uploadTime: '2023-01-01', file: 'song454.mp3', songUrl:song1 },
    { title: 'Song 10', source:"YouTube",   uploadTime: '2023-01-01', file: 'song454.mp3' , songUrl:song1},
    { title: 'Song 10', source:"YouTube",   uploadTime: '2023-01-01', file: 'song454.mp3' , songUrl:song1},
    { title: 'Song 10', source:"YouTube",   uploadTime: '2023-01-01', file: 'song454.mp3' , songUrl:song1},
    { title: 'Song 10', source:"YouTube",   uploadTime: '2023-01-01', file: 'song454.mp3' , songUrl:song1},
    { title: 'Song 10', source:"YouTube",   uploadTime: '2023-01-01', file: 'song454.mp3', songUrl:song1 },
    // Add more songs as needed
  ];


  const columns = [
    {
      Header: 'Song Name',
      accessor: 'title',
      id: 'songInfo',
    },
    { Header: 'Source', accessor: 'source' },
    { Header: 'Added On', accessor: 'uploadTime' },
    { Header: 'Song File', accessor: 'file' },
  ];


  const handlePlay = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const handleStop = () => {
    setCurrentSong(null);
    setIsPlaying(false);
  };

  const handleNext = () => {
    // Implement logic to play the next song
  };

  const handlePrev = () => {
    // Implement logic to play the previous song
  };
  const handleDelete = (song) => {
    // Add logic to handle delete action
    console.log('Delete song:', song.title);
  };
  return (
    <>
    {/* Home */}
 
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-11 col-lg-11 col-11 mx-auto">
          <TopBar />
          <div className="row">
            <div className="col-2">
              <div className="sidebar_layout">
              <Sidebar />
              </div>
            </div>
            <div className="col-10">
              <div className="table_layout">
               <MusicTable  data={data} columns={columns} onPlay={handlePlay} onDelete={handleDelete}/>
              </div>
             <AudioControls
                  isPlaying={isPlaying}
                  currentSong={currentSong}
                  onPlayPause={() => setIsPlaying(!isPlaying)}
                  onStop={handleStop}
                  onNext={handleNext}
                  onPrev={handlePrev}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;