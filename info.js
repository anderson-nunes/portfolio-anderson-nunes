let info = {
  name: "Anderson Ribeiro",
  logo_name: "anderson",
  flat_picture: require("./src/assets/potrait.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "Sou um desenvolvedor formado em Web FullStack pela Labenu e concluí o curso Técnico em Informática para Internet pela QI Faculdade & Escola Técnica. Atualmente, curso Análise e Desenvolvimento de Sistemas para aprimorar minhas habilidades técnicas. Tenho experiência em projetos colaborativos, em empresas e em projetos voluntários. Desenvolvi uma sólida base em clean code para criar soluções eficientes e escaláveis. Meu foco está no desenvolvimento front-end, mas tenho interesse em explorar back-end e DevOps para ampliar minha versatilidade profissional. Estou aberto a oportunidades de networking e colaborações. Entre em contato para discutirmos projetos ou oportunidades profissionais.",
  links: {
    linkedin: "https://www.linkedin.com/in/anderson-ribeiro-dev/",
    github: "https://github.com/anderson-nunes",
    resume:
      "https://github.com/anderson-nunes/portfolio-template/blob/master/src/assets/pdfs/curr%C3%ADculo-anderson-ribeiro-nunes.pdf"
  },
  education: [
    {
      name: "UniCesumar",
      place: "BR",
      date: "Jan, 2024 - Jul, 2026",
      degree: "Analise e Desenvolvimento de Sistemas",
      gpa: "3.7/4.0",
      description:
        "Atualmente estou cursando análise e desenvolvimento de sistemas, ao mesmo tempo em que me especializo em tecnologias modernas e práticas de programação avançada",
      skills: [
        "Programação orientada a objetos (POO)",
        "Tecnologias de redes de computadores",
        "Arquitetura de computadores",
        "Linguagens de programação",
        "Desenvolvimento de software",
        ,
        "OS"
      ]
    },
    {
      name: "QI Faculdade & Escola Técnica",
      place: "BR",
      date: "Fev, 2021 - Agst, 2022",
      degree: "Técnico em informática para internet",
      gpa: "8.0/10.0",
      description:
        "Concluido curso técnico em Informática para Internet, durante o qual me especializei em desenvolvimento web e tecnologias de criação de sites e aplicações online.",
      skills: [
        "Banco de dados relacionais",
        "Web Design Responsivo",
        "Desenvolvimento web",
        "Banco de dados",
        "JavaScript",
        "Depuração",
        "API REST",
        "HTML5",
        "CSS",
        "Java",
        "PHP",
        "SQL",
        "Git",
      ]
    },
    {
      name: "Labenu",
      place: "BR",
      date: "Jan, 2023 - Jan, 2024",
      degree: "Desenvolvimento Web Full Stack",
      gpa: "8.0/10.0",
      description:
        "Programa com mais de 1000 horas de experiência prática em desenvolvimento front-end/back-end, guiadas por metodologias ágeis (Kanban/Scrum).",
      skills: [
        "Web Design Responsivo",
        "Banco de dados",
        "ECMAScript",
        "Web design",
        "JavaScript",
        "Express.js",
        "Depuração",
        "React.js",
        "Redux.js",
        "API REST",
        "HTML5",
        "JSON",
        "CSS",
        "SQL",
        "Git",
      ]
    }
  ],
  experience: [
    {
      name: "ALFA Software AutoPeças",
      place: "BR",
      date: "Mar, 2024 - Presente",
      position: "Desenvolvedor Front End",
      description:
        "Atuo no desenvolvimento de interfaces de usuário (UI), projetando e implementando interfaces intuitivas e atraentes. Utilizo Vue.js para criar aplicativos web escaláveis e responsivos, maximizando a experiência do usuário. Além disso, aplico TypeScript para codificar soluções robustas e seguras, garantindo uma base sólida e escalável para todos os projetos em que estou envolvido.",
      skills: ["HTML", "CSS", "Javascript", "Vue.js", "Typescript"]
    },
    {
      name: "Decola Juninho - Voluntariado",
      place: "BR",
      date: "Dez, 2023 - Presente",
      position: "Desenvolvedor Front End",
      description:
        "Atuo no desenvolvimento de interfaces de usuário (UI), projetando e implementando interfaces intuitivas e visualmente atraentes. Utilizo React com Material-UI para criar aplicativos web escaláveis e responsivos, maximizando a experiência do usuário. Além disso, aplico TypeScript para codificar soluções robustas e seguras, garantindo uma base sólida e escalável para todos os projetos em que estou envolvido.",
      skills: ["HTML", "CSS", "Material UI", "Javascript", "React", "Typescript"]
    },
    {
      name: "FeedFlex",
      place: "BR",
      date: "Out, 2022 - Abr, 2023",
      position: "Desenvolvedor Front End",
      description:
        "Atuo no desenvolvimento de interfaces de usuário (UI), projetando e implementando interfaces intuitivas e visualmente atraentes. Utilizo React para criar aplicativos web escaláveis e responsivos, maximizando a experiência do usuário. Além disso, aplico TypeScript para codificar soluções robustas e seguras, garantindo uma base sólida e escalável para todos os projetos em que estou envolvido.",
      skills: ["HTML", "CSS", "Javascript", "React", "Typescript"]
    },
  ],
  skills: [
    {
      title: "linguagens",
      info: [
        "Javascript",
        "TypeScript",
        "SQLite",
      ],
      icon: "fa fa-code"
    },
    // {
    //   title: "data frameworks",
    //   info: [
    //     "Keras",
    //     "Numpy",
    //     "Pandas",
    //     "OpenCV",
    //     "SciPy",
    //     "Sklearn",
    //     "LibROSA",
    //     "Pillow"
    //   ],
    //   icon: "fa fa-cubes"
    // },
    {
      title: "tecnologias web",
      info: ["Vue", "React", "Node", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "SQLite", "MySQL"],
      icon: "fa fa-database"
    },
    {
      title: "sistemas operacionais e ferramentas",
      info: [

        "Ubuntu",
        "Windows",
        "Android",
        "Scrum",
        "JIRA",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    // {
    //   title: "design",
    //   info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
    //   icon: "fa fa-pencil-square-o"
    // }
  ],
  portfolio: [
    {
      name: "Sheet Recognizer",
      pictures: [
        {
          img: require("./src/assets/portfolio/msr/one.png")
        },
        {
          img: require("./src/assets/portfolio/msr/two.png")
        },
        {
          img: require("./src/assets/portfolio/msr/three.png")
        },
        {
          img: require("./src/assets/portfolio/msr/four.png")
        }
      ],
      technologies: ["Computer Vision", "OpenCV", "AI", "Flask", "Sockets"],
      category: "Algorithm",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      visit: "https://github.com/hrishikeshpaul/music-sheet-recognizer-backend",
      description:
        "Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition. Like Optical Character Recognition, this tool is used to detect music notes and rests. It makes use of basic Computer Vision techniques such as Convolution, Edge Detections, Hough Transforms and Template Matching to detect notes and rests on a music sheet. "
    },
    {
      name: "NoQ Job Portal",
      pictures: [
        {
          img: require("./src/assets/portfolio/noq/logo.png")
        },
        {
          img: require("./src/assets/portfolio/noq/one.png")
        },
        {
          img: require("./src/assets/portfolio/noq/two.png")
        },
        {
          img: require("./src/assets/portfolio/noq/three.png")
        },
        {
          img: require("./src/assets/portfolio/noq/four.png")
        }
      ],
      technologies: ["Node", "Vue", "Express", "MongoDB", "Heroku"],
      category: "Website",
      date: "Sep, 2019 - Dec  , 2019",
      github: "https://github.com/hrishikeshpaul/noq",
      visit: "https://noq-client.herokuapp.com/",
      description:
        "No Q, is a revolutionary tool which allows for both employers and students to skip the hassle seen in modern day career fairs. For the students, there is an intuitive profile builder where you can add things like education, skills, certifications, honors, and experiences. No Q is not only good for students, but employers as well! A common problem at modern career fairs is the number of unqualified candidates who waste their time when they could be chatting with someone else. With No Q, only the students who meet the positions’ criteria will be able to apply, and from there the recruiter can invite them to talk in more detail at the career fair through our intuitive messaging system."
    },
    {
      name: "POST",
      pictures: [
        {
          img: require("./src/assets/portfolio/post/one.png")
        },
        {
          img: require("./src/assets/portfolio/post/two.png")
        }
      ],
      technologies: [
        "Markov Models",
        "Python",
        "Artificial Intelligence",
        "Vue",
        "Heroku"
      ],
      category: "Algorithm",
      github: "https://github.com/hrishikeshpaul/pos-tagger",
      date: "Oct, 2019 - Nov, 2019",
      visit: "https://post-client.herokuapp.com/",
      description:
        "Post is a simple algorithm that was developed to tagging a word corresponding to its part of speech. The algorithm makes of a probabilisitic approach along with some randomness, together which forms the basis of an algorithm called Gibbs Sampling."
    },
    {
      name: "Suicide Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/suicide/suicide-analyzer.png")
        },
        {
          img: require("./src/assets/portfolio/suicide/suicide2-original.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "Leaflet", "Pandas"],
      category: "Website",
      date: "Oct, 2018 - Nov, 2018",
      github: "https://github.com/hrishikeshpaul/whodata",
      visit: "https://skylarktiral.herokuapp.com/",
      description:
        "This is a web application, uses a map to demonstrate the number suicides committed around the globe, according to a dataset provided by the WHO. The application consists of a Leaflet map that colors every nation, based on the number of suicides that have been committed in that country, for that year. It provides us with the capability to select the data as well as the continent."
    },
    {
      name: "Sentiment Analyzer",
      pictures: [
        {
          img: require("./src/assets/portfolio/smit/one.png")
        },
        {
          img: require("./src/assets/portfolio/smit/two.png")
        },
        {
          img: require("./src/assets/portfolio/smit/three.png")
        },
        {
          img: require("./src/assets/portfolio/smit/four.png")
        }
      ],
      technologies: ["LSTM", "Keras", "Angular", "Tweepy", "Heroku", "Python"],
      category: "Alogrithm",
      date: "Feb, 2018 - Apr  , 2018",
      github: "https://github.com/hrishikeshpaul/sih",
      visit: "https://angel.co/projects/1009777-sentiment-analysis",
      description:
        "Developing this for the final round of Smart India Hackathon 2018, the web application is a platform for showcasing the sentiment of the tweets of the people in the Telangana region in India on policy satisfaction, services and problem definitions. The minimal UI design consists of different bins, that have their respective tweets, all scraped from twitter. There is also a simple graphical representation denoting the sentiment of the tweets."
    },
    {
      name: "Clumpr",
      pictures: [
        {
          img: require("./src/assets/portfolio/clumpr/logo.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/one.png")
        },
        {
          img: require("./src/assets/portfolio/clumpr/two.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MySQL", "Facebook API"],
      category: "Web App",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "Sep, 2017 - Nov, 2017",
      visit: "https://github.com/hrishikeshpaul/clumpr",
      description:
        'Clumpr is an online social event planning assistant that - using information about similar events happening in similar locations around the same time, friends who frequently attend the same events, and mutual friends - helps users to collaborate, combine, and attend events together, effectively "clumping" people and activities in a way that makes intuitive sense.'
    },
    {
      name: "Nutricare",
      pictures: [
        {
          img: require("./src/assets/portfolio/nc/one.png")
        },
        {
          img: require("./src/assets/portfolio/nc/two.png")
        },
        {
          img: require("./src/assets/portfolio/nc/three.png")
        },
        {
          img: require("./src/assets/portfolio/nc/four.png")
        },
        {
          img: require("./src/assets/portfolio/nc/five.png")
        },
        {
          img: require("./src/assets/portfolio/nc/six.png")
        }
      ],
      technologies: ["Node", "Angular", "Express", "MongDB", "Medical"],
      category: "Website",
      github: "https://github.com/hrishikeshpaul/clumpr",
      date: "May, 2017 - Aug, 2017",
      visit: "https://angel.co/projects/576300-nutricare",
      description:
        "Nutricare is a basic health website for users(patients) to input nutrient intake data and researchers to analyse the data with the help of graphs and tables. A researcher can conduct studies on N different subjects (patient) for a particular problem statement. Typically, a researcher will enter food item consumed by subjects over a period of time (Ex - 24hrs, or 1 week, or 1 month etc)."
    }
  ],
  portfolio_design: [
    {
      name: "Labeddit",
      title: "E-Labeddit",
      pictures: [
        {
          img: require("./src/assets/personal/labeddit/labeddit-front-end.gif"),
          title: "Labeddit"
        },
        {
          img: require("./src/assets/personal/labeddit/login.png"),
          title: "Labeddit"
        },
        {
          img: require("./src/assets/personal/labeddit/signup.png"),
          title: "Labeddit"
        },
        {
          img: require("./src/assets/personal/labeddit/post.png"),
          title: "Labeddit"
        },
        {
          img: require("./src/assets/personal/labeddit/comment.png"),
          title: "Labeddit"
        },
      ],
      technologies: ["React", "TypeScript", "Node.js", "SQLite3"],
      category: "Projeto",
      github: "",
      date: "Out, 2023 - Dez, 2023",
      visit: "",
      description:
        "LabEddit é um projeto web full stack, desenvolvido com um design de aplicativo mobile first que permite a interação entre usuários por meio de postagens, comentários e votos. Os usuários também podem alterar apelido, senha e imagem de avatar, além de deletar suas próprias postagens e comentários."
    },
    {
      name: "Pokemon",
      title: "Pokemon",
      pictures: [
        {
          img: require("./src/assets/personal/pokemon/pokemon01.png"),
          title: "Pokemon"
        },
        {
          img: require("./src/assets/personal/pokemon/pokemon02.png"),
          title: "Pokemon"
        },
        {
          img: require("./src/assets/personal/pokemon/pokemon03.png"),
          title: "Pokemon"
        },
        {
          img: require("./src/assets/personal/pokemon/pokemon04.png"),
          title: "Pokemon"
        },
        {
          img: require("./src/assets/personal/pokemon/pokemon05.png"),
          title: "Pokemon"
        },
        {
          img: require("./src/assets/personal/pokemon/pokemon06.png"),
          title: "Pokemon"
        },
        {
          img: require("./src/assets/personal/pokemon/pokemon07.png"),
          title: "Pokemon"
        },
      ],
      technologies: ["React", "Api-rest", "Axios", "Chakra UI"],
      category: "Projetos individuais",
      github: "",
      date: "May, 2023 - Jun, 2023",
      visit: "",
      description:
        "O projeto Pokedex oferece uma experiência completa de exploração de Pokémon. Com recursos de captura, os usuários podem adicionar novos Pokémon à sua coleção. Além disso, detalhes abrangentes sobre cada Pokémon, como estatísticas e habilidades, podem ser visualizados. A flexibilidade de excluir Pokémon da coleção também está disponível. Essa aplicação proporciona uma jornada envolvente para os fãs, permitindo que interajam com os Pokémon de maneiras diversas e significativas. O projeto terá como fonte de dados para a sua criação a Poke Api, uma Api pública, muito usada para aplicações focadas em aprendizado de programação e também usada em cases de processos seletivos."
    },
    {
      name: "E-commerce",
      title: "E-commerce",
      pictures: [
        {
          img: require("./src/assets/personal/e-commerce/print01.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/print02.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/print03.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/print04.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/print05.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/print07.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/print08.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/mobile01.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/mobile02.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/mobile03.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/mobile04.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/mobile05.png"),
          title: "E-commerce"
        },
        {
          img: require("./src/assets/personal/e-commerce/mobile06.png"),
          title: "E-commerce"
        },
      ],
      technologies: ["JavaScript", "React", "Styled-Components"],
      category: "Visual Design",
      github: "",
      date: "Fev, 2023 - Abr, 2023",
      visit: "",
      description:
        "O Labecommerce é um e-commerce com recursos avançados que permite aos usuários ordenar, pesquisar e filtrar produtos de forma intuitiva. Ele também oferece um carrinho de compras completo, com resumo da compra, opção de limpar o carrinho e ajustar as quantidades. Além disso, o Labecommerce possui organização em páginas e a capacidade de ocultar o carrinho para visualizar mais produtos."
    },
    {
      name: "Financial-control",
      title: "Financial-control",
      pictures: [
        {
          img: require("./src/assets/personal/financial-control/financial01.png"),
          title: "Financial-control"
        },
        {
          img: require("./src/assets/personal/financial-control/financial02.png"),
          title: "Mockup 1"
        },
        {
          img: require("./src/assets/personal/financial-control/financial03.png"),
          title: "Mockup 2"
        },
        {
          img: require("./src/assets/personal/financial-control/financial04.png"),
          title: "Mockup 3"
        },
        {
          img: require("./src/assets/personal/financial-control/financial05.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/personal/financial-control/financial06.png"),
          title: "Market Research 2"
        },
        {
          img: require("./src/assets/personal/financial-control/financial07.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/personal/financial-control/financial08.png"),
          title: "Market Research 1"
        },
        {
          img: require("./src/assets/personal/financial-control/financial09.png"),
          title: "Market Research 1"
        }
      ],
      technologies: ["JavaScript", "React", "TypeScript"],
      category: "Visual Design",
      github: "",
      date: "May, 2020 - July, 2020",
      visit: "",
      description:
        "Olá desenvolvedores, este projeto foi desenvolvido com o intuito de ser um aplicativo para controle de gastos financeiros pessoais, com sistema de balanceamento, criação de novas transações, sistema de filtragem, etc."
    }
  ],
  // recommendations: [
  //   {
  //     title:
  //       "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Ushanas Shastri",
  //     position: "CTO",
  //     company: "Viteos Capital Market Services",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
  //     author: "Anil Dukkipatty",
  //     position: "CTO",
  //     company: "Elemential Labs",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
  //     author: "Chintan Shah",
  //     position: "Director",
  //     company: "Hridayam Soft Solution",
  //     location: "Mumbai"
  //   },
  //   {
  //     title:
  //       "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
  //     author: "Mrinal Pai",
  //     position: "Co-Founder & Director",
  //     company: "Skylark Drones",
  //     location: "Bangalore"
  //   }
  // ]
};

export default info;
