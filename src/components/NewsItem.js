  import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,ImageUrl,newsurl,author,publishedAt,source}=this.props;
    return (
      <div className="my-3">
           <div className="card" style={{height:"60vh"}} >
                <img className="card-img-top" style={{width:"100%", height:"40%"}} src={!ImageUrl?"https://images.barrons.com/im-76043616/social":ImageUrl}  alt="..."/>
                <div className="card-body">
                <h5 className="card-title" style={{height:"25%"}}>{!title?"null":title.slice(0,50)}...</h5>
   
                <p className="card-text" style={{margin:"10px 5px",height:"35%", backgroundColor:"pink"}}>
                {!description?"null":description.slice(0,50)}...
                </p>
                <p className="card-text"><small className="text-body-secondary" style={{height:"10%",fontSize:"10px",margin:"2px 2px"}}>{author?author:"unknow"} {new Date(publishedAt).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-primary" rel="noreferrer">
                    Read more
                </a> 
                 <div className="card-text"><small className="text-body-secondary" style={{height:"10%",fontSize:"10px",margin:"2px 2px", float:"right"}}>{source}</small></div>

                </div>
            </div>
            
      </div>
    );
  }
}

export default NewsItem;
