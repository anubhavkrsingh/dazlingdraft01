import DoodlePattern from "./DoodlePattern";

const awardsData = [
  {
    id: 1,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42d9673d9c21b3b6aa990de1216e3d15a8543514?width=529",
    title: "CIDESCO International Certification",
    description: "Globally recognized beauty & spa therapy qualification",
  },
  {
    id: 2,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8a08bb694b25637c862901b34b13eb9382bc51f5?width=531",
    title: "VTCT Accreditation",
    description: "UK-based professional beauty & hairdressing standards",
  },
  {
    id: 3,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42d9673d9c21b3b6aa990de1216e3d15a8543514?width=529",
    title: "HABIA Endorsed Academy",
    description: "Hair and Beauty Industry Authority UK recognition",
  },
];

export default function Awards() {
  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      {/* Doodle Pattern Background */}
      <DoodlePattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <p className="font-libre-franklin text-[#D09163] font-medium text-sm uppercase tracking-widest mb-4">
            CERTIFICATIONS & AWARDS
          </p>
          <h2 className="font-playfair-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            International <span className="text-[#D09163]">Recognitions</span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Image Container - Preserves full award photo */}
              <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="absolute inset-0 w-full h-full object-contain p-8 md:p-10"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-5 transition-opacity pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-center text-center">
                <h3 className="font-libre-franklin font-bold text-lg md:text-xl text-gray-800 mb-3">
                  {award.title}
                </h3>
                <p className="font-libre-franklin text-sm md:text-base text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}