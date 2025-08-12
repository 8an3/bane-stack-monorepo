import { Link } from "@remix-run/react"

import { Button } from "~/components/ui/button"

export default function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
