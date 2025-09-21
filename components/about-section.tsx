export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance">
              About AI 4 Health
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 text-pretty leading-relaxed">
              We are at the forefront of artificial intelligence innovation in
              healthcare, developing cutting-edge AI solutions that transform
              how medical care is delivered, diagnosed, and managed across the
              globe.
            </p>
            <p className="text-base sm:text-lg text-gray-600 text-pretty leading-relaxed">
              Our mission is to democratize healthcare through AI, making
              advanced medical intelligence accessible to everyone while
              maintaining the highest standards of accuracy, privacy, and
              ethical AI development.
            </p>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100">
              <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mb-4 sm:mb-6 flex items-center justify-center">
                <div className="text-gray-700 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs sm:text-sm font-medium">
                    AI Innovation in Healthcare
                  </p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Pioneering AI Healthcare Solutions
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Our AI-powered platforms are transforming patient care, medical
                evaluation, and healthcare delivery through intelligent
                automation and data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
