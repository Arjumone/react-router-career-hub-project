import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops!!!</h2>
            <Link to='/'><button className=" bg-slate-400">Go to Home Back</button></Link>
        </div>
    );
};

export default ErrorPage;