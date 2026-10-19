import Navbar from "@/components/Navbar"
import React, { ReactNode } from "react"

const RootLayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>
}

export default RootLayout
