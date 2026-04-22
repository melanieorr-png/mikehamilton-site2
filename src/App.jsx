export default function App() {
  const services = [
    {
      title: "Tender Writing, Grants & Government Funding Support",
      description:
        "Practical support for enterprises to build capability, strengthen commercial positioning, and compete with confidence.",
    },
    {
      title: "Organisational Performance, Quality Assurance & Revenue Growth",
      description:
        "Support organisations to strengthen performance, improve commercial outcomes, and enhance financial sustainability.",
    },
    {
      title: "Remote & Regional VET Leadership",
      description:
        "Specialist expertise in delivering high-impact VET across remote, regional and Indigenous communities.",
    },
    {
      title: "National Skills Agreement & VET Funding Strategy",
      description: (
        <>
          Position your organisation to secure and sustain funding under the{" "}
          <a
            href="https://www.dewr.gov.au/national-skills-agreement"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            National Skills Agreement
          </a>
          , including priority areas such as Closing the Gap, Centres of Excellence, and regional workforce delivery.
          <br />
          <br />
          While the National Skills Agreement sets national priorities, delivery in the Northern Territory requires a fundamentally different approach — including remote delivery models, workforce mobility, and culturally responsive training. This is where Mike’s experience translates into real competitive advantage.
        </>
      ),
    },
    {
      title: "Executive Advisory & Board Support",
      description:
        "Trusted advisor to CEOs, Boards and Executives on governance, performance, and reform.",
    },
    {
      title: "Sector Positioning & Competition Benchmarking",
      description:
        "Operate confidently in niche markets by interpreting NCVER data and other sector intelligence to position your organisation for growth and competitiveness.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">
              High-Performance VET Leadership
            </h1>
            <p className="text-slate-400">
              Strategic advisory, funding growth, and system reform expertise across Australia — with deep capability in remote and Northern Territory delivery.
            </p>
          </div>

          {/* Profile Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg shadow-blue-500/30">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-2xl shadow-md hover:shadow-blue-500/20 transition"
            >
              <h2 className="text-xl font-semibold mb-3">
                {service.title}
              </h2>
              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
