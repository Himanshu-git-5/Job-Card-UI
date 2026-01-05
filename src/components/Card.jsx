import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={20} /> </button>
        </div>
        <div className="center">
          <h3>{props.company} <span>5 days ago</span></h3>
          <h1>{props.post}</h1>
          <div>
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  )
}

export default Card
