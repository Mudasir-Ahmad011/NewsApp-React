import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time,source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"}}>
          <span className="badge rounded-pill bg-warning">
            {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By <span style={{ fontWeight: "600" }}>{author}</span> on {time}
              </small>
            </p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
