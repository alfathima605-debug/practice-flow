import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function JobsPage() {
  const { data: session, status } = useSession();

  // Mock data for auto job application services
  const jobServices = [
    {
      id: 1,
      name: "LinkedIn Auto-Apply Pro",
      description: "Automatically apply to 50+ relevant LinkedIn jobs per week with AI-powered matching.",
      price: 99,
      billing: "monthly",
      features: [
        "AI-powered job matching",
        "Customizable application templates",
        "Application tracking dashboard",
        "Weekly performance reports",
        "LinkedIn Easy Apply integration",
      ],
    },
    {
      id: 2,
      name: "Multi-Platform Job Applier",
      description: "Apply to jobs across LinkedIn, Indeed, Glassdoor, and company career sites.",
      price: 149,
      billing: "monthly",
      features: [
        "Cross-platform job aggregation",
        "Automated tailored applications",
        "Interview scheduling assistant",
        "Application status updates",
        "GDPR/CCPA compliant data handling",
      ],
    },
    {
      id: 3,
      name: "Executive Job Search Assistant",
      description: "Senior-level position targeting with personalized outreach and application.",
      price: 299,
      billing: "monthly",
      features: [
        "Executive role specialization",
        "Personalized cover letter generation",
        "Recruiter networking automation",
        "Interview preparation materials",
        "Salary negotiation assistance",
      ],
    },
  ];

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
          Auto Job Application Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Let our AI agents handle the tedious job application process while you focus on interview preparation.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobServices.map((service) => (
            <Link
              key={service.id}
              href={`/jobs/${service.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {service.billing === "monthly" ? "/mo" : ""}
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Features</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {service.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-2 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                      ${service.price}{service.billing === "monthly" ? "/mo" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Get Started with Custom Requirements
          </Link>
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