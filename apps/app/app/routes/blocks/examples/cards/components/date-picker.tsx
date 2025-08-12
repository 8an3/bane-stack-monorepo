import Calendar05 from "~/components/blocks/calendars/calendar-05"
import { Card, CardContent } from "~/components/ui/card"
import { Label } from "~/components/ui/label"

export function DemoDatePicker() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="shrink-0">
            Pick a date
          </Label>
          <Calendar05 />
        </div>
      </CardContent>
    </Card>
  )
}
