
import { GmailPermissionGate } from '@/components/gmailPermissionGate'



export default function page() {
  return (
    <div>
        <GmailPermissionGate></GmailPermissionGate>
    </div>
  )
}


// export default function CallApiButton() {
//   const { getToken } = useAuth();

//   async function callApi() {
//     console.log("🚀 Calling API...");
//     const token = await getToken();
//     console.log("✅ Token:", token); // Optional Clerk JWT template

//     try {
//       const res = await fetch("http://localhost:8000/test-auth", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (!res.ok) {
//         throw new Error(`API error: ${res.status}`);
//       }

//       const data = await res.json();
//       console.log("✅ Backend response:", data);
//     } catch (error) {
//       console.error("❌ API call failed:", error);
//     }
//   }

//   return <button onClick={callApi}>Call FastAPI Backend</button>;
// }
