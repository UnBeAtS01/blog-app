import {
  Button,
  makeStyles,
  TableCell,
  TableHead,
  TableRow,
  Table,
  TableBody,
} from "@material-ui/core";

import React from "react";
import { Link } from "react-router-dom";
import { CategoriesData } from "../../constants/data.js";
const useStyle = makeStyles({
  create: {
    margin: 20,
    color: "#fff",
    background: "#6495ED",
    width: "86%",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const Categories = (props) => {
  const classes = useStyle();
  return (
    <>
      <Link to={"/create"} style={{ textDecoration: "none", color: "inherit" }}>
        <Button variant="contained" className={classes.create}>
          Create Blog
        </Button>
      </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <Link className={classes.link} to="/">
                All Categories
              </Link>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {CategoriesData &&
              CategoriesData.map((ele) => (
                <TableRow>
                  {" "}
                  <TableCell>
                    <Link className={classes.link} to={`/?category=${ele}`}>
                      {ele}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Categories;
