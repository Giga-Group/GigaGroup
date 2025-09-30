import gcv from '../images/projects/gcv.jpg'
import gcc from '../images/projects/gcc.jpg'
import gme from '../images/projects/gme.jpg'
import gbcImage from '../images/projects/gbc-grid.jpg'
import cprImage from '../images/projects/cpr-grid.jpg'
import wtcImage from '../images/projects/wtc-grid.jpg'

import gccM1 from '../images/project-single/gcc-m1.jpg'
import gcvM1 from '../images/project-single/gcv-m1.jpg'
import gbcM1 from '../images/project-single/gbc-m1.jpg'
import gmeM1 from '../images/project-single/gme-m1.jpg'
import cprM1 from '../images/project-single/cpr-m1.jpg'
import wtcM1 from '../images/project-single/wtc-m1.jpg'


import gcvS1 from '../images/project-single/gcv-s1.jpg'
import gcvS2 from '../images/project-single/gcv-s2.jpg'

import gccS1 from '../images/project-single/gcc-s1.jpg'
import gccS2 from '../images/project-single/gcc-s2.jpg'

import wtcS1 from '../images/project-single/wtc-s1.jpg'
import wtcS2 from '../images/project-single/wtc-s2.jpg'

import gbcS1 from '../images/project-single/gbc-s1.jpg'
import gbcS2 from '../images/project-single/gbc-s2.jpg'

import cprS1 from '../images/project-single/cpr-s1.jpg'
import cprS2 from '../images/project-single/cpr-s2.jpg'

import gmeS1 from '../images/project-single/gme-s1.jpg'
import gmeS2 from '../images/project-single/gme-s2.jpg'

import gcvBanner from '../images/banner/gcv-banner.jpg'
import gccBanner from '../images/banner/gcc-banner.jpg'
import gmeBanner from '../images/banner/gme-banner.jpg'
import gbcBanner from '../images/banner/gbc-banner.jpg'
import cprBanner from '../images/banner/cpr-banner.jpg'
import wtcBanner from '../images/banner/wtc-banner.jpg'

import gcbsImage from '../images/projects/gcbs-m1.jpeg'

import gcbsBanner from '../images/banner/wtc-banner.jpg'
import gcbsS1 from '../images/project-single/wtc-s1.jpg'
import gcbsS2 from '../images/project-single/wtc-s2.jpg'
import gcbsM1 from '../images/project-single/gcbs-m1.jpeg'

