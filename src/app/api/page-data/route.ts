import { NextResponse } from "next/server";

const avatarList = [
    {
        image: "/images/avatar/avatar_1.jpg",
        title: "Sarah Johnson"
    },
    {
        image: "/images/avatar/avatar_2.jpg",
        title: "Olivia Miller"
    },
    {
        image: "/images/avatar/avatar_3.jpg",
        title: "Sophia Roberts"
    },
    {
        image: "/images/avatar/avatar_4.jpg",
        title: "Isabella Clark"
    },
];

const statsFactData = {
    number: '06', // Original section number from your theme
    name: "Achievements", // New badge text
    heading: "All Driven by a Passion for Artistic Exploration", // New Title
    description: "Our commitment to nurturing talent is reflected in our students' success.",
    scoreData: [
        {
            number: 136,
            numberValue: '+', // Suffix
            scoreDescp: "Scholars and International Wide Achievers"
        },
        {
            number: 3200,
            numberValue: '+', // Suffix
            scoreDescp: "Enrolled Students"
        },
        {
            number: 41,
            numberValue: '', // No Suffix
            scoreDescp: "Exhibitions and Art Shows"
        },
    ]
};

const servicesData = {
    // This data is for the new "Highlight Programs" section
    number: '02', // Section number from your theme
    name: "Programs", // Section badge text
    heading: "Highlight Programs",
    description: "Our programs are designed to inspire and nurture young artists. Each class is a new adventure in color, texture, and imagination.",
    data: [
        {
            id: 1,
            heading: "Little Blossoms",
            age: "2.5 - 6.5yrs old",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "default" // Standard card
        },
        {
            id: 2,
            heading: "Budding Artists",
            age: "6.5 - 7.5yrs old",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "primary" // This will be bg-primary (green)
        },
        {
            id: 3,
            heading: "Junior Picasso",
            age: "6.5 - 7.5yrs old",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "default"
        },
        {
            id: 4,
            heading: "Art for Special Needs",
            age: "", // No age specified in screenshot
            descp: "Early Art Adventures for Budding Creators",
            accentType: "default"
        },
        {
            id: 5,
            heading: "Portfolio Preparation",
            age: "",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "default"
        },
        {
            id: 6,
            heading: "Programs for Adult",
            age: "",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "default"
        },
        {
            id: 7,
            heading: "Arty Party",
            age: "",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "medium" // This will be a light green (bg-primary/10)
        },
        {
            id: 8,
            heading: "Specialist Courses",
            age: "6.5 - 7.5yrs old",
            descp: "Early Art Adventures for Budding Creators",
            accentType: "default"
        },
    ]
};

const testimonialData = {
    // New data from image_9f1e5f.jpg, formatted for the original theme
    data_1: {
        preTitle: "Hear from them",
        title: "An amazing place to learn and explore the different areas of Art teaching. I have been given many opportunities to teach...",
        author: "Penelope Shepherdson",
        company: "student",
        image: "/images/testimonial/testimonial_1.png", // Placeholder
        rating: 5 // 5 stars from screenshot
    },
    data_2: {
        preTitle: "Hear from them",
        title: "I really enjoy going to art classes here and the teachers help improve painting, sketching and mix medium skills. There's a different project every month...",
        author: "Mansha Sapra",
        company: "student",
        image: "/images/testimonial/testimonial_2.png", // Placeholder
        rating: 5 // 5 stars from screenshot
    },
    data_3: {
        preTitle: "Hear from them",
        title: "I was a student at Little Artist for approximately a year. It was an enriching experience as I was able to develop my technical skills...",
        author: "Shreya Acharya",
        company: "student",
        image: "/images/testimonial/testimonial_3.png", // Placeholder
        rating: 4 // 4 stars from screenshot
    },
};

