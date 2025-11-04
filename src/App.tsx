function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-sky-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-br from-blue-900 via-blue-800 to-blue-900">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              <img 
                src="/brand.jpg" 
                alt="HR Headstart Hub Logo" 
                className="h-32 w-auto"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              HR Headstart Hub
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
              Access premium HR toolkits designed to elevate your practice. 
              Whether you're an HR professional or a business owner, find the resources you need to succeed.
            </p>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span>Instant Digital Download</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm text-white backdrop-blur-sm">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
                </svg>
                <span>Expert-Crafted Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main CTA Section - Two Pathways */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
            Choose Your Path
          </h2>
          <p className="mt-3 text-lg text-blue-700">
            Select the category that best describes you to explore tailored HR toolkits
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* HR Professionals Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 to-blue-700 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            <div className="relative">
              <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                HR Professionals
              </h3>
              <p className="text-lg text-blue-50 mb-6">
                Advance your HR career with expert toolkits designed to enhance your skills, streamline processes, and deliver exceptional results.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Performance Management Templates</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Employee Development Frameworks</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Compliance & Policy Guides</span>
                </div>
              </div>
              <button className="w-full rounded-xl bg-white px-6 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50">
                Explore HR Professional Toolkits
              </button>
            </div>
          </div>

          {/* SME Business Owners Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-sky-600 to-blue-600 p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            <div className="relative">
              <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                SME Business Owners
              </h3>
              <p className="text-lg text-sky-50 mb-6">
                Build strong teams and compliant workplaces with practical HR resources designed specifically for small and medium enterprises.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-white">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Employee Handbook Templates</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>Recruitment & Onboarding Kits</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span>HR Compliance Essentials</span>
                </div>
              </div>
              <button className="w-full rounded-xl bg-white px-6 py-4 text-lg font-semibold text-sky-600 shadow-lg transition-all hover:bg-sky-50">
                Explore Business Owner Toolkits
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Toolkits Preview */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              Featured Toolkits
            </h2>
            <p className="mt-3 text-lg text-blue-700">
              Get a preview of our most popular HR resources
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Toolkit Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all hover:shadow-xl cursor-pointer">
              <div className="aspect-video bg-linear-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <svg className="h-20 w-20 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  For HR Professionals
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Performance Review Toolkit
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Complete framework for conducting effective performance reviews with templates, scripts, and best practices.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-900">£29.99</span>
                  <span className="text-sm text-blue-600">50+ pages</span>
                </div>
              </div>
            </div>

            {/* Toolkit Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all hover:shadow-xl cursor-pointer">
              <div className="aspect-video bg-linear-to-br from-sky-600 to-blue-600 flex items-center justify-center">
                <svg className="h-20 w-20 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-2 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700">
                  For Business Owners
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Employee Handbook Essentials
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Ready-to-customize employee handbook template covering all essential policies and procedures for SMEs.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-900">£39.99</span>
                  <span className="text-sm text-blue-600">75+ pages</span>
                </div>
              </div>
            </div>

            {/* Toolkit Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white shadow-sm transition-all hover:shadow-xl cursor-pointer">
              <div className="aspect-video bg-linear-to-br from-blue-700 to-blue-800 flex items-center justify-center">
                <svg className="h-20 w-20 text-white/80" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <div className="p-5">
                <div className="mb-2 inline-flex rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  For HR Professionals
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Recruitment Excellence Guide
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  End-to-end recruitment toolkit with interview guides, assessment templates, and candidate evaluation frameworks.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-900">£34.99</span>
                  <span className="text-sm text-blue-600">60+ pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-lg text-blue-700">
              Real feedback from HR professionals and business owners
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center gap-1 mb-4">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-blue-800 mb-4">
                "The Performance Review Toolkit saved me hours of preparation time. The templates are incredibly practical and easy to customize for our team."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">SC</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Sarah Chen</p>
                  <p className="text-sm text-blue-600">HR Manager, Tech Startup</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center gap-1 mb-4">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-blue-800 mb-4">
                "As a small business owner, I had no idea where to start with HR policies. The Employee Handbook template was a lifesaver and totally worth the investment."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-sky-200 flex items-center justify-center">
                  <span className="text-sky-700 font-semibold">MT</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Michael Thompson</p>
                  <p className="text-sm text-blue-600">Founder, Design Agency</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center gap-1 mb-4">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-blue-800 mb-4">
                "These toolkits are pure gold! Comprehensive, professional, and immediately applicable. I've recommended them to my entire HR network."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-200 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">LP</span>
                </div>
                <div>
                  <p className="font-semibold text-blue-900">Lisa Patterson</p>
                  <p className="text-sm text-blue-600">Senior HR Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Credibility Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Expert-Crafted</h3>
              <p className="text-blue-700">Created by experienced HR professionals with years of practical expertise</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                <svg className="h-8 w-8 text-sky-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Instant Access</h3>
              <p className="text-blue-700">Download immediately after purchase and start implementing right away</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">Practical & Proven</h3>
              <p className="text-blue-700">Real-world tools that have been tested and refined in actual HR scenarios</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-linear-to-r from-blue-900 to-blue-800 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to elevate your HR practice?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Choose your path and explore our comprehensive toolkit collection
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-6">
            <button className="rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all hover:bg-blue-50">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
