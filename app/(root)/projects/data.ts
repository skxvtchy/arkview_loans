export const projects = [
  { id: "id123", key: "PROJ", name: "Platform Redesign", lead: "Jordan Lee", issues: 24, status: "Active" },
  { id: "id124", key: "MARK", name: "Marketing Site", lead: "Sam Rivera", issues: 12, status: "Active" },
  { id: "id125", key: "OPS", name: "Operations", lead: "Alex Chen", issues: 8, status: "Active" },
  { id: "id126", key: "HR", name: "HR Portal", lead: "Morgan Taylor", issues: 5, status: "On hold" },
  { id: "id127", key: "FIN", name: "Finance Dashboard", lead: "Casey Kim", issues: 18, status: "Active" },
  { id: "id128", key: "API", name: "API v2", lead: "Jordan Lee", issues: 31, status: "Active" },
  { id: "id129", key: "MOB", name: "Mobile App", lead: "Sam Rivera", issues: 42, status: "Active" },
] as const

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id) ?? null
}
