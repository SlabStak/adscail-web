import {
  FileText,
  ArrowLeft,
  Plus,
  Play,
  Copy,
  Download,
  Clock,
  Video
} from "lucide-react";
import Link from "next/link";

const scripts = [
  {
    id: 1,
    title: "Summer Sale - 30s Spot",
    type: "Video Script",
    duration: "30 seconds",
    status: "Complete",
    createdAt: "2 hours ago",
    scenes: 5
  },
  {
    id: 2,
    title: "Product Demo - Widget X",
    type: "Video Script",
    duration: "60 seconds",
    status: "Complete",
    createdAt: "1 day ago",
    scenes: 8
  },
  {
    id: 3,
    title: "Brand Story - Who We Are",
    type: "Video Script",
    duration: "90 seconds",
    status: "Draft",
    createdAt: "3 days ago",
    scenes: 12
  },
];

export default function ScriptsPage() {
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
              <div className="p-2 rounded-xl icon-gradient-cyan">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Video Scripts</h1>
                <p className="text-zinc-400 mt-1">AI-generated scene-by-scene scripts</p>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            <Plus className="w-5 h-5" />
            New Script
          </button>
        </div>

        {/* Scripts List */}
        <div className="space-y-4">
          {scripts.map((script) => (
            <div key={script.id} className="glass-card p-6 group">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/20">
                    <Video className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {script.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {script.duration}
                      </span>
                      <span>{script.scenes} scenes</span>
                      <span>Created {script.createdAt}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    script.status === 'Complete' ? 'bg-green-500/20 text-green-400' : 'bg-zinc-500/20 text-zinc-400'
                  }`}>
                    {script.status}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600/20 text-cyan-400 hover:bg-cyan-600/30 transition-colors">
                  <Play className="w-4 h-4" />
                  Preview
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Copy className="w-4 h-4" />
                  Copy
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 text-zinc-400 hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Info */}
        <div className="mt-12 p-8 rounded-xl border border-dashed border-zinc-700 text-center">
          <FileText className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">Script Generation</h3>
          <p className="text-zinc-400 max-w-md mx-auto mb-6">
            Create complete video scripts with hooks, scene breakdowns, dialogue, B-roll suggestions, and CTAs.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all">
            <Plus className="w-5 h-5" />
            Generate Your First Script
          </button>
        </div>
      </div>
    </div>
  );
}
