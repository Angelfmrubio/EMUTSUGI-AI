
interface QuoteProps {
  text: string;
  author: string;
  className?: string;
}

export const Quote = ({ text, author, className = "" }: QuoteProps) => {
  return (
    <blockquote className={`p-6 border-l-4 border-gold-500 bg-white rounded-r-lg ${className}`}>
      <p className="text-lg italic text-neutral-700 mb-2">{text}</p>
      <footer className="text-sm text-neutral-500">— {author}</footer>
    </blockquote>
  );
};
