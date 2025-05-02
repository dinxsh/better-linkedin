import { ProfileData } from '../data/mockProfile';

interface ProfileProps {
  data: ProfileData;
}

export const Profile = ({ data }: ProfileProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-gray-600 mb-4">{data.title}</p>
      <p className="text-gray-500 mb-6">{data.location}</p>
      
      <h3 className="text-lg font-semibold mb-4">Experience</h3>
      <div className="space-y-4">
        {data.experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-500 pl-4">
            <p className="font-medium">{exp.role}</p>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 