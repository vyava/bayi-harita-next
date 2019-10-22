import React from 'react'
import Head from 'next/head'
// import Header from '../components/root/Header'
import CssBaseLine from '@material-ui/core/CssBaseline';
import { Container} from "@material-ui/core";

type LayoutProps = {
  title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      {/* <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'></link> */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#CCC"/>
      <link rel="manifest" href="/static/manifest.json" />
      <link rel="apple-touch-icon" href="/static/logs/192x192.png" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link rel="icon" type="image/x-icon" href="static/favicon.ico"/>
    </Head>
    <CssBaseLine/>
    {/* <Header/> */}
    <Container fixed className="main">
      {children}
    </Container>
  </>
)
export default Layout