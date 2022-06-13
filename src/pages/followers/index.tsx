import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    let response = await fetch(
      `https://api.github.com/users/haikelz/followers`
    );
    let data = await response.json();

    console.log(data);
    return {
      props: {
        followers: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export type followers = {
  followers: any;
};

const Followers = ({ followers }: followers) => {
  return (
    <>
      <Head>
        <title>Followers</title>
      </Head>
      <section className="flex flex-col justify-center md:h-screen items-center p-8 bg-yellow-50">
        <h1 className="text-5xl text-black font-bold">Followers</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-1">
          {followers.map((follower: any, index: number) => (
            <Link href={follower.html_url} passHref key={index + 1}>
              <div className="flex gap-3 cursor-pointer drop-shadow-lg rounded-md px-5 py-3 bg-white items-center">
                <Image
                  className="rounded-full"
                  src={follower.avatar_url}
                  width="100px"
                  height="100px"
                />
                <h1 className="font-bold text-xl">{follower.login}</h1>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Followers;
