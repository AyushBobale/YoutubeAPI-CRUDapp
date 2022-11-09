import { useEffect, useState } from "react";

function App() {
  const [videos, setVideos] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [sort, setSort] = useState(1);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:5000/?page=${pageNumber}&pagesize=3&sort=${sort}`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data['total'], data['data'][0]);
        setVideos(data['data']);
        setNumberOfPages(data['total']);
      })
  }, [pageNumber, sort]);

  return (
    <div className="App">
      <h2>Page {pageNumber + 1 } of {numberOfPages}</h2>
        {videos.map((video) => {
          return (
          <div key={video.videoId} className='card'>
            <h3>{ video.title }</h3>
            <p>{ video.description }</p>
            <p>{ video.publishedAt }</p>
            <img  src     = { video.thumbnails.high.url } 
                  height  = {video.thumbnails.high.height}
                  width   = {video.thumbnails.high.width}/>
            <hr/>
          </div>)
        })}
      {
        pages.map((pageIndex) => {
          return (
            <button 
              onClick = {() => setPageNumber(pageIndex)}
              key = {pageIndex}>
                {pageIndex + 1}
            </button>
          )
        })
      }
      <button>Change order</button>
    </div>
  );
}

export default App;
