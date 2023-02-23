import React from 'react'

const NewsItem =(props)=> {
  
    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <img src={!imageUrl?"https://aniportalimages.s3.amazonaws.com/media/details/ANI-20230110073128.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknow" : author} on {date}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark btn-sm ">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
