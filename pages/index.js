import Link from 'next/link';

export default function Home() {
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
              <Link href="/" className="text-gray-500 hover:text-gray-900">
                Home
              </Link>
              <Link href="/agents" className="text-gray-500 hover:text-gray-900">
                AI Agents
              </Link>
              <Link href="/services" className="text-gray-500 hover:text-gray-900">
                ML Services
              </Link>
              <Link href="/jobs" className="text-gray-500 hover:text-gray-900">
                Auto Jobs
              </Link>
              <Link href="/pricing" className="text-indigo-600 font-semibold px-3 py-2 rounded-md border border-indigo-600 hover:bg-indigo-50">
                Pricing
              </Link>
              <Link href="/login" className="ml-4 text-indigo-600 hover:text-indigo-900">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl">
            Marketplace for AI Agents & ML Services
          </h1>
          <p className="mt-6 text-center text-lg text-gray-600 max-w-2xl mx-auto">
            Find expert AI agents and machine learning specialists to deliver custom solutions for your business needs. Automate job applications and scale with our agency services.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 justify-center">
            <Link
              href="/agents"
              className="flex-shrink-0 bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Browse AI Agents
            </Link>
            <Link
              href="/services"
              className="mt-4 sm:mt-0 flex-shrink-0 border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Explore ML Services
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Simple process to get started with AI/ML experts and automation services.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Submit Requirements
              </h3>
              <p className="mt-3 text-gray-600">
                Fill out our detailed form to specify your AI/ML project needs, budget, and timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Expert Matching
              </h3>
              <p className="mt-3 text-gray-600">
                Our system matches you with verified AI agents and ML specialists who best fit your requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600 mb-4">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Delivery & Results
              </h3>
              <p className="mt-3 text-gray-600">
                Experts deliver custom solutions, and you can also use our auto-job application service to scale your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Featured Services
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of AI agents and ML services designed to solve real-world business challenges.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">LLM Fine-tuning Agent</h3>
              <p className="text-gray-600 mb-4">
                Specialized in adapting large language models to your specific domain and use case.
              </p>
              <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                $150/hr
              </span>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Computer Vision Specialist</h3>
              <p className="text-gray-600 mb-4">
                Expertise in image recognition, object detection, and visual inspection systems.
              </p>
              <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                $180/hr
              </span>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Data Pipeline Engineer</h3>
              <p className="text-gray-600 mb-4">
                Build scalable ETL pipelines and feature stores for production ML systems.
              </p>
              <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                $160/hr
              </span>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">MLOps Automation</h3>
              <p className="text-gray-600 mb-4">
                Automate model deployment, monitoring, and retraining with CI/CD for ML.
              </p>
              <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                $170/hr
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Auto Job Applications
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Let our AI agents automatically apply to relevant job postings across platforms, saving you hours of manual work.
          </p>
          <div className="mt-10 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">LinkedIn Auto-Apply</h3>
                <p className="text-gray-600">
                  Automatically apply to LinkedIn jobs matching your skills and preferences.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Indeed & Glassdoor</h3>
                <p className="text-gray-600">
                  Expand your reach with automated applications on major job boards.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Custom Platforms</h3>
                <p className="text-gray-600">
                  Configure auto-apply for industry-specific or company career portals.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="/jobs"
              className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Explore Auto Job Services
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">PracticeFlow</h3>
              <p className="text-gray-400">
                Marketplace for AI agents and ML services connecting businesses with expert talent.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">AI Agents</a></li>
                <li><a href="#" className="hover:text-white">ML Services</a></li>
                <li><a href="#" className="hover:text-white">Agency Services</a></li>
                <li><a href="#" className="hover:text-white">Auto Jobs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-500 text-sm">
              © 2026 PracticeFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}