import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/haikelz/repos`);
    const data = await response.json();

    return {
      props: {
        repos: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export type repositories = {
  repos: any;
};

const Repositories = ({ repos }: repositories) => {
  return (
    <>
      <Head>
        <title>Repositories</title>
      </Head>
      <section className="flex bg-yellow-50 flex-col p-8 items-center justify-center">
        <h1 className="text-5xl font-bold">Repositories</h1>
        <div className="grid grid-cols-1 mt-6 md:grid-cols-2 lg:grid-cols-3 gap-7 grid-rows-1">
          {repos.map((repo: any, index: number) => (
            <Link href={repo.html_url} passHref key={index + 1}>
              <div className="bg-white cursor-pointer border-2 border-black rounded-md shadow-md p-4 py-2">
                <h1 className="font-bold text-xl">{repo.name}</h1>
                <p className="mt-2">{repo.description}</p>
                <div className="flex justify-end mt-4">
                  <p className="font-semibold p-2 bg-gradient-to-br rounded-sm from-cyan-500  to-blue-500">
                    {repo.language}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Repositories;
