import React, { Fragment } from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import {
  makeStyles,
} from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Heading1, Heading2, Paragraf } from '../Component/Text'
import ZealHeader from "../Component/Header"
import ZealFooter from "../Component/Footer"
import ClassCard from "../Component/ClassCard"
import ZealBanner from '../assets/Images/Zeal-Banner.png'

const theme = createTheme();
const homeStyles = makeStyles(() => ({
  homeH2: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      top: -13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      top: -15
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      top: -18
    }
  },
  h2Wrap: {
    [theme.breakpoints.down('sm')]: {
      height: 14,
      marginBottom: 13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: 17,
      marginBottom: 15
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height: 22,
      marginBottom: 18
    }
  },
  p1: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontSize: 20
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: 24
    }
  },
  p2: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      fontSize: 16
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      fontSize: 20
    }
  },
  descWrap: {
    [theme.breakpoints.down('sm')]: {
      width: 300
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: 500
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      width: 650
    }
  },
  cardContainer: {
    [theme.breakpoints.down('sm')]: {
      height: 250,
      paddingTop: 50,
      marginBottom: 700
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      height: 400,
      paddingTop: 70,
      marginBottom: 800
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      height: 500,
      paddingTop: 100,
      marginBottom: 500
    }
  },
}));

export default function Home() {
  const classes = homeStyles();
  const cardContent = [
    { cardImg: "digitalmarketing", cardTitle: "Digital Marketing", cardDesc: "Belajar digital marketing akan meningkatkan penjualan  produkmu" },
    { cardImg: "graphicdesign", cardTitle: "Graphic Design", cardDesc: "Tingkatkan skill desainmu dan pelajari berbagai tools desain" },
    { cardImg: "webdevelop", cardTitle: "Web Development", cardDesc: "Kupas tuntas berbagai basic programming agar jadi web developer andal" }
  ]
  return (
    <Fragment>
      <ZealHeader />
      <div style={{ paddingTop: 55, position: 'relative' }}>
        <img src={ZealBanner} alt="ZealBanner" style={{ width: '100%' }} />
        <div className="top-0 start-0 position-absolute h-100 w-100 bg-zeal" style={{ paddingTop: 50, opacity: 0.5, zIndex: 1 }}></div>
        <div className={`translate-middle top-50 start-50 position-absolute text-center text-white ${classes.descWrap}`} style={{ zIndex: 2 }} >
          <Heading1 text="Mini Class" />
          <div className="pt-lg-3 pt-sm-0">
            <Paragraf text="Raih karir impianmu di bidang digital teknologi dengan mengikuti program Mini Class di Zeal" class="text-white normRegular" />
          </div>
        </div>
      </div>
      <div className={`bg-zeal ${classes.cardContainer}`}>
        <Container fluid className="px-lg-4 px-xl-5 px-sm-1">
          <div className="d-flex justify-content-center">
            <div style={{ backgroundColor: '#7B61FF' }} className={`d-inline-block ${classes.h2Wrap}`}>
              <Heading2 text="Yuk, Pilih Kelasmu" class={`text-white ${classes.homeH2}`} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div style={{ backgroundColor: '#7B61FF' }} className={`d-inline-block ${classes.h2Wrap}`}>
              <Heading2 text="dan Dapatkan Free Ebook !" class={`text-white ${classes.homeH2}`} />
            </div>
          </div>
          <div className="d-flex justify-content-center mb-5 mt-xl-4 mt-sm-1">
            <div className={`text-center ${classes.descWrap}`} style={{ wordWrap: 'break-word' }}>
              <Paragraf text="Melalui Miniclass, kamu akan mendapatkan  teknik dasar berbagai kelas hingga optimasi tools yang mendukung  sebagai bekal awal karir impianmu." class="text-white normLight" />
            </div>
          </div>
          <Row className="mb-5">
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="d-flex justify-content-lg-start justify-content-md-center justify-content-sm-center justify-content-center mb-4 mb-lg-0">
              <ClassCard title="Digital Marketing" desc="Belajar digital marketing akan meningkatkan penjualan  produkmu" cardImg="digitalmarketing" link="digital-marketing" />
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="d-flex justify-content-center mb-4 mb-lg-0">
              <ClassCard title="Design Graphic" desc="Tingkatkan skill desainmu dan pelajari berbagai tools desain" cardImg="graphicdesign" link="graphic-design" />
            </Col>
            <Col xl={4} lg={4} md={12} sm={12} xs={12} className="d-flex justify-content-lg-end justify-content-md-center justify-content-sm-center justify-content-center">
              <ClassCard title="Web Development" desc="Kupas tuntas berbagai  basic programming agar  jadi web developer andal" cardImg="webdevelop" link="web-development" />
            </Col>
          </Row>
        </Container>
      </div>
      <ZealFooter />
    </Fragment >
  );
}