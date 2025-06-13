import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Step 1: Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/user(.*)',
  '/settings(.*)',
  '/profile(.*)',
])

// Step 2: Use the middleware to protect them
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect()
  }
})

// Step 3: Match these routes so the middleware is actually invoked
export const config = {
  matcher: [
    
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
