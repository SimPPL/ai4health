import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col md:flex-row md:justify-between col-span-1 md:col-span-2">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/simppl.png"
                  alt="Health Literacy AI"
                  width={40}
                  height={10}
                  className="w-58 h-18"
                />
              </div>
              <p className="text-gray-600 text-sm max-w-md">
                Transforming healthcare through artificial intelligence
                innovation, making advanced medical intelligence accessible to
                everyone.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="mb-8 md:mb-0">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Also Check!
                </h4>
                <div className="space-y-3">
                  <div>
                    <Link
                      href="https://simppl.org/"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm block"
                    >
                      SimPPL
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://arbiter.simppl.org/"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm block"
                    >
                      Arbiter
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://nextgenai.simppl.org/"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm block"
                    >
                      NextGenAI
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Connect With Us
                </h4>
                <div>
                  <Link
                    href="https://www.linkedin.com/company/sim-ppl/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            © 2024 AI 4 Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
