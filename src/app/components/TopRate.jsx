import { Card } from '@heroui/react';
import Image from 'next/image';

const TopRatedPage = async () => {
  const res = await fetch('http://localhost:8000/alldoctor');
  const photos = await res.json();

  return (
    <div>
      {photos.map((photo) => (
        <Card key={photo.id} className='border rounded-2xl shadow-lg p-4' variant="secondary">

          <div className='w-full aspect-square relative mb-4'>
            <Image
              src={photo.image}
              fill
              alt={photo.title}
              className='object-cover rounded-xl'
            />
          </div>

          <div>
            <h3 className='text-xl font-bold mb-2'>{photo.name}</h3>
            <p className='text-gray-600 mb-2'>Age: {photo.age} years</p>
            <p className='text-gray-600 mb-2'>Location: {photo.location}</p>
          </div>

        </Card>
      ))}
    </div>
  );
};

export default TopRatedPage;