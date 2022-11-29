import React from "react";
import {Route, Routes} from "react-router";
import Main from "./components/Main";


function App() {
    return (
        <Routes>
            <Route path="/*" element={<Main/>}/>
        </Routes>
    );
}

export default App;
