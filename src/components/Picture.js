import React from 'react';

const Picture = ({data}) => {
  return <div className='picture'>
     <div> <p>{data.photographer}</p></div>
      <div className="photoContainer">
          <img src={data.src.large} alt="" />
      </div>
      
    <div><p>
          Download: <a target="_blank" href={data.src.large}>Click</a>
      </p> </div>
  </div>;
};

export default Picture;

