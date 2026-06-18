import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Please Sign In</h2>
          <p className="text-center mb-6">
            You need to be signed in to view your account.
          </p>
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
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 text-xl font-bold text-indigo-600">
                PracticeFlow
              </Link>
            </div>
            <div className="hidden md:flex md:space-x-8">
              <Link href="/" className="text-gray-500 hover:text-gray-900 mr-4">
                Home
              </Link>
              <Link href="/submit" className="text-gray-500 hover:text-gray-900 mr-4">
                Submit Requirements
              </Link>
              <Link href="/agents" className="text-gray-500 hover:text-gray-900 mr-4">
                AI Agents
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-gray-900 mr-4">
                ML Services
              </Link>
              <Link href="/jobs" className="text-gray-500 hover:text-gray-900 mr-4">
                Auto Jobs
              </Link>
              <Link href="/pricing" className="text-gray-500 hover:text-gray-900 mr-4">
                Pricing
              </Link>
              <button
                onClick={() => signOut()}
                className="ml-4 text-indigo-600 hover:text-indigo-900"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Account Dashboard
        </h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-center mb-6">
            <div>
              <p className="text-sm font-medium text-gray-500">Projects Submitted</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Active Collaborations</p>
              <p className="text-2xl font-bold text-gray-900">1</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">$2,450</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Member Since</p>
              <p className="text-2xl font-bold text-gray-900">Jan 2026</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Name</p>
                  <p className="text-base font-medium text-gray-900">
                    {session.user?.name || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-base font-medium text-gray-900">
                    {session.user?.email || "Not provided"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Account Type</p>
                  <p className="text-base font-medium text-gray-900">
                    {session.user?.role || "Standard User"}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Last Login</p>
                  <p className="text-base font-medium text-gray-900">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 PracticeFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}