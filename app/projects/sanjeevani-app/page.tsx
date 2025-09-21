import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowLeft } from "lucide-react";
import ProjectMedia from "@/components/project-media";
import ParticlesBackground from "@/components/particles-background";
import GradientText from "@/components/gradient-text";

const project = {
  title: "Sanjeevani App",
  tagline:
    "Digital healthcare platform connecting patients with medical professionals",
  heroMedia: {
    type: "image" as const,
    src: "/placeholder.svg?height=600&width=1200",
  },
  externalLink: "https://sanjivni-app.vercel.app/",
};

const teamMembers = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Medical Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Telemedicine Expert",
    education: "MD Internal Medicine, AIIMS",
  },
  {
    name: "Neha Gupta",
    role: "Product Manager",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Healthcare Technology",
    education: "MBA Healthcare Management, IIM",
  },
  {
    name: "Arjun Singh",
    role: "Lead Developer",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Mobile App Specialist",
    education: "B.Tech Computer Science, IIT Delhi",
  },
  {
    name: "Dr. Kavya Reddy",
    role: "Clinical Advisor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Family Medicine Physician",
    education: "MD Family Medicine, CMC Vellore",
  },
];

const trustedByLogos = [
  { name: "Ministry of Health", image: "/placeholder.svg?height=48&width=120" },
  { name: "NITI Aayog", image: "/placeholder.svg?height=48&width=120" },
  { name: "Apollo Hospitals", image: "/placeholder.svg?height=48&width=120" },
  { name: "Fortis Healthcare", image: "/placeholder.svg?height=48&width=120" },
];

const solutionFeatures = [
  {
    title: "24/7 video consultation platform with certified doctors",
    icon: "💻",
  },
  {
    title: "Integrated prescription and medicine delivery system",
    icon: "💊",
  },
  {
    title: "Multi-language support for regional accessibility",
    icon: "🗣️",
  },
];

const successMetrics = [
  { percentage: "10K+", description: "active users monthly" },
  { percentage: "500+", description: "verified doctors on platform" },
  { percentage: "85%", description: "patient satisfaction rate" },
  { percentage: "2-5", description: "minutes average wait time" },
];

export default function SanjeevaniAppPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-green-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
                <GradientText variant="green">Sanjeevani App</GradientText>
              </h1>
              <p className="text-lg sm:text-2xl text-gray-700 mb-8 text-pretty">
                {project.tagline}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white"
                >
                  <a
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Visit Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-full aspect-auto">
              <ProjectMedia project={project} />
            </div>
          </div>
        </div>
      </section>

      {/* About Sanjeevani App Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">
              About <GradientText variant="green">Sanjeevani App</GradientText>
            </h2>
            <div className="text-gray-700 mb-8 leading-relaxed space-y-4 text-lg">
              <p>
                Sanjeevani App represents the future of accessible healthcare
                delivery through digital innovation. Our comprehensive
                telemedicine platform enables patients to connect with qualified
                medical professionals from the comfort of their homes, breaking
                down geographical barriers to quality healthcare.
              </p>
              <p>
                With integrated features for video consultations, prescription
                management, medicine delivery, and health record keeping,
                Sanjeevani App provides a seamless healthcare experience. Our
                platform serves thousands of patients across India, making
                healthcare more accessible, affordable, and convenient for all.
              </p>
            </div>

            {/* Trusted By Logos */}
            <div className="mt-12">
              <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
                Trusted By
              </h3>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {trustedByLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity"
                  >
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-full object-contain grayscale hover:grayscale-0 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Challenges Section */}
      <section className="py-16 lg:py-20 bg-green-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center border-4 border-green-200 shadow-lg">
                  <div className="text-3xl">🎯</div>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <GradientText variant="green">OUR MISSION</GradientText>
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                Our mission is to democratize healthcare access by leveraging
                digital technology to connect patients with quality medical
                care, regardless of their location or economic status, making
                healthcare truly accessible to all.
              </p>
            </div>

            {/* Challenges */}
            <div className="text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center border-4 border-green-200 shadow-lg">
                  <div className="text-3xl">🔍</div>
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                <GradientText variant="green">CHALLENGES</GradientText>
              </h2>

              <p className="text-base text-gray-700 leading-relaxed">
                We address the critical challenge of healthcare accessibility in
                remote areas, long waiting times for consultations, and the need
                for affordable medical care. Our platform bridges these gaps
                through innovative telemedicine solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Our <GradientText variant="green">Solution</GradientText>
              </h2>
              <div className="space-y-6">
                {solutionFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-2xl">{feature.icon}</div>
                    <p className="text-base text-gray-700">{feature.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-green-100 to-green-200 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sanjeevani App is Unique Section */}
      <section className="py-16 lg:py-20 bg-green-50/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <GradientText variant="green">Sanjeevani App</GradientText>{" "}
              Stands Out
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Unique <GradientText variant="green">Value</GradientText>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    24/7 availability with certified medical professionals
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Integrated medicine delivery and prescription management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Multi-language support for diverse user base
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Affordable pricing model for all economic segments
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Evidence of{" "}
                <GradientText variant="success">Success</GradientText>
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {successMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {metric.percentage}
                    </div>
                    <div className="text-sm text-gray-700">
                      {metric.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet the <GradientText variant="green">Team</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center max-w-xs mx-auto px-4">
                {/* Bigger image circle */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xl text-black font-medium mb-2">
                  {member.role}
                </p>

                {/* Bio */}
                <p className="text-lg text-gray-700 mb-1">{member.bio}</p>

                {/* Education */}
                <p className="text-lg text-gray-500">{member.education}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
