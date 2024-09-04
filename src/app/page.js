import { Divide } from "lucide-react";
import Image from "next/image";
import Header from "@/components/Header"
import BannerCarousel from "@/components/BannerCarousel";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerCarousel />
    </div>
  );
}
