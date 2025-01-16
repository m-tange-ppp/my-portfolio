import Link from "next/link";
import React from "react";

type DataType = { key: string; value: string };
type LinkType = { name: string; url: string };

export const metadata = {
  title: "プロフィール | m-tange-ppp",
  description:
    "m-tange-pppのプロフィール、スキル、趣味、各種SNSリンクをご紹介します。",
};

function About() {
  const data: DataType[] = [
    { key: "Name", value: "m-tange-ppp" },
    { key: "Location", value: "Hiroshima" },
    { key: "Skills", value: "React, Next.js, Python, Java" },
    { key: "Hobbies", value: "Mathematics, Programing, Gaming" },
  ];

  const links: LinkType[] = [
    { name: "Github", url: "https://github.com/m-tange-ppp" },
    { name: "X", url: "https://x.com/perieeeeeeeee" },
    { name: "Qiita", url: "https://qiita.com/m-tange-ppp" },
    { name: "atcoder", url: "https://atcoder.jp/users/MiTange" },
  ];

  return (
    <div className="mx-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col sm:flex-row border-b border-gray-100 hover:bg-slate-50 transition-colors"
          >
            <div className="w-full sm:w-1/3 p-4 sm:p-6 bg-slate-50 text-gray-600 font-medium">
              {item.key}
            </div>
            <div className="w-full sm:w-2/3 p-4 sm:p-6 text-gray-800">
              {item.value}
            </div>
          </div>
        ))}

        <div className="group flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 p-4 sm:p-6 bg-slate-50 text-gray-600 font-medium">
            Links
          </div>
          <div className="w-full sm:w-2/3 p-4 sm:p-6">
            <div className="flex flex-wrap gap-3">
              {links.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
