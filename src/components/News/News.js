import React from "react";
import {useEffect } from "react";
import './News.scss';

function News() {

  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      await loadContent();
    })();
  }, []);

  async function loadContent() {
    try {
      // Api for Nasa news (NASA'S APOD API)
      const res = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=k6LiFxfOTe9ulpksPIVs3Ix4BfvYYXAOfKwJK5YK"
      );
      const data = await res.json();
      console.log(data)

      //insert data into HTML
      insertHTML(data)
    } catch (error) {
      console.log("Error fetching NASA news");
    }
  }

  // Inserts data to DOM
  function insertHTML(data) {
    const fail = 'Data Failed To Fetch';

    document.querySelector('.newsHeader').style.background = `#1F4C73 url('http://news.bbcimg.co.uk/news/special/2015/newsspec_10077/content/english/img/1024/future_of_news.jpg') no-repeat center center`;
    document.querySelector('.newsDate').textContent = data.date ? data.date + ' | NEWS OF THE DAY' : fail;
    document.querySelector('.newsTitle').textContent = data.title ? data.title : fail;
    document.querySelector('.newsExplanation').innerHTML = data.explanation ? parseContent(data.explanation) : fail;
    document.querySelector('.nasaAPOD').src = data.url ? data.url : fail;
    document.querySelector('.nasaAPOD').alt = data.title ? data.title : fail;
    document.querySelector('.nasasNewsAuthor').textContent = data.copyright ? 'By: ' + data.copyright : "Nasa";
  }

   // Separates paragraph into lines
   function parseContent(str) {
    return str.split('. ').join('. <br/><br/>');
  }

  return (
    <section className="nasaNews" id="news">
      <div className="newsContainer">
        <header className="newsHeader"></header>

        <div className="titleCard">
          <p className="newsDate">Data not fetched</p>
          <h2 className="newsTitle">Data not fetched</h2>
        </div>

        <div className="contentCard">
          <p className="newsExplanation">Data not fetched</p>
          <img className="nasaAPOD" alt="" />
          <p className="nasasNewsAuthor">Data not fetched</p>
        </div>
      </div>
    </section>
  );
}

export default News;
