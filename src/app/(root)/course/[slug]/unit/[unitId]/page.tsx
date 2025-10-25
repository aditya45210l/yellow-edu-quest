"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { courses, Unit } from '@/lib/data/courses';
import { UnitContent } from '@/components/ui/unit-content';
import { QuizPanel } from '@/components/ui/quiz-panel';
import { RewardDialog } from '@/components/ui/reward-dialog';

export default function UnitPage() {
  const params = useParams();
  const router = useRouter();
  const courseSlug = params.slug as string;
  const unitId = params.unitId as string;

  const [showRewardDialog, setShowRewardDialog] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [unitProgress, setUnitProgress] = useState<any>(null);

  // Temporary user ID - will be replaced with actual auth
  const userId = 'user_demo_123';

  const course = courses.find(c => c.slug === courseSlug);
  
  if (!course) {
    return <div>Course not found</div>;
  }

  let currentUnit: Unit | undefined;
  let currentPhaseIndex = -1;
  let currentUnitIndex = -1;

  for (let i = 0; i < course.phases.length; i++) {
    const unitIndex = course.phases[i].units.findIndex(u => u.id === unitId);
    if (unitIndex !== -1) {
      currentUnit = course.phases[i].units[unitIndex];
      currentPhaseIndex = i;
      currentUnitIndex = unitIndex;
      break;
    }
  }

  if (!currentUnit) {
    return <div>Unit not found</div>;
  }

  const currentPhase = course.phases[currentPhaseIndex];
  const nextUnit = currentPhase.units[currentUnitIndex + 1] || 
    (course.phases[currentPhaseIndex + 1]?.units[0]);

  const hasQuiz = currentUnit.quiz && currentUnit.quiz.questions.length > 0;
  const rewardAmount = 0.1; // $0.10 reward per completed unit

  // Check if unit is already completed
  useEffect(() => {
    const checkProgress = async () => {
      try {
        const response = await fetch(`/api/progress/${userId}/${unitId}`);
        if (response.ok) {
          const data = await response.json();
          setUnitProgress(data);
        }
      } catch (error) {
        console.error('Error checking progress:', error);
      }
    };

    checkProgress();
  }, [userId, unitId]);

  const handleQuizComplete = async (allCorrect: boolean) => {
    if (!allCorrect) return;

    setQuizCompleted(true);
    setIsLoading(true);

    try {
      // Check if already completed
      const progressResponse = await fetch(`/api/progress/${userId}/${unitId}`);
      const progressData = await progressResponse.json();
      
      if (progressData && progressData.completed) {
        setAlreadyClaimed(true);
        setShowRewardDialog(true);
        setIsLoading(false);
        return;
      }

      // Mark as completed
      await fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          courseSlug,
          unitId
        })
      });

      // Check if reward already claimed
      const rewardResponse = await fetch(`/api/rewards/${userId}/${unitId}`);
      const rewardData = await rewardResponse.json();

      if (rewardData && rewardData.claimed) {
        setAlreadyClaimed(true);
      }

      setShowRewardDialog(true);
    } catch (error) {
      console.error('Error completing quiz:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClaimReward = async () => {
    if (alreadyClaimed) return;

    setIsLoading(true);
    try {
      await fetch('/api/rewards/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          unitId,
          amount: rewardAmount
        })
      });
      
      setAlreadyClaimed(true);
    } catch (error) {
      console.error('Error claiming reward:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextUnit = () => {
    if (nextUnit) {
      router.push(`/course/${courseSlug}/unit/${nextUnit.id}`);
    }
  };

  const isCompleted = unitProgress?.completed || currentUnit.isCompleted;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="flex-none border-b border-border bg-background sticky top-0 z-10">
        <div className="container max-sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href={`/course/${courseSlug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Course
            </Link>
            
            {isCompleted && (
              <div className="flex items-center gap-1 text-sm text-primary">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">Completed</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Split Layout: Content + Quiz */}
      {hasQuiz ? (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_500px]">
          {/* Left: Content */}
          <div className="overflow-y-auto p-6 sm:p-8 lg:border-r border-border">
            <div className="max-w-3xl">
              <div className="text-sm text-muted-foreground mb-2">
                Phase {currentPhase.number} • Unit {currentUnit.number} • {currentUnit.duration}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{currentUnit.title}</h1>
              <UnitContent content={currentUnit.content} />
            </div>
          </div>

          {/* Right: Quiz */}
          <div className="overflow-y-auto p-6 sm:p-8 bg-muted/30">
            <QuizPanel 
              questions={currentUnit.quiz.questions}
              onComplete={handleQuizComplete}
              isCompleted={isCompleted}
            />
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-sm text-muted-foreground mb-2">
              Phase {currentPhase.number} • Unit {currentUnit.number} • {currentUnit.duration}
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">{currentUnit.title}</h1>
            <UnitContent content={currentUnit.content} />
          </div>
        </div>
      )}

      {/* Reward Dialog */}
      <RewardDialog
        isOpen={showRewardDialog}
        onClose={() => {
          if (!alreadyClaimed) {
            handleClaimReward();
          }
          setShowRewardDialog(false);
        }}
        rewardAmount={rewardAmount}
        onNextUnit={handleNextUnit}
        hasNextUnit={!!nextUnit}
        alreadyClaimed={alreadyClaimed}
      />
    </div>
  );
}