import { useEffect, useState } from "react"
import { Input } from "../ui/input"


export const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
    const [value, setValue] = useState<number | string>(initialValue)

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)

    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)
        return () => clearTimeout(timeout)
    }, [value])

    return <Input {...props} value={value} onChange={handleInputChange} />
}