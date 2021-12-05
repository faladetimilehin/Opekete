import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ScholarshipForm from '../../components/ScholarshipForm';


const ScholarshipPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'Apply for scholarship'} pagesub={'Apply for scholarship'}/> 
           <ScholarshipForm/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ScholarshipPage;
