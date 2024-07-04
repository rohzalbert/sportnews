"use client"
import { useState, useEffect } from "react";
import ArticleList from "@/components/ArticleList";

// import Image from "next/image";
// import styles from "./page.module.css";


export default function Home() {

  const [articles, setArticle] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData(){
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        if(!res.ok){
          throw new Error("Failed to fetch articles");
        }
        const data = await res.json();
        setArticle(data);
        setLoading(false);
      } catch(e){
        setError(e.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>

  return (
    <main>
      <div>
        <h2>Learning Next.js</h2>
        {/* {article.map((a, id) => (
          <p key={id}>{a.title}</p>
        ))} */}
        <ul>
          <ArticleList articles={articles} />
        </ul>
      </div>
    </main>
  );
}
