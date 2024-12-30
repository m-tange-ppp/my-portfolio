import Link from "next/link";
import React from "react";

type DataType = { key: string; value: string };
type LinkType = { name: string; url: string };

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
      <table className="table-auto w-full shadow-lg shadow-slate-400">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-2">Profile Section</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-white" : "bg-slate-400"}`}
            >
              <td className="p-2">{item.key}</td>
              <td>{item.value}</td>
            </tr>
          ))}
          <tr
            className={`${data.length % 2 === 0 ? "bg-white" : "bg-slate-400"}`}
          >
            <td className="p-2">Links</td>
            <td className="flex">
              {links.map((item, index) => (
                <div key={index} className="flex">
                  <Link
                    href={item.url}
                    target="blank"
                    className="hover:text-slate-600 underline"
                  >
                    {item.name}
                  </Link>
                  {index < links.length - 1 && <p>,&nbsp;</p>}
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About;
