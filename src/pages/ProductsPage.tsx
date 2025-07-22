import React from 'react'
import { 
  Monitor, 
  AirVent, 
  Wifi, 
  Smartphone, 
  Volume2, 
  Thermometer,
  Wind,
  Zap,
  Shield,
  Star,
  CheckCircle,
  ArrowRight,
  Package,
  Sparkles,
  Globe
} from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import EnhLogo from '../components/EnhLogo'
import MagneticButton from '../components/MagneticButton'
import { useNavigate } from 'react-router-dom'

const ProductsPage: React.FC = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: 'ramaera-tv',
      name: 'Ramaera TV',
      tagline: 'Smart Entertainment Redefined',
      description: 'Experience the future of home entertainment with Ramaera Smart TVs featuring cutting-edge technology and premium quality.',
      icon: Monitor,
      color: 'from-blue-600 to-purple-600',
      accentColor: 'text-blue-400',
      borderColor: 'border-blue-600/50',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        {
          icon: Monitor,
          title: '4K UHD Display',
          description: 'Crystal clear 4K Ultra HD resolution for stunning visual experience'
        },
        {
          icon: Smartphone,
          title: 'Android Smart OS',
          description: 'Latest Android TV OS with access to thousands of apps and games'
        },
        {
          icon: Volume2,
          title: 'Voice Control',
          description: 'Built-in Google Assistant for hands-free voice commands'
        },
        {
          icon: Wifi,
          title: 'Smart Connectivity',
          description: 'Wi-Fi, Bluetooth, HDMI, USB ports for seamless connectivity'
        },
        {
          icon: Shield,
          title: 'Premium Build',
          description: 'Durable construction with sleek design and energy efficiency'
        },
        {
          icon: Star,
          title: 'Entertainment Hub',
          description: 'Access to Netflix, YouTube, Prime Video, and more streaming platforms'
        }
      ],
      specifications: [
        'Screen Sizes: 32", 43", 50", 55", 65"',
        'Resolution: 4K UHD (3840 x 2160)',
        'Operating System: Android TV 11',
        'Connectivity: Wi-Fi 802.11ac, Bluetooth 5.0',
        'Ports: 3x HDMI, 2x USB, Ethernet, Audio Out',
        'Audio: Dolby Digital Plus, 20W Speakers'
      ]
    },
    {
      id: 'oxiair-ac',
      name: 'Oxiair AC',
      tagline: 'Pure Air, Perfect Comfort',
      description: 'Revolutionary air conditioning technology that not only cools but purifies your indoor air for healthier living.',
      icon: AirVent,
      color: 'from-green-600 to-teal-600',
      accentColor: 'text-green-400',
      borderColor: 'border-green-600/50',
      image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        {
          icon: AirVent,
          title: 'Advanced Air Purification',
          description: 'Multi-stage filtration system removes pollutants, allergens, and harmful particles'
        },
        {
          icon: Zap,
          title: 'Inverter Technology',
          description: 'Energy-efficient inverter compressor for optimal cooling and power savings'
        },
        {
          icon: Smartphone,
          title: 'Smart Controls',
          description: 'Wi-Fi enabled with mobile app control and voice assistant compatibility'
        },
        {
          icon: Thermometer,
          title: 'Precise Temperature',
          description: 'Advanced sensors maintain perfect temperature with ±1°C accuracy'
        },
        {
          icon: Wind,
          title: 'Dual Functionality',
          description: 'Simultaneous cooling and air purification for healthier indoor environment'
        },
        {
          icon: Shield,
          title: 'Anti-Bacterial Coating',
          description: 'Special coating prevents bacterial growth and maintains hygiene'
        }
      ],
      specifications: [
        'Capacity: 1 Ton, 1.5 Ton, 2 Ton',
        'Energy Rating: 5 Star BEE Rating',
        'Refrigerant: R32 Eco-friendly',
        'Air Purification: HEPA + Carbon Filter',
        'Smart Features: Wi-Fi, Mobile App, Voice Control',
        'Warranty: 5 Years Comprehensive, 10 Years Compressor'
      ]
    }
  ]

  const productStats = [
    { 
      icon: Package, 
      label: 'Product Lines', 
      value: '2+', 
      color: 'text-primary-400',
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      icon: Star, 
      label: 'Quality Standards', 
      value: '5★', 
      color: 'text-accent-400',
      image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      icon: Shield, 
      label: 'Warranty Coverage', 
      value: '10 Yrs', 
      color: 'text-secondary-400',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    { 
      icon: Globe, 
      label: 'Market Reach', 
      value: 'Pan India', 
      color: 'text-green-400',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ramaera Products"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary-600/20 to-black/60"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <EnhLogo size="lg" variant="floating" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">RAMAERA PRODUCTS</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              Innovation Meets Quality - Building Tomorrow's Technology Today
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Product Stats */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {productStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="text-center group"
                >
                  <div className="cyber-card p-8 h-full relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={stat.image} 
                        alt={stat.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <motion.div 
                        className="inline-flex items-center justify-center w-16 h-16 bg-black/80 rounded-full mb-4 mx-auto group-hover:bg-white/10 transition-all duration-300 pulse-glow border border-white/20"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`h-8 w-8 ${stat.color}`} />
                      </motion.div>
                      <div className="text-3xl md:text-5xl font-bold text-white mb-3 golden-accent font-['Orbitron']">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">OUR FLAGSHIP PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Cutting-edge technology designed for modern living
            </p>
          </AnimatedSection>
          
          <div className="space-y-24">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0
              
              return (
                <AnimatedSection key={product.id} delay={index * 0.2}>
                  <motion.div 
                    className="cyber-card overflow-hidden"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                      {/* Product Image */}
                      <motion.div 
                        className={`relative h-64 lg:h-auto ${!isEven ? 'lg:col-start-2' : ''}`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} ${product.color} opacity-20`}></div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/80 p-3 rounded-full neon-border">
                            <Icon className={`h-6 w-6 ${product.accentColor}`} />
                          </div>
                        </div>
                      </motion.div>
                      
                      {/* Product Content */}
                      <div className={`p-6 md:p-8 ${!isEven ? 'lg:col-start-1' : ''}`}>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-2 rounded-lg ${product.color.replace('from-', 'bg-').replace(' to-purple-600', '').replace(' to-teal-600', '')}/20 neon-border`}>
                            <Icon className={`h-8 w-8 ${product.accentColor}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white font-['Orbitron']">{product.name}</h3>
                            <p className={`text-sm ${product.accentColor} font-medium`}>{product.tagline}</p>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6 leading-relaxed">{product.description}</p>
                        
                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                          {product.features.map((feature, idx) => {
                            const FeatureIcon = feature.icon
                            return (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className={`p-2 rounded-lg ${product.color.replace('from-', 'bg-').replace(' to-purple-600', '').replace(' to-teal-600', '')}/10 flex-shrink-0`}>
                                  <FeatureIcon className={`h-4 w-4 ${product.accentColor}`} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                                  <p className="text-gray-400 text-xs">{feature.description}</p>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        
                        {/* Specifications */}
                        <div className="mb-6">
                          <h4 className="font-semibold text-white mb-3">Key Specifications:</h4>
                          <ul className="space-y-1">
                            {product.specifications.map((spec, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <CheckCircle className={`h-4 w-4 ${product.accentColor} flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-400 text-sm">{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <MagneticButton 
                          onClick={() => navigate('/contact')}
                          className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${product.color} text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-neon`}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </MagneticButton>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Innovation Promise */}
      <section className="py-24 bg-gradient-to-r from-black via-primary-600/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Innovation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-600/20 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-30 z-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">INNOVATION DRIVEN BY COMMUNITY</span>
            </h2>
            <p className="text-xl mb-12 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Every Ramaera product is developed with community input and built to serve real needs. 
              When you choose Ramaera, you're not just buying a product — you're supporting community-owned innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton 
                onClick={() => navigate('/shareholder')}
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 transform hover:scale-110 shadow-golden mobile-optimized"
              >
                <Sparkles className="mr-4 h-8 w-8" />
                BECOME A SHAREHOLDER
                <ArrowRight className="ml-4 h-8 w-8" />
              </MagneticButton>
              
              <MagneticButton 
                onClick={() => navigate('/contact')}
                className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold mobile-optimized"
              >
                <Package className="mr-4 h-8 w-8" />
                PRODUCT INQUIRIES
              </MagneticButton>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage