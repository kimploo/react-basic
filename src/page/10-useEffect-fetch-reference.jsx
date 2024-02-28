import { useEffect, useState } from "react";
import s from "./page.module.css";
const HOST = `http://localhost:3000`

function getAllFruits() {
  const url = new URL(HOST)
  url.pathname = '/fruits';
  return fetch(url)
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      throw new Error('Network response was not ok.');
    })
}

function deleteOneFruit(id) {
  const url = new URL(HOST)
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response was not ok.');
  })
}


export default function Page() {
  const [fruits, setFruits] = useState([]);
  
  useEffect(() => {
    getAllFruits().then(res => setFruits(res.map(f => ({...f, quantity: 0}))))
  }, [])
  
  const handleDelete = (id) => {
    deleteOneFruit(id)
    .then(() => {
      getAllFruits().then(res => setFruits(res.map((f, i) => ({...f, quantity: fruits[i].quantity}))))
    })
  }; 

  return (
    <div className={s.appContainer}>
      <div></div>
      <ul className={s.itemListWrapper}>
        {fruits.map((f, i) => (
          <li className={s.itemListItem} key={f.name + i}>
            <span>{f.name}</span>
            <span>{f.color}</span>
            <span>{f.price}</span>
            <button type="button" onClick={() => handleDelete(i)}>
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
