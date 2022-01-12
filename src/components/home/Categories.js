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
    color: "#429F99",
    backgroundColor: "#172A46",
    fontWeight: 400,
    width: "86%",
    "&:hover": {
      color: "#172A46",
      backgroundColor: "#429F99",
    },
  },
  table: {
    background: "rgba( 23, 42, 70, 0.9 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 17px )",
    WebkitBackdropFilter: "blur( 17px )",
    borderRadius: "10px",
  },
  link: {
    textDecoration: "none",
    color: "#4DBBAE",
    textAlign: "center",
    fontWeight: 600,
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
                  <TableCell style={{ borderBottom: "none" }}>
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
