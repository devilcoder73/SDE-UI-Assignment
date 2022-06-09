import axios from "axios"
import { useEffect, useState } from "react"
import { Jobs } from "./jobSearchSlice";
import { PaginationForJobs } from "../../Pagination";
import "./jobSearchSlice.css"

const url = "https://beta.gigvistas.com/web-app-api/website/api/v1/gig/search?searchTerm=java&pageNumber=0"

export function JobSearch() {

    const [userData, setUserData] = useState([]);
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(5);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const response = await axios.get(url);
        setUserData(response.data.jobs);
    }

    console.log(userData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = userData.slice(
        indexOfFirstJob,
        indexOfLastJob
    );

    return <>
        <p>Job Search Functionality Starts Here !</p>

        <input placeholder="Eg. web developer, python, customer service" onKeyPress={(event) => { if (event.key === "Enter") {setQuery(event.target.value)}}} />
        <Jobs jobs={currentJobs} query={query}/>

        <section className="job-pagination-section">
            <PaginationForJobs
            jobsPerPage={jobsPerPage}
            totalJobs={userData.length}
            paginate={paginate}
            />
        </section>
        {/* <a href="https://gigvistas.com"> Assignment Details</a> */}
    </>
}