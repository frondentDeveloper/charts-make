import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom"
import "./main.scss"
import Dashboard from "./Dashboard/Dashboard";
import {useNavigate} from "react-router-dom"
import Groups from "./Groups/Groups";
import Student from "./Student/Student";
import Accounting from "./Accounting/Accounting";
import Setting from "./Setting/Setting";
import Help from "./Help/Help"
function Main(props) {

    const navigate = useNavigate();

    const time1 = new Date().toLocaleTimeString();

    const clicked = () =>{
        alert("Ma'lumot yo'q")
    };

    const [active, setActive] = useState(true)
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [active4, setActive4] = useState(false)
    const [active5, setActive5] = useState(false)
    const [active6, setActive6] = useState(false)

    const activeMenu = () =>{
        if(active === true){
            setActive2(false)
            setActive3(false)
            setActive4(false)
            setActive5(false)
            setActive6(false)
        }
        else if(active2 === true){
            setActive(false)
            setActive3(false)
            setActive4(false)
            setActive5(false)
            setActive6(false)
        }
        else if(active3 === true){
            setActive2(false)
            setActive(false)
            setActive4(false)
            setActive5(false)
            setActive6(false)
        }
        else if(active4 === true){
            setActive2(false)
            setActive(false)
            setActive3(false)
            setActive5(false)
            setActive6(false)
        }
        else if(active5 === true){
            setActive2(false)
            setActive(false)
            setActive3(false)
            setActive4(false)
            setActive6(false)
        }
        else if(active6 === true){
            setActive2(false)
            setActive(false)
            setActive3(false)
            setActive4(false)
            setActive5(false)
        }
    }

; 

    return (
        <div className="main-content">
            <div className="in-main-content">
                <div className="menu">
                    <div className="for-logo" onClick={()=>navigate("/")}><img src="images/Group 31.png" alt=""/></div>
                    <div className="main-child-menu">
                        <div className={active ? "active_menu" : " child-menu"} onClick={()=>{navigate("/"); setActive(!active); activeMenu()}}><img src="images/key-square.png" alt=""/> <p>Dashboard</p></div>
                        <div className={active2 ? "active_menu" : " child-menu"} onClick={()=>{navigate("/groups"); setActive2(!active2); activeMenu()}}><img src="images/3d-square 1.png" alt=""/> <p>Guruhlar</p></div>
                        <div className={active3 ? "active_menu" : " child-menu"} onClick={()=>{navigate("/students"); setActive3(!active3); activeMenu()}}><img src="images/user-square 1.png" alt=""/> <p>O’quvchilar</p></div>
                        <div className={active4 ? "active_menu" : " child-menu"} onClick={()=>{navigate("/accounting"); setActive4(!active4); activeMenu()}}><img src="images/wallet-money 2.png" alt=""/> <p>Bug’alteriya</p></div>
                        <div className={active5 ? "active_menu" : " child-menu"} onClick={()=>{navigate("/setting"); setActive5(!active5); activeMenu()}}><img src="images/discount-shape 1.png" alt=""/> <p>Sozlamalar</p></div>
                        <div className={active6 ? "active_menu" : " child-menu"} onClick={()=>{navigate("/help"); setActive6(!active6); activeMenu()}}><img src="images/message-question 1.png" alt=""/> <p>Sozlamalar</p></div>
                    </div>
                    <div className="for-date">{time1}</div>
                    <img onClick={clicked} className="img-ss" src="images/sss.jpg" alt=""/>
                </div>


                <div className="offcanvas offcanvas-start" id="demo">
                    <div className="offcanvas-header">
                    <div className="for-logo" onClick={()=>navigate("/")}><img src="images/Group 31.png" alt=""/></div>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                    
                    <div className="main-child-menu">
                        <div className="child-menu" onClick={()=>navigate("/")}><img src="images/key-square.png" alt=""/> <p>Dashboard</p></div>
                        <div className="child-menu" onClick={()=>navigate("/groups")}><img src="images/3d-square 1.png" alt=""/> <p>Guruhlar</p></div>
                        <div className="child-menu" onClick={()=>navigate("/students")}><img src="images/user-square 1.png" alt=""/> <p>O’quvchilar</p></div>
                        <div className="child-menu" onClick={()=>navigate("/accounting")}><img src="images/wallet-money 2.png" alt=""/> <p>Bug’alteriya</p></div>
                        <div className="child-menu" onClick={()=>navigate("/setting")}><img src="images/discount-shape 1.png" alt=""/> <p>Sozlamalar</p></div>
                        <div className="child-menu" onClick={()=>navigate("/help")}><img src="images/message-question 1.png" alt=""/> <p>Sozlamalar</p></div>
                    </div>
                    </div>
                </div>

                <button className="btn-primary1 btn-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                  <img src="image/kisspng-computer-icons-hamburger-button-menu-new-menu-5b34724be5a1f0.5796308115301637879406.jpg" alt=""/>
                </button>

                
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