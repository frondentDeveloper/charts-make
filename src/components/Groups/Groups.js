import React, {useEffect, useState} from 'react';
import "./group.scss"
import ForGroup from "../for-group";

function Groups(props) {

    const [data, setData] = useState([
        {date:"December 20, 2022", img:"image/Vector (22).png", teacher:"Frontend 010", count:"6", name:"O’qituvchi", status:"front",
            name_teacher:"O’qituvchi", first:"image/Ellipse 19.png",second:"image/Ellipse 19 (2).png", third:"image/Add.png"
        },
        {date:"December 20, 2022", img:"image/Vector (22).png", teacher:"Backend 001", count:"6", name:"", status:"back"},
        {date:"December 20, 2022", img:"image/Vector (22).png", teacher:"Frontend 011", count:"6", name:"", status:"front"},
        {date:"December 20, 2022", img:"image/Vector (22).png", teacher:"Frontend 013", count:"6", name:"", status:"front"},
        {date:"December 20, 2022", img:"image/Vector (22).png", teacher:"Frontend 018", count:"6", name:"", status:"front"},
        {date:"December 20, 2022", img:"image/Vector (22).png", teacher:"Backend 002", count:"6", name:"", status:"back"},
    ]);

    const clicked = () =>{
        alert("Ma'lumot yo'q")
    };

    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date());
        }, 60 * 1000);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour24: true, minute: 'numeric' });

    const time1 = new Date().toLocaleTimeString();


    return (
        <>
            <ForGroup/>
            <div className="big-group-white">
                <div className="header-group">
                    <div className="Groups">Guruhlar</div>
                    <div className="date-group">{date}</div>
                </div>
                <div>
                    <div className="count-all">
                        <div className="active_group">
                            <p>7</p>
                            <p>Faol guruhlar</p>
                        </div>
                        <div className="active_group">
                            <p>2</p>
                            <p>Tugatgan guruhlar</p>
                        </div>
                        <div className="active_group">
                            <p>9</p>
                            <p>Umumiy guruhlar</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {
                            data && data.map((item, index)=>(
                                <div className="col-xl-3" key={index}>
                                    <div className="date-end">
                                        <div className="for-date-end">{item.date}</div>
                                        <div onClick={clicked} className="for-date-end"><img src={item.img} alt=""/></div>
                                    </div>
                                    <div className="name-teacher">{item.teacher}</div>
                                    <div className="count_num">O’quvchilar soni : 6{item.count}</div>
                                    <p><p>O’rtacha o’z</p></p>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width:"70%"}}>70%</div>
                                    </div>
                                    <div className="teacher__top">
                                        <div className="name_teacher">{item.name_teacher}</div>
                                        <div className="name_teacher_img">
                                            <img src={item.first} alt=""/>
                                            <img src={item.second} alt=""/>
                                            <img onClick={clicked} src={item.third} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <p>{time1}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Groups;