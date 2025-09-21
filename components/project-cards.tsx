import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/particles-background";
import GradientText from "@/components/gradient-text";

const projects = [
  {
    id: "sakhi",
    title: "Sakhi",
    tagline:
      "AI-powered health companion for personalized care and wellness guidance.",
    thumbnail: "/sakhi/sakhi_main.png?height=300&width=1000",
    description:
      "Intelligent health assistant providing personalized recommendations and support.",
    link: "https://sakhi-health.com/",
  },
  {
    id: "medical-ai-evaluation",
    title: "Medical AI Evaluation",
    tagline:
      "Comprehensive evaluation platform for medical AI systems and algorithms.",
    thumbnail: "/medicaleval/medeval.png?height=300&width=400",
    description:
      "Advanced tools for assessing and validating medical AI performance and reliability.",
    link: "https://health-eval.simppl.org/",
  },
  {
    id: "sanjeevani-app",
    title: "Sanjeevani App",
    tagline:
      "Digital healthcare platform connecting patients with medical professionals.",
    thumbnail: "/sanjeevani/sang.png?height=300&width=400",
    description:
      "Seamless telemedicine solution for accessible and quality healthcare delivery.",
    link: "https://sanjivni-app.vercel.app/",
  },
];

export default function ProjectCards() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
            Our <GradientText variant="green"> AI Health </GradientText>{" "}
            Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Explore our innovative AI-powered healthcare solutions that are
            transforming medical care and improving health outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 text-balance">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 text-pretty">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 text-pretty">
                  {project.description}
                </p>

                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white text-sm sm:text-base">
                  Learn More
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
