import { ArrowRight, Award, BriefcaseBusiness, Building2, Globe2, Map, TrendingUp } from "lucide-react";

export default function MikeHamiltonVETConsulting() {
  const services = [
    {
      title: "Small Business & Tender Advisory",
      description:
        "Practical support for small and medium enterprises to build capability, strengthen commercial positioning, and compete with confidence. Includes guidance on tender responses, grant applications, and negotiation strategies to improve success rates.",
      icon: BriefcaseBusiness,
    },
    {
      title: "RTO Performance & Commercial Advisory",
      description:
        "Support RTOs to strengthen performance, improve commercial outcomes, and enhance financial sustainability, including revenue diversification and contract growth.",
      icon: TrendingUp,
    },
    {
      title: "Remote & Regional VET Leadership",
      description:
        "Specialist expertise in delivering high-impact VET across remote, regional and Indigenous communities. Deep understanding of NT conditions, workforce challenges, and service delivery models that actually work on the ground.",
      icon: Map,
    },
    {
      title: "Government Strategy & Funding Alignment",
      description:
        "Position RTOs to win and retain government funding under the National Skills Agreement, Fee-Free TAFE and jurisdictional priorities, aligning delivery with workforce demand and policy direction.",
      icon: Building2,
    },
    {
      title: "Executive Advisory & Board Support",
      description:
        "Trusted advisor to CEOs, Boards and Executives on governance, performance, reform, and large-scale education delivery in complex environments.",
      icon: BriefcaseBusiness,
    },
  ];

  const differentiators = [
    "Proven CEO-level delivery in complex VET environments",
    "Deep NT, regional, remote and Oceania-relevant expertise",
    "Strong government and ministerial relationships",
    "Commercial growth mindset within public systems",
    "National credibility and award-winning outcomes",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.18),transparent_25%)]" />

        <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <div className="absolute right-14 top-20 h-72 w-72 rounded-full border border-cyan-400/20 bg-cyan-400/5 blur-3xl" />
          <div className="absolute right-24 top-24 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-3 text-cyan-300">
              <Globe2 className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.2em]">Executive Reach</span>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Specialty</p>
                <p className="mt-2 text-lg font-semibold">Remote and regional VET systems</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Commercial Lens</p>
                <p className="mt-2 text-lg font-semibold">Performance, sustainability and growth</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Market Relevance</p>
                <p className="mt-2 text-lg font-semibold">Australia and Oceania</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="mb-10 flex items-center justify-between">
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
              Executive-level VET leadership delivering real outcomes across Australia and the broader Oceania region, including some of the most complex and remote training environments.
            </p>

            <p className="mt-6 text-lg text-slate-400">
              Former CEO of CDU TAFE, Mike Hamilton brings a rare combination of public sector credibility and commercial acumen — supporting training organisations across Australia and Oceania to strengthen performance, improve commercial outcomes, and align delivery with workforce demand.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#capability"
                className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm text-cyan-300"
              >
                View Capability Overview
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950"
              >
                Engage Mike
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm"
              >
                View Services
              </a>
            </div>
          </div>

          <div className="grid gap-4 lg:hidden">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-cyan-300">
                <Globe2 className="h-5 w-5" />
                <span className="text-sm uppercase tracking-[0.2em]">Executive Reach</span>
              </div>
              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  Remote and regional VET systems
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  Performance, sustainability and growth
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                  Australia and Oceania
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capability" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <h2 className="text-3xl font-semibold">Why Mike Hamilton</h2>
            <p className="mt-5 text-slate-300">
              Mike Hamilton is one of Australia’s most experienced vocational education leaders, having led large-scale public training systems across metropolitan, regional and some of the most remote locations in the country, with expertise highly transferable across Oceania.
            </p>
            <p className="mt-5 text-slate-300">
              He understands what most consultants don’t — how to actually deliver training in remote and dispersed environments, including the Northern Territory and similar contexts across Oceania, where workforce shortages, distance, and community context fundamentally change how VET must operate.
            </p>
            <p className="mt-5 text-slate-300">
              His approach is simple: align training to workforce demand, build strong industry partnerships, and support RTOs to operate with a stronger focus on performance, outcomes, and sustainability beyond compliance requirements.
            </p>
            <p className="mt-5 text-slate-300">
              Mike also brings a strong understanding of small business principles, supporting organisations to grow sustainably, navigate funding environments, and approach tenders and negotiations with clarity and confidence.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 shadow-2xl">
            <h3 className="text-xl font-semibold">What sets him apart</h3>
            <div className="mt-6 space-y-4">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-sm font-semibold text-cyan-300">
                    0{index + 1}
                  </div>
                  <p className="text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold">How Mike Can Help</h2>
          <p className="mt-4 text-slate-300">
            Targeted, high-impact consulting focused on results — not theory.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="mt-5 text-slate-300">{service.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                Executive Value
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Leadership that understands complex training environments
              </h2>
              <p className="mt-4 text-slate-300">
                From public system leadership to commercial growth and remote delivery, Mike brings the strategic perspective needed to help training organisations operate with clarity, confidence and market relevance.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center">
                <Award className="mx-auto h-6 w-6 text-cyan-300" />
                <p className="mt-3 text-sm text-slate-400">Recognition</p>
                <p className="mt-1 font-semibold">National awards</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center">
                <Map className="mx-auto h-6 w-6 text-cyan-300" />
                <p className="mt-3 text-sm text-slate-400">Delivery</p>
                <p className="mt-1 font-semibold">Remote expertise</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center">
                <Globe2 className="mx-auto h-6 w-6 text-cyan-300" />
                <p className="mt-3 text-sm text-slate-400">Reach</p>
                <p className="mt-1 font-semibold">Oceania-ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-slate-900 p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-semibold">Strengthen Your Performance</h2>
          <p className="mt-6 text-slate-300">
            Engage Mike Hamilton for practical advice, stronger performance, and sustainable growth across your training operations.
          </p>

          <div className="mt-8 space-y-2 text-slate-300">
            <p>📞 0400 465 239</p>
            <p>✉️ michaelhamilton9@bigpond.com</p>
          </div>

          <div className="mt-8">
            <a
              href="mailto:michaelhamilton9@bigpond.com?subject=Consultation%20Enquiry%20from%20Website"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-sm font-semibold text-slate-950"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
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
