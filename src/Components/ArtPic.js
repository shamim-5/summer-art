import React from 'react';


const ArtPic = ({item}) => {
   const { img, name } = item;
   return (
      <div>
         <img className='md:mr-2 mt-2' src={img} alt={name} />
      </div>
   );
};

export default ArtPic;