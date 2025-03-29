import React,{ useEffect, useState } from "react"
import { Command } from 'cmdk'

interface PropTypes {
    open: boolean | undefined,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CommandMenu = ({ open, setOpen }: PropTypes) => {
    const [value, setValue] = useState("")
    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog 
            open={open} 
            onOpenChange={setOpen} 
            label="Global Command Menu"
            className="fixed inset-0 bg-stone-700/35"
            onClick={() => setOpen(false)}
        >
            <div className="bg-stone-100 w-full max-w-lg mx-auto border border-stone-300 p-2 rounded-lg shadow-lg mt-12 overflow-hidden" onClick = {(e) => e.stopPropagation()}>
                <Command.Input 
                    value = {value}
                    onValueChange={setValue}
                    placeholder="What do you need"
                    className="w-full  relative block bg-transparent border-b border-stone-400 py-2 px-1 focus:outline-none placeholder:text-stone-500"
                />
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>

                    <Command.Group heading="Letters">
                        <Command.Item>a</Command.Item>
                        <Command.Item>b</Command.Item>
                        <Command.Separator />
                        <Command.Item>c</Command.Item>
                    </Command.Group>

                    <Command.Item>Apple</Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}