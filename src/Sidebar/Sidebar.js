import React, { useEffect } from "react";
import HcOffcanvasNav from "hc-offcanvas-nav";
import favorite4 from '../img/favorite/favorite-4.jpg'

const Sidebar = () => {

    useEffect(() => {
        // Initialize the off-canvas navigation
        const navElement = document.getElementById("main-nav");
        new HcOffcanvasNav(navElement, {
          disableAt: false,
          customToggle: ".toggle", // Reference the button class that triggers the nav
          navTitle: "Menu",
          levelOpen: "expand",
          navClose: false,
        }); 
      }, []);

    return (
        
            <nav id="main-nav"  className="hc-offcanvas-nav ">
                <ul class="second-nav">
                    <li class="osahan-user-profile bg-primary">
                        <div class="d-flex align-items-center gap-2 sidebar-top-view">
                            <img src={favorite4} alt class="rounded-pill img-fluid" />
                            <div class="ps-1">
                                <h6 class="fw-bold text-white mb-0">Hey, Samantha!</h6>
                                <p class="text-white-50 m-0 small">+91 12345-67890</p>
                            </div>
                        </div>
                    </li>
                    <li><a href="index.html"><span class="mdi mdi-cellphone me-3"></span>Splash</a></li>
                    <li>
                        <a href="#"><span class="mdi mdi-login me-3"></span>Authentication</a>
                        <ul>
                            <li><a href="landing.html">Landing</a></li>
                            <li><a href="welcome.html">Welcome</a></li>
                            <li><a href="sign-up.html">Sign up</a></li>
                            <li><a href="sign-in.html">Sign in</a></li>
                            <li><a href="sign-in-email.html">Sign in with email</a></li>
                            <li><a href="forget-password.html">Forget Password</a></li>
                            <li><a href="reset-password.html">Reset Password</a></li>
                            <li><a href="verify.html">Verify</a></li>
                            <li> <a href="congrats.html">Congrats</a></li>
                        </ul>
                    </li>
                    <li><a href="notification.html"><span class="mdi mdi-bell-outline me-3"></span>Notification</a></li>
                    <li><a href="home.html"><span class="mdi mdi-home-variant-outline me-3"></span>Homepage</a></li>
                    <li>
                        <a href="#"><span class="mdi mdi-magnify me-3"></span>Doctors</a>
                        <ul>
                            <li><a href="search.html"><span class="mdi mdi-magnify me-3"></span>Doctor List</a></li>
                            <li><a href="doctor-profile.html"><span
                                class="mdi mdi-account-supervisor-outline me-3"></span>Doctor Profile</a></li>
                            <li><a href="request-appointment.html"><span class="mdi mdi-calendar-check me-3"></span>Request
                                Appointment</a>
                            </li>
                            <li><a href="book-appointment.html"><span class="mdi mdi-calendar-plus me-3"></span>Book
                                Appointment</a></li>
                            <li><a href="visit-info.html"><span class="mdi mdi-information-outline me-3"></span>Visit Info</a>
                            </li>
                            <li><a href="overview.html"><span class="mdi mdi-file-table-box-outline me-3"></span>Checkout</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><span class="mdi mdi-account-outline me-3"></span>My Profile</a>
                        <ul>
                            <li><a href="my-profile.html"><span class="mdi mdi-account-outline me-3"></span>My Account</a></li>
                            <li><a href="my-appointment-upcoming.html"><span class="mdi mdi-calendar-clock me-3"></span>My
                                Upcoming Appointment</a></li>
                            <li><a href="my-appointment.html"><span class="mdi mdi-calendar-range me-3"></span>My
                                Appointments</a></li>
                            <li><a href="history.html"><span class="mdi mdi-history me-3"></span>History</a></li>
                            <li><a href="favorite-doctor.html"><span class="mdi mdi-cards-heart-outline me-3"></span>Favorites
                                Doctor</a></li>
                            <li><a href="change-profile.html"><span class="mdi mdi-square-edit-outline me-3"></span>Edit
                                Profile</a></li>
                        </ul>
                    </li>
                    <li><a href="video.html"><span class="mdi mdi-video-outline me-3"></span>Video Consultation</a></li>
                    <li>
                        <a href="#"><span class="mdi mdi-phone-outline me-3"></span>Doctor Call</a>
                        <ul>
                            <li><a href="call.html">Call</a></li>
                            <li><a href="call-doctor.html">Call Doctor</a></li>
                            <li><a href="call-end.html">Call End</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><span class="mdi mdi-record-circle-outline me-3"></span>Doctor Recordings</a>
                        <ul>
                            <li><a href="recording.html">Recording 1</a></li>
                            <li><a href="recording-2.html">Recording 2</a></li>
                            <li><a href="play-recording.html">Play Recording 1</a></li>
                            <li><a href="play-recording-2.html">Play Recording 2</a></li>
                        </ul>
                    </li>
                    <li><a href="message.html"><span class="mdi mdi-message-processing-outline me-3"></span>Message</a></li>
                    <li><a href="chat.html"><span class="mdi mdi-chat-processing-outline me-3"></span>Chat</a></li>
                    <li><a href="review.html"><span class="mdi mdi-star-half-full me-3"></span>Doctor Review</a></li>
                </ul>
                <ul class="bottom-nav">
                    <li class="home">
                        <a href="home.html">
                            <p class="h5 m-0"><span class="mdi mdi-home-variant-outline"></span></p>
                            Home
                        </a>
                    </li>
                    <li class="find">
                        <a href="search.html">
                            <p class="h5 m-0"><span class="mdi mdi-magnify"></span></p>
                            Search
                        </a>
                    </li>
                    <li class="more">
                        <a href="my-profile.html">
                            <p class="h5 m-0"><span class="mdi mdi-account-circle-outline"></span></p>
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
        
    )
}

export default Sidebar
