"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    const lang = storedLang || "en";
    
    // Save default language if not set
    if (!storedLang) {
      localStorage.setItem("lang", "en");
    }
    
    router.push(`/${lang}`);
  }, [router]);
  return <></>;
}
