import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';

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
            <Link
              href="/track"
              className="px-12 py-5 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white hover:text-primary transition-all shadow-xl hover:scale-105"
            >
              Track Shipment
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (Value Prop) */}
      <section className="py-24 bg-white">
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
              <div key={i} className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-gray-100 transform hover:-translate-y-2">
                <div className="text-6xl mb-6 filter drop-shadow-md">{item.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
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
                <Link href="/services#flatbed" className="inline-block w-full text-center px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-secondary transition-all text-lg shadow-lg">
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
                <Link href="/services#box-truck" className="inline-block w-full text-center px-8 py-4 bg-secondary text-white rounded-xl font-bold hover:bg-primary transition-all text-lg shadow-lg">
                  Learn More about Box Trucks →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
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

      {/* 5. INDUSTRIES SERVED */}
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
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:bg-white/20 transition-all cursor-default hover:transform hover:-translate-y-1 border border-white/10">
                <div className="text-5xl mb-4">{item.icon}</div>
                <div className="font-bold text-lg">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GET A QUOTE (Forms) */}
      <section id="quote" className="py-24 bg-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-secondary p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Get a Free Freight Quote</h2>
              <p className="text-white/90">Fill out the form below and we'll get back to you within minutes.</p>
            </div>
            <div className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Pickup Location (City, Zip)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="e.g. Dallas, TX 75201" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Delivery Location (City, Zip)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" placeholder="e.g. Chicago, IL 60601" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Freight Type</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all">
                      <option>Flatbed</option>
                      <option>Box Truck</option>
                      <option>Van</option>
                      <option>Other / Specialized</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Freight Details (Weight / Dimensions)</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all h-24" placeholder="e.g. 40,000 lbs, 48ft flatbed needed..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-primary text-white font-bold rounded-xl text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">Trusted by Companies & Carriers</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
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

          {/* Partner Logos (Dummy) */}
          <div className="border-t border-gray-100 pt-12">
            <p className="text-center text-gray-400 font-bold tracking-widest uppercase mb-8">Trusted Partners</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using text placeholders for logos as per prompt "Small logos of partners" */}
              <div className="text-2xl font-bold text-gray-400 flex items-center gap-2"><span className="text-3xl">🏗️</span> BUILD.CO</div>
              <div className="text-2xl font-bold text-gray-400 flex items-center gap-2"><span className="text-3xl">⚙️</span> INDU-TECH</div>
              <div className="text-2xl font-bold text-gray-400 flex items-center gap-2"><span className="text-3xl">🛒</span> RETAIL-X</div>
              <div className="text-2xl font-bold text-gray-400 flex items-center gap-2"><span className="text-3xl">🥦</span> AGRI-FRESH</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
