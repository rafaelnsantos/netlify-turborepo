// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
