import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { IconUser } from "@tabler/icons-react"

interface ProfileProps {
  className?: string
}

export function Profile({ className }: ProfileProps) {
  return (
    <Card
      className={cn(
        "@container/card bg-gradient-to-t from-primary/5 to-card shadow-xs",
        className
      )}
    >
      <CardHeader>
        <CardDescription className="flex items-center gap-2">
          <IconUser className="size-4 text-muted-foreground" />
          Profile
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          Profile information
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-0" />
    </Card>
  )
}
