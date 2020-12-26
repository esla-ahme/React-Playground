import React from "react"

const Contact = (props) => {
  const style = {
    "display": "flex",
    "flex-flow": "raw",
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "white",
    borderBottom: " 1px  solid rgba(0,0,0,0.2)",
    margin: "0px 0px 4px"
  }
  const styleImg = {
    display: "block",
    width: "64px",
    height: "64px",
    borderRadius: "50%",
    margin: "20",

  }

  return (
    <div style={style}>
      <img style={styleImg} src={props.image} alt="person" />
      <div>
        <p><b>{props.name}</b></p>
        <p>{props.number}</p>
      </div>
    </div>
  )
}
export default Contact