const teamData = {
    number: '06',
    data: [
        {
            image: "/images/home/team/team-img-1.png",
            name: "Martha Finley",
            position: "Creative Director",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-2.png",
            name: "Floyd Miles",
            position: "Marketing Strategist",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-3.png",
            name: "Glenna Snyder",
            position: "Lead Designer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
        {
            image: "/images/home/team/team-img-4.png",
            name: "Albert Flores",
            position: "UX/UI Developer",
            socialLinks: [
                {
                    icon: "/images/socialIcon/twitter.svg",
                    link: "https://twitter.com"
                },
                {
                    icon: "/images/socialIcon/Be.svg",
                    link: "https://www.behance.net/"
                },
                {
                    icon: "/images/socialIcon/linkedin.svg",
                    link: "https://linkedin.com"
                }
            ]
        },
    ]
};

const pricingData = {
    data: [
        {
            planName: "Launch",
            planPrice: "$699",
            planDescp: "Ideal for startups and small businesses taking their first steps online.",
            planIncludes: ["Competitive research & insights","Wireframing and prototyping","Basic tracking setup (Google Analytics, etc.)","Standard contact form integration"]
        },
        {
            planName: "Scale",
            tag: "Most popular",
            planPrice: "$1,699",
            cancelPrice: "$2,199",
            planDescp: "Perfect for growing brands needing more customization and flexibility.",
            planIncludes: ["Everything in the Launch Plan","Custom design for up to 10 pages","Seamless social media integration","SEO enhancements for key pages"]
        },
        {
            planName: "Elevate",
            planPrice: "$3,499",
            planDescp: "Best suited for established businesses wanting a fully tailored experience.",
            planIncludes: ["Everything in the Scale Plan","E-commerce functionality (if needed)","Branded email template design","Priority support for six months after launch"]
        },
    ],
    partnerLogo: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
      ],
};

const faqData = {
    data: [
        {
            faq_que: "What services does your agency offer?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "How long does a typical project take?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you offer custom designs, or do you use templates?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "What’s the cost of a project?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        },
        {
            faq_que: "Do you provide ongoing support after project completion?",
            faq_ans: 'Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.'
        }
    ]
};

const contactData = {
    keypoint:["Always-On Customer Support","Service Across the Globe"],
    managerProfile:{
        image:"/images/avatar/avatar_1.jpg",
        name:"Courtney Henry",
        position:"Onboarding & Success Manager"
    }
}

const aboutusStats = [
    {
        number: 45,
        postfix:"+",
        title: 'Presence in global markets',
        descp: "Expanding reach across international regions with localized expertise and worldwide impact."
    },
    {
        number: 15,
        prefix: "$",
        postfix: "M",
        title: 'In strategic investments',
        descp: "Driving growth with curated partnerships and high-performing, audience-driven initiatives."
    },
    {
        number: 158,
        postfix: "+",
        title: 'Trusted brand collaborations',
        descp: "Shaping industry conversations through innovation, creativity, and lasting influence."
    },
]

const featuredArtistsData = {
    title: "We generate and challenge the ideas that shape our future",
    data: [
        {
            name: "Ahana Lara",
            description: "Parsons, Pratt Institute, RISD and Ringling College of Art and Design (President's scholarship)",
            image: "/images/home/team/team-img-1.png" // Placeholder
        },
        {
            name: "Drishya Viswanath",
            description: "SCAD, International merit scholarship to both Pratt Institute and Parsons",
            image: "/images/home/team/team-img-2.png" // Placeholder
        },
        {
            name: "Shreya Jaggi",
            description: "University of Pennsylvania",
            image: "/images/home/team/team-img-3.png" // Placeholder
        },
        {
            name: "Bhairavi C",
            description: "NAFA/LASALLE (Digital Art)",
            image: "/images/home/team/team-img-4.png" // Placeholder
        },
        // Add more if needed
        {
            name: "Ahana Lara",
            description: "Parsons, Pratt Institute, RISD and Ringling College of Art and Design (President's scholarship)",
            image: "/images/home/team/team-img-1.png" // Placeholder
        },
        {
            name: "Drishya Viswanath",
            description: "SCAD, International merit scholarship to both Pratt Institute and Parsons",
            image: "/images/home/team/team-img-2.png" // Placeholder
        },
    ]
};

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
];

