import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import "./song.css";
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import { useForm } from 'react-hook-form';
import ClearIcon from '@mui/icons-material/Clear';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios"
const AddSongModal = (props) => {
  const {
    register: timesheetRegister,
    handleSubmit: songHandleSubmit,
    setError: timesheetSetError,
    reset: reset,
    formState: { errors: timesheetErrors },
  } = useForm();

  const [songData, setSongData] = useState({
    songName: "",
    songLink: "",
    songSource: "",
    image:null
  });

  const addSongHandle = async (e) => {
    // Your logic for adding a new song
    const updatedsongData = {
    songTitle:songData.songName,
    songLink:songData.songLink,
    songSource:songData.songSource,
    file:songData.image
    }
    console.log("song data",updatedsongData )
    try {
      props.onHide();
      const res =  axios.post("api", updatedsongData)
      if(res.data.status ==="sucess"){

      }
    } catch (error) {
      
    }
  
  };

  const onInputChange = (e) => {
    setSongData({ ...songData, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    // Handle the selected image file
    setSongData({ ...songData, image: e.target.files[0] });
  };
  const onDeleteImage = () => {
    // Remove the selected image
    setSongData({ ...songData, image: null });
  };
  return (
    <>
      <Modal
        show={props.show}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header>
          <Modal.Title id="example-custom-modal-styling-title">{"Create Song"}</Modal.Title>
          <a onClick={props.onHide} className="btn btn-sm  bottomBarButtons">
            <ClearIcon />
          </a>
        </Modal.Header>
        <Modal.Body>
          <div className="song_modal">
            <form onSubmit={songHandleSubmit(addSongHandle)}>
              <div className="row">
                <div className="col-12 text_field_layout">
                  <InputLabel htmlFor="songName">Song Name</InputLabel>
                  <br />
                  <TextField
                    variant="outlined"
                    {...timesheetRegister('songName', {
                      required: {
                        value: true,
                        message: 'Song Name is required',
                      },
                      minLength: {
                        value: 2,
                        message: 'Song Name must be at least 2 characters',
                      },
                    })}
                    helperText={timesheetErrors.songName ? timesheetErrors.songName.message : ''}
                    error={Boolean(timesheetErrors.songName)}
                    required
                    type="text"
                    className="form-control"
                    value={songData.songName}
                    name="songName"
                    label="Song Name"
                    onChange={(e) => onInputChange(e)}
                    autoComplete='false'
                  />
                </div>

                <div className="col-12 text_field_layout">
                  <InputLabel htmlFor="status">Song Link</InputLabel>
                  <br />
                  <TextField
                    variant="outlined"
                    {...timesheetRegister('songLink', {
                      required: {
                        value: true,
                        message: 'song Link is required',
                      },
                    })}
                    helperText={timesheetErrors.songLink ? timesheetErrors.songLink.message : ''}
                    error={Boolean(timesheetErrors.songLink)}
                    required
                    type="text"
                    className="form-control"
                    label="Song Link"
                    value={songData.songLink}
                    name="songLink"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="col-12 text_field_layout">
                  <InputLabel htmlFor="status">Song Source</InputLabel>
                  <br />
                  <TextField
                    variant="outlined"
                    {...timesheetRegister('songSource', {
                      required: {
                        value: true,
                        message: 'song Source is required',
                      },
                    })}
                    helperText={timesheetErrors.songSource ? timesheetErrors.songSource.message : ''}
                    error={Boolean(timesheetErrors.songSource)}
                    required
                    type="text"
                    className="form-control"
                    label="Song Source"
                    value={songData.songSource}
                    name="songSource"
                    onChange={(e) => onInputChange(e)}
                  />
                </div>

                <div className="col-12 text_field_layout">
                  {/* <InputLabel htmlFor="image">Click to upload song image</InputLabel> */}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onImageChange(e)}
                    style={{ display: 'none' }}
                    id="imageInput"
                  />
                  <label htmlFor="imageInput" className="custom-file-upload file_upload_layout">
                  <FileUploadIcon /> Click to upload song image
                  </label>

                  {songData.image && (
                    <div className="image_container">
                      <div style={{display:"flex", justifyContent:"center",alignItems:'center',gap:"10px"}}>
                      <img src={URL.createObjectURL(songData.image)} alt="Song Image" />
                      <p className="file-name">{songData.image.name}</p>
                      </div>
                     
                      <button type="button" onClick={onDeleteImage} className="delete_image_btn">
                         <DeleteIcon />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="submit_cancel_layout">
            
              <a onClick={props.onHide} className="btn btn-sm btn_cancel">
               cancel
             </a>
             <button className='btn btn-sm btn-white btn-primary bottomBarButtons' type="submit">Add</button>
              </div>
            
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddSongModal;
