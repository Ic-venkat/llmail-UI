"use client";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  // NavigationMenuTrigger,
  // NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
// import Image from "next/image"
import ModeToggle from "./darkModeToggle";
// components/Navbar.tsx
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b bg-background py-4 px-6">
      <div className="flex items-center justify-between">
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
                  href="/features"
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

        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" asChild>
                <span className="font-bold cursor-pointer">Sign In</span>
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="ghost" asChild>
                <span className="font-bold cursor-pointer">Sign Up</span>
              </Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
          <Link href="/dashboard">
            <Button variant="ghost" size="sm">
              Go to Dashboard
            </Button>
          </Link>

          <UserButton
            appearance={{
              elements: { userButtonAvatarBox: "w-8 h-8" },
            }}
          />
          </SignedIn>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
