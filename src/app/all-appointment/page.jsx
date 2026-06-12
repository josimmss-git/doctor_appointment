import React from 'react';
import PhotoCard from '../components/Features/PhotoCard';


export const dynamic = 'force-dynamic'


const AllAppointment =async () => {
  const res = await fetch('http://localhost:8000/alldoctor')
  const photos = await res.json()
  console.log(photos)
  return (
     <div>
      <h2 className='text-2xl font-bold m-4 flex text-center justify-center'>All Doctors</h2>

      
      
<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
     {photos.map(photo=> < PhotoCard key={photo.id} photo={photo} />)}
      </div> 

    </div>
  );
};

export default AllAppointment;