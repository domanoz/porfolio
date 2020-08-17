exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await Promise.all([knex("about_stack").truncate(), knex("about").truncate()]);

  // Inserts seed entries

  const testAbout = {
    info:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales mauris a elit viverra, vel molestie sapien ornare. Quisque mollis vehicula egestas. Donec consectetur blandit orci, eget mollis ante sagittis et. Proin eu arcu vel est hendrerit imperdiet. Etiam consequat urna quis risus volutpat dapibus. Cras neque urna, posuere eu lorem nec, elementum hendrerit eros. Nam porttitor dui at erat consectetur auctor. Aliquam efficitur porta porta. Donec sed sem tincidunt, imperdiet magna ac, suscipit massa. Suspendisse quis gravida nibh. Quisque sit amet neque ut est aliquet dapibus aliquet at est. Curabitur efficitur molestie dui, in congue quam. Sed euismod pharetra sapien, vitae pellentesque nisl bibendum at.",
    description: "Example description of the project",
    url: "https://doglovers-dd3c5.web.app/",
  };

  const test_about_stack = [
    { about_id: 1, title: "example about 1" },
    {
      about_id: 1,
      title: "example about 2",
    },
    {
      about_id: 1,
      title: "example about 3",
    },
  ];

  await knex("about").insert(testAbout);

  await knex("about_stack").insert(test_about_stack);
};
