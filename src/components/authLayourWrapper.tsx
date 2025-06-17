'use client';

import { useEffect, useState } from 'react';
import { useUser, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const LayoutClientWrapper = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkGmailAccess = async () => {
      const alreadyChecked = sessionStorage.getItem('gmailAccessChecked');
      if (alreadyChecked || !user) {
        setLoading(false);
        return;
      }

      try {
        const token = await getToken();
        const clerk_user_id = user?.id;

        const res = await fetch(
          `${process.env.FASTAPI_BACKEND_URL}/gmail-access-status?clerk_user_id=${encodeURIComponent(clerk_user_id)}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();
        sessionStorage.setItem('gmailAccessChecked', 'true');

        if (res.ok && data.access_granted) {
          router.push('/dashboard');
        } else {
          router.push('/gmail-connect');
        }
      } catch (err) {
        console.error('❌ Failed to check Gmail access', err);
        router.push('/gmail-connect');
      } finally {
        setLoading(false);
      }
    };

    checkGmailAccess();
  }, [getToken, router, user]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Checking permissions...
      </main>
    );
  }

  return <>{children}</>;
};

export default LayoutClientWrapper;
