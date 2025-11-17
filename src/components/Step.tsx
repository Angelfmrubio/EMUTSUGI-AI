
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface StepProps {
  isActive: boolean;
  onNext: () => void;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const Step = ({ isActive, onNext, children, title, description }: StepProps) => {
  if (!isActive) return null;
  
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-neutral-800">{title}</h2>
        {description && <p className="text-sm text-neutral-600">{description}</p>}
      </div>
      {children}
      <Button onClick={onNext} className="w-full mt-4 bg-gold-500 hover:bg-gold-600 text-white">
        <ArrowRight className="w-4 h-4 mr-2" />
        Siguiente paso
      </Button>
    </section>
  );
};
