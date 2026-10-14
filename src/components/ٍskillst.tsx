import {
  Code2,
  Globe,
  Wrench,
  Lightbulb,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    icon: Globe,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Programming",
    description: "Writing clean and maintainable code.",
    icon: Code2,
    skills: ["JavaScript", "TypeScript"],
  },
  {
    title: "Tools & Workflow",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "npm"],
  },
  {
    title: "Other Skills",
    description: "Essential skills for building better products.",
    icon: Lightbulb,
    skills: [
      "Responsive Design",
      "Problem Solving",
      "Debugging",
      "Accessibility",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-50 px-5 py-24 transition-colors duration-300 dark:bg-[#09090f] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            <span className="h-px w-8 bg-violet-500" />
            My Skills
            <span className="h-px w-8 bg-violet-500" />
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Tools &{" "}
            <span className="text-violet-600 dark:text-violet-400">
              Technologies
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            The technologies and tools I use to build modern, responsive,
            and user-friendly web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/40 sm:p-8"
              >
                {/* Card Header */}
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 transition-colors duration-300 group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-500/15 dark:text-violet-400">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                      {group.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-violet-500/40 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Learning Banner */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-violet-200/70 bg-violet-50/70 p-6 dark:border-violet-500/20 dark:bg-violet-500/[0.06] sm:flex-row sm:items-center sm:p-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
            <Lightbulb size={28} strokeWidth={1.7} />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Always Learning
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
              I'm continuously learning, improving my skills, and exploring
              new technologies to create better web experiences.
            </p>
          </div>

          <div className="sm:ml-auto sm:shrink-0">
            <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">
              Better Every Day ✨
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}