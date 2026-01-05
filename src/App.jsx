import React from 'react'
import {Bookmark} from 'lucide-react'
import Card from './components/card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ZCOX_sbjfAkGUcjI-z_4SyrgI42TG4Qhjg&s",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "https://images.seeklogo.com/logo-png/27/2/google-logo-png_seeklogo-273191.png",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/027/127/473/non_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiRs_UDF9ErfdDIGDXCG1ohEcs1MrTVrqWg&s",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Tesla_logo.png/1200px-Tesla_logo.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://s3.amazonaws.com/cms.ipressroom.com/219/files/202512/692f50553d6332b453bbc5c2_nvidia-logo-vert-blk/nvidia-logo-vert-blk_6390c37f-960b-42bd-a176-b51cfa6d7ba4-prv.png",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];

  return (
    <div>
      <div className='parent'>
       {jobOpenings.map(function(elem,idx){
          return <div key={idx}>
            <Card logo={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location}/>
          </div>
       })}
      </div>
    </div>
  )
}

export default App
