import Link from "next/link";
import Image from "next/image";

function Portfolio() {
  return (
    <div className="flex flex-col items-center gap-16 mx-4">
      <div className="p-4 rounded-lg shadow-lg shadow-slate-400">
        <h2 className="text-2xl">Tetris</h2>
        <Link href="https://next-tetris-six.vercel.app/" target="blank">
          <Image
            src="/screenshot_tetris.png"
            width={500}
            height={500}
            alt="Screenshot Tetris"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            priority
            className="hover:opacity-90"
          />
          <p className="hover:opacity-90 text-end text-sm">
            https://next-tetris-six.vercel.app/
          </p>
        </Link>
        <p>Reactで作ったテトリスです。hooksを使いこなしたかった。</p>
      </div>

      <div className="p-4 rounded-lg shadow-lg shadow-slate-400">
        <h2 className="text-2xl">Blog</h2>
        <Link href="https://next-blog-epqp.vercel.app/" target="blank">
          <Image
            src="/screenshot_blog.png"
            width={500}
            height={500}
            alt="Screenshot Blog"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="hover:opacity-90"
          />
          <p className="hover:opacity-90 text-end text-sm">
            https://next-tetris-six.vercel.app/
          </p>
        </Link>
        <p>
          Next.jsで作った簡易ブログです。DBはPrismaでSupabaseと連携しています。
        </p>
      </div>

      <div className="p-4 rounded-lg shadow-lg shadow-slate-400">
        <h2 className="text-2xl">Dice</h2>
        <Link
          href="https://m-tange-ppp.github.io/react-random-app/"
          target="blank"
        >
          <Image
            src="/screenshot_dice.png"
            width={500}
            height={500}
            alt="Screenshot Dice"
            style={{
              width: "100%",
              height: "auto",
            }}
            className="hover:opacity-90"
          />
          <p className="hover:opacity-90 text-end text-sm">
            https://m-tange-ppp.github.io/react-random-app/
          </p>
        </Link>
        <p>Reactで作ったサイコロです。たくさんサイコロが欲しいときに。</p>
      </div>
    </div>
  );
}

export default Portfolio;
