import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import NationalSkillsAgreement from "./NationalSkillsAgreement";

function Home() {
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
