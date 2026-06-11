"use client" // ✅ সবার উপরে এটা আবশ্যক

import React from 'react';
import { Button, Card } from "@heroui/react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PhotoCard = ({ photo }) => {
  const router = useRouter();

  return (
    <Card className="border rounded-2xl shadow-lg p-4 flex flex-col gap-3">
      {/* Image */}
      <div className="w-full aspect-square relative">
        <Image
          src={photo.image}
          fill
          alt={photo.name}
          className="object-cover rounded-xl"
        />
      </div>

      {/* Rating */}
      <p className="text-sm font-medium text-yellow-500">⭐ {photo.rating}</p>

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-bold">{photo.name}</h3>
        <p className="text-gray-600 text-sm">Location: {photo.location}</p>
        <p className="text-gray-500 text-sm line-clamp-3">{photo.description}</p>
      </div>

      {/* Button */}
      <Button
        className="w-full mt-auto cursor-pointer"
        color="primary"
        onClick={() => router.push(`/alldoctor/${photo._id}`)} // ✅ এটাই connection
      >
        View Details
      </Button>
    </Card>
  );
};

export default PhotoCard;