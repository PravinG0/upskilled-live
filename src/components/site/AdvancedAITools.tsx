import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/ai-features-hero.jpg";

interface Feature {
  id: string;
  label: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.5 5.5h5.5l-4.5 3.5 1.5 5.5-4.5-3.5-4.5 3.5 1.5-5.5-4.5-3.5h5.5z" />
    </svg>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChatMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl glass p-6 shadow-2xl ring-1 ring-white/10">
      <div className="mb-4 flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
          <Sparkle className="h-5 w-5 text-gold" />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">AI Tutor</p>
          <p className="text-xs text-muted-foreground">Online now</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="ml-auto w-3/4 rounded-2xl rounded-br-md bg-gold/20 px-4 py-3 text-sm text-white border border-gold/30">
          Explain this concept in a simpler way
        </div>
        <div className="mr-auto w-[90%] rounded-2xl rounded-bl-md glass px-4 py-3 text-sm text-muted-foreground border border-white/10">
          Sure! Think of it like a filter that only keeps the most important patterns from the data.
        </div>
        <div className="mx-auto flex w-fit items-center gap-1 rounded-full bg-gold/10 px-3 py-1 text-xs text-gold border border-gold/20">
          <Sparkle className="h-3 w-3" /> AI suggested follow-up
        </div>
      </div>
    </div>
  );
}

function QuizMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl glass p-6 shadow-2xl ring-1 ring-white/10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">AI Quiz Generator</p>
          <p className="text-xs text-muted-foreground">From learning objective</p>
        </div>
        <div className="rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold border border-gold/30">5 questions</div>
      </div>
      <div className="space-y-3">
        <div className="rounded-xl border border-white/10 glass p-4">
          <p className="text-sm font-medium text-white">What is the primary goal of supervised learning?</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {["Predict labels", "Cluster data", "Reduce dimensions", "Explore data"].map((opt, i) => (
              <div
                key={i}
                className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-gold/20 text-gold border border-gold/30" : "glass text-muted-foreground border border-white/10"}`}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl glass border border-white/10 px-4 py-3">
          <span className="text-xs font-medium text-muted-foreground">Not satisfied?</span>
          <button className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-black hover:bg-gold/90 transition">
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}

function GradingMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl glass p-6 shadow-2xl ring-1 ring-white/10">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm font-semibold text-white">AI Auto-Grading</p>
        <div className="flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300 border border-emerald-500/30">
          <Check className="h-3 w-3" /> 94% scored
        </div>
      </div>
      <div className="space-y-3">
        {[
          { name: "Emma R.", score: "92/100", status: "Graded" },
          { name: "Liam K.", score: "88/100", status: "Graded" },
          { name: "Sophia M.", score: "Pending", status: "Review" },
        ].map((row, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl border border-white/10 glass p-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-white/10" />
              <p className="text-sm text-white">{row.name}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gold">{row.score}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  row.status === "Graded" ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                }`}
              >
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DoubtMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl glass p-6 shadow-2xl ring-1 ring-white/10">
      <p className="mb-4 text-sm font-semibold text-white">Instant Doubt Solver</p>
      <div className="space-y-3">
        <div className="rounded-xl glass border border-white/10 p-4">
          <p className="text-sm font-medium text-white">How do I solve x² + 5x + 6 = 0?</p>
        </div>
        <div className="rounded-xl border-l-4 border-gold glass p-4">
          <p className="text-sm text-muted-foreground">
            Factor it as <span className="font-semibold text-white">(x + 2)(x + 3) = 0</span>, so x = -2 or x = -3.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Thanks!", "Explain more", "Try another"].map((btn) => (
            <button key={btn} className="rounded-full border border-white/20 glass px-3 py-1 text-xs text-muted-foreground hover:bg-white/[0.08] transition">
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl glass p-6 shadow-2xl ring-1 ring-white/10">
      <div className="mb-4 flex items-center gap-2">
        <Sparkle className="h-5 w-5 text-gold" />
        <p className="text-sm font-semibold text-white">AI Content Assistant</p>
      </div>
      <div className="space-y-2 rounded-xl border border-white/10 glass p-4">
        <div className="h-2 w-3/4 rounded bg-white/10" />
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="h-2 w-1/2 rounded bg-white/10" />
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-xl glass border border-gold/30 px-4 py-3">
        <Sparkle className="h-4 w-4 text-gold" />
        <p className="text-xs text-muted-foreground">Generate outline, lesson summary, and quiz from this prompt.</p>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className="w-full max-w-md rounded-3xl glass p-6 shadow-2xl ring-1 ring-white/10">
      <p className="mb-5 text-sm font-semibold text-white">AI Learning Intelligence</p>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Engagement", value: "87%" },
          { label: "At Risk", value: "12" },
          { label: "Completion", value: "94%" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 glass p-3 text-center">
            <p className="text-lg font-bold text-gold">{stat.value}</p>
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl glass border border-white/10 p-4">
        <div className="mb-2 flex items-end justify-between gap-1">
          {[40, 65, 50, 80, 70, 90].map((h, i) => (
            <div key={i} className="w-full rounded-t bg-gold/60" style={{ height: `${h}px` }} />
          ))}
        </div>
        <p className="text-xs text-muted-foreground">Skill gap detected in Advanced Analytics module</p>
      </div>
    </div>
  );
}

const features: Feature[] = [
  {
    id: "personal-ai-tutor",
    label: "Personal AI Tutor",
    title: "Personal AI Tutor",
    tagline: "for every learner",
    description:
      "Get instant, context-aware support inside lessons, assignments, and learning activities. Available 24/7 to explain concepts, guide learners, and provide help exactly when it's needed.",
    bullets: [
      "Personalized learning support",
      "Instant explanations and guidance",
      "Context-aware assistance",
      "Available 24/7",
      "Keeps learners progressing without delays",
    ],
    mockup: <ChatMockup />,
  },
  {
    id: "ai-quiz-generator",
    label: "AI Quiz Generator",
    title: "AI Quiz Generator",
    tagline: "for smarter assessments",
    description:
      "Create high-quality quizzes aligned to learning objectives in seconds. If the generated questions don't meet your expectations, simply regenerate them until they're right for your learners.",
    bullets: [
      "Generate quizzes from learning objectives",
      "Multiple question formats",
      "Regenerate questions instantly",
      "Refine assessments with a single click",
      "Save hours of manual quiz creation",
    ],
    mockup: <QuizMockup />,
  },
  {
    id: "ai-auto-grading",
    label: "AI Auto-Grading",
    title: "AI Auto-Grading",
    tagline: "for faster feedback",
    description:
      "Reduce grading effort and deliver feedback faster. AI evaluates submissions using predefined criteria, allowing instructors to focus on mentoring rather than manual review.",
    bullets: [
      "Automate grading workflows",
      "Generate instant feedback",
      "Improve evaluation consistency",
      "Reduce instructor workload",
      "Accelerate learning cycles",
    ],
    mockup: <GradingMockup />,
  },
  {
    id: "ai-doubt-solver",
    label: "AI Doubt Solver",
    title: "AI Doubt Solver",
    tagline: "for instant support",
    description:
      "Help learners get answers when they need them. Resolve common questions instantly and keep learning moving without unnecessary interruptions.",
    bullets: [
      "Immediate learner assistance",
      "Faster doubt resolution",
      "Contextual responses",
      "Reduce support dependency",
      "Improve learner engagement",
    ],
    mockup: <DoubtMockup />,
  },
  {
    id: "ai-content-assistant",
    label: "AI Content Assistant",
    title: "AI Content Assistant",
    tagline: "for course creation",
    description:
      "Create learning content faster with AI-powered assistance. Generate outlines, lesson structures, quizzes, and learning materials from simple prompts.",
    bullets: [
      "Generate course outlines",
      "Create lesson summaries",
      "Build assessment banks",
      "Develop learning materials faster",
      "Reduce content creation time",
    ],
    mockup: <ContentMockup />,
  },
  {
    id: "ai-learning-intelligence",
    label: "AI Learning Intelligence",
    title: "AI Learning Intelligence",
    tagline: "for actionable insights",
    description:
      "Transform learning data into meaningful decisions. Track engagement, identify skill gaps, and measure program effectiveness across learners and teams.",
    bullets: [
      "Identify skill gaps",
      "Detect learning risks early",
      "Track learner engagement",
      "Measure training effectiveness",
      "Support data-driven decisions",
    ],
    mockup: <AnalyticsMockup />,
  },
];

export function AdvancedAITools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveIndex(index);
            }
          });
        },
        { threshold: [0.5] },
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative" aria-label="AI Features">
      {/* Hero */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute inset-0" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        <div className="relative z-10 flex h-full flex-col justify-between px-6 py-16 md:px-12 lg:px-20">
          <div className="pt-16 md:pt-24 lg:pt-32">
            <h1 className="max-w-5xl font-bold text-5xl leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
              AI Features
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
              Powerful AI built into every step of the learning experience — so educators and learners move faster,
              smarter, and together.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                onClick={() => scrollToSection(index)}
                className={`group flex items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                  activeIndex === index
                    ? "border-gold/60 bg-gold/10 backdrop-blur-md"
                    : "border-white/20 bg-white/[0.08] backdrop-blur-sm hover:bg-white/[0.12]"
                }`}
                whileHover={{ y: -2 }}
              >
                <span className="text-base font-medium text-white">{feature.label}</span>
                <span className={`text-lg transition-all group-hover:translate-x-1 ${activeIndex === index ? "text-gold" : "text-white/50"}`}>→</span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Curved reveal transition */}
      <div className="relative h-[25vh]" style={{ zIndex: 2 }}>
        <svg
          className="absolute bottom-0 left-0 h-full w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="rgb(15, 15, 15)"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      {/* Feature sections */}
      <div className="relative bg-background" style={{ zIndex: 3 }}>
        {features.map((feature, index) => {
          const isTextLeft = index % 2 === 0;
          return (
            <div
              key={feature.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="sticky top-0 min-h-screen w-full"
              style={{ zIndex: 10 + index }}
            >
              <div className="flex min-h-screen items-center justify-center bg-background px-6 py-24 md:px-12 lg:px-20">
                <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
                  {/* Text content */}
                  <div className={`space-y-6 ${isTextLeft ? "lg:order-1 lg:pr-8" : "lg:order-2 lg:pl-8"}`}>
                    <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
                      {feature.title} <span className="italic text-gold">{feature.tagline}</span>
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                      {feature.description}
                    </p>
                    <ul className="space-y-3 pt-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-base text-muted-foreground md:text-lg">
                          <span className="mt-1 text-gold">→</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Mockup */}
                  <div
                    className={`flex items-center justify-center ${
                      isTextLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <motion.div className="w-full max-w-lg transition-transform duration-700 hover:scale-[1.02]">
                      {feature.mockup}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
