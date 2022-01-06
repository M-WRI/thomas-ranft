import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main style={{ paddingLeft: "20vw", paddingRight: "32px" }}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