const Projects = [
    {
        Id: '1',
        pImg: gcv,
        coverImage: gcvBanner,
        ps1img: gcvM1,
        psub1img1: gcvS1,
        psub1img2: gcvS2,
        title: 'Goldcrest Views',
        subTitle: 'Luxury Residential Complex',
        
        // Main description paragraphs (existing)
        description: [
            "Goldcrest Views is a landmark luxury residential project by Al-Ghurair Giga, featuring seven magnificent 40-storey towers that redefine Islamabad's skyline. Located in the prime heart of Giga City adjacent to Giga Mall, this Dubai-inspired development offers studios, 1-4 bedroom apartments, penthouses, and duplexes with smart-home technology, rooftop pools, and world-class amenities.",
            "With flexible 5-year payment plans and dedicated rental management services for overseas investors, Goldcrest Views combines luxury living with smart investment opportunities. The project features central HVAC, high-speed elevators, podium gardens, daycare facilities, and gourmet services, creating a self-sustained premium community with excellent connectivity to twin cities."
        ],

        // Project details sidebar information
        projectDetails: {
            location: "Giga City, Islamabad",
            returnPotential: "High Returns",  
            interiors: "Stylish Modern Finishings",  
            parking: "Covered Spaces",  
            amenities: "World-Class Facilities",  
            security: "24/7 Surveillance",  
            connectivity: "GT Road / Isb Highway",  
            status: "In Progress",              
            projectType: "Luxury Residential",
            category: "Residential, Investment"
        },

        // Design Philosophy - NEW SECTION
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Our architectural vision combines Dubai-inspired luxury with Islamabad's natural beauty, creating a harmonious blend of modern sophistication and timeless elegance. We integrate cutting-edge technology with sustainable design principles, ensuring every element serves both aesthetic and functional purposes while maintaining environmental responsibility and community harmony.",
            philosophy: []
        },

        // Project features and design philosophy
        projectFeatures: {
            title: "Premium Amenities & Features",
            description: "World-class facilities designed to enhance your lifestyle and provide exceptional comfort and convenience.",
            features: [
                "Seven 40-storey residential towers with Dubai-inspired architecture",
                "Rooftop infinity pools with panoramic city and Margalla Hills views",
                "Smart home automation systems in every residential unit",
                "24/7 concierge services and advanced security systems",
                "Landscaped podium gardens and dedicated children's play areas"
            ]
        },

        // Project amenities
        projectAmenities: {
            title: "World-Class Amenities",
            description: "Comprehensive facilities that create a self-sustained premium community.",
            amenities: [
                "Swimming Pool - Temperature-controlled pool for exercise and relaxation",
                "Private Security - 24/7 protection with trained staff and surveillance",
                "Parking Space - Dedicated on-site parking zones with direct building access",
                "Podium Level - Elevated deck for open-air lounging and social gatherings"
            ]
        },

        // Why choose this project
        whyChoose: {
            title: "Why Choose Goldcrest Views",
            description: "Unique advantages that make this project the premier choice for luxury living in Islamabad.",
            reasons: [
                "Upgraded version of award-winning Dubai Goldcrest Views design",
                "Only project in Pakistan with seven 40-storey residential towers",
                "Integrated with Giga Mall for unmatched convenience",
                "Advanced smart home technology and sustainable practices"
            ]
        },

        // Investment highlights
        investmentHighlights: {
            title: "Investment Opportunities",
            description: "Smart investment options with excellent returns and professional management.",
            highlights: [
                "Flexible 5-year payment plans with minimal down payment options",
                "Professional rental management services for overseas investors",
                "High capital appreciation potential in DHA's prime location",
                "Guaranteed rental yields through property management services",
                "Ready for possession with complete infrastructure",
                "Strong demand in Islamabad's fastest-growing residential area"
            ]
        },

        // Location advantages
        locationAdvantages: {
            title: "Prime Location Benefits",
            description: "Strategic positioning that offers unparalleled access to all essential facilities.",
            advantages: [
                "Located in Giga City, Islamabad's most exclusive neighborhood",
                "Direct access to Giga Mall's 200+ brands and facilities",
                "Excellent connectivity to twin cities and major highways",
                "Proximity to top educational institutions and healthcare facilities",
                "Just 30 minutes from Islamabad International Airport",
                "Stunning views of Margalla Hills and city skyline",
                "Access to business districts and diplomatic enclave"
            ]
        },

        testimonial: {
            quote: "Believe me, the units that were built 8–10 years ago, people bought them at a very low price — around 3.5 million rupees. Now, those same flats are worth nearly 17.5 million.",
            author: "Behroze Sabzwari",
            designation: "Pakistani Actor",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: true,
            projectAmenities: true,
            whyChoose: true,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: true
        }
    },

    {
        Id: '2',
        pImg: gcc,
        coverImage: gccBanner,
        ps1img: gccM1,
        psub1img1: gccS1,
        psub1img2: gccS2,
        title: 'Goldcrest Commercial',
        subTitle: 'Premium Commercial Complex',
        
        description: [
            "Goldcrest Commercial represents the next phase of Al-Ghurair Giga's commercial development strategy, featuring state-of-the-art office spaces and retail outlets designed for modern businesses. Located within the thriving Giga City ecosystem, this premium commercial complex offers cutting-edge infrastructure, high-speed elevators, central air conditioning, and smart building technology to meet contemporary business requirements.",
            "The development provides flexible office layouts, conference facilities, retail spaces, and dedicated parking with excellent connectivity to major business districts. With its strategic location near Giga Mall and residential projects, Goldcrest Commercial creates a perfect work-life balance environment, attracting leading corporations and businesses seeking premium commercial real estate in Islamabad's fastest-growing commercial hub."
        ],

        projectDetails: {
            location: "Giga City, Islamabad",
            returnPotential: "High Returns",  
            interiors: "Stylish Modern Finishings",  
            parking: "Covered Spaces",  
            amenities: "World-Class Facilities",  
            security: "24/7 Surveillance",  
            connectivity: "GT Road / Isb Highway",  
            status: "In Progress",              
            projectType: "Commercial Complex",
            category: "Commercial, Retail"
        },

        // Design Philosophy for Commercial
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Our commercial design philosophy focuses on creating flexible, efficient spaces that adapt to modern business needs while maintaining aesthetic appeal and professional standards. We prioritize technology integration, sustainable practices, and community harmony to ensure long-term operational efficiency and business success.",
            philosophy: []
        },

        projectFeatures: {
            title: "Commercial Excellence Features",
            description: "State-of-the-art infrastructure designed for modern business operations and success.",
            features: [
                "Prime location in Giga City with high foot traffic",
                "Flexible commercial shops suitable for various business types",
                "Dedicated medical clinic spaces with healthcare infrastructure",
                "Modern HVAC systems and high-speed internet connectivity",
                "24/7 professional security and property management services"
            ]
        },

        projectAmenities: {
            title: "Business-Centric Amenities",
            description: "Professional facilities that enhance business operations and customer experience.",
            amenities: [
                "High-Speed Internet - Fiber-optic connectivity for modern businesses",
                "Central HVAC - Climate control for optimal working environment",
                "Security Systems - Professional surveillance and access control",
                "Parking Facilities - Dedicated spaces for customers and staff"
            ]
        },

        whyChoose: {
            title: "Why Choose Goldcrest Commercial",
            description: "Strategic advantages that make this the premier commercial investment in Giga City.",
            reasons: [
                "Only new commercial project in established Giga City",
                "Direct access to thousands of potential customers",
                "Proven track record of Giga Group in commercial developments",
                "Modern infrastructure for contemporary business operations"
            ]
        },

        investmentHighlights: {
            title: "Commercial Investment Benefits",
            description: "Excellent investment opportunities with high returns and professional management.",
            highlights: [
                "Pre-launch pricing with early bird investment advantages",
                "High rental yields in established commercial district",
                "Flexible payment plans for commercial investors",
                "Strong appreciation potential in DHA's growing market",
                "Professional property management ensuring quality tenants",
                "Established customer base from surrounding residential projects"
            ]
        },

        locationAdvantages: {
            title: "Strategic Commercial Location",
            description: "Prime positioning that maximizes business opportunities and customer accessibility.",
            advantages: [
                "Located beside GT Road for maximum visibility and accessibility",
                "Direct access to over 2,000 residential apartments",
                "High foot traffic from Giga Mall visitors and residents",
                "Excellent connectivity to major business districts",
                "Proximity to healthcare facilities and educational institutions",
                "Access to established commercial infrastructure",
                "Growing commercial district with increasing demand"
            ]
        },

        testimonial: {
            quote: "We have visited Giga City and Goldcrest, and Alhamdulillah, Javed Sheikh and I have made a booking.",
            author: "Behroz Sabzwari",
            designation: "Pakistani Actor",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: true,
            projectAmenities: true,
            whyChoose: true,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: true
        }
    },

    {
        Id: '3',
        pImg: gme,
        coverImage: gmeBanner,
        ps1img: gmeM1,
        psub1img1: gmeS1,
        psub1img2: gmeS2,
        title: 'Giga Mall Extension',
        subTitle: 'Mixed-Use Development',
        
        description: [
            "Giga Mall Extension is an ambitious 30-storey mixed-use development adjacent to the original Giga Mall in Giga City, Islamabad. This innovative project integrates luxury hotel apartments, premium retail outlets, fine dining restaurants, and Pakistan's first vertical commercial market. The extension features modern amenities and prime location connectivity, making it a landmark destination for shopping, dining, and accommodation.",
            "The development's crown jewel is a beautifully designed mosque on the top floors, offering panoramic views of the twin cities and Margalla Hills. With its unique blend of commercial, hospitality, and retail spaces, Giga Mall Extension aims to redefine urban living and commerce, creating a vibrant hub that attracts both local residents and international visitors to Islamabad's premier lifestyle destination."
        ],

        projectDetails: {
            location: "Giga City, Islamabad",
            projectType: "Mixed-Use Development",
            returnPotential: "High Returns",  
            interiors: "Stylish Modern Finishings",  
            parking: "Covered Spaces",  
            amenities: "World-Class Facilities",  
            security: "24/7 Surveillance",  
            connectivity: "GT Road / Isb Highway",  
            status: "In Progress",              
            category: "Retail, Hospitality"
        },

        // Design Philosophy for Mixed-Use
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Our mixed-use design philosophy creates a harmonious integration of multiple functions, blending commercial, residential, and spiritual spaces into one cohesive development that serves diverse community needs. We focus on innovative vertical integration, seamless functional flow, and sustainable development principles to create a landmark destination.",
            philosophy: []
        },

        projectFeatures: {
            title: "Innovative Mixed-Use Features",
            description: "Revolutionary design that combines multiple functions in one iconic development.",
            features: [
                "30-storey mixed-use tower with luxury hotel apartments",
                "Pakistan's first vertical commercial market concept",
                "State-of-the-art cinema complex and entertainment facilities",
                "Magnificent mosque on upper floors with panoramic views",
                "Diverse dining options and luxury hospitality services"
            ]
        },

        projectAmenities: {
            title: "Comprehensive Mixed-Use Amenities",
            description: "World-class facilities that serve multiple purposes and user groups.",
            amenities: [
                "Luxury Hotel - Premium accommodation with city views",
                "Retail Spaces - Modern shopping environment for international brands",
                "Dining Options - Fine dining restaurants and casual eateries",
                "Entertainment - Cinema complex and recreational facilities"
            ]
        },

        whyChoose: {
            title: "Why Choose Giga Mall Extension",
            description: "Unique advantages that make this Pakistan's most innovative mixed-use development.",
            reasons: [
                "Pakistan's first truly integrated mixed-use development",
                "Direct connection to established Giga Mall success",
                "Unique combination of retail, hospitality, and spiritual spaces",
                "Iconic mosque offering panoramic views as landmark feature"
            ]
        },

        investmentHighlights: {
            title: "Mixed-Use Investment Opportunities",
            description: "Diverse investment options with multiple revenue streams and high returns.",
            highlights: [
                "Unique mixed-use investment with multiple revenue streams",
                "Hotel apartment investment with hospitality management",
                "High appreciation potential in limited mixed-use developments",
                "Strong rental yields from diverse tenant mix",
                "Direct integration with successful Giga Mall",
                "Growing demand for integrated lifestyle destinations",
                "Professional management across all sectors"
            ]
        },

        locationAdvantages: {
            title: "Prime Mixed-Use Location",
            description: "Strategic positioning that maximizes the benefits of mixed-use development.",
            advantages: [
                "Directly connected to successful Giga Mall",
                "Proven foot traffic and customer base",
                "Panoramic views of Margalla Hills from upper floors",
                "Integrated access to shopping, dining, and entertainment",
                "Excellent connectivity to major transportation networks",
                "Proximity to residential communities and business districts",
                "Landmark destination in DHA Phase II"
            ]
        },

        testimonial: {
            quote: "The Goldcrest model apartments are so beautiful, it feels as if you are living in a first-world country. Become friends with Giga and let's make Pakistan stronger.",
            author: "Ushna Shah",
            designation: "Prominent Actress",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: true,
            projectAmenities: true,
            whyChoose: true,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: true
        }
    },

    {
        Id: '4',
        pImg: gbcImage,
        coverImage: gbcBanner,
        ps1img: gbcM1,
        psub1img1: gbcS1,
        psub1img2: gbcS2,
        title: 'Giga Business Complex',
        subTitle: 'Corporate Hub',
        
        description: [
            "Giga Business Complex stands as a premier corporate destination within the Giga City ecosystem, offering world-class office spaces designed for modern enterprises and multinational corporations. The complex features cutting-edge infrastructure, high-speed internet connectivity, advanced security systems, and flexible workspace solutions that cater to diverse business requirements from startups to established corporations seeking premium commercial real estate.",
            "With its strategic location providing excellent connectivity to major business districts and transportation networks, Giga Business Complex creates an ideal environment for business growth and networking. The development includes conference facilities, executive lounges, retail services, and ample parking, establishing itself as Islamabad's preferred business address for companies looking to enhance their corporate presence and operational efficiency."
        ],

        projectDetails: {
            location: "Giga City, Islamabad",
            returnPotential: "High Returns",  
            interiors: "Stylish Modern Finishings",  
            parking: "Covered Spaces",  
            amenities: "World-Class Facilities",  
            security: "24/7 Surveillance",  
            connectivity: "GT Road / Isb Highway",  
            status: "In Progress",              
            projectType: "Corporate Hub",
            category: "Corporate, Business"
        },

        // Design Philosophy for Corporate
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Our corporate design blends professional credibility, efficient space use, modern technology, and flexible layouts. Positioned above Giga Mall, it fosters networking, enhances brand image, and offers future-ready infrastructure to support evolving business needs",
            philosophy: []
        },

        projectFeatures: {
            title: "Corporate Excellence Features",
            description: "Professional infrastructure designed for modern business operations and success.",
            features: [
                "Flexible office spaces located above successful Giga Mall",
                "State-of-the-art CCTV security and professional access control",
                "Covered parking facilities with dedicated tenant spaces",
                "Central HVAC systems and dedicated high-speed elevators",
                "Exclusive business clubs and networking facilities",
                "High-speed internet connectivity for modern businesses",
                "Conference facilities and meeting rooms",
                "Executive lounges and business support services"
            ]
        },

        projectAmenities: {
            title: "Business-Centric Amenities",
            description: "Professional facilities that enhance corporate operations and employee satisfaction.",
            amenities: [
                "Office Spaces - Flexible layouts for different business sizes",
                "Conference Facilities - Modern meeting rooms and presentation areas",
                "Security Systems - Professional surveillance and access control",
                "Parking - Dedicated parking spaces for tenants and visitors",
                "HVAC Systems - Climate control for optimal working environment",
                "High-Speed Internet - Fiber-optic connectivity for businesses",
                "Business Lounges - Executive spaces for networking and relaxation",
                "Support Services - Administrative and maintenance assistance"
            ]
        },

        whyChoose: {
            title: "Why Choose Giga Business Complex",
            description: "Strategic advantages that make this the premier corporate destination in Islamabad.",
            reasons: [
                "Unique location above successful Giga Mall",
                "Established business community with networking opportunities",
                "Proven Al Ghurair Giga track record in commercial projects",
                "Modern infrastructure for contemporary business requirements",
                "Strategic investment in Islamabad's most successful commercial district",
                "Professional property management ensuring quality tenants",
                "Growing business district with increasing demand",
                "Excellent connectivity to major business networks"
            ]
        },

        investmentHighlights: {
            title: "Corporate Investment Benefits",
            description: "Excellent investment opportunities with strong returns and professional management.",
            highlights: [
                "Established corporate destination with proven track record",
                "Flexible 18-month installment plans for office ownership",
                "Strong rental yields in prime business location",
                "Professional property management ensuring consistent returns",
                "Growing business district with increasing demand",
                "High-quality tenants from established business community",
                "Strong appreciation potential in prime location"
            ]
        },

        locationAdvantages: {
            title: "Strategic Business Location",
            description: "Prime positioning that maximizes business opportunities and corporate connectivity.",
            advantages: [
                "Located directly above Giga Mall for business convenience",
                "Access to 200+ retail and dining options",
                "Ample parking and professional business environment",
                "Excellent connectivity to major business districts",
                "Proximity to diplomatic enclave and government institutions",
                "Access to transportation networks and major highways",
                "Growing business district with increasing corporate presence"
            ]
        },

        testimonial: {
            quote: "I paid a visit to the Goldcrest Apartments and honestly, I did not feel like I was visiting an apartment in Pakistan, because every small detail has been made so perfectly. I know I will be coming here and staying here myself. I wish everyone in this group the very best of luck. I cannot wait to come and stay here. Last but not least, become friends of Giga and let's make Pakistan stronger.",
            author: "Kubra Khan",
            designation: "Pakistani Actress",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: true,
            projectAmenities: true,
            whyChoose: true,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: true
        }
    },

    {
        Id: '5',
        pImg: cprImage,
        coverImage: cprBanner,
        ps1img: cprM1,
        psub1img1: cprS1,
        psub1img2: cprS2,
        title: 'Central Palace Residence',
        subTitle: 'Ultra-Luxury Living',
        
        description: [
            "Central Palace Residence epitomizes ultra-luxury living in Islamabad, featuring premium residential units designed with international standards and sophisticated architecture. This exclusive development offers spacious apartments, penthouses, and duplexes with high-end finishes, smart home technology, and panoramic city views. The residence incorporates sustainable design principles, energy-efficient systems, and premium materials to create an unparalleled living experience.",
            "The project provides world-class amenities including rooftop gardens, fitness centers, swimming pools, concierge services, and 24/7 security with advanced surveillance systems. Located in a prime area with excellent connectivity to business districts and entertainment hubs, Central Palace Residence caters to discerning residents seeking luxury, privacy, and convenience in Islamabad's most prestigious residential address."
        ],

        projectDetails: {
            location: "Giga City, Islamabad",
            returnPotential: "High Returns",  
            interiors: "Stylish Modern Finishings",  
            parking: "Covered Spaces",  
            amenities: "World-Class Facilities",  
            security: "24/7 Surveillance",  
            connectivity: "GT Road / Isb Highway",  
            status: "In Progress",              
            projectType: "Ultra-Luxury Residential",
            category: "Luxury Living"
        },

        // Design Philosophy for Ultra-Luxury
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Our ultra-luxury design philosophy combines international standards with sophisticated architecture, premium finishes, and smart technology. Emphasizing sustainability, privacy, and panoramic views, it delivers exclusive living spaces that blend modern convenience with timeless elegance while fostering a refined, connected community.",
            philosophy: []
        },

        projectFeatures: {
            title: "Ultra-Luxury Features",
            description: "Exceptional design and amenities that define the highest standards of luxury living.",
            features: [
                "Luxury apartments with international design standards",
                "Spacious penthouses and duplexes with panoramic city views",
                "Advanced smart home technology and automation systems",
                "Rooftop gardens and state-of-the-art fitness facilities",
                "24/7 concierge services and advanced security systems",
                "Premium finishes and sustainable design principles",
                "Energy-efficient systems and premium materials",
                "Private balconies and outdoor living spaces"
            ]
        },

        projectAmenities: {
            title: "Luxury Living Amenities",
            description: "World-class facilities that enhance the luxury living experience.",
            amenities: [
                "Rooftop Gardens - Private outdoor spaces with city views",
                "Fitness Centers - State-of-the-art equipment and facilities",
                "Swimming Pools - Luxury pools with premium finishes",
                "Concierge Services - 24/7 personalized assistance",
                "Security Systems - Advanced surveillance and access control",
                "Smart Home - Integrated automation and control systems",
                "Private Parking - Dedicated spaces for residents",
                "Luxury Finishes - Premium materials and craftsmanship"
            ]
        },

        whyChoose: {
            title: "Why Choose Central Palace Residence",
            description: "Unique advantages that make this the ultimate luxury living destination in Islamabad.",
            reasons: [
                "Unique opportunity for luxury residence at affordable rates",
                "Top-tier finishes and international design standards",
                "Established community with over 2,000 delivered apartments",
                "Professional management by experienced Al Ghurair Giga team",
                "Excellent investment potential with strong appreciation history",
                "Strategic location in Giga City",
                "Access to world-class shopping and dining",
                "Premium amenities and services"
            ]
        },

        investmentHighlights: {
            title: "Luxury Investment Benefits",
            description: "Excellent investment opportunities with strong returns and luxury appeal.",
            highlights: [
                "Luxury residences offered at affordable rates",
                "High-quality finishes ensuring long-term value retention",
                "Strong appreciation potential in established Giga City",
                "Professional property management for hassle-free ownership",
                "Flexible payment options making luxury living accessible",
                "Growing demand for premium residential properties",
                "Excellent rental potential for luxury market"
            ]
        },

        locationAdvantages: {
            title: "Prime Luxury Location",
            description: "Strategic positioning that maximizes luxury living benefits and accessibility.",
            advantages: [
                "Situated in Giga City beside GT Road",
                "Surrounded by over 2,000 delivered apartments",
                "Walking distance access to Giga Mall",
                "Excellent connectivity to business districts",
                "Proximity to top educational and healthcare facilities",
                "Access to entertainment and dining options",
                "Established community with premium infrastructure"
            ]
        },

        testimonial: {
            quote: "Today I visited the Giga Mall Goldcrest Apartments, and I must say these apartments are truly beautiful. I would like to invite you to visit Giga Mall as well. When you see the model apartment, you will realize how wonderfully it has been designed and built. Come, be friends with Giga, and let's make Pakistan stronger together.",
            author: "Chef Gulzar",
            designation: "Celebrity Chef",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: true,
            projectAmenities: true,
            whyChoose: true,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: true
        }
    },

    {
        Id: '6',
        pImg: wtcImage,
        coverImage: wtcBanner,
        ps1img: wtcM1,
        psub1img1: wtcS1,
        psub1img2: wtcS2,
        title: 'Giga Mall WTC',
        subTitle: 'World Trade Center',
        
        description: [
            "Giga Mall WTC represents a prestigious World Trade Center development, establishing Islamabad as a major international business destination. This landmark project combines luxury retail spaces, premium office towers, international conference facilities, and five-star hospitality services under one integrated complex. The development features state-of-the-art infrastructure, advanced technology systems, and world-class amenities designed to attract global businesses and international trade organizations.",
            "With its iconic architecture and strategic location within the Giga City ecosystem, Giga Mall WTC serves as a gateway for international commerce and diplomatic activities. The complex includes exhibition halls, convention centers, luxury hotels, fine dining restaurants, and extensive parking facilities, positioning itself as Pakistan's premier destination for international business conferences, trade exhibitions, and corporate headquarters seeking global connectivity and prestige."
        ],

        projectDetails: {
            location: "Giga City, Islamabad",
            returnPotential: "High Returns",  
            interiors: "Stylish Modern Finishings",  
            parking: "Covered Spaces",  
            amenities: "World-Class Facilities",  
            security: "24/7 Surveillance",  
            connectivity: "GT Road / Isb Highway",  
            status: "In Progress",              
            projectType: "Corporate Offices",
            category: "International Business"
        },

        // Design Philosophy for WTC
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Our corporate design meets international standards with iconic architecture, multifunctional spaces, and seamless Giga Mall integration. Combining professional aesthetics, advanced technology, sustainability, and community connectivity, it supports diverse global business needs while enhancing Pakistan’s presence on the international stage.",
            philosophy: []
        },

        projectFeatures: {
            title: "World Trade Center Features",
            description: "International standard facilities designed for global business and trade activities.",
            features: [
                "World Trade Center facilities for international business",
                "Strategic location above Giga Mall for business convenience",
                "Professional CCTV security and international business environment",
                "Dedicated elevators and covered parking facilities",
                "Exclusive business clubs and networking facilities",
                "International conference and exhibition facilities",
                "Luxury hotel and fine dining restaurants",
                "Advanced technology and communication systems"
            ]
        },

        projectAmenities: {
            title: "International Business Amenities",
            description: "World-class facilities that support international business operations.",
            amenities: [
                "Conference Centers - International standard meeting facilities",
                "Exhibition Halls - Large spaces for trade shows and events",
                "Office Towers - Premium office spaces for international corporations",
                "Luxury Hotels - Five-star accommodation for business travelers",
                "Fine Dining - International cuisine and business dining options",
                "Business Support - Administrative and technical assistance",
                "Security Systems - International standard security and surveillance",
                "Parking Facilities - Extensive parking for visitors and tenants"
            ]
        },

        whyChoose: {
            title: "Why Choose Giga Mall WTC",
            description: "Unique advantages that make this Pakistan's premier international business destination.",
            reasons: [
                "Pakistan's premier World Trade Center with international recognition",
                "Unique location above successful Giga Mall",
                "Proven track record since 2016 with successful operations",
                "Professional management with extensive international experience",
                "Comprehensive facilities for global business and trade activities",
                "Strategic location for international commerce",
                "Access to diplomatic and government institutions",
                "Growing international business presence"
            ]
        },

        investmentHighlights: {
            title: "International Investment Benefits",
            description: "Excellent investment opportunities with international business appeal.",
            highlights: [
                "Established World Trade Center with proven track record since 2016",
                "Flexible 18-month installment plans for international business presence",
                "Strong rental yields from international corporations",
                "Strategic location above Giga Mall enhancing office value",
                "Growing international business presence creating demand",
                "Professional management ensuring quality international tenants",
                "High appreciation potential in limited WTC developments"
            ]
        },

        locationAdvantages: {
            title: "Strategic International Location",
            description: "Prime positioning that maximizes international business opportunities.",
            advantages: [
                "As Pakistan's premier World Trade Center above Giga Mall",
                "Unmatched convenience for international business operations",
                "Easy access to Islamabad International Airport",
                "Proximity to diplomatic enclave and government institutions",
                "Access to comprehensive business support services",
                "Strategic location within Giga City ecosystem",
                "Growing international business district"
            ]
        },

        testimonial: {
            quote: "When I came here and saw the mall, I was amazed — it is truly on an international level. Then I visited the model house of Goldcrest, and I was stunned after seeing that as well. InshaAllah, when you all come and see it for yourselves, you will realize that world-class work is indeed being done here in Pakistan, and I am really glad that Giga Group is working in such a remarkable way.",
            author: "Faysal Quraishi",
            designation: "Pakistani Actor",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: true,
            projectAmenities: true,
            whyChoose: true,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: true
        }
    },
    {
        Id: '7',
        pImg: gcbsImage,
        coverImage: gcbsBanner,
        ps1img: gcbsM1,
        psub1img1: gcbsS1,
        psub1img2: gcbsS2,
        title: 'Goldcrest Bay Sands – Karachi',
        subTitle: 'Goldcrest Bay Sands – Karachi',
        
        description: [
            "Welcome to Goldcrest Bay Sands, a landmark development by Giga Group, soon rising in the prestigious Crescent Bay, DHA Phase 8. With three 40-story towers offering panoramic views of the Arabian Sea, this project brings a new standard of tech-integrated, ultra-luxury seaside living to Karachi. Designed for the elite, it promises unmatched elegance, breathtaking surroundings, and world-class amenities, all in the city’s most coveted coastal zone.",
            "Situated in the iconic Crescent Bay, DHA Phase 8, Karachi, Goldcrest Bay Sands offers a prestigious beachfront address with uninterrupted views of the Arabian Sea. Nestled within one of the city’s most sought-after coastal zones, the project provides seamless access to Clifton, HMR Waterfront, and other urban conveniences. As Crescent Bay becomes Karachi’s leading destination for upscale living, Goldcrest Bay Sands emerges as a defining symbol of coastal luxury, exclusivity, and architectural excellence.",
            // "Goldcrest Bay Sands brings a new benchmark in high-end living to Karachi with three 40-story beachfront towers designed for elegance, comfort, and exclusivity. Featuring panoramic sea views, smart tech, refined interiors, and a grand entrance lobby, the project offers a complete lifestyle in Crescent Bay, DHA Phase 8. Developed by the trusted Giga Group, it continues a legacy of landmark projects like Goldcrest Views and Highlife. Positioned on the HMR Waterfront, Goldcrest Bay Sands promises a premium residential experience in one of Pakistan’s most prestigious coastal locations.",
            // "Goldcrest Bay Sands offers a rare opportunity to own a residence in Crescent Bay, Karachi’s most prestigious coastal enclave. With its signature 40-story beachfront towers, the project combines breathtaking sea views, curated amenities, and beautifully designed interiors exclusively for residents. Developed by the globally trusted Giga Group, it caters to both luxury homeowners and long-term investors seeking a high-value, lifestyle-driven address in one of Pakistan’s most elite locations.",
            // "Goldcrest Bay Sands offers a unique blend of beachfront tranquility, modern architecture, and a globally inspired lifestyle in the heart of Karachi’s most elite coastal district. From breathtaking sunrise views to serene sunset walks, it delivers an unmatched living experience along the Arabian Sea, making it the ultimate destination for those seeking refined seaside living."
        ],
        projectDetails: {
            location: "Crescent Bay, DHA Karachi",  
            returnPotential: "Premium Lifestyle Value",  
            interiors: "Designer Luxury Finishings",  
            parking: "Secure Covered Levels",  
            amenities: "Elite Coastal Facilities",  
            security: "24/7 Smart Surveillance",  
            connectivity: "Clifton & HMR Access",  
            status: "In Progress Towers",              
            projectType: "Beachfront Residences",
            category: "Seaside Luxury Living"
        },
        

        // Design Philosophy for WTC
        designPhilosophy: {
            title: "Design Philosophy",
            description: "Goldcrest Bay Sands embodies a design philosophy rooted in coastal elegance and global inspiration. The project integrates Dubai-style sophistication with Karachi’s vibrant seaside setting, offering panoramic sea views, refined interiors, and smart living solutions. Every element — from the towering façade to the detailed finishings — reflects luxury, sustainability, and comfort. By blending modern architecture with timeless coastal aesthetics, it creates an iconic lifestyle destination that redefines waterfront living in Pakistan.",
            philosophy: []
        },

        projectFeatures: {
            title: "Goldcrest Bay Sands Features",
            description: "Ultra-luxury beachfront living with world-class design and modern lifestyle facilities.",
            features: [
                "Three iconic 40-story beachfront towers",
                "Prestigious address in Crescent Bay DHA Phase 8",
                "Panoramic views of the Arabian Sea",
                "Designer interiors with smart home technology",
                "Secure multi-level covered parking",
                "Grand entrance lobbies with premium detailing",
                "Dubai-inspired coastal architecture",
                "Developed by the trusted Giga Group"
            ]
        },

        projectAmenities: {
            title: "Luxury Lifestyle Amenities",
            description: "World-class facilities crafted for exclusive seaside living and leisure.",
            amenities: [
                "Luxury Gym & Fitness Club with sea views",
                "Sauna, Spa, and Wellness Center",
                "Exclusive Beauty Salon and Daycare",
                "Business & Meeting Lounge facilities",
                "Indoor Games and Kids Play Areas",
                "Retail Outlets and Community Café",
                "Secure Covered Parking Levels",
                "24/7 Security and Concierge Services"
            ]
        },

        whyChoose: {
            title: "Why Choose Goldcrest Bay Sands",
            description: "Unique advantages that make this the ultimate luxury coastal residence in Karachi.",
            reasons: [
                "Landmark beachfront project in DHA Phase 8",
                "Prestigious Crescent Bay location with elite lifestyle",
                "Uninterrupted panoramic views of the Arabian Sea",
                "Ultra-luxury residences from 1 to 5 bedrooms",
                "Smart tech-enabled interiors and modern design",
                "Exclusive lifestyle amenities for residents",
                "Trusted Giga Group legacy of excellence",
                "High-value investment in Karachi’s coastal zone"
            ]
        },

        investmentHighlights: {
            title: "Prime Investment Highlights",
            description: "High-return opportunities in Karachi’s most prestigious seaside address.",
            highlights: [
                "First ultra-luxury beachfront towers in Crescent Bay",
                "High rental yields in premium coastal residences",
                "Strong appreciation potential in elite location",
                "Prestigious address enhancing long-term value",
                "Flexible installment and payment options",
                "Demand driven by Karachi’s luxury market growth",
                "Lifestyle-driven investment with global appeal"
            ]
        },

        locationAdvantages: {
            title: "Exclusive Coastal Location",
            description: "Prime positioning in Crescent Bay offering seamless coastal lifestyle access.",
            advantages: [
                "Beachfront address in DHA Phase 8, Karachi",
                "Unmatched panoramic Arabian Sea views",
                "Seamless access to Clifton and HMR Waterfront",
                "Positioned in Karachi’s most elite coastal zone",
                "Near retail, leisure, and lifestyle destinations",
                "Strategic location for high-value residences",
                "Emerging symbol of luxury coastal living"
            ]
        },

        testimonial: {
            quote: "Looking at the vision behind Goldcrest Bay Sands, it seems like one of the most promising luxury developments in Karachi. Bringing Dubai-style beachfront living to Crescent Bay is truly exciting, and I believe it has the potential to set a new benchmark for coastal lifestyle in Pakistan.",
            author: "Fahad",
            designation: "Software Engineer & Observer",
            rating: 5
        },

        // Section Visibility Configuration
        sectionVisibility: {
            designPhilosophy: true,
            projectFeatures: false,
            projectAmenities: false,
            whyChoose: false,
            investmentHighlights: false,
            locationAdvantages: false,
            testimonial: false,
            projectGallery: false
        }
    }
]

export default Projects;