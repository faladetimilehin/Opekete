import React, { useState, useEffect, Fragment } from 'react';
import Header from '../../../components/header'
import PageTitle from '../../../components/pagetitle'
import BlogList from '../../../components/BlogList'
import './style.css'
import Footer from '../../../components/footer'
import Scrollbar from '../../../components/scrollbar'
import { API, graphqlOperation, Auth } from 'aws-amplify'
import { createBlog } from '../../../graphql/mutations'
import adminView from './adminView';
import AdminView from './adminView';

const AdminBlogPage = () => {
    const [formData, setForm] = useState({
        postTitle: '',
        postBody: '',
        postOwnerId: '',
        postOwnerUsername: '',
    });
    useEffect(() => {
        Auth.currentUserInfo()
            .then((user) => {
                setForm({
                    ...formData,
                    postOwnerId: user.attribute.sub,
                    postOwnerUsername: user.username,
                });
            })
            .catch((err) => {
                console.log('error found');
            });
    });
    const { postTitle, postBody, postOwnerId, postOwnerUsername } = formData;
    const handleChange = (e) => {
        setForm({ ...formData, [e.target.name]: e.target.value });
    };


    const submitHandler = async (e) => {
        e.preventDefault()
        const inputForm = {
            postTitle:"djfj",
            postBody:"kdskds",
            postOwnerId:"kdskfds",
            postOwnerUsername:"kdskdsk",
            id: '1',
            name: 'FIRST'
        }
        const result = await API.graphql(graphqlOperation(createBlog, { input: inputForm }))
        if (result) {
            setForm({
                postTitle: '',
                postBody: '',
            });
        }
        console.log({ result })
    }

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Latest News'} pagesub={'Admin Blog'} />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12">
                            <div className="comment-respond">
                                <h3 className="comment-reply-title">Please fill in the blog details</h3>
                                <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                    <div className="form-inputs">

                                        <input placeholder="Upload Picture " type="file" required />
                                        <input
                                        onChange={handleChange}
                                            placeholder="Blog title"
                                            name="postTitle"
                                            value={formData.postTitle}
                                            type="text" required />

                                    </div>
                                    <div className="form-textarea">
                                        <textarea
                                            id="message"

                                            onChange={handleChange}
                                            placeholder="Write Your Message..."
                                            name="postBody"
                                            value={formData.postBody}
                                            required></textarea>
                                    </div>
                                    <div className="form-submit">
                                        <div className="form-inputs">
                                            <input id="submit" value="Upload" type="submit" />
                                            <input value="Reset" type="reset" />
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <BlogList/> */}
            <AdminView/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AdminBlogPage;

