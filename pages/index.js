import Head from "next/head";
import { client } from "../apolloClient";
import { gql } from "@apollo/client";
import HeaderSection from "../components/HeaderSection";
import WorkSection from "../components/WorkSection";
import AwardSection from "../components/AwardSection";
import Image from "next/image";

export default function Home({ data }) {
  const { works, awards, exhibitions } = data;

  console.log();
  return (
    <div>
      <Head>
        <title>Thomas Ranft Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderSection />
      <WorkSection data={works} />
      <AwardSection data={awards} />
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        works {
          title
          slug
          coverImage {
            id
            url
            fileName
          }
          artworkType
        }
        awards {
          price
          name
        }
        exhibitions {
          year
          description
        }
      }
    `,
  });

  return {
    props: {
      data,
    },
  };
};
