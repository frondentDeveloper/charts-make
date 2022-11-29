import React, {useState, useEffect} from 'react';
import "./student.scss"
import ReactPaginate from "react-paginate";
const pageSize = 8;
function AllStudent(props) {

    const [student, setStudent] = useState([
        {name:"Jane Cooper", position:"Microsoft", number:"(225) 555-0118", price:"697 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Floyd Miles", position:"Yahoo", number:"(205) 555-0100", price:"597 000", department:"Frontend 010", status:<div className="Inactive">Inactive</div>},
        {name:"Ronald Richards", position:"Adobe", number:"(302) 555-0107", price:"600 000", department:"Frontend 010", status:<div className="Inactive">Inactive</div>},
        {name:"Marvin McKinney", position:"Tesla", number:"(252) 555-0126", price:"252 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Jerome Bell", position:"Google", number:"(629) 555-0129", price:"858 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Kathryn Murphy", position:"Microsoft", number:"(406) 555-0120", price:"787 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Jacob Jones", position:"Yahoo", number:"(208) 555-0112", price:"464 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Kristin Watson", position:"Facebook", number:"(704) 555-0127", price:"828 000", department:"Frontend 010", status:<div className="Inactive">Inactive</div>},
        {name:"Jane Cooper", position:"Microsoft", number:"(225) 555-0118", price:"697 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Floyd Miles", position:"Yahoo", number:"(205) 555-0100", price:"597 000", department:"Frontend 010", status:<div className="Inactive">Inactive</div>},
        {name:"Ronald Richards", position:"Adobe", number:"(302) 555-0107", price:"600 000", department:"Frontend 010", status:<div className="Inactive">Inactive</div>},
        {name:"Marvin McKinney", position:"Tesla", number:"(252) 555-0126", price:"252 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Jerome Bell", position:"Google", number:"(629) 555-0129", price:"858 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Kathryn Murphy", position:"Microsoft", number:"(406) 555-0120", price:"787 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Jacob Jones", position:"Yahoo", number:"(208) 555-0112", price:"464 000", department:"Frontend 010", status:<div className="active">Active</div>},
        {name:"Kristin Watson", position:"Facebook", number:"(704) 555-0127", price:"828 000", department:"Frontend 010", status:<div className="Inactive">Inactive</div>},
    ]);

    const [totalItems, setTotalItems] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(student.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(student.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, student]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % student.length;
        setItemOffset(newOffset);
    };

    const [searcgTerm, setsearchTerm] = useState("");

    return (
        <div className="main-white-card">
            <div className="student_header">
               <div> <div className="all_student">Hamma O’quvchilar</div>
                   <div className="status_student_name">Faol o’quvchilar</div>
               </div>
                <div className="left_student_header">
                    <div className="first_input_div">
                        <img className="serach" src="image/search 1.png" alt=""/>
                        <input placeholder="search" onChange={event => {setsearchTerm(event.target.value)}} className="search_student" type="search"/>
                    </div>
                    <div className="status_student_select">
                        <p>Short Status : <select name="" id="">
                            <option value="">Faol</option>
                            <option value="">No Faol</option>
                        </select></p>
                    </div>
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">F.I.O</th>
                    <th scope="col">Yo’nalish</th>
                    <th scope="col">Telefon nomer</th>
                    <th scope="col">To’lov</th>
                    <th scope="col">Guruh</th>
                    <th scope="col">Status</th>
                </tr>
                </thead>
                <tbody>
                    {currentItems && currentItems.filter((value => {
                        if (searcgTerm === ""){
                            return value
                        }else if (value.name.toLowerCase().includes(searcgTerm.toLowerCase())){
                            return value
                        }
                        else if (value.position.toLowerCase().includes(searcgTerm.toLowerCase())){
                            return value
                        } else if (value.number.toLowerCase().includes(searcgTerm.toLowerCase())){
                            return value
                        }else if (value.department.toLowerCase().includes(searcgTerm.toLowerCase())){
                            return value
                        }
                    })).map((item, index)=>(
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.position}</td>
                            <td>{item.number}</td>
                            <td>{item.price}</td>
                            <td>{item.department}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}

                </tbody>

            </table>
            <div className="my-pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>
        </div>
    );
}

export default AllStudent;