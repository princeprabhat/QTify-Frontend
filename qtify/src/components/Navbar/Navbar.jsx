import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import { useData } from "../../DataContext";

function Navbar() {
  const { data } = useData();
  const searchData = [...data.topAlbumData, ...data.newAlbumData];
  // console.log("data here is::", data);
  // console.log("searchData", searchData);
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <Button>Give Feedback</Button>
    </nav>
  );
}

export default Navbar;
