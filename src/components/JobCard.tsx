interface JobCardProps {
  title: string;
  link: string;
  company?: string;
}

export function JobCard({ title, link, company }: JobCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-gray-200 rounded-lg p-3 mb-3 hover:shadow transition bg-white"
    >
      <div className="font-medium text-gray-900 text-sm">{title}</div>
      {company && <div className="text-xs text-gray-500 mt-0.5">{company}</div>}
    </a>
  );
} 