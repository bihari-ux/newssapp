import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language: "hi",
      search: "",
    };
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeSearch = this.changeSearch.bind(this);
  }

  changeLanguage(input) {
    this.setState({ language: input });
  }

  changeSearch(input) {
    this.setState({ search: input });
  }

  render() {
    return (
      <BrowserRouter>
        <div
          className="app-container"
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          {/* Navbar always on top */}
          <Navbar
            changeLanguage={this.changeLanguage}
            changeSearch={this.changeSearch}
          />

          {/* Main content area */}
          <div style={{ flex: 1 }}>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="All"
                  />
                }
              />
              <Route
                path="/All"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="All"
                  />
                }
              />
              <Route
                path="/Politics"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Politics"
                  />
                }
              />
              <Route
                path="/Crime"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Crime"
                  />
                }
              />
              <Route
                path="/Science"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Science"
                  />
                }
              />
              <Route
                path="/Technology"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Technology"
                  />
                }
              />
              <Route
                path="/Entertainment"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Entertainment"
                  />
                }
              />
              <Route
                path="/Sports"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Sports"
                  />
                }
              />
              <Route
                path="/Cricket"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Cricket"
                  />
                }
              />
              <Route
                path="/IPL"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="IPL"
                  />
                }
              />
              <Route
                path="/Economics"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Economics"
                  />
                }
              />
              <Route
                path="/International"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="International"
                  />
                }
              />
              <Route
                path="/India"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="India"
                  />
                }
              />
              <Route
                path="/Jokes"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="Jokes"
                  />
                }
              />
              <Route
                path="/*"
                element={
                  <Home
                    search={this.state.search}
                    language={this.state.language}
                    q="All"
                  />
                }
              />
            </Routes>
          </div>

          {/* Footer always at bottom */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
