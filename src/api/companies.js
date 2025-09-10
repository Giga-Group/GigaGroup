// Import placeholder images - these should be replaced with actual company images
import textileImg from '../images/projects/companies/textile.jpg'
import goldJewelleryImg from '../images/projects/companies/gold-trading.jpg'
import realEstateImg from '../images/projects/companies/real-estate.jpg'
import generalTradingImg from '../images/projects/companies/genral-trading.jpg'
import investmentsImg from '../images/projects/companies/investments.jpg'
import constructionImg from '../images/projects/companies/construction.jpg'

const Companies = [
    {
        Id: '1',
        pImg: textileImg,
        title: 'Textile Industry',
        subTitle: 'Manufacturing & Export',
        description: 'Leading textile manufacturing company specializing in high-quality fabric production and export. We provide premium textiles to international markets with a focus on innovation and sustainable practices.',
    },
    {
        Id: '2',
        pImg: goldJewelleryImg,
        title: 'Gold & Jewellery Trading',
        subTitle: 'Precious Metals & Jewelry',
        description: 'Premium gold and jewelry trading company offering exquisite collections of gold, silver, and precious stone jewelry. We maintain the highest standards in quality and craftsmanship.',
    },
    {
        Id: '3',
        pImg: constructionImg,
        title: 'Construction',
        subTitle: 'Building Excellence',
        description: 'Leading construction company delivering high-quality infrastructure projects across residential, commercial, and mixed-use developments. We combine innovative construction techniques with sustainable practices to create lasting structures.',
    },
    {
        Id: '4',
        pImg: realEstateImg,
        title: 'Real Estate Investment and Property Development',
        subTitle: 'Property Development',
        description: 'Leading real estate investment and property development company creating landmark projects across Pakistan and UAE. We specialize in luxury residential, commercial, and mixed-use developments.',
    },
    {
        Id: '5',
        pImg: generalTradingImg,
        title: 'General Trading',
        subTitle: 'Import & Export',
        description: 'Comprehensive general trading company handling import and export operations across diverse product categories. We facilitate international trade with efficient logistics and quality assurance.',
    },
    {
        Id: '6',
        pImg: investmentsImg,
        title: 'Investments',
        subTitle: 'Strategic Investments',
        description: 'Strategic investment company focused on identifying and nurturing high-growth opportunities across various sectors including real estate, technology, and emerging markets.',
    }
]

export default Companies;
