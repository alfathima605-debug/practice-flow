import { useState } from "react";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function SubmitRequirements() {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    projectType: "",
    description: "",
    budget: "",
    timeline: "",
    skills: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    // Mock API call - replace with actual API endpoint
    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real app, you would send this data to your backend
      console.log("Submitting requirements:", formData);
      
      setMessage("Requirements submitted successfully! Our team will review and match you with experts.");
      setFormData({
        projectType: "",
        description: "",
        budget: "",
        timeline: "",
        skills: "",
      });
    } catch (error) {
      setMessage("Error submitting requirements. Please try again.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold text-center mb-6">Please Sign In</h2>
          <p className="text-center mb-6">
            You need to be signed in to submit requirements.
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
              <Link href="/agents" className="text-gray-500 hover:text-gray-900 mr-4">
                AI Agents
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-gray-900 mr-4">
                ML Services
              </Link>
              <Link href="/jobs" className="text-gray-500 hover:text-gray-900 mr-4">
                Auto Jobs
              </Link>
              <Link href="/submit" className="text-indigo-600 font-semibold px-3 py-2 rounded-md border border-indigo-600 hover:bg-indigo-50">
                Submit Requirements
              </Link>
              <Link href="/login" className="ml-4 text-indigo-600 hover:text-indigo-900">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Submit Your AI/ML Project Requirements
        </h1>
        
        {message && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 text-green-800">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Type
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select project type</option>
              <option value="llm-fine-tuning">LLM Fine-tuning</option>
              <option value="computer-vision">Computer Vision</option>
              <option value="nlp">Natural Language Processing</option>
              <option value="data-engineering">Data Engineering</option>
              <option value="mlops">MLOps & Deployment</option>
              <option value="custom">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Project Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              placeholder="Describe your AI/ML project goals, technical requirements, and expected outcomes..."
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Budget Range
            </label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select budget range</option>
              <option value="under-5k">Under $5,000</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-50k">$15,000 - $50,000</option>
              <option value="50k-150k">$50,000 - $150,000</option>
              <option value="over-150k">Over $150,000</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Timeline
            </label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">Select timeline</option>
              <option value="1-4-weeks">1-4 weeks</option>
              <option value="1-3-months">1-3 months</option>
              <option value="3-6-months">3-6 months</option>
              <option value="6-12-months">6-12 months</option>
              <option value="over-12-months">Over 12 months</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Required Skills (comma-separated)
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="e.g., Python, TensorFlow, PyTorch, AWS, Docker..."
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting}
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              {submitting ? "Submitting..." : "Submit Requirements"}
            </button>
          </div>
        </form>
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