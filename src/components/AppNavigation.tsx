import React, { useState } from 'react';
import { QrCode, Camera, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AppNavigationProps {
  activeTab: 'generator' | 'scanner';
  onTabChange: (tab: 'generator' | 'scanner') => void;
}

export const AppNavigation: React.FC<AppNavigationProps> = ({ activeTab, onTabChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <QrCode className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold">QR Scanner</span>
            <Badge variant="secondary" className="text-xs">v1.0</Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant={activeTab === 'generator' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onTabChange('generator')}
              className="flex items-center space-x-2"
            >
              <QrCode className="w-4 h-4" />
              <span>Generator</span>
            </Button>
            <Button
              variant={activeTab === 'scanner' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => onTabChange('scanner')}
              className="flex items-center space-x-2"
            >
              <Camera className="w-4 h-4" />
              <span>Scanner</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-2">
              <Button
                variant={activeTab === 'generator' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => {
                  onTabChange('generator');
                  setIsOpen(false);
                }}
                className="w-full justify-start flex items-center space-x-2"
              >
                <QrCode className="w-4 h-4" />
                <span>QR Generator</span>
              </Button>
              <Button
                variant={activeTab === 'scanner' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => {
                  onTabChange('scanner');
                  setIsOpen(false);
                }}
                className="w-full justify-start flex items-center space-x-2"
              >
                <Camera className="w-4 h-4" />
                <span>QR Scanner</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};