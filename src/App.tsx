import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Award, BookOpen, Briefcase, User, ChevronDown } from 'lucide-react'

// ── Scroll-aware Navbar ──────────────────────────────────────────────────────
const Navbar = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${visible
        ? 'bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-800/60 translate-y-0 opacity-100'
        : '-translate-y-full opacity-0'
        }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold tracking-tighter text-base text-zinc-100">NK.</span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          {['About', 'Experience', 'Training', 'Portfolio', 'Certifications', 'Organization', 'Education'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-indigo-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

// ── Section Wrapper ──────────────────────────────────────────────────────────
const Section = ({ id, title, children }: { id: string; title?: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-4xl mx-auto px-6 py-24">
    {title && (
      <div className="flex items-center gap-4 mb-14">
        <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-indigo-400">{title}</h2>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
    )}
    {children}
  </section>
)

// ── Timeline Item ────────────────────────────────────────────────────────────
const TimelineItem = ({ role, company, period, desc }: { role: string; company: string; period: string; desc?: string }) => (
  <div className="group relative pl-8 border-l border-zinc-800 hover:border-indigo-500/50 transition-colors duration-300">
    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-indigo-500 bg-zinc-950 group-hover:bg-indigo-500 transition-colors duration-300" />
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
      <h3 className="text-base font-semibold text-zinc-100 leading-snug">{role}</h3>
      <span className="text-xs font-mono text-zinc-500 shrink-0">{period}</span>
    </div>
    <p className="text-sm text-indigo-400 font-medium mb-2">{company}</p>
    {desc && <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>}
  </div>
)

// ── Main App ─────────────────────────────────────────────────────────────────
const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      <Navbar />

      {/* ── Hero ── */}
      <section id="about" className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6 py-24 relative">
        {/* Subtle background glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* Profile Photo */}
          <div className="shrink-0 relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden ring-1 ring-zinc-700 shadow-2xl shadow-indigo-900/20">
              <img
                src="../dist/assets/profile.png"
                alt="Nabil Kamalludin"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Green dot online indicator */}
            <span className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-emerald-400 rounded-full ring-2 ring-zinc-950" />
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 tracking-wide">
              <User size={11} />
              <span>Available for new opportunities</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-50 leading-tight mb-3">
              Nabil Kamalludin
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-400 mb-6">
              Tech &amp; Data Enthusiast
            </p>
            <p className="text-base text-zinc-500 max-w-xl leading-relaxed mb-10">
              Electrical Engineering graduate with deep interest in cybersecurity, machine learning,
              and data management. Passionate about building systems that are intelligent, secure, and impactful.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <button
                onClick={() => window.open('https://wa.me/+6285348625993', '_blank')}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-900/40"
              >
                Contact Me
              </button>
              <a href="https://github.com/bilkamal" className="p-2.5 rounded-lg border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/nabilkamalludin/" className="p-2.5 rounded-lg border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:[nabilkamalludin@gmail.com]`} className="p-2.5 rounded-lg border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-100 transition-all duration-200">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </section>

      {/* ── Experience ── */}
      <Section id="experience" title="Experience">
        <div className="space-y-10">
          <TimelineItem
            role="Mechanical Electrical Engineer Intern"
            company="PT Tri Usaha Sejahtera Pratama"
            period="Oct 2025 – Jan 2026"
            desc="Assisted in electrical system planning, maintenance coordination, and technical documentation for industrial projects."
          />
          <TimelineItem
            role="Practicum Assistant Basic Computer Network"
            company="Tidar University"
            period="Aug 2024 – Dec 2024"
            desc="Guided students through network fundamentals, troubleshooting exercises, and practical lab sessions."
          />
          <TimelineItem
            role="Lecturer Assistant Fuzzy Logic"
            company="Tidar University"
            period="Feb 2024 – Jul 2024"
            desc="Supported lecture delivery, prepared learning materials, and mentored students on fuzzy inference systems."
          />
          <TimelineItem
            role="Lecturer & Practicum Assistant Basic Algorithm Programming"
            company="Tidar University"
            period="Aug 2023 – Dec 2023"
            desc="Facilitated programming labs and assisted in teaching algorithmic problem-solving to first-year students."
          />
        </div>
      </Section>

      {/* ── Training ── */}
      <Section id="training" title="Training">
        <div className="space-y-10">
          <TimelineItem
            role="Red Team Cyberwolves Academy Batch 7"
            company="Hacktrace Siber Indonesia"
            period="Feb 2026 – Apr 2026"
            desc="Hands-on red team training covering offensive security techniques, penetration testing, and ethical hacking."
          />
          <TimelineItem
            role="Junior Security Operation Center (SOC) Analyst"
            company="Digitalent TSA 2024"
            period="Feb 2024 – May 2024"
            desc="Learned threat detection, incident response, SIEM tools, and SOC monitoring methodologies."
          />
          <TimelineItem
            role="Machine Learning Cohort"
            company="Bangkit Academy"
            period="Aug 2023 – Jan 2024"
            desc="Completed intensive ML program covering supervised learning, computer vision, and TensorFlow deployment."
          />
        </div>
      </Section>

      {/* ── Portfolio ── */}
      <Section id="portfolio" title="Portfolio">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: 'Project Alpha', desc: 'A modern analytics platform with real-time data visualization.', tags: ['React', 'D3.js', 'Tailwind'] },
            { title: 'Project Beta', desc: 'Minimalist task management app with offline support.', tags: ['Next.js', 'PWA', 'Supabase'] },
          ].map((item, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-zinc-800 hover:border-indigo-500/40 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Briefcase size={20} />
                </div>
                <ExternalLink size={16} className="text-zinc-600 group-hover:text-indigo-400 transition-colors duration-200" />
              </div>
              <h3 className="font-semibold text-zinc-100 mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 mb-5 leading-relaxed">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-zinc-800 text-zinc-400 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Certifications ── */}
      <Section id="certifications" title="Certifications">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
            { name: 'Professional UX Design', issuer: 'Google Career', year: '2022' },
          ].map((cert, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors duration-200">
              <Award className="text-indigo-400 shrink-0" size={20} />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">{cert.name}</h4>
                <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer} · {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Organization ── */}
      <Section id="organization" title="Organization">
        <div className="space-y-10">
          <TimelineItem
            role="Head of Komisi 3"
            company="DPM-FT UNTIDAR 2024"
            period="Apr 2024 – Apr 2025"
            desc="Led commission activities, coordinated student legislative discussions, and managed inter-faculty programs."
          />
          <TimelineItem
            role="Member of Automation Division"
            company="spectra_untidar"
            period="2021"
            desc="Learning about automation and participated in PLC competition."
          />
        </div>
      </Section>

      {/* ── Education ── */}
      <Section id="education" title="Education">
        <div className="space-y-4">
          {[
            { school: 'Tidar University', degree: 'Bachelor of Electrical Engineering', note: 'GPA 3.56 / 4.00', period: '2021 – 2025' },
            { school: 'SMAN Negeri 3 Sampit', degree: 'Natural Science (MIPA)', note: '', period: '2018 – 2021' },
          ].map((edu, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-colors duration-200">
              <BookOpen className="text-indigo-400 shrink-0 mt-0.5" size={18} />
              <div>
                <h3 className="font-semibold text-zinc-100">{edu.school}</h3>
                <p className="text-sm text-zinc-400">{edu.degree}</p>
                {edu.note && <p className="text-xs text-indigo-400 font-medium mt-0.5">{edu.note}</p>}
                <p className="text-xs text-zinc-600 mt-1 font-mono">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800/60 py-10 mt-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
          <span>© 2026 Nabil Kamalludin</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200 uppercase tracking-widest text-xs font-bold">GitHub</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200 uppercase tracking-widest text-xs font-bold">LinkedIn</a>
            <a href="#" className="hover:text-indigo-400 transition-colors duration-200 uppercase tracking-widest text-xs font-bold">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
