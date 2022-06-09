import React from 'react'

export const PaginationForJobs = ({ jobsPerPage, totalJobs, paginate }) => {
    const pageNumbers = [];

    const pagination = () => {
        for(let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
            pageNumbers.push(i);
        }
    }
    pagination();
    
    // useEffect(() =>{
    //     pagination();
    // },[])


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}