import { FiTwitter, FiUserCheck } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/haikelz`);
    const data = await response.json();

    return {
      props: {
        github: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export type data = {
  github: any;
  user: any;
  index: number;
};

const Home = ({ github }: data) => {
  return (
    <>
      <Head>
        <title>Haikel's Github Card</title>
      </Head>
      <section className="flex bg-yellow-50 flex-col p-8 items-center h-screen justify-center">
        <div className="flex flex-col p-4 sm:p-0 sm:flex-row drop-shadow-lg overflow-hidden justify-center items-center">
          <Link href="/about-me" passHref>
            <div className="bg-white border-2 rounded-full flex justify-center items-center p-1 drop-shadow-sm">
              <Image
                className="duration-300 transition-all rounded-full cursor-pointer"
                src={github.avatar_url}
                width="300px"
                height="300px"
              />
            </div>
          </Link>
          <div className="px-5 flex flex-col justify-center items-center">
            <Link href={github.html_url} passHref>
              <div className="flex cursor-pointer group items-center gap-2 mt-2">
                <FiUserCheck className="text-xl font-bold group-hover:text-red-600" />
                <h1 className="text-2xl font-semibold group-hover:text-red-600">
                  {github.login}
                </h1>
              </div>
            </Link>
            <p className="text-sm font-medium">{github.bio}</p>
            <div className="flex gap-4 mt-4">
              <Link href="/followers" passHref>
                <div className="flex flex-col cursor-pointer group justify-center items-center">
                  <p className="font-bold group-hover:text-blue-700">
                    {github.followers}
                  </p>
                  <span className="font-semibold group-hover:text-blue-700 text-sm">
                    Followers
                  </span>
                </div>
              </Link>
              <Link href="/following" passHref>
                <div className="flex flex-col justify-center group cursor-pointer items-center">
                  <p className="font-bold group-hover:text-blue-700">
                    {github.following}
                  </p>
                  <span className="font-semibold text-sm group-hover:text-blue-700">
                    Following
                  </span>
                </div>
              </Link>
              <Link href="/repositories" passHref>
                <div className="flex flex-col justify-center group cursor-pointer items-center">
                  <p className="font-bold group-hover:text-blue-700">
                    {github.public_repos}
                  </p>
                  <span className="font-semibold text-sm group-hover:text-blue-700">
                    Repositories
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
