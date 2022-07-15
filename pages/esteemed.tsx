import type { NextPage } from "next";
import Head from "next/head";
import UnderConstruction from "../Components/Individual/UnderConstruction";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blog - Bosede Adetunji</title>
        <meta
          name="description"
          content="The home of an international organization made by women, for women."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Blog;
