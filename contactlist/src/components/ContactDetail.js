import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const ContactDetail =(updateContact,updatePhoto) =>{
     const [values, setValues] = useState({
        name: '',
        email: '',
        title: '',
        phone: '',
        address: '',
        status: '',
        photoUrl:''
      });
      const { id } = useParams();
      console.log(id);
    return(
        <div>contact details</div>
    )

}
export default ContactDetail;