import { useState, useEffect } from 'react'
import './App.css'

import Card from './components/Card.jsx'

// import { Link } from "react-router-dom";
import supabase from "./client.js"

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();
  }, []);

  async function getCreators() {
    const {data} = await supabase.from("creators").select();
    setCreators(data);
  }


  return (
    <>
      <h1>CREATORVERSE</h1>
      {creators.map((creator) => (
        <div className="Cards" key={creator.id}>
          <Card creator_name={creator.creator_name} url={creator.url} desc={creator.desc} imgURL={creator.imgURL} />
        </div>
      ))}
      {/* <Card name="Catra" /> */}
    </>
  )
}

export default App
