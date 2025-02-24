import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  technologies: string[];
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  technologies,
}: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative h-[280px] w-full overflow-hidden">
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative w-full h-full"
        >
          <Image
            src={imageUrl}
            fill
            alt={`Screenshot ${title}`}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
        </Link>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <Link
            href={projectUrl}
            target="_blank"
            className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            サイトを見る →
          </Link>
        </div>

        <p className="text-gray-600">{description}</p>

        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
