import Image from "next/image";

const getDoctor = async (id) => {
  const res = await fetch(`http://localhost:8000/alldoctor/${id}`, {
    cache: "no-store",
  });
  const data = await res.json();
 
  return data;
}


export default async function DoctorDetailsPage({ params }) {
  const { id } = await params;
  const doctor = await getDoctor(id);

  if (!doctor) {
    return <p className="text-center mt-10">Doctor not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      <div className="relative w-full h-[400px]">
        <Image
          src={doctor.image}
          fill
          className="object-cover rounded-2xl"
          alt={doctor.name}
        />
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold">{doctor.name}</h1>
        <p className="text-blue-600">{doctor.specialty}</p>
        <p>⭐ {doctor.rating}</p>
        <p>Experience: {doctor.experience}</p>
        <p>Hospital: {doctor.hospital}</p>
        <p>Location: {doctor.location}</p>
        <p className="text-green-600 font-bold">Fee: ৳{doctor.fee}</p>
        <p className="text-gray-600">{doctor.description}</p>
        <p>Availability: {doctor.availability}  </p>
      </div>
    </div>
  );
}