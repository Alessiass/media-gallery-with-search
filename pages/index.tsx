import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "../src/components/page-structure/Layout";
import HomePageGallery from "../src/components/page-structure/HomePageGallery";
import { Favourites } from "../src/components/page-structure/Favourites";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Favourites>
        <HomePageGallery itemPerLoad={4} />
      </Favourites>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
