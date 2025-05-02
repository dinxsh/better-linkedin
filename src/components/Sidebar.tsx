"use client";

import { useEffect, useState, useRef } from 'react';
import { mockAi } from '@/data/mockAi';
import { mockProfileFull } from '@/data/mockProfileFull';
import { SidebarSection } from './SidebarSection';
import { JobCard } from './JobCard';
import { generateContent, prompts } from '@/lib/gemini';

const toolboxFeatures = [
  {
    key: 'job-tailoring',
    label: 'AI Job Tailoring',
    desc: 'Customize a selected job description based on your profile. See how a job could be framed to fit you better.',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
  },
  {
    key: 'cover-letter',
    label: 'Cover Letter Generator',
    desc: 'Generate a tailored cover letter for any job posting using your profile and job data.',
    icon: (
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="m7 10 5 3 5-3" /></svg>
    ),
  },
  {
    key: 'learning-path',
    label: 'Learning Path Generator',
    desc: 'Suggests personalized learning paths (e.g., "Data Scientist in 6 months") using course platforms.',
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20V10m0 0-3 3m3-3 3 3" /><rect x="4" y="4" width="16" height="16" rx="2" /></svg>
    ),
  },
  {
    key: 'network-gap',
    label: 'Network Gap Finder',
    desc: 'See which key roles/industries you\'re missing in your network (e.g., "No PMs in your connections").',
    icon: (
      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="7" cy="8" r="4" /><circle cx="17" cy="8" r="4" /><path d="M7 12v6m10-6v6M7 18h10" /></svg>
    ),
  },
  {
    key: 'career-tracker',
    label: 'Career Progress Tracker',
    desc: 'Track progress on goals like "Switch to Product Manager in 6 months" using checkpoints and milestones.',
    icon: (
      <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
    ),
  },
];

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  // AI content state
  const [loaded, setLoaded] = useState(false);
  const [outreach, setOutreach] = useState(mockAi.outreach);
  const [copied, setCopied] = useState(false);
  const [modal, setModal] = useState<string | null>(null);
  const [aiContent, setAiContent] = useState({
    summary: mockAi.summary,
    skill: mockAi.skill,
    jobs: mockAi.jobs
  });
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Load AI content when sidebar opens
  useEffect(() => {
    if (isOpen && !loaded) {
      const loadAiContent = async () => {
        try {
          const [summary, skill] = await Promise.all([
            generateContent(prompts.careerSummary(mockProfileFull)),
            generateContent(prompts.skillSuggestion(mockProfileFull))
          ]);
          
          setAiContent(prev => ({
            ...prev,
            summary: summary || prev.summary,
            skill: skill || prev.skill
          }));
          setLoaded(true);
        } catch (error) {
          console.error('Error loading AI content:', error);
          setLoaded(true);
        }
      };

      loadAiContent();
    }
    if (!isOpen) setLoaded(false);
  }, [isOpen, loaded]);

  // Keyboard accessibility: ESC to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (modal) setModal(null);
        else onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, modal]);

  // Animation classes
  const sidebarClass = `fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#f8fafc] shadow-2xl z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col overflow-y-auto`;

  // Copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(outreach);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  // Quick Actions
  const quickActions = [
    { 
      label: 'Download Resume', 
      icon: ResumeIcon, 
      onClick: () => {
        // Create a dummy PDF file and trigger download
        const link = document.createElement('a');
        link.href = '/resume.pdf'; // You would need to actually have this file in your public folder
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    },
    { 
      label: 'Share Profile', 
      icon: ShareIcon, 
      onClick: () => {
        const profileUrl = 'https://www.linkedin.com/in/dineshtalwadker/';
        navigator.clipboard.writeText(profileUrl);
        alert('Profile link copied to clipboard!');
      }
    },
    { label: 'View on LinkedIn', icon: LinkedInIcon, onClick: () => window.open('https://www.linkedin.com/in/dineshtalwadker/', '_blank') },
  ];

  // Profile Stats (mocked)
  const stats = [
    { label: 'Profile Views', value: 187 },
    { label: 'Search Appearances', value: 42 },
    { label: 'Connections', value: mockProfileFull.connections },
  ];

  // Handle modal content generation
  const handleModalAction = async (type: string, input?: string): Promise<string | null> => {
    try {
      let result;
      switch (type) {
        case 'job-tailoring':
          result = await generateContent(prompts.jobTailoring(mockProfileFull, input || ''));
          break;
        case 'cover-letter':
          result = await generateContent(prompts.coverLetter(mockProfileFull, input || ''));
          break;
        case 'learning-path':
          result = await generateContent(prompts.learningPath(mockProfileFull, input || ''));
          break;
        case 'network-gap':
          result = await generateContent(prompts.networkGap(mockProfileFull));
          break;
        case 'career-tracker':
          result = await generateContent(prompts.careerTracker(mockProfileFull, input || ''));
          break;
      }
      return result || null;
    } catch (error) {
      console.error('Error generating modal content:', error);
      return null;
    }
  };

  return (
    <aside ref={sidebarRef} className={sidebarClass} style={{ boxShadow: 'rgba(0,0,0,0.15) -4px 0px 24px 0px' }}>
      {/* Sticky AI Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-200 flex items-center gap-3 px-6 py-3 shadow-sm">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 border border-blue-200">
          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#0A66C2" /><ellipse cx="16" cy="20" rx="8" ry="5" fill="#fff" /><circle cx="12" cy="15" r="2" fill="#fff" /><circle cx="20" cy="15" r="2" fill="#fff" /><rect x="14" y="10" width="4" height="2" rx="1" fill="#fff" /><rect x="10" y="23" width="12" height="2" rx="1" fill="#fff" /></svg>
        </div>
        <div>
          <div className="font-bold text-lg text-gray-900 leading-tight">AI Career Assistant</div>
          <div className="text-xs text-gray-500">Your LinkedIn Copilot</div>
        </div>
        <button
          aria-label="Close sidebar"
          onClick={onClose}
          className="ml-auto text-gray-500 hover:text-blue-700 bg-gray-100 rounded-full p-2 transition"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="p-6 flex-1 space-y-6">
        {/* Mini Profile Card */}
        <div className="bg-white rounded-xl shadow border border-gray-100 flex flex-col items-center mb-2 py-4 px-4">
          <img src={mockProfileFull.avatarUrl} alt={mockProfileFull.name} className="h-16 w-16 rounded-full border-2 border-blue-200 object-cover mb-2" />
          <div className="font-semibold text-gray-900 text-base text-center">{mockProfileFull.name}</div>
          <div className="text-xs text-gray-500 text-center mb-2">{mockProfileFull.headline}</div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow border border-gray-100 flex justify-center gap-3 py-3 mb-2">
          {quickActions.map((action, i) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className="flex flex-col items-center text-xs text-gray-700 hover:text-blue-700 focus:outline-none transition group"
              title={action.label}
            >
              <span className="mb-1 group-hover:scale-110 transition-transform">{action.icon({ className: 'w-5 h-5' })}</span>
              <span className="font-medium">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Profile Stats */}
        <div className="bg-white rounded-xl shadow border border-gray-100 flex justify-around py-3 mb-2">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-bold text-lg text-blue-700">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* AI Toolbox */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-4">
          <SidebarSection
            title="AI Toolbox"
            content={
              <div className="space-y-3">
                {toolboxFeatures.map(feature => (
                  <button
                    key={feature.key}
                    className="w-full flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-blue-50 focus:ring-2 focus:ring-blue-200 transition text-left"
                    onClick={() => setModal(feature.key)}
                  >
                    {feature.icon}
                    <span className="font-medium text-gray-800 text-[15px]">{feature.label}</span>
                  </button>
                ))}
                {/* Modal for feature details */}
                {modal && (
                  <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
                    onClick={() => setModal(null)}
                  >
                    <div 
                      className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative border border-blue-100"
                      onClick={e => e.stopPropagation()}
                    >
                      <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-blue-700 bg-gray-100 rounded-full p-1"
                        onClick={() => setModal(null)}
                        aria-label="Close"
                      >
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
                      </button>
                      <div className="mb-2 flex items-center gap-2">{toolboxFeatures.find(f => f.key === modal)?.icon}<span className="font-bold text-lg">{toolboxFeatures.find(f => f.key === modal)?.label}</span></div>
                      <div className="text-gray-700 text-[15px] mb-4">{toolboxFeatures.find(f => f.key === modal)?.desc}</div>
                      {/* Interactive UI for each feature */}
                      {modal === 'job-tailoring' && <JobTailoringDemo onGenerate={handleModalAction} />}
                      {modal === 'cover-letter' && <CoverLetterDemo onGenerate={handleModalAction} />}
                      {modal === 'learning-path' && <LearningPathDemo onGenerate={handleModalAction} />}
                      {modal === 'network-gap' && <NetworkGapDemo onGenerate={handleModalAction} />}
                      {modal === 'career-tracker' && <CareerTrackerDemo onGenerate={handleModalAction} />}
                    </div>
                  </div>
                )}
              </div>
            }
          />
        </div>

        {/* AI Sections */}
        <div className="bg-white rounded-xl shadow border border-gray-100 p-4 space-y-6">
          <SidebarSection
            title="AI Career Summary"
            content={loaded ? (
              <p className="text-gray-800 text-[15px] leading-relaxed">{aiContent.summary}</p>
            ) : (
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2" />
            )}
          />
          <SidebarSection
            title="Suggested Next Skill"
            content={loaded ? (
              <span className="inline-block px-3 py-1.5 rounded-full text-[15px] cursor-pointer" title="Learning GraphQL will help you become a full-stack engineer.">{aiContent.skill}</span>
            ) : (
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse mb-2" />
            )}
          />
          <SidebarSection
            title="Outreach Message"
            content={loaded ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <button
                    onClick={handleCopy}
                    className={`px-3 py-1.5 rounded bg-gray-100 text-gray-700 text-[13px] font-medium border border-gray-200 hover:bg-blue-100 focus:ring-2 focus:ring-blue-200 transition ${copied ? 'bg-green-100 text-green-700' : ''}`}
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <textarea
                  className="w-full border border-gray-200 rounded p-2 text-[15px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
                  rows={3}
                  value={outreach}
                  onChange={e => setOutreach(e.target.value)}
                />
              </div>
            ) : (
              <div className="h-16 bg-gray-200 rounded animate-pulse mb-2" />
            )}
          />
          <SidebarSection
            title="Relevant Job Matches"
            content={loaded ? (
              <div>
                {aiContent.jobs.map((job, i) => (
                  <JobCard key={i} title={job.title} link={job.link} />
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="h-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 bg-gray-200 rounded animate-pulse" />
              </div>
            )}
          />
        </div>
      </div>
    </aside>
  );
}

// Icon components for quick actions
function ResumeIcon({ className = '' }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M9 8h6M9 12h6M9 16h2" /></svg>;
}
function ShareIcon({ className = '' }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" /></svg>;
}
function LinkedInIcon({ className = '' }) {
  return <svg className={className} fill="#0A66C2" viewBox="0 0 32 32"><rect fill="#0A66C2" x="0" y="0" width="32" height="32" rx="6"></rect><path d="M9 12h3v10H9zm1.5-2.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14 12h2.8v1.2h.04c.39-.74 1.34-1.52 2.76-1.52C22.42 11.68 23 13.1 23 15.08V22h-3v-6c0-1.43-.02-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V22h-3V12z" fill="#fff"></path></svg>;
}

// Update demo components to use Gemini
function JobTailoringDemo({ onGenerate }: { onGenerate: (type: string, input?: string) => Promise<string | null> }) {
  const [desc, setDesc] = useState('Frontend Developer at Stripe: Build UI components and collaborate with backend.');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await onGenerate('job-tailoring', desc);
    setResult(response || 'Failed to generate tailored job description');
    setLoading(false);
  };

  return (
    <div>
      <textarea className="w-full border rounded p-2 text-[15px] mb-2" rows={2} value={desc} onChange={e => setDesc(e.target.value)} />
      <button 
        className="bg-blue-600 text-white px-3 py-1.5 rounded text-[15px] disabled:opacity-50" 
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Tailoring...' : 'Tailor'}
      </button>
      {result && (
        <textarea
          className="w-full border rounded p-2 text-[15px] mt-2 resize-y overflow-y-auto"
          style={{ minHeight: '60px', maxHeight: '200px' }}
          value={result}
          readOnly
        />
      )}
    </div>
  );
}

function CoverLetterDemo({ onGenerate }: { onGenerate: (type: string, input?: string) => Promise<string | null> }) {
  const [job, setJob] = useState('Frontend Developer at Stripe');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await onGenerate('cover-letter', job);
    setResult(response || 'Failed to generate cover letter');
    setLoading(false);
  };

  return (
    <div>
      <input className="w-full border rounded p-2 text-[15px] mb-2" value={job} onChange={e => setJob(e.target.value)} />
      <button 
        className="bg-green-600 text-white px-3 py-1.5 rounded text-[15px] disabled:opacity-50" 
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {result && (
        <textarea
          className="w-full border rounded p-2 text-[15px] mt-2 resize-y overflow-y-auto"
          style={{ minHeight: '60px', maxHeight: '200px' }}
          value={result}
          readOnly
        />
      )}
    </div>
  );
}

function LearningPathDemo({ onGenerate }: { onGenerate: (type: string, input?: string) => Promise<string | null> }) {
  const [goal, setGoal] = useState('Full Stack Developer');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await onGenerate('learning-path', goal);
    setResult(response || 'Failed to generate learning path');
    setLoading(false);
  };

  return (
    <div>
      <select className="w-full border rounded p-2 text-[15px] mb-2" value={goal} onChange={e => setGoal(e.target.value)}>
        <option>Full Stack Developer</option>
        <option>Data Scientist</option>
        <option>Product Manager</option>
      </select>
      <button 
        className="bg-purple-600 text-white px-3 py-1.5 rounded text-[15px] disabled:opacity-50" 
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Suggest Path'}
      </button>
      {result && (
        <textarea
          className="w-full border rounded p-2 text-[15px] mt-2 resize-y overflow-y-auto"
          style={{ minHeight: '60px', maxHeight: '200px' }}
          value={result}
          readOnly
        />
      )}
    </div>
  );
}

