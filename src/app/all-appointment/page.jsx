import DoctorList from "@/app/components/DoctorList";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "All Appointments",
  description:
    "Browse all available doctor appointments and schedule your visit easily.",
};

export default async function AllAppointment() {
  const res = await fetch("http://localhost:8000/alldoctor");
  const doctors = await res.json();

  return (
    <div>
      <h2 className="text-2xl font-bold m-4 flex text-center justify-center">
        All Doctors
      </h2>
      <DoctorList doctors={doctors} />
    </div>
  );
}