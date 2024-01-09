import { useNavigate } from "react-router-dom"


export default function AllCourses(){
  // using navigation to navigate pages
    const navigate = useNavigate();
    return(
        <div>
            <div className="navbar bg-base-100">
    <div className="flex-1">
        <a className="btn btn-ghost text-xl">All</a>
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
    {/*  cards to display each courses*/}
    </div>
        <div className="flex gap-4">
         <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvkGViTFAdkkzWXIpc6WVhYiEqDU8tLBZIw&usqp=CAU" alt="Full stck image" /></figure>
  <div className="card-body">
    <h2 className="card-title">Full Stack Development</h2>
    <p>Grow as a Full-Stack developer. Get development experience in MERN</p>
  </div>
</div>
          <div className="card w-96 bg-base-100 shadow-xl">
   <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSQP_x9y2Q5RV0XbojJp7oowNIqaapAjT40A&usqp=CAU" alt="Data science image" /></figure>
   <div className="card-body">
     <h2 className="card-title">Data Science</h2>
     <p>Data Science from Top IIT & Industry Experts</p>
   </div>
 </div>

 <div className="card w-96 bg-base-100 shadow-xl">
   <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEo9oESV3sEH3vgXVC9cAx7oG67p9k9Cnb6g&usqp=CAU" alt="Cyber Security image" /></figure>
   <div className="card-body">
     <h2 className="card-title">Cyber Security</h2>
     <p>A career in cyber security is complex and many roles can be found with banks, retailers & government organizations</p>
   </div>
 </div>
  
 <div className="card w-96 bg-base-100 shadow-xl">
   <figure><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxpvZS0kz3MN4qPht41OGf1dZaXHj0XKOMA&usqp=CAU" alt="Career image" /></figure>
   <div className="card-body">
     <h2 className="card-title">Career</h2>
     <p></p>
   </div>
 </div>
</div>
</div>
    )
}