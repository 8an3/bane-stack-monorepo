import { format } from "date-fns";
import { CalendarIcon, Check, ChevronsUpDown } from "lucide-react";
import { useFetcher } from "@remix-run/react";
import { cn } from "~/components/ui/utils";
import { toast } from "sonner";
import { Button, Separator } from "~/components/ui";
import { Calendar } from "~/components/ui";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "~/components/ui/command";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";

const languages = [
	{ label: "English", value: "en" },
	{ label: "French", value: "fr" },
	{ label: "German", value: "de" },
	{ label: "Spanish", value: "es" },
	{ label: "Portuguese", value: "pt" },
	{ label: "Russian", value: "ru" },
	{ label: "Japanese", value: "ja" },
	{ label: "Korean", value: "ko" },
	{ label: "Chinese", value: "zh" },
] as const;

export function AccountForm() {
	const fetcher = useFetcher();

	// Handle form submission
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		// You can add validation here if needed
		const data = {
			name: formData.get("name") as string,
			dob: formData.get("dob") as string,
			language: formData.get("language") as string,
		};

		// Display the form data (replace with actual submission logic)
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};

	return (
      <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground">
          Update your account settings. Set your preferred language and
          timezone.
        </p>
      </div>
      <Separator />
     <fetcher.Form method="post" onSubmit={handleSubmit} className="space-y-8">
			<div className="space-y-2">
				<Label htmlFor="name">Name</Label>
				<Input id="name" name="name" placeholder="Your name" minLength={2} maxLength={30} />
				<p className="text-sm text-muted-foreground">This is the name that will be displayed on your profile and in emails.</p>
			</div>

			<div className="flex flex-col space-y-2">
				<Label>Date of birth</Label>
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline" className={cn("w-[240px] pl-3 text-left font-normal", !fetcher.formData?.get("dob") && "text-muted-foreground")}>
							{fetcher.formData?.get("dob") ? format(new Date(fetcher.formData.get("dob") as string), "PPP") : <span>Pick a date</span>}
							<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar
							mode="single"
							selected={fetcher.formData?.get("dob") ? new Date(fetcher.formData.get("dob") as string) : undefined}
							onSelect={(date) => {
								// You'd need to handle the date selection here
								// This might require a hidden input field and some state management
							}}
							disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
				<input type="hidden" name="dob" value={fetcher.formData?.get("dob")?.toString() || ""} />
				<p className="text-sm text-muted-foreground">Your date of birth is used to calculate your age.</p>
			</div>

			<div className="flex flex-col space-y-2">
				<Label>Language</Label>
				<Popover>
					<PopoverTrigger asChild>
						<Button variant="outline" role="combobox" className={cn("w-[200px] justify-between", !fetcher.formData?.get("language") && "text-muted-foreground")}>
							{fetcher.formData?.get("language") ? languages.find((language) => language.value === fetcher.formData?.get("language"))?.label : "Select language"}
							<ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0">
						<Command>
							<CommandInput placeholder="Search language..." />
							<CommandList>
								<CommandEmpty>No language found.</CommandEmpty>
								<CommandGroup>
									{languages.map((language) => (
										<CommandItem
											key={language.value}
											onSelect={() => {
												// You'd need to handle the language selection here
												// This might require a hidden input field and some state management
											}}
										>
											<Check className={cn("mr-2 h-4 w-4", language.value === fetcher.formData?.get("language") ? "opacity-100" : "opacity-0")} />
											{language.label}
										</CommandItem>
									))}
								</CommandGroup>
							</CommandList>
						</Command>
					</PopoverContent>
				</Popover>
				<input type="hidden" name="language" value={fetcher.formData?.get("language")?.toString() || ""} />
				<p className="text-sm text-muted-foreground">This is the language that will be used in the dashboard.</p>
			</div>

			<Button type="submit">Update account</Button>
		</fetcher.Form>
    </div>
		
	);
}
