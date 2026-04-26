export default function RootPage() {
    return (
        <html>
            <head>
                <meta httpEquiv="refresh" content="0;url=/pt" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            var l = navigator.language?.startsWith('en') ? 'en' : 'pt';
            window.location.replace('/' + l);
          `,
                    }}
                />
            </head>
            <body />
        </html>
    );
}
