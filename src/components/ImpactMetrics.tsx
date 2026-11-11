import React from 'react';
import { IMPACT_METRICS } from '../data/portfolioData';

export const ImpactMetrics: React.FC = () => {
  return (
    <section className="w-full px-6 lg:px-10 pb-16">
      <div className="max-w-7xl mx-auto bg-white rounded-[24px] shadow-sm p-6 lg:p-10 border border-[#E2E8F0]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {IMPACT_METRICS.map((metric, index) => {
            const isLast = index === IMPACT_METRICS.length - 1;
            return (
              <div
                key={metric.label}
                className={`flex flex-col space-y-2 lg:px-8 ${
                  !isLast ? 'lg:border-r lg:border-[#E2E8F0]' : ''
                }`}
              >
                <span className="font-bebas text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#022C22] leading-none tracking-tight">
                  {metric.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#059669] font-bold">
                  {metric.label}
                </span>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
