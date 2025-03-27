import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return {
    metadata: {
      title: ["Contact"],
      description:
        "Have a question or a project in mind? Let's chat! Reach out through my contact form, and I'll get back to you soon.",
      author: "Lukas Vendel Mann",
    },
  };
};
