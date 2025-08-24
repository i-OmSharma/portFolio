import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Devlopment",
    "Cloud Native Developemnt",
    "DevOps",
  ];

  const toolBoxItems = [
    "Node.js-JS,TS",
    "Express.js",
    "ReactJS",
    "Linux",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Git & GitHub"
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="my expertise."
          description="I build scalable backend systems, cloud-native solutions, 
                       and AI-powered automations to deliver impactful and 
                       future-ready digital experiences."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
