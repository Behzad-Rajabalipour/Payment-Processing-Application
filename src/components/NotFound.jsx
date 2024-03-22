import React, { Component } from "react";
import style from "../styles/style.module.css";

// Class component for the 'Not Found' page
class NotFound extends Component {
  render() {
    return (
      <h1 className={style['not-found-message']}>Not Found</h1>
    );
  }
}

export default NotFound;
