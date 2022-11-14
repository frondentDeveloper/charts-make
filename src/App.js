import React, {useEffect, useState} from "react";
import {VictoryPie} from "victory"


function App() {

    const [myData, setMyData] = useState([
        {id:1, x: "UA", y:""},
        {id:2, x: "IA", y:""},
        {id:3, x: "UB", y:""},
        {id:4, x: "IB", y:""},
        {id:5, x: "UC", y:""},
        {id:6, x: "IC", y:""},
    ]);

    const [loading, setLoading] = useState(false);
    const chart = !loading ?  <VictoryPie
        data={myData}
        colorScale={["blue","red","yellow","green","orange","black"]}
        radius={100}
    /> : <div className="text-center mt-5">Iltimos biros kuting...</div>;

    const editInput = (id, value) =>{
        setLoading(true);
        let newData = [...myData];
        newData.forEach((item, i) => {
            if (item.id === id) {
                newData[i].y = value;
            }
        });
        setMyData(newData);
        setTimeout(()=>{
            setLoading(false)
        },100);
        console.log(myData)
    };

  return (
    <div className="App">
      <h1 className="text-center">Make chart</h1>
        <input placeholder="UA" className="mx-3" onChange={(e)=>editInput(1, +e.target.value)} type="number"/>
        <input placeholder="IA" className="mx-3" onChange={(e)=>editInput(2, +e.target.value)} type="number"/>
        <input placeholder="AI" className="mx-3" onChange={(e)=>editInput(3, +e.target.value)} type="number"/>
        <input placeholder="UB" className="mx-3" onChange={(e)=>editInput(4, +e.target.value)} type="number"/>
        <input placeholder="IB" className="mx-3" onChange={(e)=>editInput(5, +e.target.value)} type="number"/>
        <input placeholder="IC" className="mx-3" onChange={(e)=>editInput(6, +e.target.value)} type="number"/>
        <div style={{height:600}}>
            {chart}
        </div>
    </div>
  );
}

export default App;
