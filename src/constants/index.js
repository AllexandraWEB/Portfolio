const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Experience",
    link: "/experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Résumé",
    link: "#resume",
  },
];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Code", imgPath: "/images/ideas.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Flow", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Code", imgPath: "/images/ideas.svg" },
    { text: "Design", imgPath: "/images/designs.svg" },
    { text: "Flow", imgPath: "/images/code.svg" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review: "During my two years at the University of Plovdiv, I built a strong foundation in programming, web development, and mathematical concepts essential to computer science.",
      imgPath: "/images/pu.png",
      logoPath: "/images/logo-pu.png",
      title: "Informatics Student",
      date: "September 2023 - Present",
      responsibilities: [
        "Studied key subjects including Java, web development, databases, linear algebra, and discrete mathematics.",
        "Developed several Java-based projects, applying object-oriented principles and database integration.",
        "Strengthened problem-solving skills through mathematical coursework and practical programming tasks.",
      ],
    },
    {
      review: "Currently studying at Software University (SoftUni), focusing on the JavaScript path to strengthen my front-end development skills.",
      imgPath: "/images/software-university.png",
      logoPath: "/images/logo-softuni.png",
      title: "JavaScript Developer Student",
      date: "May 2023 - Present",
      responsibilities: [
        "Learning core concepts of vanilla JavaScript along with HTML and CSS.",
        "Actively building a solid foundation in front-end technologies through practical coursework.",
        "Completed structured training and assessments to earn recognized certifications in key front-end technologies.",
      ],
    },
    {
      review: "During my first year, I gained foundational skills in programming and algorithms that sparked my journey into front-end web development.",
      imgPath: "/images/tu.png",
      logoPath: "/images/logo-tu.png",
      title: "Software Engineering Student",
      date: "October 2022 - May 2023",
      responsibilities: [
        "Studied core subjects such as C++, logic and automata, and algorithm analysis.",
        "Built several C++ projects, applying theoretical concepts in practical scenarios.",
        "Discovered a strong interest in software development, leading to a front-end career path.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Esther Howard",
      mentions: "@estherhoward",
      review:
        "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Wade Warren",
      mentions: "@wadewarren",
      review:
        "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Guy Hawkins",
      mentions: "@guyhawkins",
      review:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Marvin McKinney",
      mentions: "@marvinmckinney",
      review:
        "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Floyd Miles",
      mentions: "@floydmiles",
      review:
        "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
    },
    {
      name: "Albert Flores",
      mentions: "@albertflores",
      review:
        "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "insta",
      imgPath: "/images/insta.png",
    },
    {
      name: "fb",
      imgPath: "/images/fb.png",
    },
    {
      name: "x",
      imgPath: "/images/x.png",
    },
    {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };
  