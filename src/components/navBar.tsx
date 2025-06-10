'use client'

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  // NavigationMenuTrigger,
  // NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Navbar() {
  return (
    <nav className="border-b bg-background py-4 px-6">
      <NavigationMenu>
        <NavigationMenuList>


          {/* Logo */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="flex items-center gap-2 px-2 py-1">
                {/* <Image src="/window.svg" alt="LLMail" width={32} height={32} /> */}
                <span className="font-bold text-lg">melone.ai</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium hover:text-accent-foreground"
              >
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Features */}
          <NavigationMenuItem>
          <NavigationMenuLink asChild>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium hover:text-accent-foreground"
              >
                Features
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>


          {/* Direct Links */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/pricing"
                className="px-4 py-2 text-sm font-medium hover:text-accent-foreground"
              >
                Pricing
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium hover:text-accent-foreground"
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="/contact-us"
                className="px-4 py-2 text-sm font-medium hover:text-accent-foreground"
              >
                Contact Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

function linkClass() {
  return cn("block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition");
}