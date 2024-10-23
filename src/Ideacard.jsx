import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ThumbsUp, ThumbsDown } from 'lucide-react';

const Ideacard = ({ idea, onApprove, onReject, showActions = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl border border-white/10 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{idea.text}</h3>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400 font-semibold">4.2</span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </div>
        </div>
        <p className="text-gray-300">{idea.description}</p>
        <div className="mt-4">
          <div className="text-sm text-gray-400">
            Success Rate
            <div className="mt-2 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
                style={{ width: '78%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {showActions && (
        <div className="px-6 py-4 bg-black/20 border-t border-white/10 flex justify-between items-center">
          <button
            onClick={onReject}
            className="p-2 rounded-full hover:bg-red-500/20 transition-colors group"
          >
            <ThumbsDown className="w-5 h-5 text-red-400 group-hover:text-red-300" />
          </button>
          <button
            onClick={onApprove}
            className="p-2 rounded-full hover:bg-green-500/20 transition-colors group"
          >
            <ThumbsUp className="w-5 h-5 text-green-400 group-hover:text-green-300" />
          </button>
        </div>
      )}
    </motion.div>
  );
};

const IdeaCarousel = ({ ideas, onApprove, onReject, currentIndex }) => {
  return (
    <div className="relative py-8">
      <AnimatePresence mode="wait">
        {ideas.length > 0 && (
          <div className="flex justify-center">
            <Ideacard
              key={ideas[currentIndex].id}
              idea={ideas[currentIndex]}
              onApprove={onApprove}
              onReject={onReject}
            />
          </div>
        )}
      </AnimatePresence>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 py-4">
        {ideas.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const ApprovedIdeasGrid = ({ ideas }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {ideas.map((idea) => (
        <Ideacard
          key={idea.id}
          idea={idea}
          showActions={false}
        />
      ))}
    </motion.div>
  );
};

export { Ideacard, IdeaCarousel, ApprovedIdeasGrid };