exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("services").delete()]);

  // Inserts seed entries

  const services = [
    {
      icon: "FaCode",
      title: "Web Application Development",
      text: `Fast, responsive and engaging apps that bring your ideas to life.`,
    },
    {
      icon: "FaAndroid",
      title: "API Development",
      text: `REST APIs that are tailored to your needs and follow the best practices in performance and security.`,
    },
    {
      icon: "FaSketch",
      title: "Database Design",
      text: `Proper Database design for effective Web & Mobile development, always aiming for performance, scale and stability.`,
    },
  ];

  await knex("services").insert(services);
};
