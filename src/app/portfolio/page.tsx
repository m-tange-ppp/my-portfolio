import ProjectCard from "./components/ProjectCard";

export const metadata = {
  title: "ポートフォリオ | m-tange-ppp",
  description:
    "テトリス、ブログ、サイコロアプリなど、m-tange-pppの制作物をご紹介します。",
};

const projects = [
  {
    title: "Tetris",
    description:
      "Reactで作ったテトリスです。スコア機能はFirebaseと連携しています。",
    imageUrl: "/screenshot_tetris.png",
    projectUrl: "https://next-tetris-six.vercel.app/",
    technologies: ["React", "Firebase"],
  },
  {
    title: "MaShare",
    description:
      "Reactで作った数式を画像として出力するアプリです。Xなどで数式を共有したいときにどうぞ。",
    imageUrl: "/screenshot_math.png",
    projectUrl: "https://mashare.vercel.app/",
    technologies: ["React", "KaTeX"],
  },
  {
    title: "Blog",
    description:
      "Next.jsで作った簡易ブログです。DBと認証はSupabaseと連携しています。",
    imageUrl: "/screenshot_blog.png",
    projectUrl: "https://next-blog-epqp.vercel.app/",
    technologies: ["Next.js", "Prisma", "Supabase"],
  },
  {
    title: "Dice",
    description:
      "Reactで作ったサイコロです。たくさんサイコロが欲しいときにどうぞ。",
    imageUrl: "/screenshot_dice.png",
    projectUrl: "https://m-tange-ppp.github.io/react-random-app/",
    technologies: ["React"],
  },
];

function Portfolio() {
  return (
    <div className="flex flex-col items-center gap-8 mx-4">
      <div className="grid gap-6 mx-auto w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
