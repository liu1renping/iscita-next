import { COMPANY_SHORTNAME } from "@/lib/constants";

export const metadata = {
  title: "Past ISCIT Conferences",
  description: `Explore the history of past ISCIT conferences organized by ${COMPANY_SHORTNAME}`,
  alternates: {
    canonical: "/past-iscit",
  },
};

export default function PastIscitPage() {
  const pastISCITs = [
    {
      code: "ISCIT2001",
      description:
        "1st International Symposium on Communications and Information Technologies, Chiang Mai, Thailand",
    },
    {
      code: "ISCIT2002",
      description:
        "2nd International Symposium on Communications and Information Technologies, Pattaya, Thailand",
    },
    {
      code: "ISCIT2003",
      description:
        "3rd International Symposium on Communications and Information Technologies, Songkhla, Thailand",
    },
    {
      code: "ISCIT2004",
      description:
        "4th International Symposium on Communications and Information Technologies, Sapporo, Japan",
    },
    {
      code: "ISCIT2005",
      description:
        "5th International Symposium on Communications and Information Technologies, Beijing, China",
    },
    {
      code: "ISCIT2006",
      description:
        "6th International Symposium on Communications and Information Technologies, Bangkok, Thailand",
    },
    {
      code: "ISCIT2007",
      description:
        "7th International Symposium on Communications and Information Technologies, Sydney, Australia",
    },
    {
      code: "ISCIT2008",
      description:
        "8th International Symposium on Communications and Information Technologies, Vientiane, Laos",
    },
    {
      code: "ISCIT2009",
      description:
        "9th International Symposium on Communications and Information Technologies, Incheon, Korea",
    },
    {
      code: "ISCIT2010",
      description:
        "10th International Symposium on Communications and Information Technologies, Tokyo, Japan",
    },
    {
      code: "ISCIT2011",
      description:
        "11th International Symposium on Communications and Information Technologies, Hangzhou, China",
    },
    {
      code: "ISCIT2012",
      description:
        "12th International Symposium on Communications and Information Technologies, Gold Coast, Australia",
    },
    {
      code: "ISCIT2013",
      description:
        "13th International Symposium on Communications and Information Technologies, Koh Samui, Thailand",
    },
    {
      code: "ISCIT2014",
      description:
        "14th International Symposium on Communications and Information Technologies, Incheon, Korea",
    },
    {
      code: "ISCIT2015",
      description:
        "15th International Symposium on Communications and Information Technologies, Nara, Japan",
    },
    {
      code: "ISCIT2016",
      description:
        "16th International Symposium on Communications and Information Technologies, Qingdao, China",
    },
    {
      code: "ISCIT2017",
      description:
        "17th International Symposium on Communications and Information Technologies, Cairns, Australia",
    },
    {
      code: "ISCIT2018",
      description:
        "18th International Symposium on Communications and Information Technologies, Pattaya, Thailand",
    },
    {
      code: "ISCIT2019",
      description:
        "19th International Symposium on Communications and Information Technologies, Ho Chi Minh City, Vietnam",
    },
    {
      code: "ISCIT2021",
      description:
        "20th International Symposium on Communications and Information Technologies, Tottori, Japan",
    },
    {
      code: "ISCIT2022",
      description:
        "21st International Symposium on Communications and Information Technologies, Xi'an, China",
    },
    {
      code: "ISCIT2023",
      description:
        "22nd International Symposium on Communications and Information Technologies, Sydney, Australia",
    },
    {
      code: "ISCIT2024",
      description:
        "23rd International Symposium on Communications and Information Technologies, Bangkok, Thailand",
    },
    {
      code: "ISCIT2025",
      description:
        "24th International Symposium on Communications and Information Technologies, Hanoi, Vietnam",
    },
  ];

  const sortedPastISCITs = pastISCITs.sort((a, b) => (a.code < b.code ? 1 : -1));

  return (
    <main className="main-page">
      <h1 className="page-title">Past ISCIT Conferences</h1>
      <section className="section">
        <p className="text-lg md:text-xl">
          <b>{COMPANY_SHORTNAME}</b>&apos;s home conference is ISCIT (International Symposium on
          Communications and Information Technologies), which started from 2001 in Thailand. Here is
          a comprehensive list of past ISCIT conferences held around the world:
        </p>
      </section>

      <section className="section-content">
        <table className="w-full table-auto border-collapse">
          <tbody>
            {sortedPastISCITs.map((event) => (
              <tr key={event.code} className="table-row">
                <td className="px-4 py-2 font-sans align-top font-bold">{event.code}</td>
                <td className="px-4 py-2 font-sans">{event.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