const awardsData = {
    title: "Awards and Recognition",
    logos: [
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
        { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
        { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
        { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
        { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
    ],
    mainHeading: "Little Artists awarded and recognised at the education innovation conference in oxford, UK and at the UK Parliament in London",
    subText: "An innovative approach for stimulating creativity!",
    // UPDATED: Now 4 placeholder images to match the screenshot's layout
    images: [
        "/images/home/resources/resources_1.png", // Placeholder for UK Parliament
        "/images/testimonial/testimonial_3.png", // Placeholder for founder w/ MP
        "/images/home/resources/resources_2.png", // Placeholder for Oxford
        "/images/testimonial/testimonial_1.png", // Placeholder for award
    ]
};

const whatsGoingOnData = {
    sectionNumber: "06",
    sectionBadge: "Events",
    title: "What's going on",
    slides: [
        {
            image: "/images/home/resources/resources_1.png", // Placeholder for mosaic
            title: "Little Artists' Students Art Show at Paris - Savants Exhibition",
            date: "June 12 - 26, 2024",
            description: "The Savants Exhibition by Little Artists is being held at Linda Farrell Gallery, Paris. Immerse yourself in the boundless creativity of emerging artists from Singapore as they make their debut on an international platform. Join us in celebrating their extraordinary talents and witness the power of imagination unleashed through diverse artistic mediums.",
            link: "/events"
        },
        {
            image: "/images/home/resources/resources_2.png", // Placeholder for mosaic
            title: "Summer Art Camp 2025",
            date: "July 1 - 30, 2025",
            description: "Our annual summer camp is back! A month-long adventure into painting, sculpture, and digital art. Spots are limited, so enroll today to secure your child's place in the most creative camp of the summer.",
            link: "/events"
        },
    ]
};

const MenuData = [
  {
    id: 1,
    title: "About",
    subLinks: [
      { title: "Mission and Values", path: "/about" },
      { title: "About the Founder", path: "/about#founder" }, // Example anchor link
      { title: "News & Events", path: "/blog" },
    ]
  },
  {
    id: 2,
    title: "Art Courses",
    subLinks: [
      { title: "Little Blossoms", path: "/projects" },
      { title: "Junior Picasso", path: "/projects" },
      { title: "Budding Artists", path: "/projects" },
      { title: "Specialist Courses", path: "/projects" },
    ]
  },
  {
    id: 3,
    title: "Workshops",
    path: "/projects", // This is a direct link
  },
  {
    id: 4,
    title: "Holiday Programs",
    path: "/projects", // This is a direct link
  },
  {
    id: 5,
    title: "Competitions",
    path: "#", // This is a direct link
  },
  {
    id: 6,
    title: "Admissions",
    subLinks: [
      { title: "Book a Trial", path: "/contact" },
      { title: "Visit Campus", path: "/contact" },
    ]
  },
  {
    id: 7,
    title: "News & Events",
    path: "/blog", // Direct link
  },
  {
    id: 8,
    title: "Contact Us",
    path: "/contact", // Direct link
  }
];

const footerData = {
    name: "Studiova",
    tagline: "Build something together?",
    info: [
        {
            icon: "/images/footer/email-arrow.svg",
            link: "info@wrappixel.com",
            href: "https://www.wrappixel.com/"
        },
        {
            icon: "/images/footer/Location.svg",
            link: "Zwolle Netherlands",
            href: "https://maps.app.goo.gl/hpDp81fqzGt5y4bC8"
        }
    ],
    links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/#services" },
        { name: "Work", href: "/projects" },
        { name: "Terms", href: "/terms-and-conditions" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Error 404", href: "/not-found" }
    ],
    socialLinks: [
        { name: "Facebook", href: "https://www.facebook.com/" },
        { name: "Instagram", href: "https://www.instagram.com/" },
        { name: "Twitter", href: "https://x.com/" }
    ],
    copyright: "© Studiova copyright 2025"
};


export const GET = async () => {
    return NextResponse.json({
        avatarList,
        statsFactData,
        servicesData,
        testimonialData,
        teamData,
        pricingData,
        faqData,
        contactData,
        aboutusStats,
        servicesSliderData,
        featuredArtistsData,
        awardsData,
        whatsGoingOnData,
        MenuData,
        footerData,
    });
};