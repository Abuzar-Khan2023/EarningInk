// Data for blog cards
const blogData = [

    {
      "bannerSrc": "/EarningInk/Images/blog-1.png",
      "topic": "Database",
      "title": "Building microservices with Dropwizard, MongoDB & Docker",
      "description": "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc.",
      "author": "Abuzar Khan",
      "date": "Jan 17, 2022",
      "duration": "3 min"
    },
    {
      "bannerSrc": "/EarningInk/Images/blog-2.png",
      "topic": "Web Performance",
      "title": "Fast web page loading on a $20 feature phone",
      "description": "Feature phones are affordable (under $20-25), low-end devices enabling 100s of millions of users in developing countries to leverage the web. Think of them as a light version of a smart phone.",
      "author": "Abuzar Khan",
      "date": "Dec 10, 2021",
      "duration": "2 min"
    },
    {
      "bannerSrc": "/Images/blog-3.png",
      "topic": "Accessibility",
      "title": "Accessibility Tips for Web Developers",
      "description": "It's awesome to build sites that are inclusive and accessible to everyone. There are at least six key areas of disability we can optimize for: visual, hearing, mobility, cognition, speech and neural. Many tools and resources can help here, even if you're totally new to web accessibility.",
      "author": "Abuzar Khan",
      "date": "Nov 28, 2021",
      "duration": "4 min"
    },
    {
      "bannerSrc": "/Images/blog-4.png",
      "topic": "Database",
      "title": "Dynamically Securing Databases using Hashicorp Vault",
      "description": "Nowadays, it's hard to profoundly talk about security in the IT industry, since it has to be considered on so many different levels: from securing code chunks, securing containers, up to securing complex infrastructures and defining strong authorization and authentication policies across the enterprise.",
      "author": "Abuzar Khan",
      "date": "Nov 20, 2021",
      "duration": "4 min"
    },
    {
      "bannerSrc": "/Images/blog-5.png",
      "topic": "Web Performance",
      "title": "Adaptive Loading - Improving Web Performance on low-end devices",
      "description": "Adaptive Loading: Do not just respond based on screen size, adapt based on actual device hardware. Any user can have a slow experience. In a world with widely varying device capabilities, a 'one-size' fits all experience may not always work. Sites that delight users on high-end devices can be unusable on low-end ones, particularly on median mobile and desktop hardware and in emerging markets.",
      "author": "Abuzar Khan",
      "date": "Nov 10, 2021",
      "duration": "3 min"
    },
    {
      "bannerSrc": "/Images/blog-6.png",
      "topic": "Accessibility",
      "title": "Don't Develop Just for Yourself - A Developer's Checklist to Accessibility",
      "description": "We, as developers, tend to develop sites unconsciously for people like ourselves. If we don't actively pay attention, the sites are often accessible only for certain types of people: Sighted mouse-users, who have good fine motor skills and are good at using computers.",
      "author": "Abuzar Khan",
      "date": "Oct 25, 2021",
      "duration": "7 min"
    },
    {
      "bannerSrc": "/Images/blog-7.png",
      "topic": "Database",
      "title": "Building a Restful CRUD API with Node JS, Express, and MongoDB",
      "description": "Application Programming Interface is the abbreviation for API. An API is a software interface that enables two apps to communicate with one another. In other words, an API is a messenger that sends your request to the provider and then returns the response to you.",
      "author": "Abuzar Khan",
      "date": "Oct 15, 2021",
      "duration": "5 min"
    },
    {
      "bannerSrc": "/Images/blog-8.png",
      "topic": "Web Performance",
      "title": "Monitoring Performance with the PageSpeed Insights API",
      "description": "The PageSpeed Insights API provides free access to performance monitoring for web pages and returns data with suggestions for how to improve. The V5 API includes lab data from Lighthouse and real-world data from the Chrome User Experience Report (CrUX).",
      "author": "Abuzar Khan",
      "date": "Oct 3, 2021",
      "duration": "5 min"
    },
    {
      "bannerSrc": "/Images/blog-9.png",
      "topic": "Accessibility",
      "title": "The best web accessibility tools for developers in 2021",
      "description": "The quality of the tools you use defines the speed with which you can diagnose and resolve problems. Each year the landscape changes dramatically in web technologies, and of late the tooling for accessibility is no exception.",
      "author": "Abuzar Khan",
      "date": "Sep 13, 2021",
      "duration": "7 min"
    },
    {
      "bannerSrc": "/Images/blog-10.png",
      "topic": "Database",
      "title": "How to connect a React frontend with a NodeJS/Express backend",
      "description": "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented or non relational database (MongoDB), meaning that it's structured like JSON rather than a large excel sheet like SQL databases are.",
      "author": "Abuzar Khan",
      "authorSrc": "/Images/author.png",
      "date": "Sep 21, 2021",
      "duration": "4 min"
    },
    {
      "bannerSrc": "/Images/blog-10.png",
      "topic": "Database",
      "title": "How to connect a React frontend with a NodeJS/Express backend",
      "description": "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented or non relational database (MongoDB), meaning that it's structured like JSON rather than a large excel sheet like SQL databases are.",
      "author": "Abuzar Khan",
      "authorSrc": "/Images/author.png",
      "date": "Sep 21, 2021",
      "duration": "4 min"
    },

    {
      "bannerSrc": "/Images/blog-10.png",
      "topic": "Database",
      "title": "How to connect a React frontend with a NodeJS/Express backend",
      "description": "The MERN (MongoDB, Express, React, NodeJS) stack is very popular for making full stack applications, utilizing Javascript for both the backend and frontend as well as a document-oriented or non relational database (MongoDB), meaning that it's structured like JSON rather than a large excel sheet like SQL databases are.",
      "author": "Abuzar Khan",
      "authorSrc": "/Images/author.png",
      "date": "Sep 21, 2021",
      "duration": "4 min"
    }
  ];  
  
  function createBlogCard(data) {
    const card = document.createElement("div");
    card.classList.add("blog-card");
  
    const banner = document.createElement("div");
    banner.classList.add("blog-card-banner");
    banner.innerHTML = `<img src="${data.bannerSrc}" alt="${data.title}" width="250" class="blog-banner-img">`;
    card.appendChild(banner);
  
    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("blog-content-wrapper");
  
    contentWrapper.innerHTML = `
      <button class="blog-topic text-tiny">${data.topic}</button>
      <h3><a href="#" class="h3">${data.title}</a></h3>
      <p class="blog-text">${data.description}</p>
      <div class="wrapper-flex">
        <div class="profile-wrapper">
          <img src="./Images/author.png" alt="${data.author}" width="50">
        </div>
        <div class="wrapper">
          <a href="#" class="h4">${data.author}</a>
          <p class="text-sm">
            <time datetime="${data.date}">${data.date}</time>
            <span class="separator"></span>
            <ion-icon name="time-outline"></ion-icon>
            <time datetime="PT${data.duration}">${data.duration}</time>
          </p>
        </div>
      </div>`;
    
    card.appendChild(contentWrapper);
  
    return card;
  }
  
  // Function to initialize blog cards
  function initBlogCards() {
    const blogContainer = document.getElementById("blog");
  
    blogData.forEach(data => {
      const card = createBlogCard(data);
      blogContainer.appendChild(card);
    });
  }
  
  // Initialize blog cards
  initBlogCards();  
  