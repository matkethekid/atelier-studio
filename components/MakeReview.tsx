"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import toast, { Toaster } from "react-hot-toast";

const MakeReview = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [review, setReview] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function handleSubmit(e: any) {
    e.preventDefault();
    if (name.length == 0 || review.length == 0) {
      toast.error("Sva polja su obavezna");
    }
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reviews/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          ReviewText: review,
        }),
      });
      const data = await res.json();
      console.log(data)
      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (error) {
      toast.error("Doslo je do greske.");
    }
  };
  return (
    <div className="w-full h-[70vh] flex justify-center items-center ">
        <Toaster/>
        <div className="pt-7 pb-7 pl-7 pr-7 flex flex-col gap-3 border rounded-md">
            <div>
                <h1 className="text-2xl">Oceni naše predavače</h1>
                <p className="text-zinc-500 text-sm">Unesite Vaše ime i kratku recenziju.</p>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name">Ime</label>
                    <Input name="name" type="text" className="focus-visible:ring-0" placeholder="Petar" onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="review">Recenzija</label>
                    <Textarea name="review" placeholder="Vaša recenzija ovde..." className="focus-visible:ring-0" onChange={(e) => setReview(e.target.value)} required/>
                </div>
                <Button type="submit" className="cursor-pointer">Oceni</Button>
            </form>
        </div>
    </div>
  )
}

export default MakeReview;