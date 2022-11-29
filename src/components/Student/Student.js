import React from 'react';
import AllMains from "../all-mains";
import AllStudent from "./allStudent";

function Student(props) {
    return (
        <div className="mt-3">
            <AllMains/>
            <AllStudent/>
        </div>
    );
}

export default Student;