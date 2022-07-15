/**
 * @fileoverview CPR class promo page
 */

import type { NextPage } from "next";
import Head from "next/head";
import UnderConstruction from "../Components/Individual/UnderConstruction";

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        {" "}
        {/*Metadate of page*/}
        <title>CPR - Bosede Adetunji</title>
        <meta
          name="description"
          content="Bosede is also a licensed CPR instructor, offering classes to groups and individuals"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UnderConstruction />
      </main>
    </div>
  );
};

export default Services;
