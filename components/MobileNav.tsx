"use client"
import React from "react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger
          render={
            <Image
              src="/icons/hamburger.svg"
              width={36}
              height={36}
              alt="hamburger icon"
              className="cursor-pointer sm:hidden"
            />
          }
        />
        <SheetContent side="left" className="border-none">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="Company Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold">Yoom</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose>
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                <div className="flex flex-col gap-6">
                  {sidebarLinks.map((link) => {
                    const isActive =
                      pathName === link.route || pathName.startsWith(link.route)

                    return (
                      <SheetClose key={link.route}>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={cn(
                            "flex items-center justify-start gap-4 rounded-lg p-4",
                            { "bg-blue-600": isActive }
                          )}
                        >
                          <Image
                            src={link.imgUrl}
                            alt={link.label}
                            width={24}
                            height={24}
                          />
                          <p className="font-semibold">{link.label}</p>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </div>
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav
