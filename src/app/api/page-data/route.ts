import { NextResponse } from "next/server";

const heroSliderData = {
  settings: {
    transitionDuration: 2.5,
    currentEffect: "glass",
  },
  slides: [
    {
      title: "Intro",
      mediaType: "image",
      mediaUrl: "/images/home/banner/Group 144.png", // Winter-Holiday-2025.png
      duration: 3000, // 6 seconds
    //   mainText: "Little Artists Studio Where Creativity Begins!",
    //   subText: "",
    //   buttonText: "Enrol Now",
    //   buttonLink: "/contact",
      showNavigation: true,
      showSlideNumbers: true
    },
    {
      title: "Studio    ",
      mediaType: "image",
      mediaUrl: "/images/home/banner/intro6.jpg",
      duration: 3000,
    //   subText: "Join Our Summer Camp",
    //   buttonText: "Learn More",
    //   buttonLink: "/projects",
      showNavigation: true,
      showSlideNumbers: true
    },
    {
      title: "Gallery",
      mediaType: "image",
      mediaUrl: "/images/home/banner/introduction3.jpg",
      duration: 3000,
    //   mainText: "Award-Winning",
      showNavigation: true, // Example: hide nav
      showSlideNumbers: true
    },
    {
      title: "Gallery",
      mediaType: "image",
      mediaUrl: "/images/home/banner/intro4.jpg",
      duration: 3000,
    //   mainText: "Award-Winning",
      showNavigation: true, // Example: hide nav
      showSlideNumbers: true
    },
    {
      title: "Gallery",
      mediaType: "image",
      mediaUrl: "/images/home/banner/intro5.jpg",
      duration: 3000,
    //   mainText: "Award-Winning",
      showNavigation: true, // Example: hide nav
      showSlideNumbers: true
    },
    {
      title: "Video Tour",
      mediaType: "video",
      mediaUrl: null, // Not used by shader
      coverImage: "/images/home/banner/close-guidance_new1.jpg", 
      videoUrl: "https://www.youtube.com/watch?v=UMV345N_YSs", 
      duration: 3000, // 6s timer for the *slide*
      mainText: null, // Hide text, show play button
      showNavigation: true,
      showSlideNumbers: true
    },
    {
      title: "Holiday Camp",
      mediaType: "image",
      mediaUrl: "/images/home/banner/Winter-Holiday-2025.png",
      duration: 3000, // 6 seconds
    //   mainText: "Little Artists Studio",
    //   subText: "Where Creativity Begins!",
    //   buttonText: "Enrol Now",
    //   buttonLink: "/contact",
      showNavigation: true,
      showSlideNumbers: true
    },
  ]
};

