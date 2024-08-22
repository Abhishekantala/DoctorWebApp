import React, { useState } from 'react';
import { Link } from "react-router-dom";

import menuicon01 from "../img/icons/menu-icon-01.svg";
import menuicon02 from "../img/icons/menu-icon-02.svg";
import menuicon03 from "../img/icons/menu-icon-03.svg";
import menuicon04 from "../img/icons/menu-icon-04.svg";
import menuicon05 from "../img/icons/menu-icon-05.svg";
import menuicon06 from "../img/icons/menu-icon-06.svg";
import menuicon07 from "../img/icons/menu-icon-07.svg";
import menuicon08 from "../img/icons/menu-icon-08.svg";
import menuicon09 from "../img/icons/menu-icon-09.svg";
import menuicon10 from "../img/icons/menu-icon-10.svg";
import menuicon11 from "../img/icons/menu-icon-11.svg";
import menuicon12 from "../img/icons/menu-icon-12.svg";
import menuicon13 from "../img/icons/menu-icon-13.svg";
import menuicon14 from "../img/icons/menu-icon-14.svg";
import menuicon15 from "../img/icons/menu-icon-15.svg";
import menuicon16 from "../img/icons/menu-icon-16.svg";
import logout from "../img/icons/logout.svg";

const Sidebar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const expandMenu = () => {
    document.body.classList.remove("expand-menu");
  };
  const expandMenuOpen = () => {
    document.body.classList.add("expand-menu");
  }; 
