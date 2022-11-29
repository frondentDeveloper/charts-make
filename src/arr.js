

// //  1 2 3
//
// // Arrayni string ga ozgartirib ohirgi raqamiga 1 qoshib yana massivga aylantirish
//
// let arr1 = [1,2,3,4,5,6,7,8,9,10];
//
// // for (let number of arr1) {
// //     if (number % 2 == 0){
// //         console.log(number)
// //     }
// // }
// //
// for (let i = arr1 ; i<=arr1; i++){
//     if (arr1%2===0){
//         console.log(arr1);
//         console.log('salom')
//     }
// }
//
// const ar = [3,4,5];
// console.log(ar);
// const change = (ar) =>{
//     if (!ar.length){
//         return console.log("no data")
//     } else {
//         let nwAr = ar.join('');
//         console.log(nwAr)
//         if (parseInt(nwAr%100%10) === 9){
//             nwAr++;
//             let bir = parseInt(nwAr/100);
//             let ikki = parseInt(nwAr%100/10) - 1;
//             let uch = parseInt(nwAr%100%10);
//             let data = [bir, ikki, uch];
//             console.log(data)
//         }else {
//             nwAr++;
//             let bir = parseInt(nwAr/100);
//             let ikki = parseInt(nwAr%100/10) ;
//             let uch = parseInt(nwAr%100%10);
//             let data = [bir, ikki, uch];
//             console.log(data)
//         }
//
//     }
// };
//
// change(ar);




import React, {useEffect, useState} from "react";
import {VictoryPie} from "victory"
import Arr from "./arr"


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




