import React, { useState ,useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { 
  Factory, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  FileText,
  MapPin,
  IndianRupee,
  User,
  Briefcase,
  Heart,
  Lightbulb,
  Users,
  Target,
  Wrench,
  TrendingUp
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import EnhancedLogo from '../components/EnhancedLogo'
import EnhLogo from '../components/EnhLogo'

const ApplyFactoryPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if URL has hash and scroll to it
    if (location.hash === '#factory-form') {
      const formSection = document.getElementById('factory-form');
      if (formSection) {
        // Small timeout to ensure DOM is ready
        setTimeout(() => {
          formSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 50);
      }
    }
  }, [location]);
  const [formData, setFormData] = useState({
    name: '',
    business_idea: '',
    location: '',
    required_amount: '',
    past_experience: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        business_idea: '',
        location: '',
        required_amount: '',
        past_experience: ''
      })
    } catch (error: any) {
      setSubmitStatus('error')
      setErrorMessage('Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const businessTypes = [
    'Agriculture & Food Processing',
    'FMCG & Personal Care',
    'Retail & Supermarket',
    'Electronics & Appliances',
    'Apparel & Textiles',
    'Healthcare & Pharma',
    'Education & Training',
    'Infrastructure & Mining',
    'Paper & Packaging',
    'Logistics & Transport',
    'Automobile',
    'Other'
  ]

  const dreamersExamples = [
    {
      icon: Wrench,
      title: 'The Mechanic with Auto-Parts Idea',
      description: 'Years of experience fixing vehicles, now ready to manufacture quality spare parts for the local market'
    },
    {
      icon: Heart,
      title: 'The Homemaker with Spice Blend Formula',
      description: 'Traditional family recipes and deep knowledge of spices, ready to scale into commercial production'
    },
    {
      icon: FileText,
      title: 'The Pharmacist Making Affordable Medicine',
      description: 'Healthcare professional wanting to manufacture generic medicines for rural communities'
    },
    {
      icon: Briefcase,
      title: 'The Teacher Launching Skill School',
      description: 'Educator with vision to create vocational training centers for unemployed youth'
    }
  ]

  return (
    <div className="animate-fade-in bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-black text-white py-24 relative overflow-hidden" id="hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Factory Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-primary-800/80 to-black/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center">
            <div className="flex justify-center mb-8">
              <EnhLogo size="lg" variant="floating" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 font-['Orbitron']">
              <span className="holographic">OPPORTUNITY PAGE</span>
            </h1>
            <p className="text-xl md:text-3xl text-primary-100 max-w-5xl mx-auto leading-relaxed">
              For Skilled People Without Funds - Ramaera Opens the Door
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Ramaera Opens the Door */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Industrial Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">RAMERA OPENS THE DOOR</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Many people have <strong className="text-primary-400">ideas, knowledge, and skills</strong>… but no funds. 
                At Ramaera, if you:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <CheckCircle className="h-10 w-10 text-primary-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Know how to run a factory…</h3>
                  <p className="text-gray-400">Have the technical expertise and operational knowledge</p>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <Lightbulb className="h-10 w-10 text-yellow-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Have a powerful product idea…</h3>
                  <p className="text-gray-400">Innovative solutions that can serve real market needs</p>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <AlertCircle className="h-10 w-10 text-red-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">Can't raise ₹1 Cr on your own…</h3>
                  <p className="text-gray-400">Traditional funding sources are out of reach</p>
                </div>
                
                <div className="cyber-card p-8 hover:border-primary-500 transition-all duration-300">
                  <Target className="h-10 w-10 text-green-500 mb-6 mx-auto" />
                  <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">👉 We give you the chance.</h3>
                  <p className="text-gray-400">Community-backed opportunity to realize your vision</p>
                </div>
              </div>
              
              <div className="cyber-card p-12 bg-gradient-to-r from-primary-600/10 to-accent-500/10 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-white mb-6 font-['Orbitron']">HOW WE SUPPORT YOU</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">We fund your project through the community</p>
                  </div>
                  <div className="text-center">
                    <Factory className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">You run it with our support</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-10 w-10 text-primary-400 mx-auto mb-4" />
                    <p className="text-gray-300">Profits are shared fairly</p>
                  </div>
                </div>
                <p className="text-center text-primary-300 mt-8 text-xl">
                  You grow — and the country grows with you.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Examples of Dreamers */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-bg opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">EXAMPLES OF DREAMERS WE HELP</span>
            </h2>
            <p className="text-xl text-gray-300">
              Real people with real skills, now building real factories
            </p>
          </AnimatedSection>
          
          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dreamersExamples.map((dreamer, index) => {
              const Icon = dreamer.icon
              return (
                <div 
                  key={index} 
                  className="cyber-card p-8 hover:border-primary-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-primary-600/20 rounded-xl neon-border">
                        <Icon className="h-10 w-10 text-primary-500" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">{dreamer.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{dreamer.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </AnimatedSection>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-black" id='factory-form'>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' && (
            <AnimatedSection>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="text-green-800 font-semibold">Application Submitted Successfully!</h3>
                    <p className="text-green-700">Our community will review your proposal and get back to you within 7-10 business days.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          {submitStatus === 'error' && (
            <AnimatedSection>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <div>
                    <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection>
            <div className="bg-black rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-300 mb-8 text-center">
                Factory Application Form
              </h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <User className="h-5 w-5 mr-2 text-primary-300" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border bg-black border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <Factory className="h-5 w-5 mr-2 text-primary-300" />
                    Business Details
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="business_idea" className="block text-sm font-medium text-gray-300 mb-2">
                        Business Idea / Product Type *
                      </label>
                      <select
                        id="business_idea"
                        name="business_idea"
                        value={formData.business_idea}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                        <MapPin className="h-4 w-4 inline mr-1" />
                        Proposed Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="City, State (e.g., Hajipur, Bihar)"
                      />
                    </div>

                    <div>
                      <label htmlFor="required_amount" className="block text-sm font-medium text-gray-300 mb-2">
                        <IndianRupee className="h-4 w-4 inline mr-1" />
                        Required Amount *
                      </label>
                      <select
                        id="required_amount"
                        name="required_amount"
                        value={formData.required_amount}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="">Select funding range</option>
                        <option value="₹25 Lacs - ₹50 Lacs">₹25 Lacs - ₹50 Lacs</option>
                        <option value="₹50 Lacs - ₹1 Crore">₹50 Lacs - ₹1 Crore</option>
                        <option value="₹1 Crore - ₹2 Crore">₹1 Crore - ₹2 Crore</option>
                        <option value="₹2 Crore - ₹5 Crore">₹2 Crore - ₹5 Crore</option>
                        <option value="Above ₹5 Crore">Above ₹5 Crore</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-primary-300" />
                    Experience & Background
                  </h3>
                  <div>
                    <label htmlFor="past_experience" className="block text-sm font-medium text-gray-300 mb-2">
                      Past Experience (Optional)
                    </label>
                    <textarea
                      id="past_experience"
                      name="past_experience"
                      value={formData.past_experience}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Describe your relevant experience, skills, or background. If you're new to business, mention your motivation and commitment."
                    />
                    <p className="text-sm text-gray-300 mt-2">
                      No experience? No problem—Ramaera guides you with experts.
                    </p>
                  </div>
                </div>

                {/* File Upload Placeholder */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-300 mb-4 flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary-300" />
                    Supporting Documents
                  </h3>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload Pitch Deck or Business Plan (Optional)</p>
                    <p className="text-sm text-gray-500">PDF, DOC, or PPT files up to 10MB</p>
                    <button
                      type="button"
                      className="mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Choose File
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <p className="text-sm text-gray-500 mt-4">
                    By submitting, you agree to our terms and community guidelines
                  </p>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 matrix-bg opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-['Orbitron']">
              <span className="cyber-text">WHAT HAPPENS NEXT?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Your journey from application to factory launch
            </p>
          </AnimatedSection>

          <AnimatedSection stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <span className="text-3xl font-bold text-primary-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">COMMUNITY REVIEW</h3>
              <p className="text-gray-400">Our community evaluates your proposal for viability and alignment</p>
            </div>

            <div className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <span className="text-3xl font-bold text-primary-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">INTERVIEW PROCESS</h3>
              <p className="text-gray-400">If approved, you'll have a detailed discussion with our team</p>
            </div>

            <div className="cyber-card p-8 text-center hover:border-primary-500 transition-all duration-300">
              <div className="w-20 h-20 bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary-500/30">
                <span className="text-3xl font-bold text-primary-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-['Orbitron']">FUNDING & LAUNCH</h3>
              <p className="text-gray-400">Community funding begins and your factory journey starts</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default ApplyFactoryPage