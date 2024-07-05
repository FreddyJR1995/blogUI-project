import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from '../../components/Image/Image';
import technologyImage from '../../assets/technologyImage.png';
import managementImage from '../../assets/managementImage.png';
import productivityImage from '../../assets/productivityImage.png';
import codingImage from '../../assets/codingImage.png';

const LandingPageContent = () => {
  return (
    <Box style={{ width: '100%' }}>
      <Grid container>
        <Grid
          item
          xs={6}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            style={{
              fontSize: '48px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '116.7%',
              width: '239px',
            }}
          >
            Stories and Knowledge that Transform{' '}
            <span style={{ color: '#996969' }}>You.</span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            style={{ fontSize: '16px', fontWeight: 400, paddingBottom: '22px' }}
          >
            Most Recent in Blog.io
          </Typography>
          <Card
            style={{
              width: '318px',
              height: '205px',
              margin: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardContent style={{ padding: '48px 25px 21px 25px' }}>
              <Typography
                style={{
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  paddingBottom: '22px',
                }}
              >
                QA: the vision of excellence in our coding life
              </Typography>
              <Typography
                style={{
                  textAlign: 'end',
                  color: '#996969',
                  fontSize: '12px',
                  fontWeight: 400,
                  paddingBottom: '10px',
                }}
              >
                Freddy Valverde
              </Typography>
              <Typography
                style={{
                  color: '#996969',
                  fontSize: '12px',
                  fontWeight: 400,
                  paddingBottom: '10px',
                }}
              >
                technology - management
              </Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              width: '318px',
              height: '205px',
              margin: '20px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CardContent style={{ padding: '48px 25px 21px 25px' }}>
              <Typography
                style={{
                  fontSize: '20px',
                  fontStyle: 'normal',
                  fontWeight: 600,
                  paddingBottom: '22px',
                }}
              >
                QA: the vision of excellence in our coding life
              </Typography>
              <Typography
                style={{
                  textAlign: 'end',
                  color: '#996969',
                  fontSize: '12px',
                  fontWeight: 400,
                  paddingBottom: '10px',
                }}
              >
                Freddy Valverde
              </Typography>
              <Typography
                style={{
                  color: '#996969',
                  fontSize: '12px',
                  fontWeight: 400,
                  paddingBottom: '10px',
                }}
              >
                technology - management
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        columnSpacing={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          backgroundColor: '#F6C7C7',
          margin: '52px 0px 54px 0px',
          width: '100%',
        }}
      >
        <Grid item style={{ textAlign: 'center' }}>
          <Typography
            style={{
              fontSize: '96px',
              fontStyle: 'normal',
              fontWeight: 300,
              letterSpacing: '-1.5px',
              lineHeight: '116.7%',
              marginTop: '30px',
            }}
          >
            100K
          </Typography>
          <Typography
            style={{
              marginBottom: '30px',
              lineHeight: '150%',
              letterSpacing: '0.15px',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
            }}
          >
            articles posted
          </Typography>
        </Grid>
        <Grid item style={{ textAlign: 'center' }}>
          <Typography
            style={{
              fontSize: '96px',
              fontStyle: 'normal',
              fontWeight: 300,
              letterSpacing: '-1.5px',
              lineHeight: '116.7%',
              marginTop: '30px',
            }}
          >
            100K
          </Typography>
          <Typography
            style={{
              marginBottom: '30px',
              lineHeight: '150%',
              letterSpacing: '0.15px',
              fontWeight: 400,
              fontStyle: 'normal',
              fontSize: '16px',
            }}
          >
            writer joined
          </Typography>
        </Grid>
      </Grid>
      <Typography
        style={{
          fontSize: '40px',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: 'normal',
          textAlign: 'center',
          paddingBottom: '41px',
          paddingTop: '54px',
        }}
      >
        Blog Categories
      </Typography>
      <Grid container direction="row" justifyContent="space-around">
        <Grid item sx={3} style={{ textAlign: 'center' }}>
          <Typography
            style={{
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              paddingBottom: '14px',
            }}
          >
            technology
          </Typography>
          <Image
            src={technologyImage}
            alt="Login Illustration"
            style={{ width: '203px', height: '195px', borderRadius: '100px' }}
          />
        </Grid>
        <Grid item sx={3} style={{ textAlign: 'center' }}>
          <Typography
            style={{
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              paddingBottom: '14px',
            }}
          >
            management
          </Typography>
          <Image
            src={managementImage}
            alt="Login Illustration"
            style={{ width: '203px', height: '195px', borderRadius: '100px' }}
          />
        </Grid>
        <Grid item sx={3} style={{ textAlign: 'center' }}>
          <Typography
            style={{
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              paddingBottom: '14px',
            }}
          >
            productivity
          </Typography>
          <Image
            src={productivityImage}
            alt="Login Illustration"
            style={{ width: '203px', height: '195px', borderRadius: '100px' }}
          />
        </Grid>
        <Grid item sx={3} style={{ textAlign: 'center' }}>
          <Typography
            style={{
              fontSize: '36px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
              paddingBottom: '14px',
            }}
          >
            coding
          </Typography>
          <Image
            src={codingImage}
            alt="Login Illustration"
            style={{ width: '203px', height: '195px', borderRadius: '100px' }}
          />
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        direction="column"
        alignItems="center"
        style={{ paddingTop: '55px' }}
      >
        <Typography
          style={{ fontSize: '24px', fontStyle: 'normal', fontWeight: 400 }}
        >
          Stories and Knowledge that Transform You.
        </Typography>
        <Typography
          style={{ fontSize: '24px', fontStyle: 'normal', fontWeight: 400 }}
        >
          2024
        </Typography>
      </Grid>
    </Box>
  );
};

export default LandingPageContent;
