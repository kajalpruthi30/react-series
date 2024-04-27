import React, { useState, useEffect } from 'react';
import "./Table.css";
import data from '../../Data.json';
import Pagination from '../Pagination/Pagination'; 

function Table() {

    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    // Whenever the current page changes
    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setCurrentItems(data.slice(startIndex, endIndex));
    }, [currentPage]);

    const pageChange = (page) => {
        setCurrentPage(page)
    }

    return (

        <div className='content'>
            <div className='data-table'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Instead of whole Data used currentItems */}
                        {currentItems.map((item, i) => (
                            <tr key={i}>
                                <td>{item.Id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                            </tr>
                        ))}
                    </tbody>            
                </table>
            </div>
            <Pagination 
                totalPages={totalPages} currentPage={currentPage} onPageChange={pageChange}
            />
        </div>

    );
}

export default Table;
