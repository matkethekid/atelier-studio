"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function InvalidRedirect() {
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => {
      router.replace("/");
    }, 2000);

    return () => clearTimeout(t);
  }, [router]);

  return <p>Link nije važeći. Bićete preusmereni za 2 sekunde...</p>;
};