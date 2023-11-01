
const employees = [
  {
    id: 1001,
    name: "John Doe",
    position: "Software Engineer",
    description:
      "Passionate software engineer with expertise in web development. Enjoys tackling complex problems and delivering elegant solutions.",
  },
  {
    id: 1002,
    name: "Alice Smith",
    position: "Graphic Designer",
    description:
      "Creative graphic designer with an eye for detail. Skilled in creating visually appealing designs and branding materials.",
  },
  {
    id: 1003,
    name: "David Brown",
    position: "Marketing Manager",
    description:
      "Experienced marketing manager specializing in digital marketing and data-driven strategies. Proven track record of driving business growth.",
  },
  {
    id: 1004,
    name: "Sarah Johnson",
    position: "Sales Representative",
    description:
      "Results-oriented sales representative with excellent communication skills. Adept at building and maintaining client relationships.",
  },
  {
    id: 1005,
    name: "Michael Wilson",
    position: "Financial Analyst",
    description:
      "Detail-oriented financial analyst with a strong background in financial planning, budgeting, and data analysis.",
  },
  {
    id: 1006,
    name: "Emma Lee",
    position: "Human Resources Manager",
    description:
      "Dedicated human resources manager with expertise in recruitment, employee relations, and HR policies.",
  },
  {
    id: 1007,
    name: "Robert Turner",
    position: "Product Manager",
    description:
      "Innovative product manager with a passion for developing and launching successful products in the market.",
  },
  {
    id: 1008,
    name: "Olivia Miller",
    position: "Content Writer",
    description:
      "Creative content writer with a knack for producing engaging and informative content across various platforms.",
  },
  {
    id: 1009,
    name: "James Harris",
    position: "Project Manager",
    description:
      "Experienced project manager skilled in leading cross-functional teams to deliver projects on time and within budget.",
  },
  {
    id: 1010,
    name: "Sophia Davis",
    position: "Customer Support Specialist",
    description:
      "Customer-focused support specialist with a commitment to providing exceptional service and resolving customer inquiries.",
  },
  {
    id: 1011,
    name: "William Clark",
    position: "Data Scientist",
    description:
      "Data scientist with expertise in data analysis, machine learning, and data-driven decision-making.",
  },
  {
    id: 1012,
    name: "Ava Martinez",
    position: "UI/UX Designer",
    description:
      "Talented UI/UX designer with a passion for creating user-friendly and visually appealing digital experiences.",
  },
];

const handler = (req, res) => {
  res.status(200).json({ status: true, statusCode: 200, employees });
};

module.exports = handler;
