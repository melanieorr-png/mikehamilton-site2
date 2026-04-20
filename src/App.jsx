import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NationalSkillsAgreement from "./NationalSkillsAgreement";

function Home() {
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="flex items-center w-full gap-10">

            {/* LEFT */}
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold sm:text-6xl">
                National Skills Agreement, VET Funding & RTO Advisory Specialist
              </h1>

              <p className="mt-4 text-lg italic text-cyan-300">
                “I’ve delivered results in some of the most challenging environments — and that translates beyond the NT.”
              </p>

              <p className="mt-6 text-xl text-slate-300">
                Helping organisations secure funding, align with government priorities,
                and deliver high-impact training across Australia.
              </p>

              <div className="mt-10 flex gap-4">
                <Link
                  to="/national-skills-agreement"
                  className="rounded-2xl bg-white px-6 py-3 text-sm text-slate-950"
                >
                  National Skills Agreement Guide
                </Link>
              </div>
            </div>

            {/* RIGHT LOGO */}
            <div className="ml-auto">
              <img
                src="/logo3.PNG"
                alt="Mike Hamilton logo"
                className="w-56 md:w-72 lg:w-96"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-semibold">How Mike Can Help</h2>

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
        <h2 className="text-3xl font-semibold">Book a Funding Strategy Call</h2>

        <div className="mt-6 text-slate-300">
          <p>📞 +61 400 465 239</p>
          <p>✉️ michaelhamilton9@bigpond.com</p>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/national-skills-agreement"
          element={<NationalSkillsAgreement />}
        />
      </Routes>
    </Router>
  );
}
