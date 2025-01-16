export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6">
        m-tange-ppp&apos;s Portfolio
      </h1>

      <p className="text-xl text-gray-600 mb-8 max-w-2xl">
        主にWeb開発について学んでいます。
      </p>

      <div className="flex gap-4">
        <a
          href="/about"
          className="px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
        >
          プロフィール
        </a>
        <a
          href="/portfolio"
          className="px-6 py-3 bg-white text-slate-800 rounded-full border-2 border-slate-800 hover:bg-slate-50 transition-colors"
        >
          作品を見る
        </a>
      </div>
    </div>
  );
}
