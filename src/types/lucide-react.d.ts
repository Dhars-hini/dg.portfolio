// Type shim for lucide-react@0.460.0 which ships CJS without a .d.ts file.
// Replace with a proper upgrade (npm install lucide-react@latest) when possible.

declare module "lucide-react" {
  import type { FC, SVGProps } from "react";

  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    strokeWidth?: number | string;
    absoluteStrokeWidth?: boolean;
    color?: string;
    className?: string;
  }

  export type LucideIcon = FC<LucideProps>;

  // Export every icon used in this project
  export const ArrowDown: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const Award: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Briefcase: LucideIcon;
  export const Building2: LucideIcon;
  export const Calendar: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const Cloud: LucideIcon;
  export const Code2: LucideIcon;
  export const Copy: LucideIcon;
  export const Database: LucideIcon;
  export const Download: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Github: LucideIcon;
  export const GraduationCap: LucideIcon;
  export const Heart: LucideIcon;
  export const ImageIcon: LucideIcon;
  export const LayoutGrid: LucideIcon;
  export const Lightbulb: LucideIcon;
  export const Linkedin: LucideIcon;
  export const Loader2: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Menu: LucideIcon;
  export const Moon: LucideIcon;
  export const Phone: LucideIcon;
  export const Plus: LucideIcon;
  export const ServerCog: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Sun: LucideIcon;
  export const Trophy: LucideIcon;
  export const Wrench: LucideIcon;
  export const X: LucideIcon;
}
