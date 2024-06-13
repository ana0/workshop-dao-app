import React, { Fragment } from "react";

const View = (props) => {
  console.log(props.children)
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
};

export default View;