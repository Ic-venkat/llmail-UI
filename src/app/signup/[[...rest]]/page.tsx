// /app/signup/[[...rest]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <SignUp path="/signup" routing="path" />
    </div>
  );
}
