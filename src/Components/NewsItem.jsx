import React, { Component } from "react";
import Footer from "./Footer";

export default class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: props.pic || "/default.jpg", // fallback to public/default.jpg
    };
  }

  handleImgError = () => {
    this.setState({ imgSrc: "/default.jpg" });
  };

  render() {
    return (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="card shadow-sm h-100">
          <img
            src={this.state.imgSrc}
            className="card-img-top"
            alt={this.props.title}
            height="200"
            style={{ objectFit: "cover" }}
            onError={this.handleImgError}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{this.props.title}</h5>
            <hr />
            <div className="source-date d-flex justify-content-between">
              <p className="mb-0 text-muted">{this.props.source}</p>
              <p className="mb-0 text-muted">
                {new Date(this.props.date).toLocaleDateString()}
              </p>
            </div>
            <hr />
            <p className="card-text">{this.props.description}</p>
            <a
              href={this.props.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-auto w-100"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    );
  }
}
