export default function App() {
  const services = [
    {
      title: "Tender Writing, Grants & Government Funding Support",
      description:
        "Practical support for small and medium enterprises to build capability, strengthen commercial positioning, and compete with confidence.",
    },
    {
      title: "RTO Performance, Compliance & Funding Growth",
      description:
        "Support RTOs and businesses to strengthen performance, improve commercial outcomes, and enhance financial sustainability.",
    },
    {
      title: "Remote & Regional VET Leadership",
      description:
        "Specialist expertise in delivering high-impact VET across remote, regional and Indigenous communities.",
    },
    {
      title: "National Skills Agreement & VET Funding Strategy",
      description:
        "Position organisations to win and retain government funding under the National Skills Agreement and Fee-Free TAFE.",
    },
    {
      title: "Executive Advisory & Board Support",
      description:
        "Trusted advisor to CEOs, Boards and Executives on governance, performance, and reform.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* TOP LOGO */}
      <div className="w-full bg-slate-950 py-6 flex justify-center border-b border-white/10">
        <img
          src="/logo4.png"
          alt="Mike Hamilton logo"
          className="h-28 md:h-40"
        />
      </div>

      {/* BRAND TAG */}
      <div className="flex justify-center mt-6">
        <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200">
          Mike Hamilton | VET Specialist & Advisor
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">

          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold sm:text-6xl">
              High-Performance VET Leadership for Training and Workforce Delivery
            </h1>

            <p className="mt-4 text-lg italic text-cyan-300">
              “I’ve delivered results in some of the most challenging environments — and that translates beyond the NT.”
            </p>

            <p className="mt-6 text-xl text-slate-300">
              Helping organisations secure funding, align with government priorities,
              and deliver high-impact training across Australia.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="/national-skills-agreement.html"
                className="rounded-2xl bg-white px-6 py-3 text-sm text-slate-950"
              >
                National Skills Agreement Guide
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-center">
          How Mike Can Help
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 p-8"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">
          Book a Funding Strategy Call
        </h2>

        <div className="mt-6 text-slate-300">
          <p>📞 +61 400 465 239</p>
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
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} Mike Hamilton</p>
          <p>ABN 67 680 975 723</p>
        </div>
      </footer>

    </div>
  );
}
