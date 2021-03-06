/**
 * @fileoverview Leadership mentoring promo page
 */

import type { NextPage } from "next";
import Head from "next/head";
import UnderConstruction from "../Components/Individual/UnderConstruction";

const Services: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Leadership - Bosede Adetunji</title>
        <meta
          name="description"
          content="After recieving training from John C. Maxwell, Bosede provides guidance and leadership training services"
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
