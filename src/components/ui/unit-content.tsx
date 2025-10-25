"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';

interface UnitContentProps {
  content: string;
}

export const UnitContent = ({ content }: UnitContentProps) => {
  // Remove the first H1 from content since we show it in the page header
  const processedContent = content.replace(/^#\s+.*\n\n?/, '');

  return (
    <div className="prose prose-slate max-w-none">
      <ReactMarkdown
        components={{
          h1: ({children}) => <h1 className="text-2xl font-bold text-foreground mb-4 mt-6 first:mt-0">{children}</h1>,
          h2: ({children}) => <h2 className="text-xl font-bold text-foreground mt-6 mb-3">{children}</h2>,
          h3: ({children}) => <h3 className="text-lg font-bold text-foreground mt-4 mb-2">{children}</h3>,
          p: ({children}) => <p className="text-foreground mb-4 leading-relaxed">{children}</p>,
          ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>,
          li: ({children}) => <li className="text-foreground">{children}</li>,
          strong: ({children}) => <strong className="font-bold text-foreground">{children}</strong>,
          code: ({children, className}) => {
            const isBlock = className?.includes('language-');
            if (isBlock) {
              return (
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4">
                  <code className="text-sm text-foreground font-mono">{children}</code>
                </pre>
              );
            }
            return <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground font-mono">{children}</code>;
          },
          blockquote: ({children}) => (
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
};