import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function ServicesPage() {
  const { data: session, status } = useSession();

  // Mock data for ML services (agency offerings)
  const services = [
    {
      id: 1,
      name: "End-to-End ML Pipeline",
      description: "Complete solution from data ingestion to model deployment and monitoring.",
      price: 25000,
      duration: "8-12 weeks",
      features: [
        "Data collection & cleaning",
        "Feature engineering",
        "Model development",
        "Deployment & scaling",
        "Monitoring & maintenance",
      ],
      icon: "🔧",
    },
    {
      id: 2,
      name: "AI-Powered Chatbot Development",
      description: "Custom conversational AI for customer service, sales, or internal use.",
      price: 15000,
      duration: "4-6 weeks",
      features: [
        "Natural language understanding",
        "Multi-turn conversations",
        "Integration with existing systems",
        "Analytics dashboard",
        "Continuous improvement",
      ],
      icon: "💬",
    },
    {
      id: 3,
      name: "Computer Vision System",
      description: "Custom vision solutions for inspection, identification, or analysis.",
      price: 30000,
      duration: "10-14 weeks",
      features: [
        "Image/video processing",
        "Object detection & tracking",
        "Optical character recognition",
        "Real-time processing",
        "Cloud or edge deployment",
      ],
      icon: "👁️",
    },
    {
      id: 4,
      name: "Predictive Analytics Suite",
      description: "Forecasting and prediction models for business decision making.",
      price: 20000,
      duration: "6-10 weeks",
      features: [
        "Time series analysis",
        "Regression modeling",
        "Scenario planning",
        "Risk assessment",
        "Executive reporting dashboard",
      ],
      icon: "📈",
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
          ML Agency Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Fixed-price solutions for common AI/ML business needs, delivered by our expert teams.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4">{service.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {service.duration}
                      </p>
                    </div>
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
                      ${service.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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