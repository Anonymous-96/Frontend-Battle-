import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, HardDrive, Monitor, Zap, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const PCBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedComponents, setSelectedComponents] = useState<{[key: string]: any}>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const steps = [
    {
      id: 'usage',
      title: 'What will you use it for?',
      icon: Monitor,
      description: 'Select your primary use case'
    },
    {
      id: 'budget',
      title: 'What\'s your budget?',
      icon: Zap,
      description: 'Choose your price range'
    },
    {
      id: 'cpu',
      title: 'Choose your CPU',
      icon: Cpu,
      description: 'Select your processor'
    },
    {
      id: 'gpu',
      title: 'Choose your GPU',
      icon: HardDrive,
      description: 'Select your graphics card'
    },
    {
      id: 'review',
      title: 'Review your build',
      icon: CheckCircle,
      description: 'Final configuration'
    }
  ];

  const usageOptions = [
    {
      id: 'gaming',
      name: 'Gaming',
      description: 'High-performance gaming and streaming',
      icon: '🎮',
      recommended: 'RTX 4070+ recommended'
    },
    {
      id: 'creative',
      name: 'Content Creation',
      description: 'Video editing, 3D rendering, design',
      icon: '🎨',
      recommended: 'High core count CPU + RTX graphics'
    },
    {
      id: 'professional',
      name: 'Professional Work',
      description: 'Development, productivity, multitasking',
      icon: '💼',
      recommended: 'Balanced performance and efficiency'
    },
    {
      id: 'ai',
      name: 'AI/ML Research',
      description: 'Machine learning and data science',
      icon: '🤖',
      recommended: 'High VRAM GPU essential'
    }
  ];

  const budgetOptions = [
    { id: 'budget', name: '$800 - $1,500', description: 'Entry to mid-range performance', color: 'from-green-500 to-emerald-500' },
    { id: 'performance', name: '$1,500 - $2,500', description: 'High-performance builds', color: 'from-blue-500 to-cyan-500' },
    { id: 'enthusiast', name: '$2,500 - $4,000', description: 'Enthusiast-grade systems', color: 'from-purple-500 to-violet-500' },
    { id: 'flagship', name: '$4,000+', description: 'No-compromise flagship builds', color: 'from-red-500 to-pink-500' }
  ];

  const cpuOptions = [
    {
      id: 'i5-13600k',
      name: 'Intel Core i5-13600K',
      price: 289,
      specs: ['14 Cores', '3.5GHz Base', '5.1GHz Boost'],
      recommended: ['gaming', 'professional']
    },
    {
      id: 'i7-13700k',
      name: 'Intel Core i7-13700K',
      price: 409,
      specs: ['16 Cores', '3.4GHz Base', '5.4GHz Boost'],
      recommended: ['gaming', 'creative']
    },
    {
      id: 'i9-13900k',
      name: 'Intel Core i9-13900K',
      price: 589,
      specs: ['24 Cores', '3.0GHz Base', '5.8GHz Boost'],
      recommended: ['creative', 'ai', 'enthusiast']
    },
    {
      id: 'ryzen-7700x',
      name: 'AMD Ryzen 7 7700X',
      price: 349,
      specs: ['8 Cores', '4.5GHz Base', '5.4GHz Boost'],
      recommended: ['gaming', 'creative']
    }
  ];

  const gpuOptions = [
    {
      id: 'rtx-4060',
      name: 'NVIDIA RTX 4060',
      price: 299,
      specs: ['8GB VRAM', '1080p Gaming', 'DLSS 3.0'],
      recommended: ['budget', 'gaming']
    },
    {
      id: 'rtx-4070',
      name: 'NVIDIA RTX 4070',
      price: 599,
      specs: ['12GB VRAM', '1440p Gaming', 'Ray Tracing'],
      recommended: ['performance', 'gaming']
    },
    {
      id: 'rtx-4080',
      name: 'NVIDIA RTX 4080',
      price: 1199,
      specs: ['16GB VRAM', '4K Gaming', 'Content Creation'],
      recommended: ['enthusiast', 'creative']
    },
    {
      id: 'rtx-4090',
      name: 'NVIDIA RTX 4090',
      price: 1599,
      specs: ['24GB VRAM', '4K Ultra', 'AI Workloads'],
      recommended: ['flagship', 'ai']
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const selectOption = (stepId: string, option: any) => {
    setSelectedComponents({
      ...selectedComponents,
      [stepId]: option
    });

    if (option.price) {
      setTotalPrice(totalPrice + option.price);
    }

    // Auto-advance for certain steps
    if (stepId !== 'review') {
      setTimeout(nextStep, 500);
    }
  };

  const renderStepContent = () => {
    const step = steps[currentStep];

    switch (step.id) {
      case 'usage':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usageOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedComponents.usage?.id === option.id
                    ? 'border-quantum-blue bg-quantum-blue/5 dark:bg-quantum-blue/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                }`}
                onClick={() => selectOption('usage', option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-2">
                  {option.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {option.description}
                </p>
                <p className="text-sm text-quantum-blue dark:text-quantum-green font-medium">
                  {option.recommended}
                </p>
              </motion.div>
            ))}
          </div>
        );

      case 'budget':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {budgetOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  selectedComponents.budget?.id === option.id
                    ? 'border-quantum-blue bg-quantum-blue/5 dark:bg-quantum-blue/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                }`}
                onClick={() => selectOption('budget', option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${option.color} opacity-10 rounded-bl-full`} />
                <h3 className="text-xl font-inter font-bold text-gray-900 dark:text-white mb-2">
                  {option.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        );

      case 'cpu':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cpuOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedComponents.cpu?.id === option.id
                    ? 'border-quantum-blue bg-quantum-blue/5 dark:bg-quantum-blue/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                }`}
                onClick={() => selectOption('cpu', option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <Cpu className="w-8 h-8 text-quantum-blue" />
                  <span className="text-xl font-bold text-quantum-green">
                    ${option.price}
                  </span>
                </div>
                <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-3">
                  {option.name}
                </h3>
                <div className="space-y-1 mb-4">
                  {option.specs.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      • {spec}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {option.recommended.map((rec, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'gpu':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gpuOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedComponents.gpu?.id === option.id
                    ? 'border-quantum-blue bg-quantum-blue/5 dark:bg-quantum-blue/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                }`}
                onClick={() => selectOption('gpu', option)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <HardDrive className="w-8 h-8 text-quantum-green" />
                  <span className="text-xl font-bold text-quantum-green">
                    ${option.price}
                  </span>
                </div>
                <h3 className="text-lg font-inter font-bold text-gray-900 dark:text-white mb-3">
                  {option.name}
                </h3>
                <div className="space-y-1 mb-4">
                  {option.specs.map((spec, index) => (
                    <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                      • {spec}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {option.recommended.map((rec, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-400"
                    >
                      {rec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'review':
        return (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-orbitron font-bold text-gray-900 dark:text-white mb-6 text-center">
                Your Custom Build
              </h3>
              
              <div className="space-y-4 mb-8">
                {Object.entries(selectedComponents).map(([key, component]: [string, any]) => (
                  <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-gray-700">
                    <div>
                      <h4 className="font-inter font-semibold text-gray-900 dark:text-white capitalize">
                        {key}: {component.name}
                      </h4>
                      {component.specs && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {component.specs.join(' • ')}
                        </p>
                      )}
                    </div>
                    {component.price && (
                      <span className="text-lg font-bold text-quantum-green">
                        ${component.price}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center mb-8">
                <div className="text-3xl font-orbitron font-bold text-quantum-blue dark:text-quantum-green mb-2">
                  Total: ${(selectedComponents.cpu?.price || 0) + (selectedComponents.gpu?.price || 0)}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  *Additional components (RAM, Storage, etc.) will be configured based on your selections
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-quantum-blue to-quantum-green text-white rounded-lg font-inter font-semibold"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  className="px-6 py-3 border-2 border-quantum-blue text-quantum-blue rounded-lg font-inter font-semibold hover:bg-quantum-blue hover:text-white transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Quote
                </motion.button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="builder" className="py-20 bg-gradient-to-br from-gray-900 via-quantum-dark to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(0,255,136,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-orbitron font-bold text-white mb-4">
            PC Builder
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build your perfect system with our guided configurator
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${index !== steps.length - 1 ? 'flex-1' : ''}`}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    index <= currentStep
                      ? 'border-quantum-blue bg-quantum-blue text-white'
                      : 'border-gray-600 text-gray-400'
                  }`}
                  animate={index === currentStep ? { scale: [1, 1.1, 1] } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon className="w-6 h-6" />
                </motion.div>
                
                {index !== steps.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-quantum-blue to-quantum-green"
                        initial={{ width: 0 }}
                        animate={{ width: index < currentStep ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-inter font-bold text-white mb-2">
              {steps[currentStep].title}
            </h3>
            <p className="text-gray-400">
              {steps[currentStep].description}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-12"
          >
            {renderStepContent()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <motion.button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-white border border-gray-600 hover:border-gray-500'
            }`}
            whileHover={currentStep > 0 ? { scale: 1.05 } : {}}
            whileTap={currentStep > 0 ? { scale: 0.95 } : {}}
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </motion.button>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>

          <motion.button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
              currentStep === steps.length - 1
                ? 'text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-quantum-blue to-quantum-green text-white'
            }`}
            whileHover={currentStep < steps.length - 1 ? { scale: 1.05 } : {}}
            whileTap={currentStep < steps.length - 1 ? { scale: 0.95 } : {}}
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PCBuilder;