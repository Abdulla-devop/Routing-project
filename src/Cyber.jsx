import { useNavigate } from "react-router-dom"

export function CyberCourse(){
    const navigate = useNavigate();
    return(
        <div>
                         <div className="navbar bg-base-100">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl"onClick={() => navigate("/")}>All</a>
        <a className="btn btn-ghost text-xl" onClick={() => navigate("/fsd")}>Full Stack Development</a>
        <a className="btn btn-ghost text-xl"onClick={() => navigate("/datascience")}>Data Science</a>
        <a className="btn btn-ghost text-xl"onClick={() => navigate("/Cybersecurity")}>Cyber Security</a>
        <a className="btn btn-ghost text-xl"onClick={() => navigate("/Career")}>Career</a>
    </div>
    <div className="flex-none">
        <button className="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
        </button>
    </div>
    </div>

     <div className="card w-96 bg-base-100 shadow-xl">
   <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEo9oESV3sEH3vgXVC9cAx7oG67p9k9Cnb6g&usqp=CAU" alt="Cyber Security image" /></figure>
   <div className="card-body">
     <h2 className="card-title">Cyber Security</h2>
     <p>A career in cyber security is complex and many roles can be found with banks, retailers & government organizations</p>
     <div className="card-actions justify-end">
      <button className="btn btn-primary">Apply Now</button>
    </div>
   </div>
 </div>
    </div>
    )
}