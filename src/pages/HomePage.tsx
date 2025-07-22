import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Users, 
  Factory, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Target,
  IndianRupee,
  Building,
  Heart,
  Globe,
  Rocket,
  Sparkles,
  Zap,
  Monitor,
  AirVent,
  MapPin,
  Calendar,
  Briefcase,
  Quote,
  Play,
  ChevronRight,
  Phone,
  Mail,
  MessageSquare
} from 'lucide-react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import AnimatedSection from '../components/AnimatedSection'
import EnhLogo from '../components/EnhLogo'
import MagneticButton from '../components/MagneticButton'
import AnimatedCounter from '../components/AnimatedCounter'
import { useGSAP, useScrollAnimations } from '../hooks/useGSAP'

const HomePage: React.FC = () => {
  const navigate = useNavigate()
  const containerRef = useGSAP()
  useScrollAnimations()

  const heroStats = [
    { 
      icon: Users, 
      label: 'Community Members', 
      value: 22000, 
      suffix: '+',
      color: 'text-primary-400',
      description: 'Active shareholders building India together'
    },
    { 
      icon: IndianRupee, 
      label: 'Total Investment', 
      value: 295, 
      suffix: ' Cr',
      color: 'text-accent-400',
      description: 'Community-funded industrial projects'
    },
    { 
      icon: Factory, 
      label: 'Active Factories', 
      value: 2, 
      suffix: '+',
      color: 'text-secondary-400',
      description: 'Profitable manufacturing units running'
    },
    { 
      icon: Briefcase, 
      label: 'Jobs Created', 
      value: 80, 
      suffix: '+',
      color: 'text-green-400',
      description: 'Direct employment opportunities'
    }
  ]

  const successStories = [
    {
      title: 'Hajipur Spice Factory',
      location: 'Bihar',
      investment: '₹2.2 Crore',
      investors: '4,000+',
      status: 'Profitable & Distributing Returns',
      image: 'assets/sliderHeader.webp',
      highlights: [
        'Monthly profit distribution started',
        'Quality certifications obtained',
        '60+ local jobs created',
        'Distribution across North India'
      ]
    },
    {
      title: 'Ramaera Mart Supermarket',
      location: 'Agra, UP',
      investment: '₹45 Lakhs',
      investors: '1,800+',
      status: 'Successfully Operating',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Prime location in Agra',
        '20+ families employed',
        'Digital payment integration',
        'Customer loyalty program'
      ]
    }
  ]

  const upcomingProjects = [
    {
      title: 'LED Manufacturing Plant',
      location: 'Gujarat',
      investment: '₹1.5 Crore',
      progress: 75,
      description: 'Modern LED manufacturing for growing lighting market',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Garment Manufacturing Unit',
      location: 'Kolkata',
      investment: '₹1.2 Crore',
      progress: 40,
      description: 'Textile manufacturing for export market',
      image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Alkaline Water Plant',
      location: 'Jhansi & Chhapra',
      investment: '₹30 Lakhs',
      progress: 'In Progress',
      description: 'Electrolysis-based water purification technology',
      image: 'assets/water1.jpg'
    }
  ]

  const products = [
    {
      name: 'Ramaera TV',
      tagline: 'Smart Entertainment Redefined',
      description: '4K UHD Smart TVs with Android OS and premium features',
      icon: Monitor,
      image: 'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['4K UHD Display', 'Android TV OS', 'Voice Control', 'Smart Connectivity']
    },
    {
      name: 'Oxiair AC',
      tagline: 'Pure Air, Perfect Comfort',
      description: 'Revolutionary AC with advanced air purification technology',
      icon: AirVent,
      image: 'https://images.pexels.com/photos/8005394/pexels-photo-8005394.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Air Purification', 'Inverter Technology', 'Smart Controls', 'Anti-Bacterial']
    }
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Spice Factory Investor',
      quote: 'I invested ₹25,000 in the spice factory and have been receiving yearly returns. The transparency is amazing.',
      avatar: 'RK',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Supermarket Investor',
      quote: 'As a small investor, I never thought I could own part of a business. Ramaera made it possible.',
      avatar: 'PS',
      rating: 5
    },
    {
      name: 'Amit Singh',
      role: 'Factory Operator',
      quote: 'Running the factory with community support has been incredible. The guidance is professional.',
      avatar: 'AS',
      rating: 5
    }
  ]

  const industries = [
    { icon: Factory, title: 'FMCG & Personal Care', count: '15+ Projects' },
    { icon: Building, title: 'Food Processing', count: '12+ Projects' },
    { icon: Zap, title: 'Electronics', count: '8+ Projects' },
    { icon: Heart, title: 'Healthcare', count: '6+ Projects' },
    { icon: Globe, title: 'Retail & Supermarkets', count: '10+ Projects' },
    { icon: Target, title: 'Textiles & Apparel', count: '9+ Projects' }
  ]

  return (
    <div ref={containerRef} className="animate-fade-in bg-black overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary-600 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img
                src="assets/sliderHeader.webp"
                alt="Spice Factory"
                className="w-full h-full object-cover opacity-40"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Manufacturing"
                className="w-full h-full object-cover opacity-40"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Community"
                className="w-full h-full object-cover opacity-40"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-primary-600/30 to-black/70"></div>
        </div>
        
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex items-center min-h-screen">
          <div className="w-full">
            <AnimatedSection className="text-center mb-16">
              <div className="flex justify-center items-center space-x-4 mb-8">
                <EnhLogo size="xl" variant="floating" showText />
              </div>
              
              <motion.h1 
                className="hero-title text-4xl md:text-8xl font-bold mb-8 font-['Orbitron'] leading-tight"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <span className="holographic block">INDIA'S FIRST</span>
                <span className="cyber-text block">COMMUNITY-OWNED</span>
                <span className="golden-accent block">COMPANY</span>
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Building Thousands of Factories Across India Through Community Partnership
              </motion.p>
              
              <motion.div 
                className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <MagneticButton 
                  onClick={() => navigate('/shareholder')}
                  className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 transform hover:scale-110 shadow-golden text-lg"
                >
                  <Rocket className="mr-4 h-8 w-8" />
                  BECOME A SHAREHOLDER
                  <ArrowRight className="ml-4 h-8 w-8" />
                </MagneticButton>
                
                <MagneticButton 
                  onClick={() => navigate('/apply')}
                  className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold text-lg"
                >
                  <Factory className="mr-4 h-8 w-8" />
                  APPLY FOR FACTORY
                </MagneticButton>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-center space-x-2 text-primary-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <Star className="h-6 w-6 text-yellow-400 pulse-glow" />
                <span className="text-lg">22,000+ Members Already Building Together</span>
                <Star className="h-6 w-6 text-yellow-400 pulse-glow" />
              </motion.div>
            </AnimatedSection>
            
            {/* Hero Stats */}
            <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index}
                    className="text-center cyber-card p-6 relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10">
                      <Icon className={`h-10 w-10 ${stat.color} mx-auto mb-4 floating-element`} />
                      <div className={`text-2xl md:text-4xl font-bold ${stat.color} mb-2 font-['Orbitron']`}>
                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                      <div className="text-gray-500 text-xs mt-2">{stat.description}</div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Business Partnership"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="absolute inset-0 matrix-bg opacity-10 z-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 font-['Orbitron']">
              <span className="cyber-text">NOT A SCHEME, NOT A STARTUP</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a <strong className="text-primary-400">registered public limited company</strong> owned entirely by the community
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="cyber-card p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img 
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10">
                <Quote className="h-16 w-16 text-primary-400 mx-auto mb-8 pulse-glow" />
                <blockquote className="text-2xl md:text-4xl font-bold text-white mb-8 font-['Orbitron'] leading-relaxed">
                  "In the world of Ramaera, <span className="golden-accent">common men become industrialists</span> — forever."
                </blockquote>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We build real factories, create real jobs, and distribute real profits to real people. 
                  This is pure industrialization, not financial trading.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">LIVE SUCCESS STORIES</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real factories, real profits, real impact
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <motion.div 
                key={index}
                className="cyber-card overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-neon">
                      {story.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 font-['Orbitron']">{story.title}</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-300">{story.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IndianRupee className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-300">{story.investment}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Users className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-300">{story.investors} community investors</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {story.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">COMING SOON</span>
            </h2>
            <p className="text-xl text-gray-300">
              Next wave of community-funded factories
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              className="py-10"
            >
              {upcomingProjects.map((project, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="cyber-card p-6 relative overflow-hidden h-full"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white font-['Orbitron']">{project.title}</h3>
                        <span className="bg-secondary-500/20 text-secondary-400 px-3 py-1 rounded-full text-sm font-medium border border-secondary-500/50">
                          Coming Soon
                        </span>
                      </div>
                      
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Location:</span>
                          <span className="font-medium text-white">{project.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Investment:</span>
                          <span className="font-medium text-primary-400">{project.investment}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Progress</span>
                          <span className="font-medium text-white">
                            {typeof project.progress === 'number' ? `${project.progress}%` : project.progress}
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          {typeof project.progress === 'number' && (
                            <motion.div 
                              className="bg-gradient-to-r from-white to-accent-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${project.progress}%` }}
                              transition={{ duration: 2, delay: index * 0.2 }}
                              viewport={{ once: true }}
                            />
                          )}
                        </div>
                      </div>
                      
                      <MagneticButton className="w-full bg-gradient-to-r from-white to-accent-500 text-black py-2 rounded-lg hover:from-gray-200 hover:to-accent-400 transition-all duration-300 font-bold shadow-neon">
                        GET UPDATES
                      </MagneticButton>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Products */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Products"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">OUR PRODUCTS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Community-designed, factory-made excellence
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <motion.div 
                  key={index}
                  className="cyber-card overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/80 p-3 rounded-full neon-border">
                          <Icon className="h-6 w-6 text-primary-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2 font-['Orbitron']">{product.name}</h3>
                      <p className="text-primary-400 text-sm font-medium mb-4">{product.tagline}</p>
                      <p className="text-gray-300 mb-6">{product.description}</p>
                      
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent-400" />
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <MagneticButton 
                        onClick={() => navigate('/contact')}
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 shadow-neon"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Industries We Cover */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">INDUSTRIES WE FUND</span>
            </h2>
            <p className="text-xl text-gray-300">
              From agriculture to technology - we support every legal sector
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <motion.div 
                  key={index}
                  className="text-center cyber-card p-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="h-12 w-12 text-primary-400 mx-auto mb-4 floating-element" />
                  <h3 className="text-lg font-bold text-white mb-2 font-['Orbitron']">{industry.title}</h3>
                  <p className="text-gray-400 text-sm">{industry.count}</p>
                </motion.div>
              )
            })}
          </AnimatedSection>
          
          <AnimatedSection className="text-center">
            <MagneticButton 
              onClick={() => navigate('/industries')}
              className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold text-lg"
            >
              <Globe className="mr-4 h-8 w-8" />
              EXPLORE ALL INDUSTRIES
              <ArrowRight className="ml-4 h-8 w-8" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">WHAT OUR COMMUNITY SAYS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real feedback from real shareholders
            </p>
          </AnimatedSection>
          
          <AnimatedSection>
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="testimonial-slider"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="cyber-card p-8 relative overflow-hidden h-full"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative z-10">
                      <Quote className="h-8 w-8 text-primary-400 mb-4" />
                      <p className="text-gray-300 italic mb-6 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">HOW IT WORKS</span>
            </h2>
            <p className="text-xl text-gray-300">
              Simple steps to become an industrial co-owner
            </p>
          </AnimatedSection>
          
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {[
              { step: 1, title: 'Get Invited', desc: 'Existing shareholder invites you', icon: Users },
              { step: 2, title: 'Buy Share', desc: 'Purchase minimum 1 share (₹500)', icon: IndianRupee },
              { step: 3, title: 'Invest in Projects', desc: 'Fund factories you believe in', icon: Factory },
              { step: 4, title: 'Earn Profits', desc: 'Receive yearly profit distribution', icon: TrendingUp }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="cyber-card p-8 relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-white to-accent-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-neon">
                        {item.step}
                      </div>
                      <Icon className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2 font-['Orbitron']">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatedSection>
          
          <AnimatedSection className="text-center">
            <MagneticButton 
              onClick={() => navigate('/how-it-works')}
              className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold text-lg"
            >
              <Target className="mr-4 h-8 w-8" />
              LEARN MORE DETAILS
              <ArrowRight className="ml-4 h-8 w-8" />
            </MagneticButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact & Social */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">CONNECT WITH US</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join our community and stay updated
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="cyber-card p-8 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">WhatsApp Community</h3>
              <p className="text-gray-400 mb-6">Join 22,000+ members for real-time updates</p>
              <MagneticButton className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition-all duration-300 font-bold">
                JOIN WHATSAPP
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              className="cyber-card p-8 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <MessageSquare className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Telegram Channel</h3>
              <p className="text-gray-400 mb-6">Get instant notifications and updates</p>
              <MagneticButton className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-all duration-300 font-bold">
                JOIN TELEGRAM
              </MagneticButton>
            </motion.div>
            
            <motion.div 
              className="cyber-card p-8 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="h-12 w-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Email Support</h3>
              <p className="text-gray-400 mb-6">Direct support for all your queries</p>
              <MagneticButton 
                onClick={() => navigate('/contact')}
                className="w-full bg-accent-600 text-white py-3 rounded-lg hover:bg-accent-500 transition-all duration-300 font-bold"
              >
                CONTACT US
              </MagneticButton>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-black via-primary-600/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Future"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-primary-600/20 to-black"></div>
        </div>
        <div className="absolute inset-0 cyber-grid-bg opacity-30 z-5"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <AnimatedSection>
            <h2 className="text-3xl md:text-6xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">READY TO BUILD INDIA'S FUTURE?</span>
            </h2>
            <p className="text-xl mb-12 text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Join thousands of shareholders who are already transforming India's industrial landscape. 
              Your journey from citizen to industrialist starts here.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <MagneticButton 
                onClick={() => navigate('/shareholder')}
                className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-secondary-600 to-secondary-500 text-black font-bold rounded-xl hover:from-secondary-500 hover:to-secondary-400 transition-all duration-300 transform hover:scale-110 shadow-golden text-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="mr-4 h-8 w-8" />
                </motion.div>
                BECOME A SHAREHOLDER
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-4 h-8 w-8" />
                </motion.div>
              </MagneticButton>
              
              <MagneticButton 
                onClick={() => navigate('/apply')}
                className="inline-flex items-center px-12 py-6 glow-button btn-hover-lift font-bold text-lg"
              >
                <Factory className="mr-4 h-8 w-8" />
                APPLY FOR FACTORY
              </MagneticButton>
            </div>
            
            <motion.div 
              className="mt-12 flex items-center justify-center space-x-8 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>100% Legal & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Community Owned</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Real Industrial Assets</span>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default HomePage