import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function PricingPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading session...</p>;
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
              {!session ? (
                <Link href="/login" className="ml-4 text-indigo-600 hover:text-indigo-900">
                  Sign In
                </Link>
              ) : (
                <>
                  <Link
                    href="/account"
                    className="mr-4 text-indigo-600 hover:text-indigo-900"
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Pricing Plans
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose the plan that fits your needs. All plans include access to our marketplace and basic features.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Free Tier */}
          <Link
            href="/submit"
            className="block bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow border-2 border-indigo-100"
          >
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Free
                </h3>
                <p className="text-sm text-gray-500">
                  $0 / month
                </p>
              </div>
              <ul className="space-y-4 text-sm text-gray-600 mb-6">
                <li>✓ Browse AI agents & services</li>
                <li>✓ Submit project requirements</li>
                <li>✓ Receive expert matches</li>
                <li>✓ Basic messaging with experts</li>
                <li>✓ Community support</li>
              </ul>
              <div className="text-center">
                <span className="px-4 py-2 text-xs font-medium bg-indigo-50 text-indigo-600 rounded">
                  Get Started Free
                </span>
              </div>
            </div>
          </Link>

          {/* Pro Tier */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Pro
                </h3>
                <p className="text-sm text-gray-500">
                  $29 / month
                </p>
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                  Popular
                </span>
              </div>
              <ul className="space-y-4 text-sm text-gray-600 mb-6">
                <li>✓ Everything in Free</li>
                <li>✓ Priority matching with experts</li>
                <li>✓ Advanced project management tools</li>
                <li>✓ Video conferencing with experts</li>
                <li>✓ Contract & payment processing</li>
                <li>✓ Premium support</li>
              </ul>
              <div className="text-center">
                <Link
                  href="/submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Choose Pro Plan
                </Link>
              </div>
            </div>
          </div>

          {/* Enterprise Tier */}
          <Link
            href="/submit"
            className="block bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow border-2 border-indigo-100"
          >
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Enterprise
                </h3>
                <p className="text-sm text-gray-500">
                  Custom pricing
                </p>
              </div>
              <ul className="space-y-4 text-sm text-gray-600 mb-6">
                <li>✓ Everything in Pro</li>
                <li>✓ Dedicated account manager</li>
                <li>✓ Custom SLA & security compliance</li>
                <li>✓ Volume discounts on services</li>
                <li>✓ API access for integration</li>
                <li>✓ On-site training & workshops</li>
                <li>✓ 24/7 priority support</li>
              </ul>
              <div className="text-center">
                <span className="px-4 py-2 text-xs font-medium bg-indigo-50 text-indigo-600 rounded">
                  Contact Sales
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Expert services (AI agents, ML services, auto jobs) are priced separately based on project scope.
          </p>
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