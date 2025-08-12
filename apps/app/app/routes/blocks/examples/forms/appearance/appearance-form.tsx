import { ChevronDown } from "lucide-react";
import { useFetcher } from "@remix-run/react";
import { toast } from "sonner";
import { Button, buttonVariants } from "~/components/ui/button";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { cn } from "~/components/ui/utils";

export function AppearanceForm() {
	const fetcher = useFetcher();

	return (
		<fetcher.Form
			method="post"
			className="space-y-8"
			onSubmit={(e) => {
				toast({
					title: "Appearance preferences updated",
					description: "Your settings have been saved successfully.",
				});
			}}
		>
			{/* Font Selection */}
			<div>
				<label className="block mb-2 text-sm font-medium">Font</label>
				<div className="relative w-max">
					<select name="font" defaultValue="inter" className={cn(buttonVariants({ variant: "outline" }), "w-[200px] appearance-none font-normal")}>
						<option value="inter">Inter</option>
						<option value="manrope">Manrope</option>
						<option value="system">System</option>
					</select>
					<ChevronDown className="absolute right-3 top-2.5 h-4 w-4 opacity-50" />
				</div>
				<p className="mt-2 text-sm text-muted-foreground">Set the font you want to use in the dashboard.</p>
			</div>

			{/* Theme Selection */}
			<div className="space-y-1">
				<label className="block text-sm font-medium">Theme</label>
				<p className="text-sm text-muted-foreground">Select the theme for the dashboard.</p>
				<RadioGroup name="theme" defaultValue="light" className="grid max-w-md grid-cols-2 gap-8 pt-2">
					<div>
						<label className="[&:has([data-state=checked])>div]:border-primary">
							<RadioGroupItem value="light" className="sr-only" />
							<div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
								<div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
									<div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
										<div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
										<div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
									</div>
									<div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
										<div className="h-4 w-4 rounded-full bg-[#ecedef]" />
										<div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
									</div>
									<div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
										<div className="h-4 w-4 rounded-full bg-[#ecedef]" />
										<div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
									</div>
								</div>
							</div>
							<span className="block w-full p-2 text-center font-normal">Light</span>
						</label>
					</div>
					<div>
						<label className="[&:has([data-state=checked])>div]:border-primary">
							<RadioGroupItem value="dark" className="sr-only" />
							<div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
								<div className="space-y-2 rounded-sm bg-slate-950 p-2">
									<div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
										<div className="h-2 w-[80px] rounded-lg bg-slate-400" />
										<div className="h-2 w-[100px] rounded-lg bg-slate-400" />
									</div>
									<div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
										<div className="h-4 w-4 rounded-full bg-slate-400" />
										<div className="h-2 w-[100px] rounded-lg bg-slate-400" />
									</div>
									<div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
										<div className="h-4 w-4 rounded-full bg-slate-400" />
										<div className="h-2 w-[100px] rounded-lg bg-slate-400" />
									</div>
								</div>
							</div>
							<span className="block w-full p-2 text-center font-normal">Dark</span>
						</label>
					</div>
				</RadioGroup>
			</div>

			<Button type="submit">Update preferences</Button>
		</fetcher.Form>
	);
}
