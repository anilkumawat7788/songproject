import React,{useState} from 'react';
import AddSongModal from '../../components/modals/AddSongModal';
import "./topbar.css";
const TopBar = () => {
    const [AddShowModal,setAddShowModal] =useState(false);
  return (
    <>
    <div className="topbar_layout">
        <div className="logo">
            <h6>Logo</h6>
          
        </div>
        <div className="add_song_layout">
          <button onClick={() => setAddShowModal(true)}>Add Song</button>
        </div>
    {AddShowModal ? <AddSongModal show={AddShowModal} onHide={() => setAddShowModal(false)} /> : ""}
    </div>
    </>
  )
}

export default TopBar;