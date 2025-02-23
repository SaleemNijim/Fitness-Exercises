import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroBannerImage from "../Assets/images/banner.png";


const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },
                transition: "all 0.5s ease",
            }}
            position={"relative"}
            p={"20px"}
        >
            <Typography color={"#FF2625"} fontWeight={"600"} fontSize={"26px"}>
                Fitness Club
            </Typography>

            <Typography
                fontWeight={"700"}
                sx={{
                    fontSize: { lg: "44px", xs: "40px" },
                    transition: "all 0.5s ease",
                }}
                mb={"23px"}
                mt={"30px"}
            >
                Sweat , Smile <br />
                And Repeat
            </Typography>
            <Typography
                fontSize="22px"
                fontFamily="Alegreya"
                lineHeight="35px"
                mb={4}
            >
                Check out the most effective exercises <br /> personalized to you
            </Typography>
            <Button
                href="#exercises"
                variant="contained"
                color="error"
                sx={{
                    backgroundColor: "#ff2625",
                    padding: "10px",
                }}
            >
                Explore Exercises
            </Button>
            <Typography
                fontWeight={600}
                color={"#ff2625"}
                sx={{
                    opacity: 0.1,
                    display: { lg: "block", xs: "none" },
                    transition: "all 0.5s ease",
                }}
                fontSize={"200px"}
            >
                Exercises
            </Typography>
            <img
                src={HeroBannerImage}
                alt="BannerImage"
                className="hero-banner-img"
            />
        </Box>
    );
};

export default HeroBanner;

