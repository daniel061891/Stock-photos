import React ,{useState,useEffect} from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';

const Homepage = () => {
    const [input,setInput]= useState("");
    let [data,setData] = useState(null);
    let [page,setPage] = useState(1);
    let [currentSearch, setCurrentSearch] = useState("");
    const auth = '563492ad6f917000010000018b14eec7e4264c779f2d96fbf508ef94'
    const basicURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"
    const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=1&per_page=15`


    const searchHandler = async(url) =>{
      setPage(2);
      const dataFetch = await fetch(url,{
        method:'GET',
        headers:{
          Accept:"application/json",
          Authorization:auth
        }
      });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
    // console.log(parseData.photos);
  }

  const morepicture = async()=>{
    let newURL ;
    if (currentSearch==="") {
      newURL=  `https://api.pexels.com/v1/curated?page=${page}&per_page=15`
    }else{
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${page}&per_page=15`
    }
    setPage(page+1);
    const dataFetch = await fetch(newURL,{
      method:'GET',
      headers:{
        Accept:"application/json",
        Authorization:auth
      }
    });
  let parseData = await dataFetch.json();
  setData(data.concat(parseData.photos));
  }
  
  useEffect(()=>{
    searchHandler(basicURL);
  },[])

  useEffect(() => {
    if (currentSearch === "") {
      searchHandler(basicURL);
    } else {
      searchHandler(searchURL);
    }
  }, [currentSearch]);

  
  return <div>
     <Search searchHandler={()=>{setCurrentSearch(input)}} setInput={setInput} />
     <div className="pictures">
       {data&&
       data.map((d)=>
         <Picture key={d.id} data={d}/>
      )}
     </div>
     <div className="morePictures">
       <button onClick={morepicture}>More</button>
     </div>
  </div>;
};

export default Homepage;
