import { useState, type FormEvent } from "react";
import {
  Mail,
 FolderGit2,
 Link,
  Send,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  GitBranch,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "chasamya123@gmail.com",
    href: "mailto:chasamya123@gmail.com",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "Explore my projects",
    href: "https://github.com/your-username",
  },
  {
    icon:Link,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/your-username",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );

    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-5 py-24 transition-colors duration-300 dark:bg-[#09090f] md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            <span className="h-px w-8 bg-violet-500" />
            Contact Me
            <span className="h-px w-8 bg-violet-500" />
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            Let's Work{" "}
            <span className="text-violet-600 dark:text-violet-400">
              Together
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have a project in mind or want to connect?
            I'd love to hear from you. Let's create something great together.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
              <MessageCircle size={28} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Get in Touch
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              I'm always happy to discuss new projects, creative ideas,
              and opportunities to learn and grow.
            </p>

            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("https://") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-violet-300 hover:shadow-md hover:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-violet-500/40"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-500/15 dark:text-violet-400">
                      <Icon size={21} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-slate-500 dark:text-slate-400">
                        {item.label}
                      </span>

                      <span className="mt-1 block truncate text-sm font-semibold text-slate-900 dark:text-white">
                        {item.value}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-slate-400 transition group-hover:text-violet-500"
                    />
                  </a>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
              <MapPin size={18} className="text-violet-500" />
              <span>Available for remote opportunities</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        email: event.target.value,
                      })
                    }
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  value={formData.subject}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      subject: event.target.value,
                    })
                  }
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }
                  required
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-500/20 sm:w-auto"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                This form opens your default email application. Your message
                is not sent directly from the website.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}