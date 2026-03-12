import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { IconFileText } from "@tabler/icons-react"

const BANK_STATEMENTS = [
  "Bank statement 1",
  "Bank statement 2",
  "Bank statement 3",
  "Bank statement 4",
]

const OTHER_DOCS = ["Driver's license", "Voided check", "Signed document"]

function CompletedDot() {
  return (
    <span
      className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30"
      title="Completed"
      aria-hidden
    />
  )
}

interface DocumentsProps {
  className?: string
}

export function Documents({ className }: DocumentsProps) {
  return (
    <Card
      className={cn(
        "@container/card flex h-full min-h-0 flex-col bg-gradient-to-t from-primary/5 to-card shadow-xs",
        className
      )}
    >
      <CardHeader>
        <CardDescription className="flex items-center gap-2">
          <IconFileText className="size-4 text-muted-foreground" />
          Documents
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          Documents submitted
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-0">
        {/* Bank statements */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Bank statements
          </h4>
          <ul className="space-y-2">
            {BANK_STATEMENTS.map((label) => (
              <li
                key={label}
                className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-sm"
              >
                <span className="truncate text-foreground">{label}</span>
                <CompletedDot />
              </li>
            ))}
          </ul>
        </div>
        {/* Other documents */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Other documents
          </h4>
          <ul className="space-y-2">
            {OTHER_DOCS.map((doc) => (
              <li
                key={doc}
                className="flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-muted/30 px-3 py-2 text-sm"
              >
                <span className="truncate text-foreground">{doc}</span>
                <CompletedDot />
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
