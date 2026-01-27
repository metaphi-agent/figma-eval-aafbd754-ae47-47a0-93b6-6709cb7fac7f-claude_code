import { ArrowRight } from 'lucide-react';

interface PromoCardProps {
  image: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

export default function PromoCard({ image, title, subtitle, bgColor }: PromoCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-lg aspect-[4/3] group cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white p-6 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-xl mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}