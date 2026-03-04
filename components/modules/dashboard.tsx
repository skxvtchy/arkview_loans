export function Dashboard() {
  return (
    <section
      id="dashboards"
      className="overflow-hidden border-t border-zinc-200/60 bg-[#fafafa] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Dashboards
          </span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Dashboards that drive action
          </h2>
          <p className="mt-6 text-lg text-zinc-600">
            Pipeline value, forecast, and activity at a glance. No exports, no digging.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-zinc-200/50 via-zinc-100/50 to-zinc-200/50 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-2xl shadow-zinc-200/50">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-amber-400" />
                <div className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="mx-4 flex flex-1">
                <div className="mx-auto flex h-7 w-full max-w-md items-center rounded-md border border-zinc-200 bg-white px-3">
                  <span className="text-xs text-zinc-400">app.arkview.io/dashboard</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Dashboard header */}
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900">Sales Overview</h3>
                  <p className="text-sm text-zinc-500">Last 30 days</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
                  >
                    Export
                  </button>
                  <button
                    type="button"
                    className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Refresh
                  </button>
                </div>
              </div>

              {/* Stats grid */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Pipeline Value", value: "$2.4M", change: "+12%", positive: true },
                  { label: "Deals Won", value: "24", change: "+8%", positive: true },
                  { label: "Win Rate", value: "34%", change: "-2%", positive: false },
                  { label: "Avg Deal Size", value: "$45K", change: "+5%", positive: true },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-colors hover:border-zinc-200"
                  >
                    <p className="text-sm font-medium text-zinc-500">{stat.label}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-zinc-900">{stat.value}</span>
                      <span
                        className={`text-xs font-medium ${stat.positive ? "text-emerald-600" : "text-red-600"}`}
                      >
                        {stat.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-6 lg:col-span-2">
                  <h4 className="mb-6 text-sm font-semibold text-zinc-900">Revenue Trend</h4>
                  <div className="flex h-48 items-end gap-3">
                    {[35, 45, 30, 65, 55, 80, 70, 85, 60, 75, 90, 95].map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col gap-1">
                        <div
                          className="group relative w-full cursor-pointer rounded-t bg-zinc-300 transition-colors hover:bg-zinc-400"
                          style={{ height: `${h}%` }}
                        >
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-zinc-900 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            ${(h * 1000).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between text-xs text-zinc-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                  </div>
                </div>

                <div className="rounded-xl border border-zinc-100 bg-zinc-50/30 p-6">
                  <h4 className="mb-6 text-sm font-semibold text-zinc-900">Deal Stages</h4>
                  <div className="space-y-4">
                    {[
                      { stage: "Prospecting", value: 12, total: 20, color: "bg-blue-500" },
                      { stage: "Qualification", value: 8, total: 15, color: "bg-violet-500" },
                      { stage: "Proposal", value: 5, total: 10, color: "bg-amber-500" },
                      { stage: "Negotiation", value: 3, total: 8, color: "bg-emerald-500" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-zinc-700">{item.stage}</span>
                          <span className="text-zinc-500">
                            {item.value}/{item.total}
                          </span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                          <div
                            className={`h-full rounded-full ${item.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${(item.value / item.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
