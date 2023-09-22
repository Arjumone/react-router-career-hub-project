import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [dataLength,setDataLength]= useState(4)

    useEffect(()=>{
        fetch('/jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className=" my-6">
            <h2 className=" text-center text-4xl">Featured Jobs</h2>
            <p className=" text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam enim aperiam voluptatum nemo temporibus natus reiciendis consequatur voluptas odit optio.</p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    jobs.slice(0,dataLength).map(job=><Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dataLength === jobs.length ? 'hidden': ''}>
                <button onClick={()=>setDataLength(jobs.length)} className=" btn btn-primary justify-center text-center my-4">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;