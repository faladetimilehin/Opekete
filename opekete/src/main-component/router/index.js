import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import AboutPage from '../AboutPage'
import CasePage from '../CasePage'
import CaseSinglePage from '../CaseSinglePage'
import EventPage from '../EventPage'
import EventPageSingle from '../EventPageSingle'
import DonatePage from '../DonatePage'
import VolunteerPage from '../volunteerPage'
import BlogPage from '../BlogPage' 
import BlogPageLeft from '../BlogPageLeft' 
import BlogPageFullwidth from '../BlogPageFullwidth'
import BlogDetails from '../BlogDetails' 
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide' 
import BlogDetailsFull from '../BlogDetailsFull'
import ErrorPage from '../ErrorPage'  
import ContactPage from '../ContactPage' 
import LoginPage from '../LoginPage' 
import SignUpPage from '../SignUpPage' 
import ForgotPassword from '../ForgotPassword' 

import AdminBlogPage from '../../components/admin/AdminBlogPage'
import AdminCasePage from '../../components/admin/AdminCasePage'
import AdminEventPage from '../../components/admin/AdminEventPage'

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { history } from "../../helpers/history";
import Home from "../../components/Home";    
import Profile from "../../components/Profile";
import BoardUser from "../../components/BoardUser";
import ApplyPage from "../ApplyPage";
import ScholarshipPage from "../scholarshipPage";

const AllRoute = () => { 
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };
  return (
    <div className="App">
       <Router history={history}>
          <Switch>
            {/* <Route exact path='/' component={LoginPage}/> */}
            <Route exact path={["/", "/home"]} component={Homepage}/> 
            {/* <Route path='/home' component={Homepage} /> */}
            <Route path='/about' component={AboutPage} />
            <Route path='/What-We-Do' component={CasePage} />
            <Route path='/case-single' component={CaseSinglePage}/>
            <Route path='/event' component={EventPage}/>
            <Route path='/event-details' component={EventPageSingle}/>
            <Route path='/donate' component={DonatePage}/>
            <Route path='/volunteer' component={VolunteerPage}/>
            <Route path='/scholarship' component={ScholarshipPage}/>
            <Route path='/blog' component={BlogPage}/> 
            {/* <Route path='/blog-left' component={BlogPageLeft}/> */}
            {/* <Route path='/blog-fullwidth' component={BlogPageFullwidth}/>  */}
            <Route path='/blog-details' component={BlogDetails}/>
            {/* <Route path='/blog-details-left' component={BlogDetailsLeftSiide}/>
            <Route path='/blog-details-fullwidth' component={BlogDetailsFull}/> */}
            <Route path='/404' component={ErrorPage}/>
            <Route path='/contact' component={ContactPage}/>
            <Route path='/login' component={LoginPage}/>
            <Route path='/signup' component={SignUpPage}/>
            <Route path='/forgot-password' component={ForgotPassword}/>
            <Route path='/admin-blog' component={AdminBlogPage}/>
            <Route path='/admin-case' component={AdminCasePage}/>
            <Route path='/admin-event' component={AdminEventPage}/>
            <Route path='/apply' component={ApplyPage}/>



          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
