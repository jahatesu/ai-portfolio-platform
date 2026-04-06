interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        className="text-blue-600 font-semibold hover:underline"
      >
        View Project
      </a>
    </div>
  );
}
