export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-30 bg-gray-50">
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

          <div className="order-1 lg:order-2">
            <img
              src="/ai_image_2.jpg"
              alt="Pioneering AI Healthcare Solutions"
              className="w-full h-auto rounded-2xl shadow-xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
