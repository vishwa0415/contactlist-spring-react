import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getContact } from '../api/ContactService';
import { useEffect, useRef } from 'react';
import { toastError, toastSuccess } from '../api/ToastService';
const ContactDetail = ({updateContact, updateImage}) => {
  const inputRef = useRef();
  const [contact, setContact] = useState({
    id:'',
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
     // toastSuccess('Contact fetched successfully');
    } catch (error) {
      console.log(error);
      toastError(error.message);
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
      toastSuccess('Photo updated successfully');
    } catch (error) {
      console.log(error);
      toastError(error.message);
    }
  };
   const onChange = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
    console.log(contact);
  }
  const onUpdateContact = async (event) => {
   event.preventDefault();
    await updateContact(contact);
    fetchContact(id);
    toastSuccess('Contact updated successfully');
  }

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
        <div className="profile__settings">
          <div>
            <form onSubmit={onUpdateContact} className="form">
              <div className="user-details">
                
                <input type="hidden" defaultValue={contact.id} name="id" required /> {/* This is a hidden input and the contact id is passing to backend to identify which contact is going to update, no need to show for users */}
                <div className="input-box">
                  <span className="details">Name</span>
                  <input type="text" value={contact.name} onChange={onChange} name="name" required />

                </div>
                  <div className="input-box">
                  <span className="details">Email</span>
                  <input type="text" value={contact.email} onChange={onChange} name="email" required />

                </div>
                  <div className="input-box">
                  <span className="details">Phone</span>
                  <input type="text" value={contact.phone} onChange={onChange} name="phone" required />

                </div>
                  <div className="input-box">
                  <span className="details">Address</span>
                  <input type="text" value={contact.address} onChange={onChange} name="address" required />

                </div>
                  <div className="input-box">
                  <span className="details">Title</span>
                  <input type="text" value={contact.title} onChange={onChange} name="title" required />

                </div>
                  <div className="input-box">
                  <span className="details">Status</span>
                  <input type="text" value={contact.status} onChange={onChange} name="status" required />

                </div>

              </div>
              <div className="from_footer">
                <button type="submit" className="btn">Save</button>
              </div>

            </form>
          </div>
        </div>

      </div>
      <form style={{ display: 'none' }}>
        <input type="file" onChange={(event) => updatePhoto(event.target.files[0])} name="file" ref={inputRef} accept="image/*"  />
      </form>
    </>
  )

}
export default ContactDetail;