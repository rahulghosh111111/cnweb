const domains = [
  {
    title: "WEB",
    description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  },
  {
    title: "CLOUD COMPUTING",
    description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  },
  {
    title: "Marketing",
    description: "dolor in reprehenderit in voluptate velit esse cillum dolore eu",
  },
];

export default function Domains() {
  return (
    <section className="py-16 bg-[#FF8820]">
      <h2 className="text-[60px] sm:text-[80px] md:text-[100px] text-center font-bold text-white mb-12">Our Domains</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {domains.map((domain, index) => (
          <div key={index} className="border-3 border-white rounded-xl p-6 text-center w-full max-w-sm mx-auto">
            <h3 className="text-lg font-bold mb-4 text-white">{domain.title}</h3>
            <div className="bg-[#AE6969] h-52 sm:h-56 md:h-65 rounded flex items-center justify-center text-white font-semibold mb-4 border-2">
              IMAGES
            </div>
            <p className="text-sm text-white leading-relaxed">{domain.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}