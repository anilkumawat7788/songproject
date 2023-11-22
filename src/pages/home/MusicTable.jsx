import React,{useRef,useState,useEffect} from 'react';
import { useTable, usePagination } from 'react-table';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const MusicTable = ({ data, columns, onPlay, onDelete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(new Audio()); 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );


  useEffect(() => {
    // Set up an event listener to handle the end of audio playback
    const handleAudioEnd = () => {
      setIsPlaying(false);
      setCurrentSong(null);
    };

    // Attach the event listener to the audio element
    audioRef.current.addEventListener('ended', handleAudioEnd);

    // Clean up the event listener when the component unmounts
    return () => {
      audioRef.current.removeEventListener('ended', handleAudioEnd);
    };
  }, []);

  return (
    <div>
      <table {...getTableProps()} className="music-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
              <th>Actions</th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>
                    {cell.column.id === 'songInfo' ? (
                      <>
                        <div className='image_song_name'>
                        <img src={`https://dummyimage.com/30`} alt={row.original.title} />
                        {/* <img src={`path/to/${row.original.file}.jpg`} alt={row.original.title} /> */}
                          <strong>{row.original.title}</strong>
                        </div>
                       
                        
                      </>
                    ) : (
                      cell.render('Cell')
                    )}
                  </td>
                ))}
                <td>
                  <button className='icons_play' 
                  onClick={() => {
                    if (isPlaying && currentSong === row.original) {
                      audioRef.current.pause();
                      setIsPlaying(false);
                    } else {
                      audioRef.current.src = row.original.songUrl;
                      audioRef.current.play();
                      setCurrentSong(row.original);
                      setIsPlaying(true);
                      // Call the onPlay function if provided
                      if (onPlay) {
                        onPlay(row.original);
                      }
                    }
                  }}
                  >
                    <PlayCircleIcon />
                  </button>
                  <button className='icons_delete' onClick={() => onPlay(row.original)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{' '}
      </div>
    </div>
  );
};

export default MusicTable;

