import { useFetcher } from "@remix-run/react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "~/components/ui"
import { Checkbox } from "~/components/ui/checkbox"
import { Label } from "~/components/ui/label"

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const

// Default selected items
const defaultItems = ["recents", "home"]

export function DisplayForm() {
  const fetcher = useFetcher()
  const [selectedItems, setSelectedItems] = useState<string[]>(defaultItems)
  const [error, setError] = useState<string>("")

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    setSelectedItems(prev => {
      if (checked) {
        return [...prev, itemId]
      } else {
        return prev.filter(id => id !== itemId)
      }
    })
    // Clear error when user makes a selection
    if (error && selectedItems.length === 0 && checked) {
      setError("")
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Validate that at least one item is selected
    if (selectedItems.length === 0) {
      event.preventDefault()
      setError("You have to select at least one item.")
      return
    }

    setError("")
    
    // Show success toast
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify({ items: selectedItems }, null, 2)}
          </code>
        </pre>
      ),
    })
  }

  return (
    <fetcher.Form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <div className="mb-4">
          <Label className="text-base">Sidebar</Label>
          <p className="text-sm text-muted-foreground">
            Select the items you want to display in the sidebar.
          </p>
        </div>
        
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-start space-x-3 space-y-0"
            >
              <Checkbox
                id={item.id}
                name="items"
                value={item.id}
                checked={selectedItems.includes(item.id)}
                onCheckedChange={(checked) => 
                  handleCheckboxChange(item.id, checked === true)
                }
              />
              <Label htmlFor={item.id} className="font-normal">
                {item.label}
              </Label>
              {/* Hidden input to ensure selected values are submitted */}
              {selectedItems.includes(item.id) && (
                <input
                  type="hidden"
                  name="items"
                  value={item.id}
                />
              )}
            </div>
          ))}
        </div>
        
        {error && (
          <p className="text-sm font-medium text-destructive mt-2">
            {error}
          </p>
        )}
      </div>
      
      <Button type="submit" disabled={fetcher.state === "submitting"}>
        {fetcher.state === "submitting" ? "Updating..." : "Update display"}
      </Button>
    </fetcher.Form>
  )
}