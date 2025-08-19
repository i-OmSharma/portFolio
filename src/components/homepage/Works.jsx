// import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
// import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import lambdaLLM from "/src/assets/images/LambdaLLM.png"
import slot777 from "/src/assets/images/slot777.jpeg";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://lambdallm.vercel.app/"
            img={lambdaLLM}
            alt="LambdaLLMOps-pipeline"
            name="Universal Serverless Lambda LLM Ops"
            type="Cloud Native "

            tools="AWS • Node • React • LLM(Together.ai)"

          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link=""
            img={memento}
            alt="memento landing page mockup"
            name="Cloud Vista"
            type="Cloud Native"
            tools="Terraform • AWS • Node • LLM • React"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link=""
            img={acc}
            alt="real business accountant project mockup"
            name="MicroService Chat"
            type="Full-Stack Development"
            tools="Docker • AWS • Redis • RabitMQ • React • Express • MongoDB"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link=""
            img={daddy}
            alt="Blog website"
            name="Blog website"
            type="Full-Stack Development"
            tools="Cloudflare • MERN"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link=""
            img={slot777}
            alt="sunnyside project mockup"
            name="SLOT 777"
            type="JS Game Development"
            tools="HTML • CSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
