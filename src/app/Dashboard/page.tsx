import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LogoutPage from "../Logout/page";

export default async function DashboardPage() {
  const name: string | undefined = (await cookies()).get(
    "better-auth.session_token"
  )?.value;

  if (!name) {
    redirect("/Signup");
  }
  return (
    <div>
      <h2>Dashboard page </h2>
      <LogoutPage token={name} />
    </div>
  );
}
