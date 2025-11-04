import { MacTerminalWindow } from "./MacTerminalWindow";
import { Award } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export const CertificationCard = ({
  title,
  issuer,
  date,
  description,
  delay = 0,
}) => (
  <ScrollReveal delay={delay}>
    <MacTerminalWindow title={title}>
      <div className="flex items-start space-x-3 mb-3">
        <Award className="text-green-400 mt-1 flex-shrink-0" size={20} />
        <div>
          <p className="text-gray-400 text-sm">
            {issuer} • {date}
          </p>
        </div>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </MacTerminalWindow>
  </ScrollReveal>
);
