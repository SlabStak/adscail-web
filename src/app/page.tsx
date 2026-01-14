import {
  LayoutDashboard,
  Clapperboard,
  FileText,
  Target,
  Sparkles,
  ArrowRight,
  Zap
} from "lucide-react";

const features = [
  {
    title: "Dashboard",
    description: "Track campaign performance, analytics, and insights in real-time",
    icon: LayoutDashboard,
    gradient: "icon-gradient-purple",
    href: "/dashboard"
  },
  {
    title: "Campaign Wizard",
    description: "Build complete ad campaigns with AI-powered strategy and creative",
    icon: Clapperboard,
    gradient: "icon-gradient-blue",
    href: "/campaigns/new"
  },
  {
    title: "Full Scripts",
    description: "Generate scene-by-scene video scripts with hooks, CTAs, and shot lists",
    icon: FileText,
    gradient: "icon-gradient-cyan",
    href: "/scripts"
  },
  {
    title: "Targeting",
    description: "AI-optimized audience targeting with interests, lookalikes, and exclusions",
    icon: Target,
    gradient: "icon-gradient-pink",
    href: "/targeting"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-32">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 rounded-xl icon-gradient-purple shadow-lg shadow-purple-500/25">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white tracking-tight">
                AdScail
              </h1>
            </div>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-2xl mx-auto mb-4">
              AI-Powered Ad Campaign Generator
            </p>
            <p className="text-zinc-400 max-w-xl mx-auto mb-12">
              Create execution-ready campaigns with strategy, video scripts, ad copy,
              targeting, and funnel mapping in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/campaigns/new"
                className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="w-5 h-5" />
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/dashboard"
                className="px-8 py-4 rounded-full text-zinc-300 font-medium border border-zinc-700 hover:border-zinc-500 hover:text-white transition-all duration-300"
              >
                View Dashboard
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      </header>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need to Scale
          </h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            From strategy to execution, AdScail handles the entire campaign creation process
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <a
              key={feature.title}
              href={feature.href}
              className="glass-card p-6 group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className="flex items-center gap-2 mt-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium">Get started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">3x</div>
              <div className="text-zinc-400 text-sm">Faster Campaign Creation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-zinc-400 text-sm">Execution Ready</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-zinc-400 text-sm">Industry Templates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">AI</div>
              <div className="text-zinc-400 text-sm">Powered by Claude</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 text-sm">
          Built by Murphbeck Tech
        </div>
      </footer>
    </div>
  );
}
