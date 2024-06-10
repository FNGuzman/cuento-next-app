'use client'
import portada from "../../public/assets/image/portada.png";
import segundaimagen from "../../public/assets/image/3.png";
import tercera from "../../public/assets/image/5.png";
import cuarta from "../../public/assets/image/6.png";
import quinta from "../../public/assets/image/8.png";
import sexta from "../../public/assets/image/9.png";
import octaba from "../../public/assets/image/10.png";
import novena from "../../public/assets/image/11.png";
import decima from "../../public/assets/image/12.png";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 2000,
    });
  }, []);
  return (
    <main className="h-screen flex flex-col bg-black">
      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url(${portada.src})`,
        }}
         data-aos="fade-up"
         
      >

      </section>

      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${segundaimagen.src})`,
        }}
         data-aos="fade-up"
      >


      </section>


      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${tercera.src})`,
        }}
         data-aos="fade-up"
      >
      </section>

      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${cuarta.src})`,
        }}
         data-aos="fade-up"
      >
      </section>

      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${quinta.src})`,
        }}
         data-aos="fade-up"
      >
      </section>

      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${sexta.src})`,
        }}
         data-aos="fade-up"
      >
      </section>
      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${octaba.src})`,
        }}
         data-aos="fade-up"
      >
      </section>
      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${novena.src})`,
        }}
         data-aos="fade-up"
      >
      </section>
      <section
        className="relative flex min-h-full flex-col bg-center bg-contain bg-no-repeat bg-black"
        style={{
          backgroundImage: `url(${decima.src})`,
        }}
         data-aos="fade-up"
      >
      </section>
    </main>
  );
}
