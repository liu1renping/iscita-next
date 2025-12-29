import { COMPANY_SHORTNAME } from "@/lib/constants";

export default function AboutUs() {
  const hostedConfs = [
    {
      shortName: "SINCONF2024",
      confName:
        "17th International Conference on Security of Information and Networks, Sydney, Australia",
    },
    {
      shortName: "IFEEC2023  	",
      confName: "IEEE International Future Energy Electronics Conference, Sydney, Australia",
    },
    {
      shortName: "ISCIT2023  	",
      confName:
        "22nd International Symposium on Communications and Information Technologies, Sydney, Australia",
    },
    {
      shortName: "ISAP2022",
      confName: "International Symposium on Antennas and Propagation, Sydney, Australia",
    },
    {
      shortName: "ISMICT2018",
      confName:
        "International Symposium on Medical Information and Communication Technology, Sydney, Australia",
    },
    {
      shortName: "ISCIT2017",
      confName:
        "16th International Symposium on Communications and Information Technologies, Cairns, Australia",
    },
    {
      shortName: "ISAP2015",
      confName: "The International Symposium on Antennas and Propagation, Hobart, Australia",
    },
    {
      shortName: "WPMC2014",
      confName:
        "17th International Symposium on Wireless Personal Multimedia Communication, Sydney, Australia",
    },
    {
      shortName: "IWAT2014",
      confName: "10th International Workshop on Antenna Technology, Sydney, Australia",
    },
    {
      shortName: "ISCIT2012",
      confName:
        "11th International Symposium on Communications and Information Technologies, Gold Coast, Australia",
    },
  ];

  return (
    <>
      <section className="section">
        <p className="text-lg sm:text-xl">
          <b>{COMPANY_SHORTNAME}</b> is a not-for-profit association formed in 2011. Registered in
          New South Wales, {COMPANY_SHORTNAME} acts as a financial and contracting entity for
          international Engineering and Science conferences in Australia.
        </p>
        <p className="text-lg sm:text-xl">
          Our mission is to support the engineering and scientific community by organizing
          high-quality conferences that foster knowledge exchange and professional development. To
          date {COMPANY_SHORTNAME} has run the following conferences in Australia with endorsement
          from societies including IEEE, IEAust, IEICE:
        </p>
      </section>

      <section className="section-content">
        <table className="w-full table-auto border-collapse">
          <tbody>
            {hostedConfs.map((conf) => (
              <tr
                key={conf.shortName}
                className="table-row"
                // className="odd:bg-teal-100 even:bg-white dark:odd:bg-teal-900/40 dark:even:bg-slate-800/40"
              >
                <td className="p-2 font-sans align-top font-bold">{conf.shortName}</td>
                <td className="p-2 font-sans">{conf.confName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
