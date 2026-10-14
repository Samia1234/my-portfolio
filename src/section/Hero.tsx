import { ArrowDown, ArrowRight, Download} from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-40 -top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -bottom-20 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2 md:px-8 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          

          <h1 className="max-w-2xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
           IT SUPPORT ENGINEER
            <span className="block bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text pb-2 text-transparent">
             IT SPECIALIST
            </span>
            WEB DEVELOPER.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 md:text-lg">
           IT professional with approximately six years of experience working in
municipal administration in Algeria. Experienced in computer hardware
maintenance, software troubleshooting, Windows installation and
configuration, network connectivity, server administration, user account
management, and technical support. Holds a Master's degree in
Information Technology from Ferhat Abbas University of Setif. Possesses
programming skills in HTML, CSS, JavaScript, and Python, with experience
developing personal projects. Seeking an opportunity in IT support,
technical support, system administration, or web development.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Explore Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="https://1drv.ms/b/c/c11f51362e7be1bd/IQALLpnzhlKORr8iXpNNA-RaAdylgxegDXI7IyKPCa_9ELQ?e=adGqZf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-6 py-4 font-semibold transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/5"
            >
              View CV
              <Download size={18} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Find me on
            </span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-500 transition hover:text-violet-500 dark:text-slate-400"
            >
              {/*<Github size={22} />*/}
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 transition hover:text-violet-500 dark:text-slate-400"
            >
             {/** <Linkedin size={22} />*/} 
            </a>;                                                                                                                                                       `c
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute inset-8 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-2xl shadow-violet-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-black/20 sm:p-7">
            <div className="flex items-center justify-between border-b border-slate-200 pb-5 dark:border-white/10">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <span className="text-xs text-slate-500">
                developer.tsx
              </span>
            </div>

            <div className="space-y-5 py-8 font-mono text-sm sm:text-base">
              <p className="text-slate-400">
                <span className="text-violet-500">const</span>{" "}
                developer = {"{"}
              </p>

              <div className="space-y-4 pl-5">
                <p>
                  <span className="text-blue-500 dark:text-blue-400">name:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    "Samia"
                  </span>,
                </p>

                <p>
                  <span className="text-blue-500 dark:text-blue-400">role:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    "Frontend Developer"
                  </span>,
                </p>

                <p>
                  <span className="text-blue-500 dark:text-blue-400">skills:</span>{" "}
                  <span className="text-amber-600 dark:text-amber-300">
                    ["React", "TypeScript"]
                  </span>,
                </p>

                <p>
                  <span className="text-blue-500 dark:text-blue-400">passion:</span>{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    "Building great UI"
                  </span>
                </p>
              </div>

              <p className="text-slate-400">{"}"}</p>

              <div className="flex items-center gap-3 rounded-xl bg-violet-500/5 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                  <ArrowDown size={20} />
                </div>

                <div>
                  <p className="font-sans font-semibold">
                    Always learning
                  </p>
                  <p className="mt-1 font-sans text-xs text-slate-500">
                    Turning ideas into experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-12 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-[#15151f] sm:-right-6">
            <p className="text-xs text-slate-500">Currently using</p>
            <p className="mt-1 font-semibold">React + TypeScript</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}