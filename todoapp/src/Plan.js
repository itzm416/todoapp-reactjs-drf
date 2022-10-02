import React from 'react'

const Plan = (props) => {
  return (
    <>
      <li className="list-group-item list-group-item-secondary">
      {props.index+1} - {props.value}
      <button className="btn-close float-end" value={props.id} onClick={props.clickhandle} data-bs-dismiss="alert" aria-label="Close"></button>
      </li>
    </>
  )
}

export default Plan
