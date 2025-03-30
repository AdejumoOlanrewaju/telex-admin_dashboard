import React,{ useEffect, useState } from "react"
import { Command } from 'cmdk'
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi"

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
            <div className="bg-stone-100 w-full max-w-lg mx-auto border border-stone-300 py-4 px-3 rounded-lg shadow-lg mt-12 overflow-hidden" onClick = {(e) => e.stopPropagation()}>
                <Command.Input 
                    value = {value}
                    onValueChange={setValue}
                    placeholder="What do you need"
                    className="w-full relative mb-3 block bg-transparent border-b border-stone-400 py-2 px-1 pt-0 focus:outline-none placeholder:text-stone-500"
                />
                <Command.List>
                    <Command.Empty>
                        No results found.
                        <span className="text-violet-400"> "{value}"</span>
                    </Command.Empty>

                    <Command.Group heading="Letters" className="text-sm text-stone-500">
                        <Command.Item className="flex cursor-pointer items-center gap-2 text-stone-900 text-sm rounded p-2 transition-colors hover:bg-gray-200 mt-1">
                            <FiPlus/>
                            Invite Member
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer items-center gap-2 text-stone-900 text-sm rounded p-2 transition-colors hover:bg-gray-200 ">
                            <FiEye/>
                            See org chart
                        </Command.Item>
                        <Command.Separator />
                        {/* <Command.Item>c</Command.Item> */}
                    </Command.Group>

                    <Command.Group heading="Integrations" className="text-sm text-stone-500 mt-2">
                        <Command.Item className="flex cursor-pointer items-center gap-2 text-stone-900 text-sm rounded p-2 transition-colors hover:bg-gray-200 mt-1">
                            <FiLink/>
                            Line Services
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer items-center gap-2 text-stone-900 text-sm rounded p-2 transition-colors hover:bg-gray-200 ">
                            <FiPhone/>
                            Contact Support
                        </Command.Item>
                        <Command.Separator />
                        {/* <Command.Item>c</Command.Item> */}
                    </Command.Group>

                    <Command.Item className="flex cursor-pointer items-center gap-2 text-stone-200 text-sm rounded p-2 transition-colors bg-stone-950 mt-2">
                        <FiLogOut/>
                        Logout
                    </Command.Item>

                    {/* <Command.Item>Apple</Command.Item> */}
                </Command.List>
            </div>
        </Command.Dialog>
    )
}