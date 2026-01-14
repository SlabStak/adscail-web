import {
  LayoutDashboard,
  TrendingUp,
  Eye,
  MousePointerClick,
  DollarSign,
  ArrowLeft,
  Plus
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Active Campaigns", value: "12", change: "+3", icon: LayoutDashboard, gradient: "icon-gradient-purple" },
  { label: "Total Impressions", value: "2.4M", change: "+18%", icon: Eye, gradient: "icon-gradient-blue" },
  { label: "Click Rate", value: "3.2%", change: "+0.5%", icon: MousePointerClick, gradient: "icon-gradient-cyan" },
  { label: "Ad Spend", value: "$45.2K", change: "-12%", icon: DollarSign, gradient: "icon-gradient-green" },
];

const recentCampaigns = [
  { name: "Summer Sale 2024", status: "Active", performance: "High", spend: "$12,450" },
  { name: "Product Launch - Widget X", status: "Active", performance: "Medium", spend: "$8,320" },
  { name: "Brand Awareness Q4", status: "Paused", performance: "Low", spend: "$3,200" },
  { name: "Holiday Promo", status: "Draft", performance: "-", spend: "$0" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-5 h-5 text-zinc-400" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-zinc-400 mt-1">Track your campaign performance</p>
            </div>
          </div>
          <Link
            href="/campaigns/new"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all"
          >
            <Plus className="w-5 h-5" />
            New Campaign
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.gradient} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zinc-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Performance Chart Placeholder */}
        <div className="glass-card p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Performance Overview</h2>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg bg-purple-600/20 text-purple-400 text-sm font-medium">7 Days</button>
              <button className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-white/5 text-sm">30 Days</button>
              <button className="px-4 py-2 rounded-lg text-zinc-400 hover:bg-white/5 text-sm">90 Days</button>
            </div>
          </div>
          <div className="h-64 flex items-center justify-center border border-dashed border-zinc-700 rounded-lg">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
              <p className="text-zinc-500">Performance chart coming soon</p>
            </div>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="glass-card overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-semibold text-white">Recent Campaigns</h2>
          </div>
          <div className="divide-y divide-white/5">
            {recentCampaigns.map((campaign) => (
              <div key={campaign.name} className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                <div>
                  <h3 className="text-white font-medium">{campaign.name}</h3>
                  <p className="text-zinc-400 text-sm mt-1">Spend: {campaign.spend}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    campaign.status === 'Paused' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-zinc-500/20 text-zinc-400'
                  }`}>
                    {campaign.status}
                  </span>
                  <span className={`text-sm ${
                    campaign.performance === 'High' ? 'text-green-400' :
                    campaign.performance === 'Medium' ? 'text-yellow-400' :
                    campaign.performance === 'Low' ? 'text-red-400' :
                    'text-zinc-500'
                  }`}>
                    {campaign.performance !== '-' && 'Performance: '}{campaign.performance}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
