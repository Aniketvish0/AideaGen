import React, { useState } from 'react';
import { Link2, FileText, Loader2, ChevronRight } from 'lucide-react';
import { IdeaCarousel, ApprovedIdeasGrid } from './Ideacard';

const TranscriptAnalyzer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [businessIdeas, setBusinessIdeas] = useState([]);
  const [approvedIdeas, setApprovedIdeas] = useState([]);
  const [currentStep, setCurrentStep] = useState('input');
  const [activeTab, setActiveTab] = useState('video');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const mockIdeas = [
        { id: 1, text: "Podcast summarization service", description: "Create an AI-powered tool that generates key insights and action items from business podcasts." },
        { id: 2, text: "Social media content calendar", description: "Develop a platform that extracts topics from podcasts and creates a month's worth of social media content." },
        { id: 3, text: "Expert network marketplace", description: "Build a platform connecting podcast guests with businesses seeking consultancy services." }
      ];
      setBusinessIdeas(mockIdeas);
      setCurrentStep('reviewing');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIdeaResponse = (isApproved) => {
    const currentIdea = businessIdeas[currentIndex];
    
    if (isApproved) {
      setApprovedIdeas(prev => [...prev, currentIdea]);
    }
    
    if (currentIndex === businessIdeas.length - 1) {
      setCurrentStep('complete');
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#111827] to-gray-900 p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Business Idea Generator
        </h1>
        
        {currentStep === 'input' && (
          <div className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/10">
            <div className="grid grid-cols-2 p-1 gap-1">
              <button
                onClick={() => setActiveTab('video')}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'video' 
                    ? 'bg-white/10 text-blue-400' 
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <Link2 className="w-4 h-4" />
                Video URL
              </button>
              <button
                onClick={() => setActiveTab('transcript')}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'transcript' 
                    ? 'bg-white/10 text-blue-400' 
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <FileText className="w-4 h-4" />
                Direct Transcript
              </button>
            </div>
            
            <div className="p-6">
              <form onSubmit={handleVideoSubmit} className="space-y-4">
                {activeTab === 'video' ? (
                  <input
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="Paste YouTube video URL here"
                    className="w-full p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                ) : (
                  <textarea
                    value={transcript}
                    onChange={(e) => setTranscript(e.target.value)}
                    placeholder="Paste transcript text here"
                    className="w-full h-40 p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  Generate Ideas
                </button>
              </form>
            </div>
          </div>
        )}
        
        {currentStep === 'reviewing' && (
          <IdeaCarousel
            ideas={businessIdeas}
            currentIndex={currentIndex}
            onApprove={() => handleIdeaResponse(true)}
            onReject={() => handleIdeaResponse(false)}
          />
        )}
        
        {currentStep === 'complete' && (
          <div className="space-y-6">
            <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-lg">
              <h3 className="font-semibold text-green-400">Saved Ideas</h3>
              <p className="text-gray-300">Here are the business ideas you've approved.</p>
            </div>
            <ApprovedIdeasGrid ideas={approvedIdeas} />
          </div>
        )}
      </div>
    </div>
  );
};
export default TranscriptAnalyzer;