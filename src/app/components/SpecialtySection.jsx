import { Card, Button } from "@heroui/react";
import {
  IconActivity,
  IconBrain,
  IconBone,
  IconEye,
  IconDroplet,
  IconUser,
  IconMicroscope,
  IconStethoscope,
} from "@tabler/icons-react";

const specialties = [
  { name: "Cardiology",    count: 48, icon: IconActivity,     bg: "bg-red-50",    iconColor: "text-red-600"    },
  { name: "Neurology",     count: 36, icon: IconBrain,         bg: "bg-purple-50", iconColor: "text-purple-600" },
  { name: "Orthopedics",   count: 29, icon: IconBone,          bg: "bg-amber-50",  iconColor: "text-amber-600"  },
  { name: "Ophthalmology", count: 22, icon: IconEye,           bg: "bg-blue-50",   iconColor: "text-blue-600"   },
  { name: "Dentistry",     count: 55, icon: IconDroplet,       bg: "bg-teal-50",   iconColor: "text-teal-500"   },
  { name: "Pediatrics",    count: 41, icon: IconUser,          bg: "bg-pink-50",   iconColor: "text-pink-600"   },
  { name: "Dermatology",   count: 33, icon: IconMicroscope,    bg: "bg-yellow-50", iconColor: "text-yellow-600" },
  { name: "General",       count: 72, icon: IconStethoscope,   bg: "bg-sky-50",    iconColor: "text-sky-600"    },
];

export default function SpecialtySection() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#0a3d62] mb-2">
          Browse by Specialty
        </h2>
        <p className="text-gray-500 text-sm">
          Find the right specialist for your needs
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {specialties.map((spec, i) => {
          const Icon = spec.icon;
          return (
            <Card
              key={i}
              className="border border-gray-200 bg-white hover:border-teal-300 hover:bg-teal-50/40 transition-all duration-200"
              shadow="none"
            >
              <div className="flex flex-col items-center justify-center py-6 px-3 gap-3">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${spec.bg}`}>
                  <Icon size={26} className={spec.iconColor} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-800">{spec.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{spec.count} Doctors</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-9">
        <Button
          variant="bordered"
          className="border-[#0a3d62] text-[#0a3d62] font-semibold px-8 hover:bg-[#0a3d62] hover:text-white transition-colors"
        >
          View All Specialties
        </Button>
      </div>
    </section>
  );
}