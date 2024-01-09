import { useNavigate } from "react-router-dom"

export function Career(){
    const navigate = useNavigate();
    // using navigation to navigate pages
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

      {/* career bio with image card */}

        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxpvZS0kz3MN4qPht41OGf1dZaXHj0XKOMA&usqp=CAU" alt="Career image" /></figure>
        <div className="card-body">
          <h2 className="card-title">Career</h2>
          <p></p>
        </div>
      </div>
      <div className="p-2 m-2">
      <figure><img src="https://miro.medium.com/v2/resize:fit:572/1*8tp3caPQO7klijrsv2JDlw.png" alt="Career image" /></figure>
      <p>
          
Employability. This foundational layer matches Maslow’s “Physiological Needs” layer. It represents the basic requirements for entering the workforce, including relevant education, training, degrees, and skills demanded by the job market.
Compensation and Stability. This layer represents having a steady job, adequate compensation matching the required time and skills to do the job, and a supportive work environment.
Growth and Development. This layer involves continuous learning, skill enhancement, and professional development. In this layer, a job allows and requires professionals to develop their skills to perform the role and retain their future employability. The layer also includes the viability and growth trends of the project’s business case.
Work-Life Balance and Well-Being. This layer is about balancing work and personal life, supporting the employee’s overall well-being. This layer focuses on maintaining a healthy work-life balance, managing stress, and prioritizing mental and physical health.
Purpose and Meaning. The pinnacle of the “Hierarchy of Career Priorities,” where individuals seek purpose and meaning in their chosen careers. This layer involves aligning personal values with the professional career, making a positive impact, and finding fulfillment beyond material and external rewards.
      </p>
      </div>
      </div>
    )
}