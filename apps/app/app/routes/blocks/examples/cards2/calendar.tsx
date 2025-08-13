

import { addDays } from "date-fns"

import { Card, CardContent } from "~/components/ui/card"
import { Calendar } from "~/components/ui"
import { Calendar01 } from "~/components/blocks/calendars/calendar-01"

const start = new Date(2023, 5, 5)

export function CardsCalendar() {
  return (
    <Card className="max-w-[260px]  ">
      <CardContent className="p-1">
   <Calendar01 />
      </CardContent>
    </Card>
  )
}
