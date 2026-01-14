import {
  Clapperboard,
  ArrowLeft,
  ArrowRight,
  Building2,
  Users,
  Target,
  FileText,
  Sparkles,
  Check
} from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, name: "Business Info", icon: Building2, status: "current" },
  { id: 2, name: "Audience", icon: Users, status: "upcoming" },
  { id: 3, name: "Targeting", icon: Target, status: "upcoming" },
  { id: 4, name: "Creative", icon: FileText, status: "upcoming" },
  { id: 5, name: "Review", icon: Check, status: "upcoming" },
];

const industryTemplates = [
  { name: "E-commerce / DTC", description: "Product-focused ads with strong CTAs", icon: "🛍️" },
  { name: "SaaS / Software", description: "Feature demos and free trial offers", icon: "💻" },
  { name: "Local Business", description: "Location-based targeting and promotions", icon: "📍" },
  { name: "Professional Services", description: "Trust-building and lead generation", icon: "💼" },
  { name: "Health & Wellness", description: "Transformation stories and testimonials", icon: "🏃" },
  { name: "Education / Courses", description: "Value-driven content and enrollment", icon: "📚" },
  { name: "Real Estate", description: "Property showcases and market insights", icon: "🏠" },
  { name: "Custom", description: "Start from scratch with AI guidance", icon: "✨" },
];

export default function CampaignWizardPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-zinc-400" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl icon-gradient-blue">
              <Clapperboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Campaign Wizard</h1>
              <p className="text-zinc-400 text-sm">Build your AI-powered campaign</p>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="glass-card p-4 mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.status === 'current' ? 'bg-purple-600' :
                    step.status === 'completed' ? 'bg-green-600' :
                    'bg-zinc-700'
                  }`}>
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className={`text-sm font-medium hidden sm:block ${
                    step.status === 'current' ? 'text-white' : 'text-zinc-500'
                  }`}>
                    {step.name}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 lg:w-24 h-0.5 bg-zinc-700 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Industry Selection */}
        <div className="glass-card p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Select Your Industry</h2>
            <p className="text-zinc-400">Choose a template to get started with AI-optimized campaign settings</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {industryTemplates.map((template) => (
              <button
                key={template.name}
                className="p-6 rounded-xl border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all text-left group"
              >
                <span className="text-3xl mb-3 block">{template.icon}</span>
                <h3 className="text-white font-semibold mb-1 group-hover:text-purple-300 transition-colors">
                  {template.name}
                </h3>
                <p className="text-zinc-500 text-sm">{template.description}</p>
              </button>
            ))}
          </div>

          {/* AI Assist Banner */}
          <div className="p-6 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-purple-600/30">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">AI-Powered Campaign Generation</h3>
                <p className="text-zinc-400 text-sm">
                  Claude will analyze your business and generate complete campaign strategy, scripts, ad copy, and targeting recommendations.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-6 border-t border-white/10">
            <Link
              href="/"
              className="px-6 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
            >
              Cancel
            </Link>
            <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Continue
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
