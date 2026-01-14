import {
  Target,
  ArrowLeft,
  Users,
  MapPin,
  Sparkles,
  Brain,
  TrendingUp,
  Filter,
  Save
} from "lucide-react";
import Link from "next/link";

const audienceSegments = [
  { name: "High-Intent Shoppers", size: "2.4M", match: 94, type: "Interest" },
  { name: "Recent Website Visitors", size: "45K", match: 98, type: "Retargeting" },
  { name: "Lookalike - Top Customers", size: "1.2M", match: 87, type: "Lookalike" },
  { name: "Competitor Audiences", size: "890K", match: 72, type: "Conquest" },
];

const interests = [
  "Online Shopping", "Tech Gadgets", "Fashion", "Home Decor",
  "Fitness", "Travel", "Food & Dining", "Entertainment"
];

const demographics = [
  { label: "Age", value: "25-54" },
  { label: "Gender", value: "All" },
  { label: "Income", value: "$50K+" },
  { label: "Education", value: "College+" },
];

export default function TargetingPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5 text-zinc-400" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl icon-gradient-pink">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Audience Targeting</h1>
                <p className="text-zinc-400 mt-1">AI-optimized targeting recommendations</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            <Save className="w-5 h-5" />
            Save Audience
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Targeting Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Recommendations */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">AI-Recommended Audiences</h2>
              </div>
              <div className="space-y-4">
                {audienceSegments.map((segment) => (
                  <div key={segment.name} className="p-4 rounded-xl border border-zinc-700 hover:border-purple-500 hover:bg-purple-500/5 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-medium">{segment.name}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-zinc-400">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {segment.size}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-zinc-700 text-xs">{segment.type}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">{segment.match}%</div>
                        <div className="text-xs text-zinc-500">Match Score</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Interests & Behaviors</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
                  >
                    {interest}
                  </button>
                ))}
                <button className="px-4 py-2 rounded-full border border-dashed border-zinc-600 text-zinc-500 hover:border-zinc-500 hover:text-zinc-400 transition-all">
                  + Add Interest
                </button>
              </div>
            </div>

            {/* Geographic Targeting */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <MapPin className="w-5 h-5 text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">Geographic Targeting</h2>
              </div>
              <div className="h-48 flex items-center justify-center border border-dashed border-zinc-700 rounded-lg">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-zinc-600 mx-auto mb-2" />
                  <p className="text-zinc-500">Map view coming soon</p>
                  <p className="text-zinc-600 text-sm">Currently targeting: United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Demographics Summary */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-orange-500/20">
                  <Filter className="w-5 h-5 text-orange-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Demographics</h2>
              </div>
              <div className="space-y-4">
                {demographics.map((demo) => (
                  <div key={demo.label} className="flex items-center justify-between">
                    <span className="text-zinc-400">{demo.label}</span>
                    <span className="text-white font-medium">{demo.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Reach */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Estimated Reach</h2>
              </div>
              <div className="text-center py-4">
                <div className="text-4xl font-bold text-white mb-1">4.5M</div>
                <div className="text-zinc-400 text-sm">Potential audience size</div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Daily Reach</span>
                  <span className="text-white">12K - 45K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Est. CPM</span>
                  <span className="text-white">$8.50 - $12.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
