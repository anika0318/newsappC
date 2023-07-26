import React  from 'react';

export default Newsitem=(props)=> {
  
    let{title,description,imgUrl,newsUrl,author,date,source}=props;
    return (
      <div>
        <div className="card my-2" style={{width: "18rem"}}>
        <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:1}}>
    {source}

  </span>
          <img  src={!imgUrl?"https://english.cdn.zeenews.com/sites/default/files/2023/07/24/1247401-indvswiday5.jpeg":imgUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
             {description}
            </p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl}  target="_blank" className="btn btn-primary">
              Read more...
            </a>
          </div>
        </div>
      </div>
    );
  }

