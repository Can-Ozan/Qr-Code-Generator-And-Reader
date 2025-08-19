import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { ContentGrid } from '@/components/ContentGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <FeaturedSection />
        <ContentGrid />
      </main>
    </div>
  );
};

export default Index;
