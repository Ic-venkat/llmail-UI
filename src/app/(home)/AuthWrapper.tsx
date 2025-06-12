"use client";

import { ReactNode, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";

export default function AuthWrapper({ children }: { children: ReactNode }) {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (isLoaded && isSignedIn && pathname !== "/dashboard") {
      router.push("/dashboard");
    }
  }, [isLoaded, isSignedIn, router, pathname]);

  if (!isLoaded) return null;

  if (isSignedIn && pathname !== "/dashboard") {
    return <div>Redirecting to dashboard...</div>;
  }

  return <>{children}</>;
}
