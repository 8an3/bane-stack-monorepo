import { Link } from "@remix-run/react"

import { cn } from "~/components/ui/utils"
import { buttonVariants } from "~/components/ui/button"
import { UserAuthForm } from "./components/user-auth-form"

export const meta: MetaFunction = () => {
	return [
		{ title: "Authentication - 8an3/Bane" },
		{ name: "description", content: "8an3/Bane Remix Stack" },
	];
};

export default function AuthenticationPage() {
  return (
    <>
            <UserAuthForm />
    </>
  )
}

export async function loader({ request }: LoaderArgs) {
  return null
}