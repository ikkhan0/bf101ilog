import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
        <HeroSlider
          images={[
            '/hero-slider-1.jpg',
            '/hero-slider-2.jpg',
            '/hero-slider-3.jpg'
          ]}
          interval={5000}
        />
        {/* Overlay Gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-0"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl leading-tight tracking-tight">
            Reliable Flatbed & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Box Truck Freight</span>
            <span className="block text-3xl md:text-5xl mt-4 font-bold text-gray-200">— Nationwide —</span>
          </h1>
          <p className="text-xl md:text-3xl text-gray-100 mb-10 font-medium drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            Fast, Secure, and Transparent Logistics for Every Load
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/#quote"
              className="px-12 py-5 bg-secondary text-white rounded-full font-bold text-xl hover:bg-secondary-dark transition-all shadow-[0_0_20px_rgba(220,38,38,0.5)] border-2 border-secondary hover:scale-105 flex items-center gap-2"
            >
              Get a Quote <span>→</span>
            </Link>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/portal/carrier"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl hover:scale-105 border-2 border-white/20 backdrop-blur-sm"
              >
                Carrier Sign Up
              </Link>
              <Link
                href="/portal/shipper"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-5 bg-white text-primary rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
              >
                Shipper Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT US HIGHLIGHT (Restored) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full font-bold text-sm mb-4">
                ABOUT US
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">Welcome to BullyFashion101 LLC</h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                BullyFashion101 LLC is a <strong>military-owned</strong> freight brokerage specializing in disciplined,
                compliance-driven transportation solutions. Founded by <strong>Erv Moore</strong>, we apply military-developed
                logistics expertise and hazardous materials experience to deliver precision and reliability for shippers who demand excellence.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We don't just move freight; we execute missions. Whether it's complex flatbed loads or time-critical box truck deliveries, we operate with an unshakeable commitment to integrity and performance.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-secondary transition-all shadow-lg"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-secondary transform rotate-1 hover:rotate-0 transition-all duration-500">
              <Image
                src="/hero-banner.jpg"
                alt="BullyFashion101 LLC Freight - Military Owned"
                width={800}
                height={600}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (Value Prop) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Us?</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: "🛣️", title: "Nationwide Coverage", desc: "Seamless transport across the contiguous United States." },
              { icon: "📦", title: "Dedicated Fleets", desc: "Specialized flatbed & box truck capacity ready to roll." },
              { icon: "🚀", title: "Real-Time Tracking", desc: "Full visibility from pickup to delivery for peace of mind." },
              { icon: "🤝", title: "Trusted Carriers", desc: "Fully insured and vetted network of professional drivers." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all border border-transparent hover:border-gray-100 transform hover:-translate-y-2">
                <div className="text-6xl mb-6 filter drop-shadow-md">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES OVERVIEW */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 transform skew-x-12 translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-400">Specialized solutions for your distinct freight needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Flatbed Service */}
            <div className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(30,58,138,0.3)] transition-all group duration-500">
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary flex items-center justify-center text-white text-9xl group-hover:scale-110 transition-transform duration-700">🚛</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-6 left-8 text-4xl font-extrabold text-white drop-shadow-lg">Flatbed Freight</h3>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Heavy equipment & machinery</li>
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Oversized & wide loads</li>
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Steel, coil & building materials</li>
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Agricultural equipment</li>
                </ul>
                <Link href="/services/flatbed" className="inline-block w-full text-center px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all text-lg shadow-lg">
                  Learn More about Flatbed →
                </Link>
              </div>
            </div>

            {/* Box Truck Service */}
            <div className="bg-white text-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(220,38,38,0.3)] transition-all group duration-500">
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary flex items-center justify-center text-white text-9xl group-hover:scale-110 transition-transform duration-700">📦</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-6 left-8 text-4xl font-extrabold text-white drop-shadow-lg">Box Truck Freight</h3>
              </div>
              <div className="p-10">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Local & regional deliveries</li>
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> White-glove transport service</li>
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Time-sensitive expedited shipments</li>
                  <li className="flex items-center text-lg font-medium"><span className="text-secondary mr-3 text-xl">✓</span> Warehouse-to-door pick-up/drop-off</li>
                </ul>
                <Link href="/services/box-truck" className="inline-block w-full text-center px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-primary transition-all text-lg shadow-lg">
                  Learn More about Box Trucks →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-20">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8 relative px-4">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10 transform translate-y-4"></div>

            {[
              { step: "01", title: "Request a Quote", icon: "📝", desc: "Submit your shipment details online or give us a call." },
              { step: "02", title: "Load Assignment", icon: "🚚", desc: "We match your freight with a vetted, optimal carrier." },
              { step: "03", title: "Pickup & Transit", icon: "📦", desc: "Driver arrives for pickup and we track the journey." },
              { step: "04", title: "Delivery", icon: "✅", desc: "Freight is delivered safely and on time, every time." }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="w-28 h-28 bg-white text-primary rounded-full flex flex-col items-center justify-center mx-auto mb-8 shadow-xl border-4 border-gray-100 group-hover:border-secondary group-hover:scale-110 transition-all duration-300 relative z-10">
                  <span className="text-4xl mb-1">{item.icon}</span>
                  <span className="text-xs font-bold text-gray-400">STEP {item.step}</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 font-medium px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: "🏗️", name: "Construction" },
              { icon: "🏭", name: "Manufacturing" },
              { icon: "🛍️", name: "Retail" },
              { icon: "🌾", name: "Agriculture" },
              { icon: "🚗", name: "Automotive" },
              { icon: "🎪", name: "Events" }
            ].map((item, i) => (
              <Link key={i} href="/services/industries" className="block bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:bg-white/20 transition-all cursor-pointer hover:transform hover:-translate-y-1 border border-white/10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="font-bold text-lg">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GET A QUOTE (Forms) */}
      <section id="quote" className="py-24 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4">
          <QuoteForm />
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Trusted by Companies & Carriers</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Dependable drivers and clear communication — highly recommended!", author: "Sarah J.", role: "Operations Manager", company: "ConstructCo" },
              { quote: "BullyFashion101 helped us move critical flatbed freight when no one else could.", author: "Mike T.", role: "Logistics Director", company: "SteelWorks Inc." },
              { quote: "Professional service from start to finish. The best box truck fleet we've used.", author: "Jessica R.", role: "Supply Chain Lead", company: "Retail Brands Global" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl relative shadow-lg">
                <div className="text-6xl text-secondary/20 absolute top-4 left-4 font-serif">"</div>
                <p className="text-gray-700 italic text-lg mb-6 relative z-10">{item.quote}</p>
                <div>
                  <div className="font-bold text-primary">{item.author}</div>
                  <div className="text-sm text-gray-500">{item.role}, {item.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
