import * as React from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>HR App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
