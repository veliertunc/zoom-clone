import Image from "next/image"
import Link from "next/link"
import React from "react"
import MobileNav from "./MobileNav"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 h-16 w-full px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="Company Logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden">
          Yoom
        </p>
      </Link>
      <div className="flex-between gap-5">
        <Show when="signed-out">
          <SignInButton>
            <button className="h-10 cursor-pointer px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="h-10 cursor-pointer rounded-md bg-blue-700 px-4 text-sm font-medium text-white sm:h-12 sm:px-5 sm:text-base">
              Sign Up
            </button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
