import React from "react";
import {
  Award,
  Building2,
  CheckCircle2,
  DraftingCompass,
  ShieldCheck,
  Users,
} from "lucide-react";

import logo from "../../assets/logo.png";
import heroConstruction from "../../assets/construction-hero.jpg";
import houseImg from "../../assets/house.jpg";
import housesImg from "../../assets/house2.jpg";
import buildingImg from "../../assets/building.jpg";
import discussionImg from "../../assets/discussion.jpg";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "We uphold high construction standards and deliver careful workmanship in every project.",
    },
    {
      icon: DraftingCompass,
      title: "Innovative Solutions",
      description:
        "We combine modern design ideas with practical engineering solutions for better outcomes.",
    },
    {
      icon: Users,
      title: "Client Focused",
      description:
        "We listen closely, communicate clearly, and place our clients' goals at the center of every decision.",
    },
    {
      icon: ShieldCheck,
      title: "Safety and Integrity",
      description:
        "We are committed to responsible construction, transparency, safety, and ethical practices.",
    },
  ];

  const reasons = [
    {
      icon: DraftingCompass,
      eyebrow: "Planning and Construction",
      title: "Integrated Design-Build Approach",
      description:
        "By housing architecture and construction under one roof, we reduce communication gaps, streamline project timelines, and help prevent unexpected costs.",
      image: houseImg,
      imagePosition: "center",
      reverse: false,
    },
    {
      icon: ShieldCheck,
      eyebrow: "Built to Last",
      title: "Committed to Quality",
      description:
        "We work with trusted suppliers and skilled craftsmen to ensure every structure is durable, functional, safe, and completed with careful attention to detail.",
      image: buildingImg,
      imagePosition: "center 65%",
      reverse: true,
    },
    {
      icon: Users,
      eyebrow: "Your Vision, Our Priority",
      title: "Client-Centric Philosophy",
      description:
        "Great architecture is collaborative. We work closely with our clients throughout every stage so their style, needs, budget, and long-term goals are reflected in the final space.",
      image: discussionImg,
      imagePosition: "center 30%",
      reverse: false,
    },
  ];


  return (
    <section id="about" className="overflow-hidden bg-white text-[#00062e]">
      {/* Banner */}
      <div className="mx-auto mt-6 max-w-[1500px] px-4 sm:px-6 lg:mt-10">
        <div className="group relative min-h-[420px] overflow-hidden rounded-2xl bg-[#00062e] shadow-[0_24px_70px_rgba(0,6,46,0.25)] md:min-h-[520px] lg:rounded-[30px]">
          <img
            src={heroConstruction}
            alt="CHUA Construction project"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#00062e]/95 via-[#00062e]/75 to-[#00062e]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00062e]/70 via-transparent to-transparent" />

          <div className="relative z-10 flex min-h-[420px] items-center px-7 py-14 sm:px-12 md:min-h-[520px] lg:px-20">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#f87400]" />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white sm:text-sm">
                  Building with purpose since 2020
                </span>
              </div>

              <img
                src={logo}
                alt="CHUA Construction logo"
                className="mb-8 h-auto w-[190px] object-contain drop-shadow-xl sm:w-[250px] md:w-[300px]"
              />

              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Constructing spaces that stand the test of time.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                A Filipino-led architectural and construction company
                delivering thoughtful design, dependable engineering, and
                professional project execution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Residential", "Commercial", "Industrial"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#f87400]" />
        </div>
      </div>

      {/* Company overview */}
      <div className="mx-auto max-w-[1300px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f87400] text-white shadow-lg shadow-orange-500/20">
                <Building2 size={25} />
              </div>

              <p className="font-bold uppercase tracking-[0.18em] text-[#f87400]">
                Company overview
              </p>
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-[#00062e] sm:text-5xl">
              From vision to enduring reality
            </h2>

            <div className="mt-6 h-1 w-24 rounded-full bg-[#f87400]" />

            <div className="mt-8 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                <strong className="font-bold text-[#00062e]">
                  Chua Constructions
                </strong>{" "}
                is a Filipino-led, full-service architectural and construction
                firm committed to transforming ideas into durable, functional,
                and meaningful spaces.
              </p>

              <p>
                Founded on integrity, innovation, and craftsmanship, we
                integrate architectural design, engineering, construction
                management, and project coordination into one streamlined
                process.
              </p>

              <p>
                We serve residential, commercial, and industrial clients,
                handling every stage from initial concepts and technical plans
                to construction, finishing, and final project handover.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {[
                "End-to-end project delivery",
                "Professional project management",
                "Transparent communication",
                "Detailed quality control",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#f87400]"
                  />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 hidden h-28 w-28 rounded-3xl border-2 border-[#f87400]/25 lg:block" />

            <div className="relative overflow-hidden rounded-[28px] shadow-[0_28px_65px_rgba(0,6,46,0.2)]">
              <img
                src={housesImg}
                alt="CHUA Construction architecture and building project"
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#00062e]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#f87400]">
                  Architecture and construction
                </p>
                <p className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Designed carefully. Built professionally.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-[#f87400] px-7 py-5 text-white shadow-xl sm:-right-7">
              <p className="text-3xl font-extrabold">5+</p>
              <p className="text-xs font-bold uppercase tracking-wider">
                Years building
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core values */}
      <div className="bg-[#f6f8fc]">
        <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#f87400]">
              What guides our work
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#00062e] sm:text-5xl">
              Our core values
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every project is guided by strong standards, responsible
              collaboration, and a commitment to delivering lasting value.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#f87400]/40 hover:shadow-[0_22px_45px_rgba(0,6,46,0.12)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00062e] text-white transition duration-300 group-hover:bg-[#f87400]">
                  <Icon size={29} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#00062e]">
                  {title}
                </h3>

                <div className="my-4 h-1 w-12 rounded-full bg-[#f87400]" />

                <p className="leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Why choose CHUA */}
      <div className="relative overflow-hidden bg-[#00062e]">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/5" />
        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-[#f87400]/10" />

        <div className="relative mx-auto max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-[#f87400]">
              Why choose us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Why should you choose{" "}
              <span className="text-[#f87400]">CHUA?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              We bring design, coordination, craftsmanship, and client service
              together under one professional team.
            </p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {reasons.map(
              ({
                icon: Icon,
                eyebrow,
                title,
                description,
                image,
                imagePosition,
                reverse,
              }) => (
                <article
                  key={title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="mb-6 flex items-center gap-5">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#f87400] text-white shadow-lg shadow-orange-500/20 sm:h-20 sm:w-20">
                        <Icon size={34} />
                      </div>

                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f87400]">
                          {eyebrow}
                        </p>
                        <h3 className="mt-1 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                          {title}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-6 h-1 w-20 rounded-full bg-[#f87400]" />

                    <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                      {description}
                    </p>
                  </div>

                  <div
                    className={`relative overflow-hidden rounded-[26px] border border-white/10 shadow-[0_30px_70px_rgba(0,0,0,0.35)] ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={title}
                      className="h-[330px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[430px]"
                      style={{ objectPosition: imagePosition }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#00062e]/55 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#f87400]" />
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>

    </section>
  );
}