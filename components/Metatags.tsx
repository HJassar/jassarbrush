import Head from "next/head";

export default function Metatags({
  title = "AJ",
  description = "Our natural heritage is a joy to paint and I feel honored to have the ability to transfer that beauty and record it into works of art for the viewer to enjoy.",
  image = "https://www.jassarbrush.com/assets/og.jpg",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@jassarbrush" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
