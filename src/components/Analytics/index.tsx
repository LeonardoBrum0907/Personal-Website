const Analytics = () => (
  <>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-W65K1NCREH" />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-W65K1NCREH', {
                page_path: window.location.pathname
              });
            `
      }}
    />
  </>
)

export default Analytics
