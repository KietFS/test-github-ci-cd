import { Metadata } from "next";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return { title: `Post: ${params.slug}` };
}

export default async function Page({ params }: PageProps) {
  const parsedParams = await params;

  console.log("parsed params");

  return (
    <div>
      <h1>Slug: {params?.slug}</h1>
      <p>Kiet Huynh</p>
      <p>Welcome to nextJS</p>
    </div>
  );
}
