import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "ポートフォリオ | m-tange-ppp",
  description:
    "テトリス、ブログ、サイコロアプリなど、m-tange-pppの制作物をご紹介します。",
};

function Portfolio() {
  return (
    <div className="flex flex-col items-center gap-8 mx-4">
      <div className="grid gap-6 mx-auto w-full">
        <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ">
          <div className="relative h-[280px] w-full overflow-hidden">
            <Link
              href="https://next-tetris-six.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full"
            >
              <Image
                src="/screenshot_tetris.png"
                fill
                alt="Screenshot Tetris"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
            </Link>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Tetris</h2>
              <Link
                href="https://next-tetris-six.vercel.app/"
                target="_blank"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                サイトを見る →
              </Link>
            </div>

            <p className="text-gray-600">
              Reactで作ったテトリスです。スコア機能はFirebaseと連携しています。
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                React
              </span>
              <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                Firebase
              </span>
            </div>
          </div>
        </article>

        <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative h-[280px] w-full overflow-hidden">
            <Link
              href="https://next-blog-epqp.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full"
            >
              <Image
                src="/screenshot_blog.png"
                fill
                alt="Screenshot Blog"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
            </Link>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Blog</h2>
              <Link
                href="https://next-blog-epqp.vercel.app/"
                target="_blank"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                サイトを見る →
              </Link>
            </div>

            <p className="text-gray-600">
              Next.jsで作った簡易ブログです。DBと認証はSupabaseと連携しています。
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                Prisma
              </span>
              <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                Supabase
              </span>
            </div>
          </div>
        </article>

        <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative h-[280px] w-full">
            <Link
              href="https://m-tange-ppp.github.io/react-random-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/screenshot_dice.png"
                fill
                alt="Screenshot Dice"
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Dice</h2>
              <Link
                href="https://m-tange-ppp.github.io/react-random-app/"
                target="_blank"
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors"
              >
                サイトを見る →
              </Link>
            </div>

            <p className="text-gray-600">
              Reactで作ったサイコロです。たくさんサイコロが欲しいときにどうぞ。
            </p>

            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 text-sm bg-slate-100 text-slate-700 rounded-full">
                React
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Portfolio;
