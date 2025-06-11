import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <SignIn path="/signin" routing="path" />
    </div>
  );
}
