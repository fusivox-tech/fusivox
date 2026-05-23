import Container from "../ui/Container";

const services = [
  {
    title: "Websites",
    items: ["Company websites", "Landing pages", "Portfolio sites"],
  },
  {
    title: "Web Applications",
    items: ["Dashboards", "E-Commerce Stores", "SaaS platforms"],
  },
  {
    title: "Mobile Apps",
    items: ["iOS Apps", "Android Apps", "Cross-Platform Codebase"],
  },
  {
    title: "Internal Tools",
    items: ["Booking systems", "Automation tools", "CRM System"],
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <Container>
        <h2 className="text-center text-2xl font-black tracking-tight">
          What we help businesses build.
        </h2>

        <div className="grid lg:grid-cols-4 gap-8 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-black/5 p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-black">
                {service.title}
              </h3>

              <div className="mt-8 space-y-4">
                {service.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-black/60"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#5B5CF0]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}