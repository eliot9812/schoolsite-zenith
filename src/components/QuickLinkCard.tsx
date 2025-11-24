import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuickLinkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const QuickLinkCard = ({
  title,
  description,
  icon: Icon,
  href,
}: QuickLinkCardProps) => {
  return (
    <Link to={href}>
      <Card className="card-hover h-full group cursor-pointer">
        <CardContent className="p-6 text-center space-y-4">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
            <Icon className="w-8 h-8 text-accent group-hover:text-accent-foreground" />
          </div>
          <h3 className="text-xl font-display font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
