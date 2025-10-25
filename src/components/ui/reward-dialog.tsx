"use client";

import React, { useEffect, useState } from 'react';
import { X, Gift, Sparkles, ChevronRight, Loader2 } from 'lucide-react';

interface RewardDialogProps {
  isOpen: boolean;
  onClose: () => void;
  rewardAmount: number;
  onNextUnit: () => void;
  hasNextUnit: boolean;
  alreadyClaimed?: boolean;
  isLoading?: boolean;
}

export const RewardDialog = ({ 
  isOpen, 
  onClose, 
  rewardAmount, 
  onNextUnit, 
  hasNextUnit,
  alreadyClaimed = false,
  isLoading = false
}: RewardDialogProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen && !alreadyClaimed && !isLoading) {
      setIsAnimating(true);
      setShowConfetti(true);
      
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, alreadyClaimed, isLoading]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={isLoading ? undefined : onClose}
      />

      {/* Dialog */}
      <div className="relative bg-card border-2 border-border rounded-2xl shadow-2xl max-w-md w-full animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        {!isLoading && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        )}

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 mb-6 relative">
            <div className={`absolute inset-0 rounded-full bg-primary/20 ${isAnimating && !isLoading ? 'animate-ping' : ''}`} />
            <div className="relative flex items-center justify-center w-full h-full rounded-full bg-primary">
              {isLoading ? (
                <Loader2 className="w-10 h-10 text-primary-foreground animate-spin" />
              ) : alreadyClaimed ? (
                <Sparkles className="w-10 h-10 text-primary-foreground" />
              ) : (
                <Gift className="w-10 h-10 text-primary-foreground animate-bounce" />
              )}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {isLoading ? 'Processing...' : alreadyClaimed ? 'Already Completed!' : 'Congratulations!'}
          </h2>

          {/* Message */}
          <p className="text-muted-foreground mb-6">
            {isLoading 
              ? 'Please wait while we process your reward...'
              : alreadyClaimed 
              ? 'You have already claimed your reward for this unit.'
              : 'You have successfully completed all quiz questions!'}
          </p>

          {/* Reward Amount */}
          <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 mb-6">
            <div className="text-sm text-muted-foreground mb-1">
              {alreadyClaimed ? 'Reward Claimed' : 'You earned'}
            </div>
            <div className="text-4xl font-bold text-primary">
              ${rewardAmount.toFixed(2)}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {!alreadyClaimed && !isLoading && (
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all active:scale-95"
              >
                Claim Reward
              </button>
            )}
            
            {hasNextUnit && !isLoading && (
              <button
                onClick={onNextUnit}
                className="w-full px-6 py-3 border-2 border-border font-bold rounded-lg hover:bg-accent transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Next Unit</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Confetti Effect */}
        {showConfetti && !alreadyClaimed && !isLoading && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10%',
                  backgroundColor: ['#644a40', '#ffdfb5', '#e8e8e8'][i % 3],
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};