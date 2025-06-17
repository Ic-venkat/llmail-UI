"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useAuth, useUser } from "@clerk/nextjs";

export function GmailPermissionGate() {
  const { getToken } = useAuth();
  const { user } = useUser();
  

  const handleConnectGmail = async () => {
    try {
      const token = await getToken();
      const clerk_user_id = user?.id;
      const clerk_email = user?.primaryEmailAddress?.emailAddress;

      const res = await fetch(
        `${process.env.FASTAPI_BACKEND_URL}/authorize?clerk_user_id=${encodeURIComponent(clerk_user_id ?? "")}&email=${encodeURIComponent(clerk_email ?? "")}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Backend response:", data);

      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      }
    } catch (error) {
      console.error("❌ API call failed:", error);
    }
  };

  

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-xl">Connect Gmail</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertTitle>Why we need Gmail access</AlertTitle>
            <AlertDescription>
              Melone.ai tracks your job applications by scanning your Gmail for
              emails sent to companies. We only access messages related to job
              applications and do not store or use your data for any other
              purpose.
            </AlertDescription>
          </Alert>
          <Button className="w-full" onClick={handleConnectGmail}>
            Connect Gmail
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
