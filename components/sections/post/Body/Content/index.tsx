import React from "react";
import { PostItems } from "@/app/blogs/[id]/page";
import Image from "next/image";
import Infor from "@images/pages/blogs/fakedata/infor.jpg";

interface PostContent {
  content: string;
}

function Content({ content }: PostContent) {
  return (
    <div className="">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
        Exploring the Ever Evolving of Information Technology
      </h1>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Table of Contents
        </h2>
        <ul className="list-disc pl-4">
          <li>
            <a href="#section1">Introduction</a>
          </li>
          <li>
            <a href="#section2">The Role of Software Development</a>
          </li>
          <li>
            <a href="#section3">Importance of Network Administration</a>
          </li>
        </ul>
      </div>

      <section id="section1" className="mt-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Introduction
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-4">
          Information Technology (IT) is a rapidly evolving field that has
          revolutionized the way we live, work, and communicate in the modern
          world. With the advent of computers and the internet, IT has become an
          integral part of virtually every aspect of our daily lives.
        </p>
      </section>

      <section id="section2" className="mt-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          The Role of Software Development
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-4">
          One of the key pillars of IT is software development. Software
          engineers and developers are responsible for creating the applications
          and programs that power our devices, from smartphones and tablets to
          laptops and desktop computers. These professionals write code in
          various programming languages, such as Java, Python, C++, and
          JavaScript, to build everything from simple mobile apps to complex
          enterprise systems.
        </p>
        <Image loading="lazy" src={Infor} alt="IT Image" className="mt-4" />
      </section>

      <section id="section3" className="mt-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          Importance of Network Administration
        </h2>
        <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-4">
          Network administrators are responsible for setting up and maintaining
          the infrastructure that allows data to flow seamlessly between devices
          and across the internet. They ensure that networks are secure,
          reliable, and efficient.
        </p>
      </section>

      <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mt-8">
        In conclusion, Information Technology is a dynamic and multifaceted
        field that touches every aspect of our lives. From the software that
        powers our devices to the networks that connect us to the internet and
        the data analysis that drives decision-making, IT professionals are at
        the forefront of innovation. As technology continues to evolve, the role
        of IT will only become more integral to our society and economy.
      </p>
    </div>
  );
}

export default Content;
