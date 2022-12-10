import React from "react";

function ForDashboard (){
    return(
        <div className="big-card">
         <div className="in-bid-card">
             <div className="big-img"><img src="image/Group 10 (2).png" alt=""/></div>
             <div>
                 <p>Oylik To’lovlar</p>
                 <div className="count">$198k</div>
                 <div className="in-big-card-child"><img src="image/arrow-up 1.png" alt=""/> <p>37.8%</p> <div className="price">Oylik</div></div>
             </div>
         </div>
         <div className="in-bid-card">
             <div className="big-img"><img src="images/Group 10 (4).png" alt=""/></div>
             <div>
                 <p>Budjed</p>
                 <div className="count">$2.4k</div>
                 <div className="in-big-card-child"><img src="image/arrow-up 1 (1).png" alt=""/> <p>2%</p> <div className="price">Oylik</div></div>
             </div>
         </div>
         <div className="in-bid-card">
             <div className="big-img"><img src="image/Group 10 (3).png" alt=""/></div>
             <div>
                 <p>Soff Foyda</p>
                 <div className="count">$89k</div>
                 <div className="in-big-card-child"><img src="image/arrow-up 1.png" alt=""/> <p>11%</p> <div className="price">Oylik</div></div>
             </div>
         </div>
     </div>
    )
}

export default ForDashboard;