const exploreProgramsData = {
    sectionNumber: "01",
    sectionBadge: "Our Programs",
    title: "Explore Our Programs",
    description: "Embark on a transformative journey at Little Artists Institute of Fine Art, a 27-year legacy where personalized instruction meets boundless creativity. Whether you're honing your craft or exploring new techniques, our experienced instructors provide a supportive environment for students of all ages and skill levels. Our unwavering commitment to excellence shines through the remarkable journeys of our students, many of whom have been accepted into prestigious institutions worldwide. From SOTA and LASALLE to Royal College of Art (UK) and Parsons, our alumni thrive in diverse academic settings, embodying our ethos of fostering talent that knows no boundaries",
    buttonText: "EXPLORE MORE",
    buttonLink: "/projects",
    // This is the image for the right side
    mainImage: "/images/home/portfolio/d34a9e77-26e0-4015-8264-8ad3336a2084.jpeg", // Placeholder
};

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
        sectionNumber: "04",
        sectionBadge: "Featured Artists",
        title: "We generate and challenge the ideas that shape our future",
        data: [
            { name: "Aastha Bhatia", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Aastha-Bhatia-100x100.jpg" },
            { name: "Arshita Khaira", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Arshita-Khaira-100x100.jpg" },
            { name: "Corrine Lye", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Corrine-Lye.jpg" },
            { name: "Daniel Kon Ming Chun", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Daniel-Kon-Ming-Chun-100x100.jpg" },
            { name: "Hannah Abigail Tan", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Hannah-Abigail-Tan.jpg" },
            { name: "Evangeline Teng", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Evangeline-Teng.jpg" },
            { name: "Ella Tan Xuan Ling", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Ella-Tan-Xuan-Ling.jpg" },
            { name: "Davin Lee Jinlong", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Davin-Lee-Jinlong.jpg" },
            { name: "Wang Yi Jen (Phoebe)", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Wang-Yi-Jen-Phoebe.jpg" },
            { name: "Tricia Tan Si Ning", description: "Accepted for DSA", image: "https://little-artists.com/wp-content/uploads/2015/11/Tricia-Tan-Si-Ning.jpg" },
            { name: "Ryan Yu", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Ryan-Yu.jpg" },
            { name: "Rohan Chaplot", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/png-100x100.png" },
            { name: "Ryan Lee", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Ryan-Lee-100x100.jpg" },
            { name: "Rhea Srivastava", description: "Accepted for DSA", image: "https://little-artists.com/wp-content/uploads/2015/11/Rhea-Srivastava.jpg" },
            { name: "Julia Teo Ee Pin", description: "Accepted into School of the Arts, Singapore (SOTA)", image: "https://little-artists.com/wp-content/uploads/2015/11/Julia-Teo-Ee-Pin.jpg" },
            { name: "Arielle Leung", description: "Top 50 Finalist in SOTA’s Primary 6 Art Competition 2020", image: "https://little-artists.com/wp-content/uploads/2015/11/png-100x100.png" },
            { name: "Ilham Zahrah Mohamad Hazleen", description: "Accepted for DSA", image: "https://little-artists.com/wp-content/uploads/2015/11/Ilham-Zahrah-Mohamad-Hazleen.jpg" },
            { name: "Anvi Karandikar", description: "Received grade 6 in International Baccalaureate Art exam", image: "https://little-artists.com/wp-content/uploads/2015/11/png-100x100.png" },
            { name: "Janhvi", description: "Accepted for DSA – Top 10 award winner for Walking lighter to reduce your carbon foot print Pacific light Crea 8 Substainability Competation ,2018 (amongst entire primary schools in Singapore)", image: "https://little-artists.com/wp-content/uploads/2015/11/Janhvi.jpg" }
        ]
};

const ourAchieversData = {
        sectionNumber: "07",
        sectionBadge: "Gallery",
        title: "Our Achievers",
        column1: [
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.23.15-PM-1.jpeg", "alt": "Heidi Cheong" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.33-PM-2.jpeg", "alt": "WhatsApp Image 2025-07-20 at 4.46.33 PM (2)" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.35-PM-2.jpeg", "alt": "Kasie Emma Pinto" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.46-PM-2.jpeg", "alt": "Drishya Viswanath" },
        ],
        column2: [
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.23.15-PM.jpeg", "alt": "Leah Ho SOTA" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.34-PM-1.jpeg", "alt": "Kaylarosen" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.36-PM.jpeg", "alt": "Ameera Stacey" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.47-PM-1.jpeg", "alt": "Shruti Shah" },
        ],
        column3: [
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.23-PM-2.jpeg", "alt": "Anusha Lara" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.35-PM-1.jpeg", "alt": "Aarna Shah" },
            { "src": "https://little-artists.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-20-at-4.46.42-PM-2.jpeg", "alt": "Kaasvi Oberoi" },
        ]
};

const studentArtGalleryData = {
        sectionNumber: "08",
        sectionBadge: "Gallery",
        title: "Student Art Gallery",
        row1: [
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/Screenshot-134-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "Screenshot-134" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/image_2022_07_01T10_13_01_830Z-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "image_2022_07_01T10_13_01_830Z" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/Screenshot-136-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "Screenshot-136" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/image_2022_07_01T10_15_59_563Z-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "image_2022_07_01T10_15_59_563Z" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/Screenshot-137-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "Screenshot-137" },
        ],
        row2: [
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/image_2022_07_01T10_13_08_615Z-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "image_2022_07_01T10_13_08_615Z" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/image_2022_07_01T10_13_20_978Z-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "image_2022_07_01T10_13_20_978Z" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/Screenshot-140-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "Screenshot-140" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/Screenshot-141-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "Screenshot-141" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/image_2022_07_01T10_11_23_023Z-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "image_2022_07_01T10_11_23_023Z" },
        ],
        row3: [
            { "src": "https://little-artists.com/wp-content/uploads/2015/11/WhatsApp-Image-2022-07-01-at-5.21.41-PM-300x300.jpeg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "WhatsApp Image 2022-07-01 at 5.21.41 PM" },
            { "src": "https://little-artists.com/wp-content/uploads/2015/11/WhatsApp-Image-2022-07-01-at-5.21.54-PM-1-300x300.jpeg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "WhatsApp Image 2022-07-01 at 5.21.54 PM (1)" },
            { "src": "https://little-artists.com/wp-content/uploads/2015/11/WhatsApp-Image-2022-07-01-at-5.21.55-PM-2-300x300.jpeg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "WhatsApp Image 2022-07-01 at 5.21.55 PM (2)" },
            { "src": "https://little-artists.com/wp-content/uploads/2015/11/WhatsApp-Image-2022-07-01-at-5.21.55-PM-1-300x300.jpeg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "WhatsApp Image 2022-07-01 at 5.21.55 PM (1)" },
            { "src": "https://little-artists.com/wp-content/uploads/2022/09/Screenshot-144-300x300.jpg", "title": "Student Art", "description": "Artwork by Little Artists student", "alt": "Screenshot-144" }
        ]
};

const servicesSliderData = [
    "Branding", "Web development", "Agency","Content creation","SaaS","Motion & 3d modeling","Photography"
];

const awardsData = {
        title: "Awards and Recognition",
        logos: [
            { light: "https://cdn.ischoolconnect.com/logo/2408.png", dark: "https://cdn.ischoolconnect.com/logo/2408.png" },
            { light: "https://little-artists.com/wp-content/uploads/2023/07/imageedit_8_5931774938-1.png", dark: "https://little-artists.com/wp-content/uploads/2023/07/imageedit_8_5931774938-1.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/Asia-Excellence-Award.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/Asia-Excellence-Award.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/SME-2014-AWARD.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/SME-2014-AWARD.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/SQB-2013-14.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/SQB-2013-14.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/2013-award.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/2013-award.png" },
            // https://cdn.ischoolconnect.com/logo/2408.png
             { light: "https://cdn.ischoolconnect.com/logo/2408.png", dark: "https://cdn.ischoolconnect.com/logo/2408.png" },
            { light: "https://little-artists.com/wp-content/uploads/2023/07/imageedit_8_5931774938-1.png", dark: "https://little-artists.com/wp-content/uploads/2023/07/imageedit_8_5931774938-1.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/Asia-Excellence-Award.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/Asia-Excellence-Award.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/SME-2014-AWARD.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/SME-2014-AWARD.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/SQB-2013-14.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/SQB-2013-14.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/2013-award.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/2013-award.png" },
             { light: "https://cdn.ischoolconnect.com/logo/2408.png", dark: "https://cdn.ischoolconnect.com/logo/2408.png" },
            { light: "https://little-artists.com/wp-content/uploads/2023/07/imageedit_8_5931774938-1.png", dark: "https://little-artists.com/wp-content/uploads/2023/07/imageedit_8_5931774938-1.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/Asia-Excellence-Award.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/Asia-Excellence-Award.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/SME-2014-AWARD.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/SME-2014-AWARD.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/SQB-2013-14.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/SQB-2013-14.png" },
            { light: "https://little-artists.com/wp-content/uploads/2020/04/2013-award.png", dark: "https://little-artists.com/wp-content/uploads/2020/04/2013-award.png" },
        ],
        mainHeading: "Little Artists awarded and recognised at the education innovation conference in oxford, UK and at the UK Parliament in London",
        subText: "An innovative approach for stimulating creativity!",
        images: [
            "/images/home/statsfact/pexels-harry-shum-17627821-13434134 1.png",
            "/images/home/statsfact/collage-for-website 1.png",
            "/images/home/statsfact/pexels-shaun-iwasawa-464780865-16009514 1.png",
            "/images/home/statsfact/collage-for-website 2.png",
        ]
};

const whatsGoingOnData = {
    sectionNumber: "06",
    sectionBadge: "Events",
    title: "What's going on",
    slides: [
        {
            image: "/images/home/banner/Winter-Holiday-2025.png", 
            title: "Winter Holiday Program 2025",
            date: "Nov 22, 2025 - Jan 15, 2026",
            description: "Our annual winter camp is back! A month-long adventure into painting, sculpture, and digital art. Spots are limited, so enroll today to secure your child's place in the most creative camp of the winter.",
            link: "/events"
        },
        {
            image: "/images/home/banner/whatsgoingonparisexhibition1.png", // Placeholder for mosaic
            title: "Little Artists' Students Art Show at Paris - Savants Exhibition",
            date: "June 12 - 26, 2024",
            description: "The Savants Exhibition by Little Artists is being held at Linda Farrell Gallery, Paris. Immerse yourself in the boundless creativity of emerging artists from Singapore as they make their debut on an international platform. Join us in celebrating their extraordinary talents and witness the power of imagination unleashed through diverse artistic mediums.",
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
        exploreProgramsData,
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
        heroSliderData,
        ourAchieversData,
        studentArtGalleryData,
    });
};