import React from "react"

interface MenuType {
    openMenu? : boolean;
    setOpenMenu? : React.Dispatch<React.SetStateAction<boolean>>
}

export default MenuType