import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MakeReview from "@/components/MakeReview";
import InvalidRedirect from "@/components/InvalidRedirect";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return (
    <section className="min-h-screen w-full">
      <Suspense fallback={<div className="h-16" />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<h1>Ucitavanje...</h1>}>
        <DroneDataLoader params={params} />
      </Suspense>
      <Footer />
    </section>
  );
};

async function DroneDataLoader({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CachedDroneFetch slug={slug} />;
}

async function CachedDroneFetch({ slug }: { slug: string }) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/check/${encodeURIComponent(slug)}`);
  // if (!response.ok) {
  //   return <InvalidRedirect/>
  // }
  
  return <MakeReview  />;
}

export default page;