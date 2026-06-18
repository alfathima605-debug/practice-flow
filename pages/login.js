import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In to PracticeFlow</h2>
        {session ? (
          <div>
            <p>Signed in as {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              <button
                onClick={() => signIn("github")}
                className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 flex items-center justify-center gap-2"
              >
                Sign in with GitHub
              </button>
              <button
                onClick={() => signIn("google")}
                className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 flex items-center justify-center gap-2"
              >
                Sign in with Google
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">
              Or <Link href="/register" className="text-indigo-600 hover:underline">
                sign up with email
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}