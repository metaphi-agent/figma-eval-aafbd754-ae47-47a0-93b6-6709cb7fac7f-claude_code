import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  bgColor: string;
}

export default function ProductCard({ image, title, subtitle, bgColor }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div
        className="relative overflow-hidden rounded-lg aspect-[3/4]"
        style={{ backgroundColor: bgColor }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <ArrowRight className="w-5 h-5 mt-1 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}