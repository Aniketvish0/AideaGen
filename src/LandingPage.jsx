import React from 'react';
import { motion } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Separator from '@radix-ui/react-separator';
import { ChevronDown, Rocket, Play, Lightbulb, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';


export default function LandingPage() {
    const features =[
        { icon: <Play className="h-12 w-12 text-blue-400" />,
          title: "Input Content", 
          description: "Provide links to YouTube podcasts or videos discussing business trends and innovations."
        },
        { icon: <Zap className="h-12 w-12 text-blue-400" />,
          title: "AI Analysis", 
          description: "Our advanced AI analyzes the content, extracting key insights and potential business opportunities."
        },
        { icon: <Lightbulb className="h-12 w-12 text-blue-400" />,
          title: "Idea Generation",
        description: "Receive a curated list of innovative business ideas based on the analyzed content."
        },
      ];
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="container mx-auto px-4 py-6">
        <NavigationMenu.Root className="flex justify-between items-center">
          <NavigationMenu.Item className="flex items-center">
            <Rocket className="h-6 w-6 text-blue-400" /> 
            <span className="text-2xl font-bold text-blue-400 ml-2">AideaGen</span> {/* Adjusted spacing */}
          </NavigationMenu.Item>
          <NavigationMenu.List className="flex space-x-6">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-full mt-2 bg-gray-800 rounded-md p-2 shadow-lg">
                <ul className="space-y-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded-md">For Startups</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-700 rounded-md">For Enterprises</a></li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
            </NavigationMenu.Item>
          </NavigationMenu.List>
          <NavigationMenu.Item>
             <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors inline-flex items-center">
             Get Started
             </a>
 </NavigationMenu.Item>
        </NavigationMenu.Root>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Generate Brilliant Business Ideas with AI
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform YouTube podcasts and videos into innovative business concepts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to='/generate' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors inline-flex items-center">
              <Play className="mr-2 h-5 w-5" /> Start Generating Ideas 
            </Link>
          </motion.div>
        </section>

        <Separator.Root className="bg-gray-800 h-px my-16" />

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator.Root className="bg-gray-800 h-px my-16" />

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Sarah Johnson", role: "Startup Founder", quote: "AIdeaGen helped me discover a unique business opportunity that I would have never thought of on my own. It's an invaluable tool for entrepreneurs." },
              { name: "Michael Chen", role: "Innovation Consultant", quote: "The AI's ability to extract insights from video content is remarkable. It's like having a team of analysts working for you 24/7." },
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-400 mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-blue-600 rounded-full p-2 mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Transform Your Ideas?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start generating innovative business ideas today with AIdeaGen
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors inline-flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" /> Get Started for Free
            </a>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-2xl font-bold text-blue-400">AIdeaGen</a>
            </div>
            <nav className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-500">
            © 2024 AIdeaGen. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
