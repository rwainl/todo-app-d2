import React from 'react'

function ToDoList({ list, onStatus, onDelete }) {
    
  return (
    <>
        <ul>
            {list.map((item, id) => {
                return(
                    <li key={id} style={{textDecoration: item.completed ? "line-through" : "none"}}>
                        {item.item}
                        <button onClick={() => onStatus(id)}>Ubah Status</button>
                        <button onClick={() => onDelete(id)}>Hapus</button>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default ToDoList