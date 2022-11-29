import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom"
import "./main.scss"
import Dashboard from "./Dashboard/Dashboard";
import {useNavigate} from "react-router-dom"
import Groups from "./Groups/Groups";
import Student from "./Student/Student";
import Accounting from "./Accounting/Accounting";
import Setting from "./Setting/Setting";
import Help from "./Help/Help";
function Main(props) {

    const navigate = useNavigate();

    return (
        <div className="main-content">
            <div className="in-main-content">
                <div className="menu">
                    <div className="for-logo" onClick={()=>navigate("/")}><img src="images/Group 31.png" alt=""/></div>
                    <div className="main-child-menu">
                        <div className="child-menu" onClick={()=>navigate("/")}><img src="images/key-square.png" alt=""/> <p>Dashboard</p></div>
                        <div className="child-menu" onClick={()=>navigate("/groups")}><img src="images/3d-square 1.png" alt=""/> <p>Guruhlar</p></div>
                        <div className="child-menu" onClick={()=>navigate("/students")}><img src="images/user-square 1.png" alt=""/> <p>O’quvchilar</p></div>
                        <div className="child-menu" onClick={()=>navigate("/accounting")}><img src="images/wallet-money 2.png" alt=""/> <p>Bug’alteriya</p></div>
                        <div className="child-menu" onClick={()=>navigate("/setting")}><img src="images/discount-shape 1.png" alt=""/> <p>Sozlamalar</p></div>
                        <div className="child-menu" onClick={()=>navigate("/help")}><img src="images/message-question 1.png" alt=""/> <p>Yordam</p></div>
                    </div>
                </div>
                <div className="content">
                    <div className="navbar">
                        <div className="name"><h2>Hello Sheroz 👋🏼,</h2></div>
                        <div className="right-nav">
                            <div className="img-group">
                                <img src="images/Vector (22).png" alt=""/>
                                <img src="images/Add.png" alt=""/>
                                <img src="images/akar-icons_bell.png" alt=""/>
                            </div>
                            <input placeholder="search" type="search"/>
                        </div>
                    </div>
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/groups" element={<Groups/>}/>
                        <Route path="/students" element={<Student/>}/>
                        <Route path="/accounting" element={<Accounting/>}/>
                        <Route path="/setting" element={<Setting/>}/>
                        <Route path="/help" element={<Help/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Main;