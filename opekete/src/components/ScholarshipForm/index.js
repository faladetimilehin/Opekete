
import React, { useState } from 'react'
import axios from 'axios'
import TeamSection from '../team'
import './style.css'

import vimg from '../../images/volunteer.jpg'
import { toast } from "react-toastify";

const ScholarshipForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [file, setFile] = useState('')
    const [note, setNote] = useState('')
//     const SHEET_ID = '1WRwtwAyURLZnhNPAJTUDuWz9PkqvHIcrqyW1DkS93no';
// const ACCESS_TOKEN = 'ya29.a0ARrdaM9iXvQRNrcGV2oiM3ITFJR06SJYTxZ9rT3-xRchdQQs1QWEp6FwoOfjtQiH-App2ST8-nBmxOoTXi9Cmn9qqZI2qaSIR_9TSE5n8vL89zqssxmNPyID-YRd_iUFWGS3UG8jdA5KU6G3KtNMoF2b0cey';


    const SubmitHandler = async(e) => {

        const scholarshipData = { Name:name, Email: email ,PhoneNumber: phoneNumber,File: file ,Note: note}
        console.log(scholarshipData)
        console.log(name)
        axios.post(`https://sheet.best/api/sheets/8701b246-f23c-47f1-9174-5c6219f22a72`, scholarshipData)
     //   axios.post(`https://docs.google.com/spreadsheets/d/1WRwtwAyURLZnhNPAJTUDuWz9PkqvHIcrqyW1DkS93no/edit#gid=0`, scholarshipData)
        .then(response => {
            toast.success("Thanks for applying we would get back to you soon!!")
        })

   
        e.preventDefault();
    }


    return (
        <div className="volunteer-area">
            <div className="volunteer-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img-wrap">
                                    <div className="volunter-img">
                                        <img src={vimg} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="volunteer-contact">
                                <div className="volunteer-contact-form">
                                    <h2>Apply for scholarship</h2>
                                    <form onSubmit={SubmitHandler} className="contact-validation-active" id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Name"
                                              value={name}  onChange={(e) => setName(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                                                <input type="email" className="form-control" name="email" id="email" placeholder="Email"
                                             value={email}   onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                                                <input type="text" className="form-control" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" 
                                                 value={phoneNumber}   onChange={(e) => setPhoneNumber(e.target.value)}/>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group form-group-in">
                                                <label htmlFor="file">Upload Your Essays</label>
                                                <input id="file" type="file" className="form-control" name="file"
                                             value={file}   onChange={(e) => setFile(e.target.value)} />
                                                <i className="ti-cloud-up"></i>
                                            </div>
                                            <div className="col-lg-12 col-12 form-group">
                                                <textarea className="form-control" name="note" id="note" placeholder="Note..."
                                                value={note} onChange={(e) => setNote(e.target.value)}></textarea>
                                            </div>
                                            <div className="submit-area col-lg-12 col-12">
                                                <button type="submit" className="theme-btn submit-btn">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TeamSection />
        </div>
    )

}



export default ScholarshipForm;




