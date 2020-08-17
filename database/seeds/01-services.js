exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("services").truncate()]);

  // Inserts seed entries

  const testServices = [
    {
      icon: "<FaCode className='service-icon' />",
      title: "web development",
      text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
    {
      icon: "<FaSketch className='service-icon' />",
      title: "web design",
      text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
    {
      icon: "<FaAndroid className='service-icon' />",
      title: "app design",
      text: `I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.`,
    },
  ];

  await knex("services").insert(testServices);
};
