import { Calendar, Pin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface NoticeCardProps {
  title: string;
  date: string;
  content: string;
  isPinned?: boolean;
  category?: string;
}

export const NoticeCard = ({
  title,
  date,
  content,
  isPinned = false,
  category = "General",
}: NoticeCardProps) => {
  return (
    <Card className="card-hover border-l-4 border-l-accent">
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-display flex items-center gap-2">
            {isPinned && <Pin className="w-5 h-5 text-accent fill-accent" />}
            {title}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="w-4 h-4 mr-2" />
          {date}
        </div>
        <p className="text-foreground/80 line-clamp-3">{content}</p>
        <button className="text-primary hover:text-primary-light font-medium text-sm transition-colors duration-300">
          Read more →
        </button>
      </CardContent>
    </Card>
  );
};
