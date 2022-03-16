import SvgZap from "../icons/Zap";
import SvgTarget from "../icons/Target";
import SvgLock from "../icons/Lock";
import SvgSmile from "../icons/Smile";

export const SPLASH_STATS = [
    {
        top: "8.6k+",
        bottom: "Messages Sent",
    },
    {
        top: "3.4k+",
        bottom: "Members",
    },
    {
        top: "1.2k",
        bottom: "5 Star Reviews",
    },
];

export const CARDS = [
    {
        title: 'Relevant Tips',
        description: 'Receive relevant, insightful tips to help guide smarter investments.',
        icon: <SvgZap height={80} width={80} className='mb-20' style={{color: '#2DCA8C'}}/>,
        iconMobile: <SvgZap height={40} width={40} className='mb-8' style={{color: '#2DCA8C'}}/>
    },
    {
        title: 'Hand Curated',
        description: "No fluff, all cream. Our team is dedicated to sifting through the junk so you don't have to.",
        icon: <SvgTarget height={80} width={80} className='mb-20' style={{color: '#FFBE3D'}}/>,
        iconMobile: <SvgTarget height={40} width={40} className='mb-8' style={{color: '#FFBE3D'}}/>,
    },
    {
        title: 'Member Access',
        description: 'Get exclusive access to the community group chats, open to members 24/7.',
        icon: <SvgLock height={80} width={80} className='mb-20' style={{color: '#F54379'}}/>,
        iconMobile: <SvgLock height={40} width={40} className='mb-8' style={{color: '#F54379'}}/>,
    },
    {
        title: 'Money Back Guarantee',
        description: "Don't enjoy the service? Get 7 days to try it out.",
        icon: <SvgSmile height={80} width={80} className='mb-20' style={{color: '#367DFF'}}/>,
        iconMobile: <SvgSmile height={40} width={40} className='mb-8' style={{color: '#367DFF'}}/>,
    },
]

export const PLANS = [
    {
        title: 'Basic',
        price: 'Free',
        term: '',
        features: [
            {
                title: 'One message per week',
                unlocked: true
            },
            {
                title: 'A preview of the week ahead, including earnings, important federal reserve meetings, and breaking news about individual companies.',
                unlocked: true
            },

        ]
    },
    {
        title: 'Preferred',
        price: '$4.99',
        term: '/mo',
        features: [
            {
                title: 'One message per day',
                unlocked: true
            },
            {
                title: 'Daily message of the biggest announcements within the markets. Earnings estimates, results, individual company announcements, mergers, product upgrades and more.',
                unlocked: true
            },
            {
                title: 'Access to monthly giveaways hosted for preferred members including stock imbursements, cash, and gift-cards to the biggest brands.',
                unlocked: true
            },
        ]
    }
]

export const TESTIMONIALS = [
    {
        review: '"It makes for great conversation at work. I always have something to talk about with co-workers after getting the message."',
        user: 'Tony D.',
        location: 'Oakland, CA',
        border: 'linear-gradient(to left, #4CD8CF80, #39D06C80)'
    },
    {
        review: '"I am the most informed friend in my group. I am always the one to break the news on big moves thanks to the market scoop."',
        user: 'John S.',
        location: 'Chicago, IL',
        border: 'linear-gradient(to left, #B31A3280, #FD3D4280)'
    },
    {
        review: '"Out of all my monthly charges, I don’t feel bad about my $5 to the market scoop. I would even pay more for this service."',
        user: 'Derek V.',
        location: 'Paris, France',
        border: 'linear-gradient(to left, #F25E2280, #FEB00080)'
    },
    {
        review: '"I am subscribed to some email watchlists and what not, but I just don’t find myself reading. Something about ‘one text message a day’ makes me swipe on the notification and read it. It’s so simple yet effective."',
        user: 'Sarah P.',
        location: 'Houston, TX',
        border: 'linear-gradient(to left, #2FEA9B80, #7FDD5380)'
    },
    {
        review: '"While I know this doesn’t give financial advice, I have actually taken trades because of this. You usually hear about those big runners midway or towards the end of the day, but I’ve caught a couple in the morning because of this service. Thanks."',
        user: 'Zack K.',
        location: 'Sacramento, CA',
        border: 'linear-gradient(to left, #38A6EC80, #2BF3E380)'
    },
    {
        review: '"So simple yet so effective, thank you! I am a stay at home wife who has shown some interest in the market since the pandemic, my husband is so impressed when IM the one telling HIM about some of the stuff I read here in the morning! Thank you."',
        user: 'Paul D.',
        location: 'San Francisco, CA',
        border: 'linear-gradient(to left, #F25E2280, #FEB00080)'
    },
    {
        review: '"I signed up for the free version, and after getting my second message, I realized I wanted these daily. It’s a nice change that focuses more on individual company alerts which is what I like."',
        user: 'Miami, FL',
        border: 'linear-gradient(to left, #E661C980, #FB927F80)'
    },
]

export const FAQs = [
    {
        q: "How long till I start receiving messages after I sign up?",
        a: "You will start receiving messages the next trading day.",
    },
    {
        q: "How can I upgrade from my free plan?",
        a: "Upgrading is easy! Just come back to this site and sign up for the paid plan. Your old number will be migrated upon signup.",
    },
    {
        q: "Do I still need to do my own research?",
        a: "Of course! This service aims to keep members informed with important news and key insights. Its never a good idea to trade blindly without doing the necessary research.",
    },
    {
        q: "Where can I access the members chat?",
        a: "Find us here ___.",
    },
];

export const NAV_TABS = [
    {
        tab: "Home",
        route: "home",
    },
    {
        tab: "About",
        route: "about",
    },
    {
        tab: "Plans",
        route: "plans",
    },
    {
        tab: "Testimonials",
        route: "testimonials",
    },
    {
        tab: "FAQ",
        route: "faq",
    },
];
