import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getContact } from '../api/ContactService';
import { useEffect, useRef } from 'react';
import App from '../App';
const ContactDetail = ({updateContact, updateImage}) => {
  const inputRef = useRef();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    title: '',
    phone: '',
    address: '',
    status: '',
    photoUrl: ''
  });

  const { id } = useParams();

  const fetchContact = async (id) => {
    try {
      const { data } = await getContact(id);
      setContact(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


  const selectIamge = () => {
    inputRef.current.click();
  };

  const updatePhoto = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('id', id);
      await updateImage(formData);
      setContact((prev) => ({ ...prev, photoUrl: `${prev.photoUrl}?updated_at=${new Date().getTime()}` }));
      console.log("data");
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
    fetchContact(id);
  }, []);

  return (
    <>
      <Link to="/contacts" className="link"><i className="bi bi-arrow-left"></i>Back to List</Link>
      <div className="profile">
        <div className="profile__details">
          <img src={contact.photoUrl} alt={`Profile photo of ${contact.name}`} />
          <div className="profile__metadata">
            <p className="profile__name">{contact.name}</p>
            <p className="profile__muted">JPG, GIF or PNG. Max size of 10MG</p>
            <button onClick={selectIamge} className="btn"><i className="bi bi-cloud-upload"></i>Update Photo</button>

          </div>

        </div>
        <div className="profile__settings">Settings will  go here.</div>

      </div>
      <form style={{ display: 'none' }}>
        <input type="file" onChange={(event) => updatePhoto(event.target.files[0])} name="file" ref={inputRef} accept="image/*"  />
      </form>
    </>
  )

}
export default ContactDetail;