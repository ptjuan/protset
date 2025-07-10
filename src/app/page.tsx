"use client"

import { DataHandler } from "./utils/DataHandler";
import { useEffect, useState } from "react";


export default function Home() {

  const sections = ['informative','nTransactional','mTransactional','Service','Feedback'];
  let i: number = 1;
  const [secti, setSecti] = useState(0);

  const [infor, setInfor] = useState({
    id: 0,
    type: '',
    product: '',
    medium: '',
    category: '',
    clientt: '',
    user: 0,
    complexity: '',
    description: '',
    score: 0

  });

useEffect(() => {
  DataHandler(i,sections[secti])
    .then(received => setInfor(received))
},[])



  return(
    <div>
        <h1>{infor.type}</h1>
        <p>{infor.product}</p>
        <p>{infor.medium}</p>

        {infor.category == '' ? null : <p>{infor.category}</p>}
        {infor.clientt == '' ? null : <p>{infor.clientt}</p>}
        {infor.user == 0 ? null : <p>{infor.user}</p>}
        {infor.complexity == '' ? null : <p>{infor.complexity}</p>}
        {infor.description == '' ? null : <p>{infor.description}</p>}
        {infor.score == 0  ? null : <p>{infor.score}</p>}

        {infor.id == 1 ? null: <button onClick={() => {
          const currentId = infor.id - 1;
          DataHandler(currentId, sections[secti])
            .then(received => setInfor(received))
        }} >Anterior</button> }

        <button onClick={() => {
          const currentId = infor.id + 1 ;
          DataHandler(currentId, sections[secti])
            .then(
              received => setInfor(received)
            )
        }} >Siguiente</button>

        <br /><br />

        {secti == 0 ? null : <button
          onClick={() => {
            const currentC = secti
          }}
        >
          Seccion anterior</button>}

        {secti == 4 ? null : <button onClick={() => {
          
          setSecti(secti + 1);
          console.log(secti);
          DataHandler(infor.id,sections[secti])
            .then(received => setInfor(received))
        }}>
          Seccion siguiente</button>}
        




    </div>
  )
}