import { NextResponse } from "next/server";

export const GET = async () => {

    // --- Original "Studiova" Data (for components we still use) ---
    const avatarList = [
        { image: "/images/avatar/avatar_1.jpg" },
        { image: "/images/avatar/avatar_2.jpg" },
        { image: "/images/avatar/avatar_3.jpg" },
        { image: "/images/avatar/avatar_4.jpg" },
    ];
    
    const statsFactData = {
        number: '01',
        name: "Stats & facts",
        heading: "High quality web design solutions you can trust.",
        description: "When selecting a web design agency, it's essential to consider its reputation, experience, and the specific needs of your project.",
        scoreData: [
            { number: 40, numberValue: 'K', scoreDescp: "People who have launched their websites" },
            { number: 238, numberValue: '', scoreDescp: "Experienced professionals ready to assist" },
            { number: 3, numberValue: 'M', scoreDescp: "Support through messages and live consultations" },
        ]
    };
    
    const teamData = {
        title: "Meet our team",
        description: "We are a team of passionate professionals who are dedicated to providing the best services to our clients.",
        members: [
            { name: "John Smith", role: "CEO", image: "/images/home/team/team-img-1.png" },
            { name: "Jane Doe", role: "CTO", image: "/images/home/team/team-img-2.png" },
            { name: "Peter Jones", role: "CMO", image: "/images/home/team/team-img-3.png" },
            { name: "Mary Williams", role: "CFO", image: "/images/home/team/team-img-4.png" },
        ]
    };
    
    const pricingData = {
        partnerLogo: [
            { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
            { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
            { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
            { light: "/images/home/pricing/partner-4.svg", dark: "/images/home/pricing/partner-dark-4.svg" },
            { light: "/images/home/pricing/partner-5.svg", dark: "/images/home/pricing/partner-dark-5.svg" },
            { light: "/images/home/pricing/partner-1.svg", dark: "/images/home/pricing/partner-dark-1.svg" },
            { light: "/images/home/pricing/partner-2.svg", dark: "/images/home/pricing/partner-dark-2.svg" },
            { light: "/images/home/pricing/partner-3.svg", dark: "/images/home/pricing/partner-dark-3.svg" },
        ],
        // ... (rest of original pricingData if needed)
    };
    
    const faqData = [
        { value: "item-1", title: "How do I get started with your web design services?", description: "To get started, simply contact us through our website or email. We'll schedule a consultation to discuss your project, goals, and requirements. From there, we'll provide you with a detailed proposal and timeline." },
        { value: "item-2", title: "What is the typical timeline for a web design project?", description: "The timeline for a web design project varies depending on its complexity. On average, a standard website takes 4-6 weeks from concept to launch. We'll provide a more accurate timeline after our initial consultation." },
        { value: "item-3", title: "Do you offer website maintenance services?", description: "Yes, we offer ongoing website maintenance plans to ensure your site remains secure, up-to-date, and optimized for performance. We handle everything from content updates to security monitoring." },
        { value: "item-4", title: "Can you help with website redesigns?", description: "Absolutely! We specialize in website redesigns that improve aesthetics, functionality, and user experience. We'll work with you to create a modern, engaging, and effective website." },
        { value: "item-5", title: "What platforms do you use for web development?", description: "We primarily use modern web technologies like React, Next.js, and TypeScript. For content management, we can integrate with headless CMS platforms like Strapi or Contentful, depending on your needs." },
    ];
    
    const contactData = {
        email: "info@studiova.com",
        phone: "+1-212-456-7890",
        address: "123 Main St, New York, NY 10001",
    };
    
    const aboutusStats = [
        { number: 4.8, numberValue: '', scoreDescp: "Average rating on Clutch" },
        { number: 200, numberValue: '+', scoreDescp: "Projects completed worldwide" },
        { number: 98, numberValue: '%', scoreDescp: "Client satisfaction rate" },
    ];
    
    const servicesSliderData = [
        {
            title: "Brand Identity",
            description: "We craft compelling brand identities that resonate with your target audience and elevate your market presence. From logos to brand guidelines, we ensure consistency and impact.",
            image: "/images/home/services/services_1.png",
            features: [
                "Logo & Identity Design",
                "Brand Strategy",
                "Brand Guidelines",
                "Tone of Voice",
            ],
        },
        // ... (other services slider data if needed)
    ];

    // --- NEW/UPDATED Data Objects for Homepage ---

    const heroSliderData = {
        settings: {
          transitionDuration: 2.5,
          currentEffect: "glass",
        },
        slides: [
          {
            title: "Studio",
            mediaType: "image",
            mediaUrl: "/images/home/banner/banner-bg-img.png",
            duration: 6000,
            mainText: "Little Artists Studio",
            subText: "Where Creativity Begins!",
            buttonText: "Enrol Now",
            buttonLink: "/contact",
            showNavigation: true,
            showSlideNumbers: true
          },
          {
            title: "Video Tour",
            mediaType: "video",
            mediaUrl: null,
            coverImage: "/images/home/portfolio/portfolio_img_3.png",
            videoUrl: "https://www.youtube.com/watch?v=cyL04hLFgnw",
            duration: 6000,
            mainText: null,
            showNavigation: true,
            showSlideNumbers: true
          },
          {
            title: "Holiday Camp",
            mediaType: "image",
            mediaUrl: "/images/home/portfolio/portfolio_img_1.png",
            duration: 6000,
            subText: "Join Our Summer Camp",
            buttonText: "Learn More",
            buttonLink: "/projects",
            showNavigation: true,
            showSlideNumbers: true
          },
          {
            title: "Gallery",
            mediaType: "image",
            mediaUrl: "/images/home/portfolio/portfolio_img_2.png",
            duration: 6000,
            mainText: "Award-Winning",
            showNavigation: false,
            showSlideNumbers: true
          }
        ]
    };

    const exploreProgramsData = {
        sectionNumber: "01",
        sectionBadge: "Our Programs",
        title: "Explore Our Programs",
        description: "Embark on a transformative journey at Little Artists Institute of Fine Art, a 27-year legacy where personalized instruction meets boundless creativity. Whether you're honing your craft or exploring new techniques, our experienced instructors provide a supportive environment for students of all ages and skill levels. Our unwavering commitment to excellence shines through the remarkable journeys of our students, many of whom have been accepted into prestigious institutions worldwide. From SOTA and LASALLE to Royal College of Art (UK) and Parsons, our alumni thrive in diverse academic settings, embodying our ethos of fostering talent that knows no boundaries",
        buttonText: "EXPLORE MORE",
        buttonLink: "/projects",
        mainImage: "/images/home/portfolio/portfolio_img_2.png",
    };

    const servicesData = {
        number: '02',
        name: "Programs",
        heading: "Highlight Programs",
        description: "Our programs are designed to inspire and nurture young artists. Each class is a new adventure in color, texture, and imagination.",
        data: [
            { id: 1, heading: "Little Blossoms", age: "2.5 - 6.5yrs old", descp: "Early Art Adventures for Budding Creators", accentType: "default" },
            { id: 2, heading: "Budding Artists", age: "6.5 - 7.5yrs old", descp: "Early Art Adventures for Budding Creators", accentType: "primary" },
            { id: 3, heading: "Junior Picasso", age: "6.5 - 7.5yrs old", descp: "Early Art Adventures for Budding Creators", accentType: "default" },
            { id: 4, heading: "Art for Special Needs", age: "", descp: "Early Art Adventures for Budding Creators", accentType: "default" },
            { id: 5, heading: "Portfolio Preparation", age: "", descp: "Early Art Adventures for Budding Creators", accentType: "default" },
            { id: 6, heading: "Programs for Adult", age: "", descp: "Early Art Adventures for Budding Creators", accentType: "default" },
            { id: 7, heading: "Arty Party", age: "", descp: "Early Art Adventures for Budding Creators", accentType: "medium" },
            { id: 8, heading: "Specialist Courses", age: "6.5 - 7.5yrs old", descp: "Early Art Adventures for Budding Creators", accentType: "default" },
        ]
    };
    
    const holidayProgramsData = {
        sectionNumber: "03",
        sectionBadge: "Short Courses",
        title: "Holiday Programs/ Short Courses",
        buttonText: "EXPLORE MORE",
        buttonLink: "/projects",
        mainImage: "/images/home/portfolio/portfolio_img_1.png",
        features: [
            { title: "DSA/ SOTA Portfolio Prep", description: "Specialised training for Direct School Admission portfolios." },
            { title: "GCE ‘O’ & ‘A’ Level Art Prep", description: "Comprehensive guidance for GCE Art examinations." },
            { title: "IB & IGCSE Art Prep", description: "Expert support for International Baccalaureate and IGCSE art." }
        ]
    };
    
    // --- THIS IS THE UPDATED OBJECT ---
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

    const testimonialData = {
        data_1: {
            preTitle: "Hear from them",
            title: "An amazing place to learn and explore the different areas of Art teaching. I have been given many opportunities to teach...",
            author: "Penelope Shepherdson",
            company: "student",
            image: "/images/testimonial/testimonial_1.png",
            rating: 5
        },
        data_2: {
            preTitle: "Hear from them",
            title: "I really enjoy going to art classes here and the teachers help improve painting, sketching and mix medium skills. There's a different project every month...",
            author: "Mansha Sapra",
            company: "student",
            image: "/images/testimonial/testimonial_2.png",
            rating: 5
        },
        data_3: {
            preTitle: "Hear from them",
            title: "I was a student at Little Artist for approximately a year. It was an enriching experience as I was able to develop my technical skills...",
            author: "Shreya Acharya",
            company: "student",
            image: "/images/testimonial/testimonial_3.png",
            rating: 4
        },
    };

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
                image: "/images/home/resources/resources_1.png",
                title: "Little Artists' Students Art Show at Paris - Savants Exhibition",
                date: "June 12 - 26, 2024",
                description: "The Savants Exhibition by Little Artists is being held at Linda Farrell Gallery, Paris. Immerse yourself in the boundless creativity of emerging artists from Singapore as they make their debut on an international platform. Join us in celebrating their extraordinary talents and witness the power of imagination unleashed through diverse artistic mediums.",
                link: "/events"
            },
            // ... (other slides)
        ]
    };

    // --- Return all data ---
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
        heroSliderData,
        exploreProgramsData,
        holidayProgramsData,
        featuredArtistsData,
        awardsData,
        whatsGoingOnData
    });
};