import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface Highlight {
  title: string;
  description: string;
  icon?: string;
}

interface HighlightsSectionProps {
  highlights: Highlight[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  if (!highlights.length) return null;

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Highlights</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {highlights.map((highlight, index) => (
          <div key={highlight.title + index} className="flex gap-3">
            <div className="flex-shrink-0 text-3xl">{highlight.icon || "📋"}</div>
            <div>
              <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
              <p className="text-gray-700">{highlight.description}</p>
              <Button
                variant="ghost"
                className="px-0 text-blue-600 hover:text-blue-800 hover:bg-transparent"
              >
                <span className="text-sm">Message</span>
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
