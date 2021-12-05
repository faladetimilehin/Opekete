import React, {Fragment} from 'react';
import Header from '../../components/header'
import PageTitle from '../../components/pagetitle'
import Mission from '../../components/mission'
import Casesection from '../../components/case2'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Applypage from '../../components/ApplyPage';


const ApplyPage =() => {
    return(
        <Fragment>
            <Header/>
            <PageTitle pageTitle={'APPLY TO OPEKETE FOUNDATION'} pagesub={'How to apply'}/> 
            <Applypage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ApplyPage;
