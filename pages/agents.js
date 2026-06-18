import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function AgentsPage() {
  const { data: session, status } = useSession();

  // Mock data for AI agents
  const agents = [
    {
      id: 1,
      name: "LLM Specialist Pro",
      expertise: ["LLM Fine-tuning", "Prompt Engineering", "RAG Systems"],
      hourlyRate: 180,
      rating: 4.9,
      reviewCount: 127,
      avatar: "/avatars/agent1.png",
    },
    {
      id: 2,
      name: "Computer Vision Expert",
      expertise: ["Object Detection", "Image Segmentation", "OCR"],
      hourlyRate: 200,
      rating: 4.8,
      reviewCount: 89,
      avatar: "/avatars/agent2.png",
    },
    {
      id: 3,
      name: "NLP Engineer",
      expertise: ["Text Classification", "Sentiment Analysis", "Chatbots"],
      hourlyRate: 160,
      rating: 4.7,
      reviewCount: 203,
      avatar: "/avatars/agent3.png",
    },
    {
      id: 4,
      name: "MLOps Architect",
      expertise: ["CI/CD for ML", "Model Monitoring", "Scaling"],
      hourlyRate: 190,
      rating: 4.9,
      reviewCount: 156,
      avatar: "/avatars/agent4.png",
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
          Expert AI Agents
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Browse our curated selection of verified AI agents ready to tackle your projects.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <Link
              key={agent.id}
              href={`/agents/${agent.id}`}
              className="block"
            >
              <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={agent.avatar}
                      alt={`${agent.name} avatar`}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {agent.name}
                      </h3>
                      <div className="flex items-center text-sm text-indigo-600 mt-1">
                        {[...Array(5)].map((_, index) => (
                          <span key={index} className="text-yellow-400">
                            {index < agent.rating ? "★" : "☆"}
                          </span>
                        ))}
                        <span className="ml-2 text-gray-500">
                          ({agent.reviewCount})
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {agent.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full"
                        >
                          {skill}
                        >
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                      ${agent.hourlyRate}/hr
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