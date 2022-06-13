import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  try {
    let response = await fetch(
      `https://api.github.com/users/haikelz/following`
    );
    let data = await response.json();

    return {
      props: {
        following: data,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export type followed = {
  following: any;
};

const Following = ({ following }: followed) => {
  return (
    <>
      <Head>
        <title>Following</title>
      </Head>
      <section className="flex flex-col cursor-pointer justify-center items-center p-8 bg-yellow-50">
        <h1 className="text-5xl text-black font-bold">Following</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 grid-rows-1">
          {following.map((follow: any, index: number) => (
            <Link href={follow.html_url} passHref key={index + 1}>
              <div className="flex gap-3 drop-shadow-lg rounded-md px-5 py-3 bg-white items-center">
                <Image
                  className="rounded-full"
                  src={follow.avatar_url}
                  width="100px"
                  height="100px"
                />
                <h1 className="font-bold text-xl">{follow.login}</h1>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Following;
