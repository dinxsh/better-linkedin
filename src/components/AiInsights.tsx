import { useState } from 'react';
import { getAiSummary, getAiSkill, getAiOutreach, getAiJobs } from '@/utils/ai';

export const AiInsights = () => {
  const [summary, setSummary] = useState<string>('');
  const [skill, setSkill] = useState<string>('');
  const [outreach, setOutreach] = useState<string>('');
  const [jobs, setJobs] = useState<{ title: string; link: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const generateInsights = async () => {
    setLoading(true);
    try {
      const [summaryData, skillData, outreachData, jobsData] = await Promise.all([
        getAiSummary(),
        getAiSkill(),
        getAiOutreach(),
        getAiJobs()
      ]);
      
      setSummary(summaryData);
      setSkill(skillData);
      setOutreach(outreachData);
      setJobs(jobsData);
    } catch (error) {
      console.error('Error generating insights:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">AI Insights</h2>
      
      <button
        onClick={generateInsights}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 mb-6"
      >
        {loading ? 'Generating...' : 'Generate Insights'}
      </button>

      {summary && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Profile Summary</h3>
            <p className="text-gray-700">{summary}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Skill Recommendation</h3>
            <p className="text-gray-700">{skill}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Outreach Message</h3>
            <p className="text-gray-700">{outreach}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Recommended Jobs</h3>
            <ul className="space-y-2">
              {jobs.map((job, index) => (
                <li key={index}>
                  <a href={job.link} className="text-blue-500 hover:underline">
                    {job.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}; 