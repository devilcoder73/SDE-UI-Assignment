import React from "react";
import "./jobSearchSlice.css"
import { useState } from "react";

export const Jobs = ({ jobs, query }) => {


  return (
    <React.Fragment>
      {
        jobs.filter(job => {
            if (query === "")
            {
                return job;
            }
            else if (job.title[0].toLowerCase().includes(query.toLowerCase()) || job.companyName[0].toLowerCase().includes(query.toLowerCase()) || job.category.toLowerCase().includes(query.toLowerCase()) || job.expertise.toLowerCase().includes(query.toLowerCase()))
            {
                return job;
            }
        }).map((job) => (
        <div className="job-item">
          {/* <div className="job-image">
            <img src={job.companyLogo} class="card-img" alt="..." />
          </div> */}
          <div className="job-details">
            <h6 className="card-text">
              <strong>{job.title}</strong>
            </h6>
            <h6 className="description">
              <strong>{job.companyName}</strong>
            </h6>
            <h6 className="date">
              {job.category}
            </h6>
            <h6 className="date">
              {job.expertise}
            </h6>
            
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};