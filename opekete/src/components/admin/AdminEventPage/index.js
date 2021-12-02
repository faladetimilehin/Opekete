import React, {Fragment} from 'react';
import Header from '../../../components/header'
import PageTitle from '../../../components/pagetitle'
import EventSection2 from '../../../components/event2'
import Footer from '../../../components/footer'
import Scrollbar from '../../../components/scrollbar'


const AdminEventPage =() => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Our Event'} pagesub={'Admin Event'}/> 
            <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-8 col-12">
                        <div className="comment-respond">
                            <h3 className="comment-reply-title">Please fill in the form to Upload</h3>
                            <form method="post" id="commentform" className="comment-form" onSubmit={submitHandler}>
                                <div className="form-inputs">
                                    <input placeholder="Name" type="text"/>
                                    <input placeholder="Email" type="email"/>
                                    <input placeholder="Website" type="url"/>
                                </div>
                                <div className="form-textarea">
                                    <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                </div>
                                <div className="form-submit">
                                    <input id="submit" value="Upload" type="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* <EventSection2/> */}
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default AdminEventPage;
