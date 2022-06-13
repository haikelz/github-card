import Head from "next/head";

const AboutMe = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
      </Head>
      <section className="flex flex-col p-8 items-center text-center justify-center">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-3xl font-bold">About Me</h1>
          <p className="mt-2">
            I'm Haikel. There is many things i want to say, but yeah, nothing to
            see here huh....
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
