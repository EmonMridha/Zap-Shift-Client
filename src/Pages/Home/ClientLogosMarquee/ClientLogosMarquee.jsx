import React from "react";
import Marquee from "react-fast-marquee";

// Example company logo URLs (you can replace with your own)
const companyLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
];

const ClientLogosMarquee = () => {
  return (
    <section className="py-16 bg-green-100 mb-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-primary mb-10">
          We've helped thousends of sales teams
        </h2>

        {/* Scrolling Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-slide whitespace-nowrap">
            <Marquee>
                {companyLogos.concat(companyLogos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Company Logo"
                className="h-10 w-auto mx-10 inline-block opacity-80 hover:opacity-100 transition-all duration-300"
              />
            ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
