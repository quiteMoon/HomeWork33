import React from "react";
import Navbar from "../Navbar";
import { Container } from "@mui/material";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}

export default DefaultLayout;
