export default function MikeHamiltonVETConsulting() {
  const services = [
    {
      title: "Small Business & Tender Advisory",
      description:
        "Practical support for small and medium enterprises to build capability, strengthen commercial positioning, and compete with confidence. Includes guidance on tender responses, grant applications, and negotiation strategies to improve success rates.",
    },
    {
      title: "RTO Performance & Commercial Advisory",
      description:
        "Support RTOs to strengthen performance, improve commercial outcomes, and enhance financial sustainability, including revenue diversification and contract growth.",
    },
    {
      title: "Remote & Regional VET Leadership",
      description:
        "Specialist expertise in delivering high-impact VET across remote, regional and Indigenous communities. Deep understanding of NT conditions, workforce challenges, and service delivery models that actually work on the ground.",
    },
    {
      title: "Government Strategy & Funding Alignment",
      description:
        "Position RTOs to win and retain government funding under the National Skills Agreement, Fee-Free TAFE and jurisdictional priorities, aligning delivery with workforce demand and policy direction.",
    },
    {
      title: "Executive Advisory & Board Support",
      description:
        "Trusted advisor to CEOs, Boards and Executives on governance, performance, reform, and large-scale education delivery in complex environments.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.18),transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="text-sm tracking-wide text-slate-300">mikehamilton.com.au</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Mike Hamilton | VET Specialist & Advisor
            </div>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Experienced VET Leadership for High-Performing Training Needs
            </h1>

            <p className="mt-4 text-lg italic text-cyan-300">
              “I’ve mastered one of the hardest environments — and that translates.”
            </p>

            <p className="mt-6 text-xl text-slate-300">
              Executive-level VET leadership delivering real outcomes across Australia and the broader Oceania region.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="rounded-2xl border border-white/20 px-6 py-3 text-sm">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">How Mike Can Help</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-5 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-semibold">Strengthen Your Performance</h2>

          <div className="mt-8 space-y-2 text-slate-300">
            <p>📞 0400 465 239</p>
            <p>✉️ michaelhamilton9@bigpond.com</p>
          </div>

          <div className="mt-8">
            <a
              href="mailto:michaelhamilton9@bigpond.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Mike Hamilton</p>
          <p>ABN 67 680 975 723</p>
        </div>
      </footer>
    </div>
  );
}
