import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import { getContacts } from './api/ContactService';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import { useRef } from 'react';
import { saveContact, updatePhoto } from './api/ContactService';

const App = () => {
  const modalRef = useRef();
  const fileRef = useRef();
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [file, setFile] = useState(undefined);
  const [values, setValues] = useState({
    name: '',
    email: '',
    title: '',
    phone: '',
    address: '',
    status: '',
  });
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log(values);
  }
  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleNewContact = async (event) => {
    event.preventDefault();
    try {
      const { data } = await saveContact(values);
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('id', data.id);
      const { data: photoUrl } = await updatePhoto(formData);
      toggleModal(false);
      console.log(photoUrl);
      setFile(undefined);//remove the file from state after upload
      fileRef.current.value = null;//remove the file from input after upload
      setValues({
        name: '',
        email: '',
        title: '',
        phone: '',
        address: '',
        status: '',
      });
      getAllContacts();
    } catch (error) {
      console.log(error);
    }
  }
  const toggleModal = (show) => {
    show ? modalRef.current.showModal() : modalRef.current.close();

  }
  useEffect(() => {
    getAllContacts();
  }, []);

  return (
    <>

      <Header toggleModal={toggleModal} nbOfContacts={data.totalElements} />
      <main className="main">
        <div className="container">

          <Routes>
            <Route path="/" element={<Navigate to="/contacts" />} />
            <Route path="/contacts" element={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />
          </Routes>
        </div>
      </main>
      {/*modal*/}
      <dialog ref={modalRef} className="modal" id="modal">
        <div className="modal__header">
          <h3>New Contact</h3>
          <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>

        </div>
        <div className="divider"></div>
        <div className="modal__body">
          <form onSubmit={handleNewContact}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">
                  Name

                </span>
                <input value={values.name} onChange={onChange} type="text" name="name" required />

              </div>
              <div className="input-box">
                <span className="details">
                  Email

                </span>
                <input value={values.email} onChange={onChange} type="text" name="email" required />

              </div>
              <div className="input-box">
                <span className="details">
                  Title

                </span>
                <input value={values.title} onChange={onChange} type="text" name="title" required />

              </div>
              <div className="input-box">
                <span className="details">
                  Phone Number

                </span>
                <input value={values.phone} onChange={onChange} type="text" name="phone" required />

              </div>
              <div className="input-box">
                <span className="details">
                  Address

                </span>
                <input value={values.address} onChange={onChange} type="text" name="address" required />

              </div>
              <div className="input-box">
                <span className="details">
                  Account Status

                </span>
                <input value={values.status} onChange={onChange} type="text" name="status" required />

              </div>
              <div className="file-input">
                <span className="details">
                  Profile Photo

                </span>
                <input onChange={(event) => { setFile(event.target.files[0]); console.log(file) }} ref={fileRef} type="file" name="photo" required />

              </div>



            </div>
            <div className="form_footer">
              <button onClick={() => toggleModal(false)} type="button" className="btn btn-danger">Cancle</button>
              <button type="submit" className="btn">Save</button>
            </div>
          </form>

        </div>

      </dialog>
    </>
  );
}
export default App;