// Toggle function to open/close the menu
const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
      <div className="sidebar" id="sidebar"
       onMouseLeave={expandMenu}
       onMouseOver={expandMenuOpen}>
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">Main</li>
              <li className="submenu">
                <Link href="#" onClick={toggleMenu}>
                  <span className="menu-side">
                    <img src={menuicon01} alt="" />
                  </span>
                  <span> Dashboard </span> <span className="menu-arrow"></span>
                </Link>
                <ul className={isMenuOpen ? "" : "d-none"}>
                  <li>
                    <Link className="active" href="index.html">
                      Admin Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href="doctor-dashboard.html">Doctor Dashboard</Link>
                  </li>
                  <li>
                    <Link href="patient-dashboard.html">Patient Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link>
                  <span className="menu-side">
                    <img src={menuicon02} alt="" />
                  </span>
                  <span> Doctors </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link className="">Doctor List</Link>
                  </li>
                  <li>
                    <Link>Add Doctor</Link>
                  </li>
                  <li>
                    <Link href="edit-doctor.html">Edit Doctor</Link>
                  </li>
                  <li>
                    <Link href="doctor-profile.html">Doctor Profile</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon03} alt="" />
                  </span>
                  <span>Patients </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="patients.html">Patients List</Link>
                  </li>
                  <li>
                    <Link href="add-patient.html">Add Patients</Link>
                  </li>
                  <li>
                    <Link href="edit-patient.html">Edit Patients</Link>
                  </li>
                  <li>
                    <Link href="patient-profile.html">Patients Profile</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon08} alt="" />
                  </span>
                  <span> Staff </span>
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="staff-list.html">Staff List</Link>
                  </li>
                  <li>
                    <Link href="add-staff.html">Add Staff</Link>
                  </li>
                  <li>
                    <Link href="staff-profile.html">Staff Profile</Link>
                  </li>
                  <li>
                    <Link href="staff-leave.html">Leaves</Link>
                  </li>
                  <li>
                    <Link href="staff-holiday.html">Holidays</Link>
                  </li>
                  <li>
                    <Link href="staff-attendance.html">Attendance</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon04} alt="" />
                  </span>
                  <span> Appointments </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="appointments.html">Appointment List</Link>
                  </li>
                  <li>
                    <Link href="add-appointment.html">Book Appointment</Link>
                  </li>
                  <li>
                    <Link href="edit-appointment.html">Edit Appointment</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon05} alt="" />
                  </span>
                  <span> Doctor Schedule </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="schedule.html">Schedule List</Link>
                  </li>
                  <li>
                    <Link href="add-schedule.html">Add Schedule</Link>
                  </li>
                  <li>
                    <Link href="edit-schedule.html">Edit Schedule</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon06} alt="" />
                  </span>
                  <span> Departments </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="departments.html">Department List</Link>
                  </li>
                  <li>
                    <Link href="add-department.html">Add Department</Link>
                  </li>
                  <li>
                    <Link href="edit-department.html">Edit Department</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon07} alt="" />
                  </span>
                  <span> Accounts </span> <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="invoices.html">Invoices</Link>
                  </li>
                  <li>
                    <Link href="payments.html">Payments</Link>
                  </li>
                  <li>
                    <Link href="expenses.html">Expenses</Link>
                  </li>
                  <li>
                    <Link href="taxes.html">Taxes</Link>
                  </li>
                  <li>
                    <Link href="provident-fund.html">Provident Fund</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon09} alt="" />
                  </span>
                  <span> Payroll </span> <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="salary.html"> Employee Salary </Link>
                  </li>
                  <li>
                    <Link href="salary-view.html"> Payslip </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="chat.html">
                  <span className="menu-side">
                    <img src={menuicon10} alt="" />
                  </span>{" "}
                  <span>Chat</span>
                </Link>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon11} alt="" />
                  </span>
                  <span> Calls</span> <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="voice-call.html">Voice Call</Link>
                  </li>
                  <li>
                    <Link href="video-call.html">Video Call</Link>
                  </li>
                  <li>
                    <Link href="incoming-call.html">Incoming Call</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon12} alt="" />
                  </span>
                  <span> Email</span> <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="compose.html">Compose Mail</Link>
                  </li>
                  <li>
                    <Link href="inbox.html">Inbox</Link>
                  </li>
                  <li>
                    <Link href="mail-view.html">Mail View</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon13} alt="" />
                  </span>
                  <span> Blog</span> <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="blog.html">Blog</Link>
                  </li>
                  <li>
                    <Link href="blog-details.html">Blog View</Link>
                  </li>
                  <li>
                    <Link href="add-blog.html">Add Blog</Link>
                  </li>
                  <li>
                    <Link href="edit-blog.html">Edit Blog</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="assets.html">
                  <i className="fa fa-cube"></i> <span>Assets</span>
                </Link>
              </li>
              <li>
                <Link href="activities.html">
                  <span className="menu-side">
                    <img src="assets/img/icons/menu-icon-14.svg" alt="" />
                  </span>{" "}
                  <span>Activities</span>
                </Link>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-flag"></i> <span> Reports </span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="expense-reports.html"> Expense Report </Link>
                  </li>
                  <li>
                    <Link href="invoice-reports.html"> Invoice Report </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <span className="menu-side">
                    <img src={menuicon15} alt="" />
                  </span>
                  <span> Invoice </span> <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="invoices-list.html"> Invoices List </Link>
                  </li>
                  <li>
                    <Link href="invoices-grid.html"> Invoices Grid</Link>
                  </li>
                  <li>
                    <Link href="add-invoice.html"> Add Invoices</Link>
                  </li>
                  <li>
                    <Link href="edit-invoices.html"> Edit Invoices</Link>
                  </li>
                  <li>
                    <Link href="view-invoice.html"> Invoices Details</Link>
                  </li>
                  <li>
                    <Link href="invoices-settings.html"> Invoices Settings</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="settings.html">
                  <span className="menu-side">
                    <img src={menuicon16} alt="" />
                  </span>{" "}
                  <span>Settings</span>
                </Link>
              </li>
              <li className="menu-title">UI Interface</li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-laptop"></i> <span> Base UI</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="alerts.html">Alerts</Link>
                  </li>
                  <li>
                    <Link href="accordions.html">Accordions</Link>
                  </li>
                  <li>
                    <Link href="avatar.html">Avatar</Link>
                  </li>
                  <li>
                    <Link href="badges.html">Badges</Link>
                  </li>
                  <li>
                    <Link href="buttons.html">Buttons</Link>
                  </li>
                  <li>
                    <Link href="buttongroup.html">Button Group</Link>
                  </li>
                  <li>
                    <Link href="breadcrumbs.html">Breadcrumb</Link>
                  </li>
                  <li>
                    <Link href="cards.html">Cards</Link>
                  </li>
                  <li>
                    <Link href="carousel.html">Carousel</Link>
                  </li>
                  <li>
                    <Link href="dropdowns.html">Dropdowns</Link>
                  </li>
                  <li>
                    <Link href="grid.html">Grid</Link>
                  </li>
                  <li>
                    <Link href="images.html">Images</Link>
                  </li>
                  <li>
                    <Link href="lightbox.html">Lightbox</Link>
                  </li>
                  <li>
                    <Link href="media.html">Media</Link>
                  </li>
                  <li>
                    <Link href="modal.html">Modals</Link>
                  </li>
                  <li>
                    <Link href="offcanvas.html">Offcanvas</Link>
                  </li>
                  <li>
                    <Link href="pagination.html">Pagination</Link>
                  </li>
                  <li>
                    <Link href="popover.html">Popover</Link>
                  </li>
                  <li>
                    <Link href="progress.html">Progress Bars</Link>
                  </li>
                  <li>
                    <Link href="placeholders.html">Placeholders</Link>
                  </li>
                  <li>
                    <Link href="rangeslider.html">Range Slider</Link>
                  </li>
                  <li>
                    <Link href="spinners.html">Spinner</Link>
                  </li>
                  <li>
                    <Link href="sweetalerts.html">Sweet Alerts</Link>
                  </li>
                  <li>
                    <Link href="tab.html">Tabs</Link>
                  </li>
                  <li>
                    <Link href="toastr.html">Toasts</Link>
                  </li>
                  <li>
                    <Link href="tooltip.html">Tooltip</Link>
                  </li>
                  <li>
                    <Link href="typography.html">Typography</Link>
                  </li>
                  <li>
                    <Link href="video.html">Video</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-box"></i> <span> Elements</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="ribbon.html">Ribbon</Link>
                  </li>
                  <li>
                    <Link href="clipboard.html">Clipboard</Link>
                  </li>
                  <li>
                    <Link href="drag-drop.html">Drag & Drop</Link>
                  </li>
                  <li>
                    <Link href="rating.html">Rating</Link>
                  </li>
                  <li>
                    <Link href="text-editor.html">Text Editor</Link>
                  </li>
                  <li>
                    <Link href="counter.html">Counter</Link>
                  </li>
                  <li>
                    <Link href="scrollbar.html">Scrollbar</Link>
                  </li>
                  <li>
                    <Link href="notification.html">Notification</Link>
                  </li>
                  <li>
                    <Link href="stickynote.html">Sticky Note</Link>
                  </li>
                  <li>
                    <Link href="timeline.html">Timeline</Link>
                  </li>
                  <li>
                    <Link href="horizontal-timeline.html">Horizontal Timeline</Link>
                  </li>
                  <li>
                    <Link href="form-wizard.html">Form Wizard</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-chart-simple"></i> <span>Charts</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="chart-apex.html">Apex Charts</Link>
                  </li>
                  <li>
                    <Link href="chart-js.html">Chart Js</Link>
                  </li>
                  <li>
                    <Link href="chart-morris.html">Morris Charts</Link>
                  </li>
                  <li>
                    <Link href="chart-flot.html">Flot Charts</Link>
                  </li>
                  <li>
                    <Link href="chart-peity.html">Peity Charts</Link>
                  </li>
                  <li>
                    <Link href="chart-c3.html">C3 Charts</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-award"></i> <span>Icons</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="icon-fontawesome.html">Fontawesome Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-feather.html">Feather Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-ionic.html">Ionic Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-material.html">Material Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-pe7.html">Pe7 Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-simpleline.html">Simpleline Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-themify.html">Themify Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-weather.html">Weather Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-typicon.html">Typicon Icons</Link>
                  </li>
                  <li>
                    <Link href="icon-flag.html">Flag Icons</Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-edit"></i> <span> Forms</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="form-basic-inputs.html">Basic Inputs</Link>
                  </li>
                  <li>
                    <Link href="form-input-groups.html">Input Groups</Link>
                  </li>
                  <li>
                    <Link href="form-horizontal.html">Horizontal Form</Link>
                  </li>
                  <li>
                    <Link href="form-vertical.html">Vertical Form</Link>
                  </li>
                  <li>
                    <Link href="form-mask.html">Form Mask </Link>
                  </li>
                  <li>
                    <Link href="form-validation.html">Form Validation </Link>
                  </li>
                  <li>
                    <Link href="form-select2.html">Form Select2 </Link>
                  </li>
                  <li>
                    <Link href="form-fileupload.html">File Upload </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-table"></i> <span> Tables</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="tables-basic.html">Basic Tables</Link>
                  </li>
                  <li>
                    <Link href="tables-datatables.html">Data Table</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="calendar.html">
                  <i className="fa fa-calendar"></i> <span>Calendar</span>
                </Link>
              </li>
              <li className="menu-title">Extras</li>
              <li className="submenu">
                <Link href="#">
                  <i className="fa fa-columns"></i> <span>Pages</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li>
                    <Link href="login.html"> Login </Link>
                  </li>
                  <li>
                    <Link href="register.html"> Register </Link>
                  </li>
                  <li>
                    <Link href="forgot-password.html"> Forgot Password </Link>
                  </li>
                  <li>
                    <Link href="change-password2.html"> Change Password </Link>
                  </li>
                  <li>
                    <Link href="lock-screen.html"> Lock Screen </Link>
                  </li>
                  <li>
                    <Link href="profile.html"> Profile </Link>
                  </li>
                  <li>
                    <Link href="gallery.html"> Gallery </Link>
                  </li>
                  <li>
                    <Link href="error-404.html">404 Error </Link>
                  </li>
                  <li>
                    <Link href="error-500.html">500 Error </Link>
                  </li>
                  <li>
                    <Link href="blank-page.html"> Blank Page </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="javascript:void(0);">
                  <i className="fa fa-share-alt"></i> <span>Multi Level</span>{" "}
                  <span className="menu-arrow"></span>
                </Link>
                <ul className="d-none">
                  <li className="submenu">
                    <Link href="javascript:void(0);">
                      <span>Level 1</span> <span className="menu-arrow"></span>
                    </Link>
                    <ul className="d-none">
                      <li>
                        <Link href="javascript:void(0);">
                          <span>Level 2</span>
                        </Link>
                      </li>
                      <li className="submenu">
                        <Link href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span>{" "}
                          <span className="menu-arrow"></span>
                        </Link>
                        <ul className="d-none">
                          <li>
                            <Link href="javascript:void(0);">Level 3</Link>
                          </li>
                          <li>
                            <Link href="javascript:void(0);">Level 3</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="javascript:void(0);">
                          <span>Level 2</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      <span>Level 1</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="logout-btn">
              <Link href="login.html">
                <span className="menu-side">
                  <img src={logout} alt="" />
                </span>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
