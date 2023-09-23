import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job=> job.id === idInt)

    const handleApplyJob =()=>{
        saveJobApplication(idInt);
        toast('You have apply successfully')
    }
    return (
        <div className=" my-8 ">
            <h2 className=" text-center text-4xl font-semibold">Job Details are here</h2>
            <div className=" grid md:grid-cols-4 gap-4">
                <div className=" border md:col-span-3">
                    <h2 className=" font-bold text-xl">Job Description:<small>{job.job_description}</small></h2>
                    <h2 className=" font-bold text-xl">Job Responsibility:<small>{job.job_responsibility}</small></h2>
                    <h2 className=" font-bold text-xl"> educational Requirements:<small>{job.educational_requirements}</small></h2>
                    <h2 className=" font-bold text-xl">Experiences:<small>{job.experiences}</small></h2>
                </div>
                <div className=" border">
                    <h2 className=" font-bold ">Job Details</h2>
                    <p>Salary:{job.salary}</p>
                    <p>Job Title:{job.job_type}</p>
                    <h2>Contact Information</h2>
                    <p>Phone:{job.phone}</p>
                    <p>Email:{job.email}</p>
                    <p>Address:{job.address}</p>
                    <div>
                        <button onClick={handleApplyJob} className=" btn bg-fuchsia-400">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;