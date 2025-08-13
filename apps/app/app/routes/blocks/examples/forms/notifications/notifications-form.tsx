import { useFetcher } from "@remix-run/react";
import { Link } from "@remix-run/react";
import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { SelectSeparator, Separator } from "~/components/ui";

export function NotificationsForm() {
	const fetcher = useFetcher();

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Notifications</h3>
				<p className="text-sm text-muted-foreground">Configure how you receive notifications.</p>
			</div>
			<SelectSeparator />
			<fetcher.Form
				method="post"
				className="space-y-8"
				onSubmit={(e) => {
					// Optional: Add toast on submission
					toast({
						title: "Notification preferences updated",
						description: "Your settings have been saved successfully.",
					});
				}}
			>
				{/* Notification Type Radio Group */}
				<div className="space-y-3">
					<Label>Notify me about...</Label>
					<RadioGroup name="type" defaultValue="all" className="flex flex-col space-y-1">
						<div className="flex items-center space-x-3 space-y-0">
							<RadioGroupItem value="all" id="all" />
							<Label htmlFor="all" className="font-normal">
								All new messages
							</Label>
						</div>
						<div className="flex items-center space-x-3 space-y-0">
							<RadioGroupItem value="mentions" id="mentions" />
							<Label htmlFor="mentions" className="font-normal">
								Direct messages and mentions
							</Label>
						</div>
						<div className="flex items-center space-x-3 space-y-0">
							<RadioGroupItem value="none" id="none" />
							<Label htmlFor="none" className="font-normal">
								Nothing
							</Label>
						</div>
					</RadioGroup>
				</div>

				{/* Email Notifications Section */}
				<div>
					<h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
					<div className="space-y-4">
						{/* Communication Emails */}
						<div className="flex flex-row items-center justify-between rounded-lg border p-4">
							<div className="space-y-0.5">
								<Label className="text-base">Communication emails</Label>
								<p className="text-sm text-muted-foreground">Receive emails about your account activity.</p>
							</div>
							<Switch name="communication_emails" />
						</div>

						{/* Marketing Emails */}
						<div className="flex flex-row items-center justify-between rounded-lg border p-4">
							<div className="space-y-0.5">
								<Label className="text-base">Marketing emails</Label>
								<p className="text-sm text-muted-foreground">Receive emails about new products, features, and more.</p>
							</div>
							<Switch name="marketing_emails" />
						</div>

						{/* Social Emails */}
						<div className="flex flex-row items-center justify-between rounded-lg border p-4">
							<div className="space-y-0.5">
								<Label className="text-base">Social emails</Label>
								<p className="text-sm text-muted-foreground">Receive emails for friend requests, follows, and more.</p>
							</div>
							<Switch name="social_emails" />
						</div>

						{/* Security Emails */}
						<div className="flex flex-row items-center justify-between rounded-lg border p-4">
							<div className="space-y-0.5">
								<Label className="text-base">Security emails</Label>
								<p className="text-sm text-muted-foreground">Receive emails about your account activity and security.</p>
							</div>
							<Switch name="security_emails" disabled aria-readonly />
						</div>
					</div>
				</div>

				{/* Mobile Settings Checkbox */}
				<div className="flex flex-row items-start space-x-3 space-y-0">
					<Checkbox name="mobile" id="mobile" />
					<div className="space-y-1 leading-none">
						<Label htmlFor="mobile">Use different settings for my mobile devices</Label>
						<p className="text-sm text-muted-foreground">
							You can manage your mobile notifications in the{" "}
							<Link to="/examples/forms" className="text-primary hover:underline">
								mobile settings
							</Link>{" "}
							page.
						</p>
					</div>
				</div>

				<Button type="submit">Update notifications</Button>
			</fetcher.Form>
		</div>
	);
}
