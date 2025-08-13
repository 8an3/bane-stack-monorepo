import { Link, useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { cn } from "~/components/ui/utils";
import { toast } from "sonner";
import { Button, Separator } from "~/components/ui";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { Textarea } from "~/components/ui/textarea";
import MonacoEditor from "../editor/components2";

// Default values
const defaultValues = {
	username: "",
	email: "",
	bio: "I own a computer.",
	urls: ["https://shadcn.com", "http://twitter.com/shadcn"],
};

interface FormErrors {
	username?: string;
	email?: string;
	bio?: string;
	urls?: string[];
}
export default function DefaultPage() {
	const [selectedCode, setSelectedCode] = useState("");
	const [name, setName] = useState("ProfileForm");

	const sections = [{ name: "ProfileForm", value: "ProfileForm", path: "/examples/forms/profile.tsx.txt" }];
	let viewSelected;
	switch (name) {
		case "ProfileForm":
			viewSelected = <ProfileForm />;
			break;
	}
	useEffect(() => {
		if (!selectedCode) return;

		const loadHookCode = async (url) => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);
				const codeContent = await response.text();
				setSelectedCode(codeContent);
			} catch (error) {
				console.error(`Failed to load ${url}:`, error);
				setSelectedCode(`// Failed to load ${url}\n// Error: ${error.message}`);
			}
		};

		loadHookCode(selectedCode);
	}, [selectedCode]);
	return (
		<div className="flex flex-col justify-center gap-4">
			<MonacoEditor viewSelected={viewSelected} code={selectedCode} sections={sections} setName={setName} name={name} />
		</div>
	);
}
export function ProfileForm() {
	const fetcher = useFetcher();
	const [formData, setFormData] = useState(defaultValues);
	const [errors, setErrors] = useState<FormErrors>({});

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		// Username validation
		if (!formData.username) {
			newErrors.username = "Username is required.";
		} else if (formData.username.length < 2) {
			newErrors.username = "Username must be at least 2 characters.";
		} else if (formData.username.length > 30) {
			newErrors.username = "Username must not be longer than 30 characters.";
		}

		// Email validation
		if (!formData.email) {
			newErrors.email = "Please select an email to display.";
		}

		// Bio validation
		if (formData.bio.length < 4) {
			newErrors.bio = "Bio must be at least 4 characters.";
		} else if (formData.bio.length > 160) {
			newErrors.bio = "Bio must not be longer than 160 characters.";
		}

		// URL validation
		const urlErrors: string[] = [];
		formData.urls.forEach((url, index) => {
			if (url && !isValidUrl(url)) {
				urlErrors[index] = "Please enter a valid URL.";
			}
		});
		if (urlErrors.length > 0) {
			newErrors.urls = urlErrors;
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const isValidUrl = (url: string): boolean => {
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	};

	const handleInputChange = (field: keyof typeof formData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		// Clear error when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: undefined }));
		}
	};

	const handleUrlChange = (index: number, value: string) => {
		setFormData((prev) => ({
			...prev,
			urls: prev.urls.map((url, i) => (i === index ? value : url)),
		}));
		// Clear URL error when user starts typing
		if (errors.urls?.[index]) {
			setErrors((prev) => ({
				...prev,
				urls: prev.urls?.map((error, i) => (i === index ? undefined : error)),
			}));
		}
	};

	const addUrl = () => {
		setFormData((prev) => ({
			...prev,
			urls: [...prev.urls, ""],
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		if (!validateForm()) {
			event.preventDefault();
			return;
		}

		// Show success toast
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(
							{
								username: formData.username,
								email: formData.email,
								bio: formData.bio,
								urls: formData.urls.filter((url) => url.trim() !== ""),
							},
							null,
							2
						)}
					</code>
				</pre>
			),
		});
	};

	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-lg font-medium">Profile</h3>
				<p className="text-sm text-muted-foreground">This is how others will see you on the site.</p>
			</div>
			<Separator />
			<fetcher.Form onSubmit={handleSubmit} className="space-y-8">
				{/* Username Field */}
				<div className="space-y-2">
					<Label htmlFor="username">Username</Label>
					<Input id="username" name="username" placeholder="shadcn" value={formData.username} onChange={(e) => handleInputChange("username", e.target.value)} />
					<p className="text-sm text-muted-foreground">This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.</p>
					{errors.username && <p className="text-sm font-medium text-destructive">{errors.username}</p>}
				</div>

				{/* Email Field */}
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Select name="email" value={formData.email} onValueChange={(value) => handleInputChange("email", value)}>
						<SelectTrigger>
							<SelectValue placeholder="Select a verified email to display" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="m@example.com">m@example.com</SelectItem>
							<SelectItem value="m@google.com">m@google.com</SelectItem>
							<SelectItem value="m@support.com">m@support.com</SelectItem>
						</SelectContent>
					</Select>
					<p className="text-sm text-muted-foreground">
						You can manage verified email addresses in your <Link to="/examples/forms">email settings</Link>.
					</p>
					{errors.email && <p className="text-sm font-medium text-destructive">{errors.email}</p>}
				</div>

				{/* Bio Field */}
				<div className="space-y-2">
					<Label htmlFor="bio">Bio</Label>
					<Textarea id="bio" name="bio" placeholder="Tell us a little bit about yourself" className="resize-none" value={formData.bio} onChange={(e) => handleInputChange("bio", e.target.value)} />
					<p className="text-sm text-muted-foreground">
						You can <span>@mention</span> other users and organizations to link to them.
					</p>
					{errors.bio && <p className="text-sm font-medium text-destructive">{errors.bio}</p>}
				</div>

				{/* URLs Field */}
				<div className="space-y-4">
					{formData.urls.map((url, index) => (
						<div key={index} className="space-y-2">
							<Label htmlFor={`url-${index}`} className={cn(index !== 0 && "sr-only")}>
								URLs
							</Label>
							<p className={cn("text-sm text-muted-foreground", index !== 0 && "sr-only")}>Add links to your website, blog, or social media profiles.</p>
							<Input id={`url-${index}`} name={`urls[${index}]`} value={url} onChange={(e) => handleUrlChange(index, e.target.value)} placeholder="https://example.com" />
							{errors.urls?.[index] && <p className="text-sm font-medium text-destructive">{errors.urls[index]}</p>}
						</div>
					))}
					<Button type="button" variant="outline" size="sm" className="mt-2" onClick={addUrl}>
						Add URL
					</Button>
				</div>

				<Button type="submit" disabled={fetcher.state === "submitting"}>
					{fetcher.state === "submitting" ? "Updating..." : "Update profile"}
				</Button>
			</fetcher.Form>
		</div>
	);
}
