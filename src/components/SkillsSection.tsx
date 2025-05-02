import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface SkillsSectionProps {
  skills: string[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills.length) return null;

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-xl font-bold">Skills</CardTitle>
          <p className="text-sm text-gray-500">Take an assessment to showcase your skills</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs rounded-full border-gray-300"
          >
            Skill Quiz
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
          >
            <PencilIcon className="h-5 w-5 text-gray-700" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="bg-blue-50 px-3 py-1 rounded-full border-gray-300 text-gray-700 hover:bg-blue-100"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <Button
          variant="ghost"
          className="mt-4 pl-0 text-blue-600 hover:text-blue-800 hover:bg-transparent"
        >
          <span className="text-sm">Show all 32 skills</span>
        </Button>
      </CardContent>
    </Card>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}
