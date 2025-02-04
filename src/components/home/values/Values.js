import { BookOpen, HeartHandshake, Landmark, Star, Users } from "lucide-react";
import Link from "next/link";

const brandValues = [
  {
    title: "Authenticity",
    description:
      "We cherish genuine stories that reflect real emotions and experiences.",
    icon: <BookOpen className="w-6 h-6 " />,
  },
  {
    title: "Compassion",
    description:
      "Every tale is shared with kindness, fostering empathy and connection.",
    icon: <HeartHandshake className="w-6 h-6 " />,
  },
  {
    title: "Legacy",
    description: "We believe in preserving and passing down timeless wisdom.",
    icon: <Landmark className="w-6 h-6 " />,
  },
  {
    title: "Inspiration",
    description: "Our stories uplift, motivate, and leave a lasting impact.",
    icon: <Star className="w-6 h-6 " />,
  },
  {
    title: "Community",
    description:
      "We create a space where stories unite people across generations.",
    icon: <Users className="w-6 h-6 " />,
  },
];

export default function Values() {
  return (
    <section className="relative text-white">
      <div className="max-w-8xl mx-auto container py-16 relative z-[2]">
        <div>
          <div className="flex items-left flex-col px-4">
            <a data-aos="fade-up" href="/">
              <h2 className="text-4xl lg:text-5xl font-extrabold text-left leading-tight lg:w-7/12 md:w-9/12 pt-4">
                What We Stand For
              </h2>
            </a>
            <p
              data-aos="fade-up"
              className="text-md text-left mt-14  leading-normal lg:w-7/12 md:w-9/12"
            >
              Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam
              auctor sit ipsum malesuada a, duis volutpat. Convallis turpis erat
              tempus, viverra aliquet.
            </p>
          </div>
          <div className="mt-20 flex gap-12 flex-wrap justify-between px-4">
            {brandValues.map((brandValue, index) => (
              <div
                data-aos="fade"
                data-aos-delay={`${index * 100}`}
                key={index}
                className="flex sm:w-full md:w-5/12 items-start gap-4"
              >
                <div>{brandValue.icon}</div>
                <div className="w-10/12">
                  <Link href="/">
                    <h4 className="text-2xl font-bold leading-tight">
                      {brandValue.title}
                    </h4>
                  </Link>
                  <p className="text-base  leading-normal pt-2">
                    {brandValue.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="size-full absolute inset-0">
        <span className="bg-black bg-opacity-[0.7] size-full absolute inset-0"></span>
        <img
          className="size-full absolute inset-0 object-cover z-[-1]"
          src="/images/home/values/bg.svg"
          alt="Group-1"
        />
      </div>
    </section>
  );
}
