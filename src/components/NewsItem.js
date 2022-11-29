import React from 'react'

const NewsItem = (props) => {
      let {title , description , imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
            <div className="card" >
                <img src={imageUrl}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...<span className="badge rounded-pill bg-success">{source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p> By {author? author:"Unknown"} on {new Date(date).toGMTString()}</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
}

export default NewsItem
    