function NetworkGapDemo({ onGenerate }: { onGenerate: (type: string, input?: string) => Promise<string | null> }) {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await onGenerate('network-gap');
    setResult(response || 'Failed to analyze network gaps');
    setLoading(false);
  };

  return (
    <div>
      <button 
        className="bg-orange-600 text-white px-3 py-1.5 rounded text-[15px] mb-2 disabled:opacity-50" 
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Analyzing...' : 'Analyze Network'}
      </button>
      {result && (
        <textarea
          className="w-full border rounded p-2 text-[15px] mt-2 resize-y overflow-y-auto"
          style={{ minHeight: '60px', maxHeight: '200px' }}
          value={result}
          readOnly
        />
      )}
    </div>
  );
}

function CareerTrackerDemo({ onGenerate }: { onGenerate: (type: string, input?: string) => Promise<string | null> }) {
  const [goal, setGoal] = useState('Switch to Product Manager');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const response = await onGenerate('career-tracker', goal);
    setResult(response || 'Failed to generate career plan');
    setLoading(false);
  };

  return (
    <div>
      <input className="w-full border rounded p-2 text-[15px] mb-2" value={goal} onChange={e => setGoal(e.target.value)} />
      <button 
        className="bg-pink-600 text-white px-3 py-1.5 rounded text-[15px] disabled:opacity-50" 
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Track'}
      </button>
      {result && (
        <textarea
          className="w-full border rounded p-2 text-[15px] mt-2 resize-y overflow-y-auto"
          style={{ minHeight: '60px', maxHeight: '200px' }}
          value={result}
          readOnly
        />
      )}
    </div>
  );
} 