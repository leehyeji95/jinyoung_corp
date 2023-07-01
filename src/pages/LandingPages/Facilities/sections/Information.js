/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import Contact from "pages/LandingPages/AboutUs/sections/Contact";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import facility1 from "assets/images/facility1.png";
import facility2 from "assets/images/facility2.png";
import product from "assets/images/product.png";
import flowchart from "assets/images/flowchart.png";
import car from "assets/images/car.png";
import certification from "assets/images/certification.png";
import salechart from "assets/images/saleschart.png";
import product1 from "assets/images/product1.png";
import product3 from "assets/images/product_main.png";

import ImageSlider from "./ImageSlider";
import TransparentModalCard from "examples/Cards/BlogCards/TransparentModalCard";

function Information() {
  return (
    <MKBox component="section" py={5}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <ImageSlider/>
          </Grid>

            <Grid item xs={12} lg={12} flexDirection="column" sx={{my: 6, mx: "auto", px: 0.75}}>
                <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
                    주요 생산품
                </MKTypography>
                <Grid container item xs={12} lg={12}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TransparentModalCard
                                image={product1}
                                title="대원산업 SG 차종"
                                type="1"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6}>
                            <TransparentModalCard
                                image={product3}
                                title="엠시트 GN7 차종"
                                type="2"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
             적용차종
            </MKTypography>
            <MKBox component="img" src={car} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
              공정흐름도
            </MKTypography>
            <MKBox component="img" src={flowchart} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
             인증현황 
            </MKTypography>
            <MKBox component="img" src={certification} alt="" width="100%" pl={3}/>
          </Grid>

          <Grid item xs={12} lg={12} flexDirection="column" sx={{ my: 6, mx: "auto", px: 0.75 }}>
            <MKTypography variant="h3" color="dark" fontWeight="bold" mb={3}>
             매출현황
            </MKTypography>
            <MKBox component="img" src={salechart} alt="saleschart" width="100%" pl={3}/>
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;