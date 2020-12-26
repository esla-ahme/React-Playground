import React from "react"
import Contact from "./Contact"
const List = (props) => {

  return (
    <div>
      {props.contacts.map((contact) => {
        const { id, name, number, image } = contact;
        return <Contact key={id} id={id} name={name} number={number} image={image} />
      })}
    </div>
  )
}

export default List