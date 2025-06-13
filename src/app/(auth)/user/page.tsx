import { SiteHeader } from "@/components/site-header"
import { UserProfile } from '@clerk/nextjs'


export default function Page() {
  return (
    <div>
          <SiteHeader headerTitle="Account Information"/>
          <div className="flex flex-1 flex-col justify-between gap-4 px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-6">
            <div className="@container/main flex flex-1 flex-col gap-2">
              <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <UserProfile />
              </div>
            </div>
          </div>
        </div>  
  )
}
