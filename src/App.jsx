import profileImg from "../public/mhprofile.JPG";
import logoImg from "../public/logo3.PNG";

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
            className="text-sky-400 underline hover:text-sky-300"
          >
            National Skills Agreement
          </a>
          , including priority areas such as Closing the Gap, Centres of
          Excellence, and regional workforce delivery.
          <br />
          <br />
          While the National Skills Agreement sets national priorities, delivery
          in the Northern Territory requires a fundamentally different approach —
          including remote delivery models, workforce mobility, and culturally
          responsive training. This is where Mike’s experience translates into
          real competitive advantage.
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
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Top logo */}
        <div className="flex justify-center md:justify-start mb-8">
          <img
            src={logoImg}
            alt="Mike Hamilton logo"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-10">
          <div>
            <p className="text-sky-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
              Strategic VET Consulting
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              High-Performance VET Leadership for Growth, Reform and Results
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Mike Hamilton provides specialist consulting across vocational
              education, government funding, organisational performance, and
              remote delivery strategy. He works with leaders who need practical
              advice, strong execution, and a clear path to growth.
            </p>

            <div className="space-y-2 text-slate-200 mb-8">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@mikehamilton.com.au"
                  className="text-sky-400 hover:text-sky-300"
                >
                  info@mikehamilton.com.au
                </a>
              </p>
              <p>
                <strong>Website:</strong>{" "}
                <a
                  href="https://mikehamilton.com.au"
                  className="text-sky-400 hover:text-sky-300"
                >
                  mikehamilton.com.au
                </a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@mikehamilton.com.au"
                className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
              >
                Contact Mike
              </a>
              <a
                href="#services"
                className="border border-slate-600 hover:border-sky-400 hover:text-sky-300 px-6 py-3 rounded-2xl transition"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-3xl scale-110"></div>
              <img
                src={profileImg}
                alt="Mike Hamilton"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-sky-400 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-12 border-t border-slate-800">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">About Mike</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Mike Hamilton is a senior VET executive and trusted advisor with
              deep experience across training, funding strategy, operational
              performance, and public sector engagement. He brings a strong
              track record in helping organisations navigate complexity, respond
              to reform, and position themselves for sustainable growth.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-12 border-t border-slate-800">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg hover:border-sky-500/50 transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <div className="text-slate-300 leading-relaxed">
                  {service.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* NT Differentiator */}
        <section className="py-12 border-t border-slate-800">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              Why NT and Remote Delivery Experience Matters
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Delivering successful VET outcomes in the Northern Territory is
              not the same as delivering in metropolitan settings. Remote
              logistics, workforce mobility, cultural capability, thin markets,
              and service access all shape what good delivery looks like. Mike’s
              experience in these environments means clients gain advice that is
              practical, grounded, and built for real conditions — not just
              policy theory.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 border-t border-slate-800">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to strengthen your position?
            </h2>
            <p className="text-slate-300 text-lg mb-6">
              Whether you need support with funding strategy, organisational
              performance, reform, or remote delivery, Mike can help you move
              with confidence.
            </p>
            <a
              href="mailto:info@mikehamilton.com.au"
              className="inline-block bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-slate-800 text-slate-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© {new Date().getFullYear()} Mike Hamilton. All rights reserved.</p>
            <p>Strategic VET Leadership | Funding | Performance | Reform</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
