export default function App() {
  const services = [
    {
      title: "Tender Writing, Grants & Government Funding Support",
      path: "/tender-writing.html",
      description:
        "Strategic support to build capability, navigate tenders and funding processes, and achieve outcomes in complex operating environments.",
    },
    {
      title:
        "Organisational Performance, Quality Assurance & Sustainable Growth",
      path: "/organisational-performance.html",
      description:
        "Support RTOs and businesses to strengthen performance, improve organisational outcomes, and enhance long-term sustainability.",
    },
    {
      title: "Regional & Remote VET Leadership",
      path: "/regional-remote.html",
      description:
        "Over 25 years delivering high-impact VET across regional, remote and Indigenous communities.",
    },
    {
      title: "National Skills Agreement & Funding Reform",
      path: "/national-skills-agreement.html",
      description:
        "Support organisations to understand government priorities, align with reform settings, and respond to opportunities under the National Skills Agreement and other funding models.",
    },
    {
      title: "Executive Advisory & Board Support",
      path: "/executive-advisory.html",
      description:
        "Trusted advisor to CEOs, Boards and Executives on governance, performance, change management and reform.",
    },
    {
      title: "Sector Positioning & Market Benchmarking",
      path: "/sector-positioning.html",
      description:
        "Analyse market conditions and position organisations in niche and priority areas. Leverage NCVER data and other sources to inform strategy, strengthen market positioning, and support sustainable growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* TOP LOGO */}
      <div className="w-full bg-slate-950 py-6 flex justify-center border-b border-white/10">
        <img
          src="/logo3.PNG"
          alt="Mike Hamilton logo"
          className="h-28 md:h-40"
        />
      </div>

      {/* BRAND TAG + LINKEDIN */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200">
            Mike Hamilton | VET Specialist & Advisor
          </div>
          <a
            href="https://www.linkedin.com/in/michael-hamilton-bb8794b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cyan-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* LEFT */}
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold sm:text-6xl leading-tight">
                High-Performance VET Leadership, Governance, Corporate Strategy
                and Workforce Management
              </h1>

              <p className="mt-4 text-lg italic text-cyan-300">
                “I’ve delivered results in some of the most challenging and
                complex environments across Australia and beyond.”
              </p>

              <p className="mt-6 text-xl text-slate-300">
                Helping organisations align with government priorities and
                deliver high-impact training across Australia.
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="/national-skills-agreement.html"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
                >
                  National Skills Agreement Guide
                </a>
                <a
                  href="mailto:michaelhamilton9@bigpond.com"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-300 transition"
                >
                  Contact Mike
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE + GRAPH */}
            <div className="flex justify-center lg:justify-start lg:-ml-6">
              <div className="relative mt-2 w-full max-w-md">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="relative flex justify-center z-10">
                  <img
                    src="/mhprofile.JPG"
                    alt="Mike Hamilton"
                    className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/10 shadow-2xl"
                  />
                </div>

                <div className="relative -mt-6 z-0">
                  <svg viewBox="0 0 500 180" className="w-full h-auto" fill="none">
                    <path
                      d="M20 145 C90 140,120 130,170 120 C220 110,245 115,290 90 C340 62,385 78,470 20"
                      stroke="rgba(34,211,238,0.18)"
                      strokeWidth="18"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 145 C90 140,120 130,170 120 C220 110,245 115,290 90 C340 62,385 78,470 20"
                      stroke="rgb(34,211,238)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <p className="text-center text-sm text-slate-400 mt-2">
                  Strategy. Performance. Growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-center">Specialisations</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 p-8 bg-slate-900/50"
            >
              <a
                href={service.path}
                className="text-xl font-semibold hover:text-cyan-300 transition"
              >
                {service.title}
              </a>

              <p className="mt-4 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">Contact Mike Hamilton</h2>

        <div className="mt-6 text-slate-300 space-y-2">
          <p>📞 +61 400 465 239</p>
          <p>✉️ michaelhamilton9@bigpond.com</p>
          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/michael-hamilton-bb8794b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="mailto:michaelhamilton9@bigpond.com"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
          >
            Contact Mike
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
}export default function App() {
  const services = [
    {
      title: "Tender Writing, Grants & Government Funding Support",
      path: "/tender-writing.html",
      description:
        "Strategic support to build capability, navigate tenders and funding processes, and achieve outcomes in complex operating environments.",
    },
    {
      title: "Organisational Performance, Quality Assurance & Sustainable Growth",
      path: "/organisational-performance.html",
      description:
        "Support RTOs and businesses to strengthen performance, improve organisational outcomes, and enhance long-term sustainability.",
    },
    {
      title: "Regional & Remote VET Leadership",
      path: "/regional-remote.html",
      description:
        "Over 25 years delivering high-impact VET across regional, remote and Indigenous communities.",
    },
    {
      title: "National Skills Agreement & Funding Reform",
      path: "/national-skills-agreement.html",
      description:
        "Support organisations to understand government priorities, align with reform settings, and respond to opportunities under the National Skills Agreement and other funding models.",
    },
    {
      title: "Executive Advisory & Board Support",
      path: "/executive-advisory.html",
      description:
        "Trusted advisor to CEOs, Boards and Executives on governance, performance, change management and reform.",
    },
    {
      title: "Sector Positioning & Market Benchmarking",
      path: "/sector-positioning.html",
      description:
        "Analyse market conditions and position organisations in niche and priority areas. Leverage NCVER data and other sources to inform strategy, strengthen market positioning, and support sustainable growth.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* TOP LOGO */}
      <div className="w-full bg-slate-950 py-6 flex justify-center border-b border-white/10">
        <img
          src="/logo3.PNG"
          alt="Mike Hamilton logo"
          className="h-28 md:h-40"
        />
      </div>

      {/* BRAND TAG + LINKEDIN */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200">
            Mike Hamilton | VET Specialist & Advisor
          </div>
          <a
            href="https://www.linkedin.com/in/michael-hamilton-bb8794b0/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cyan-300 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold sm:text-6xl leading-tight">
                High-Performance VET Leadership, Governance, Corporate Strategy
                and Workforce Management
              </h1>

              <p className="mt-4 text-lg italic text-cyan-300">
                “I’ve delivered results in some of the most challenging and
                complex environments across Australia and beyond.”
              </p>

              <p className="mt-6 text-xl text-slate-300">
                Helping organisations align with government priorities and
                deliver high-impact training across Australia.
              </p>

              <div className="mt-10 flex gap-4 flex-wrap">
                <a
                  href="/national-skills-agreement.html"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
                >
                  National Skills Agreement Guide
                </a>
                <a
                  href="mailto:michaelhamilton9@bigpond.com"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-300 hover:text-cyan-300 transition"
                >
                  Contact Mike
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center lg:justify-start lg:-ml-6">
              <div className="relative mt-2 w-full max-w-md">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="relative flex justify-center z-10">
                  <img
                    src="/mhprofile.JPG"
                    alt="Mike Hamilton"
                    className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/10 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold text-center">Specialisations</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 p-8 bg-slate-900/50"
            >
              {/* 👇 THIS IS THE ONLY REAL CHANGE */}
              <a
                href={service.path}
                className="text-xl font-semibold hover:text-cyan-300 transition"
              >
                {service.title}
              </a>

              <p className="mt-4 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold">Contact Mike Hamilton</h2>

        <div className="mt-6 text-slate-300 space-y-2">
          <p>📞 +61 400 465 239</p>
          <p>✉️ michaelhamilton9@bigpond.com</p>
          <p>
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/michael-hamilton-bb8794b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </p>
        </div>

        <div className="mt-8">
          <a
            href="mailto:michaelhamilton9@bigpond.com"
            className="inline-flex items-center rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 hover:bg-cyan-300 transition"
          >
            Contact Mike
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
