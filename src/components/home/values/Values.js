import { BookOpen, HeartHandshake, Landmark, Star, Users } from "lucide-react";
import Link from "next/link";

const brandValues = [
  {
    title: "Authenticity",
    description:
      "We cherish genuine stories that reflect real emotions and experiences.",
    icon: <BookOpen className="w-6 h-6 text-gray-800" />,
  },
  {
    title: "Compassion",
    description:
      "Every tale is shared with kindness, fostering empathy and connection.",
    icon: <HeartHandshake className="w-6 h-6 text-gray-800" />,
  },
  {
    title: "Legacy",
    description: "We believe in preserving and passing down timeless wisdom.",
    icon: <Landmark className="w-6 h-6 text-gray-800" />,
  },
  {
    title: "Inspiration",
    description: "Our stories uplift, motivate, and leave a lasting impact.",
    icon: <Star className="w-6 h-6 text-gray-800" />,
  },
  {
    title: "Community",
    description:
      "We create a space where stories unite people across generations.",
    icon: <Users className="w-6 h-6 text-gray-800" />,
  },
];

export default function Values() {
  return (
    <div>
      <div
        className="relative h-full"
        style={{
          background:
            "linear-gradient(0deg, rgba(243, 243, 245, 1) 0%, rgba(215, 219, 255, 1) 99%)",
        }}
      >
        <section className="max-w-8xl mx-auto container py-16">
          <div>
            <div className="flex items-left flex-col px-4">
              <a
                href="/"
                className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800"
              >
                <h2 className="text-4xl lg:text-5xl font-extrabold text-left leading-tight lg:w-7/12 md:w-9/12 pt-4">
                  What We Stand For
                </h2>
              </a>
              <p className="text-md text-left mt-14 text-gray-600 leading-normal lg:w-7/12 md:w-9/12">
                Convallis turpis erat tempus, viverra aliquet. Nullam viverra
                nam auctor sit ipsum malesuada a, duis volutpat. Convallis
                turpis erat tempus, viverra aliquet.
              </p>
            </div>
            <div className="mt-20 flex gap-12 flex-wrap justify-between px-4">
              {brandValues.map((brandValue, index) => (
                <div
                  key={index}
                  className="flex sm:w-full md:w-5/12 items-start gap-4"
                >
                  <div>{brandValue.icon}</div>
                  <div className="w-10/12">
                    <Link
                      href="/"
                      className="focus:text-gray-600 focus:underline hover:text-gray-600 focus:outline-none text-gray-800"
                    >
                      <h4 className="text-2xl font-bold leading-tight">
                        {brandValue.title}
                      </h4>
                    </Link>
                    <p className="text-base text-gray-600 leading-normal pt-2">
                      {brandValue.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="absolute top-0 right-20">
          <img
            className="invisible md:visible lg:w-auto lg:h-auto w-48 h-48"
            src="https://i.ibb.co/0V7KqPk/Group-1.png"
            alt="Group-1"
          />
        </div>
      </div>
    </div>
  );
}
