import { Grid } from "@material-ui/core";
import React from "react";
import Banner from "./banner.js";
import Categories from "./Categories.js";
import Posts from "./Posts.js";
const Home = (props) => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
        <Grid container item lg={10} xs={12} sm={10}>
          <Posts />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
