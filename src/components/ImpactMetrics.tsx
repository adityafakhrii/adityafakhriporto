import React from 'react';
import { motion } from 'motion/react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xs p-6 lg:p-8 border border-[#E2E8F0]"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {IMPACT_METRICS.map((metric, index) => {
            const isLast = index === IMPACT_METRICS.length - 1;
            return (
              <div
                key={metric.label}
                className={`flex flex-col space-y-1.5 lg:px-8 ${
                  !isLast ? 'lg:border-r lg:border-[#E2E8F0]' : ''
                }`}
              >
                <span className="font-bebas text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#022C22] leading-none tracking-tight">
                  {metric.value}
                </span>
                <span className="text-xs font-semibold text-[#059669]">
                  {metric.label}
                </span>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
