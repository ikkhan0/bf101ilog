import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-banner.jpg"
            alt="BullyFashion101 LLC - Freight Logdog"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-6 py-2 bg-secondary text-white rounded-full font-bold text-sm tracking-wider mb-4 animate-pulse">
              🎖️ VETERAN OWNED & OPERATED
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
            Welcome to BullyFashion101 LLC
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
            TRANSPORTATION SOLUTIONS<br />IN A BULLY FASHION
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-4 font-semibold drop-shadow-lg">
            Disciplined Excellence in Freight Logistics
          </p>
          <p className="text-lg md:text-xl text-gray-200 mb-8 italic">
            "Good Brokers don't allow good truckers nor good customers to be Bullied."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-secondary text-white rounded-full font-bold text-lg hover:bg-secondary-dark transition-all shadow-2xl border-2 border-secondary transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link
              href="/portal/carrier"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-2xl border-2 border-white transform hover:scale-105"
            >
              Join as Carrier
            </Link>
            <Link
              href="/portal/shipper"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-bg-light transition-all shadow-2xl border-2 border-white transform hover:scale-105"
            >
              Join as Shipper
            </Link>
          </div>
        </div>
      </section>

      {/* About Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">Welcome to BullyFashion101 LLC</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                BullyFashion101 LLC is a <strong>veteran-owned</strong> freight brokerage specializing in disciplined,
                compliance-driven transportation solutions. Founded by <strong>Erv Moore</strong>, we apply military-developed
                logistics expertise and hazardous materials experience to deliver precision and reliability for shippers who demand excellence.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Our military background instilled a deep understanding of operational planning, risk management, and safety—core
                elements in moving regulated and time-sensitive freight. We continue serving critical supply chains by helping
                food distributors, manufacturers, and industrial shippers secure dependable transportation while maintaining
                strict regulatory standards.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-secondary">
              <Image
                src="/brokerage-team.jpg"
                alt="BullyFashion101 LLC Professional Brokerage Team"
                width={600}
                height={400}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-gradient-to-br from-bg-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-bold text-sm mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl font-bold text-primary mb-4">Freight Brokerage Excellence</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Dry Van & Flatbed | General Freight | Hazardous Materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-secondary">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">🚛</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Full Truckload (FTL)</h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated capacity for time-sensitive freight with precision delivery and military-grade reliability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-secondary">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">⚗️</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Hazardous Materials</h3>
              <p className="text-gray-600 leading-relaxed">
                Specialized handling with strict regulatory compliance and expert hazmat transportation credentials.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-secondary">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">🥶</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Food & Perishables</h3>
              <p className="text-gray-600 leading-relaxed">
                Temperature-controlled logistics for distributors with cold chain expertise and compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-accent">
              <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">🏭</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Industrial Freight</h3>
              <p className="text-gray-600 leading-relaxed">
                Heavy haul and specialized equipment transport for manufacturing and industrial sectors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-accent">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Expedited Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Rapid response when capacity is tight or freight is complex—mission-ready 24/7.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-t-4 border-accent">
              <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Supply Chain Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Operational planning, risk management, and lane optimization with strategic consulting.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-10 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all shadow-xl transform hover:scale-105"
            >
              View All Services & Coverage
            </Link>
          </div>
        </div>
      </section>

      {/* Portal CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl border-2 border-white/30 hover:border-white/60 transition-all">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <span className="text-4xl">🚚</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Carrier Portal</h3>
              <p className="text-gray-100 mb-6 text-lg leading-relaxed">
                Join our network of professional carriers. Must meet DOT/MC authority and insurance requirements.
                Register your fleet and access loads across the contiguous United States.
              </p>
              <Link
                href="/portal/carrier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-bg-light transition-all shadow-xl transform hover:scale-105"
              >
                Register as Carrier →
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl border-2 border-white/30 hover:border-white/60 transition-all">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                <span className="text-4xl">📦</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Shipper Portal</h3>
              <p className="text-gray-100 mb-6 text-lg leading-relaxed">
                Ship with confidence. Get solution consults, request lane quotes, and manage your freight
                logistics with disciplined execution and transparent communication.
              </p>
              <Link
                href="/portal/shipper"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-secondary-dark transition-all shadow-xl transform hover:scale-105"
              >
                Register as Shipper →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-secondary via-secondary-dark to-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-6">Ready to move your freight?</h2>
          <p className="text-2xl mb-8">Contact us today for a competitive quote and military-grade service excellence.</p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-white text-primary rounded-full font-bold text-xl hover:bg-bg-light transition-all shadow-2xl transform hover:scale-105">
            Contact Us Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
