import Script from 'next/script';

function Home() {
  return (
    <div className="container">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-W65K1NCREH" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W65K1NCREH', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </div>
  );
}

export default Home;
