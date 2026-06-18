import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      // Attempt to sign in with credentials
      await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      // signIn callback will redirect on success
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

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
            {/* Social login buttons */}
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

            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-700 mb-2">Or sign in with email</h3>
              {error && (
                <p className="mb-4 p-3 bg-red-50 text-red-800 rounded text-sm">{error}</p>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                    autoComplete="current-password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Label href="/register" className="text-indigo-600 hover:underline">
                      Forgot password?
                    </Label>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-indigo-600 hover:underline">
                Sign up with email
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
