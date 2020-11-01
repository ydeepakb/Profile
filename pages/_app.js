import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout pageTitle="Deepak (CodeTweak worm)" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}
