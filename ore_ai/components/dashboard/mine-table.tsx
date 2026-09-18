import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { mines, statusLabels, type MineStatus } from "@/lib/mock-data"

const statusVariant: Record<
  MineStatus,
  "default" | "secondary" | "outline"
> = {
  operational: "default",
  expansion: "secondary",
  survey: "outline",
}

export function MineTable() {
  const sorted = [...mines].sort(
    (a, b) => b.estimatedReserveMt - a.estimatedReserveMt,
  )
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mine network</CardTitle>
        <CardDescription>
          AI-estimated reserves, grade, and model confidence by site
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mine</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Reserve (Mt)</TableHead>
              <TableHead className="text-right">Grade</TableHead>
              <TableHead className="w-40">Confidence</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((m) => (
              <TableRow key={m.id}>
                <TableCell className="font-medium">{m.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {m.state}
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[m.status]}>
                    {statusLabels[m.status]}
                  </Badge>
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {m.estimatedReserveMt.toFixed(1)}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  {m.gradePct.toFixed(1)}%
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={m.confidence} className="h-1.5" />
                    <span className="w-9 text-right text-xs tabular-nums text-muted-foreground">
                      {m.confidence}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
