import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  MessageSquare,
  Users,
  Factory,
  TrendingUp,
  Shield,
  Heart,
  Globe
} from 'lucide-react'
import { motion } from 'framer-motion'
import EnhLogo from './EnhLogo'

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Industries', path: '/industries' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' }
  ]

  const services = [
    { name: 'Become Shareholder', path: '/shareholder' },
    { name: 'Apply for Factory', path: '/apply' },
    { name: 'Join Community', path: '/join' },
    { name: 'Investment Opportunities', path: '/industries' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/ramaeraindustries', 
      icon: Facebook,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/ramaeraindustries/', 
      icon: Instagram,
      color: 'hover:text-pink-500'
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/83034449', 
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/Ramaeraltd', 
      icon: Twitter,
      color: 'hover:text-blue-400'
    }
  ]

  const stats = [
    { icon: Users, label: 'Community Members', value: '22,000+' },
    { icon: Factory, label: 'Active Factories', value: '2+' },
    { icon: TrendingUp, label: 'Total Investment', value: '₹2.95 Cr' },
    { icon: Globe, label: 'Industries', value: '12+' }
  ]

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 cyber-grid-bg opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <EnhLogo size="sm" variant="floating" />
                <span className="text-white font-bold text-xl font-['Orbitron']">
                  RAMAERA
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                India's first community-owned public limited company building thousands of factories across India through shareholder participation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-400 text-sm">H77 Sector 63, Noida</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400" />
                  <span className="text-gray-400 text-sm">support@ramaera.in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 font-['Orbitron']">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 font-['Orbitron']">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.path}
                      className="text-gray-400 hover:text-accent-400 transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Stats */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 font-['Orbitron']">Our Impact</h3>
              <div className="space-y-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="p-2 bg-primary-600/20 rounded-lg">
                        <Icon className="h-4 w-4 text-primary-400" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">{stat.value}</div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Community */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-medium">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-200`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>

            {/* Community Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="text-sm">WhatsApp Community</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Users className="h-4 w-4" />
                <span className="text-sm">Telegram Channel</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Ramaera Industries Ltd. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">100% Legal & Regulated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">Community Owned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-4 border-t border-white/10">
          <p className="text-gray-500 text-xs text-center leading-relaxed">
            <strong>Disclaimer:</strong> This is not a financial scheme or trading platform. 
            Ramaera Industries Ltd is a registered public limited company focused on pure industrialization. 
            Profits are not guaranteed and depend on actual factory performance. 
            Please invest responsibly and understand the risks involved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer