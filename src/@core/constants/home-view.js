import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'The Best Gift is the Gift that is On Time',
    subHeading: 'But an even better gift is the one they will also enjoy!',
    text: 'Sometimes a card just won’t do. GiftCrafted is a gift-giving service that goes above and beyond. Select from our many hand-picked gifts tailored to life’s special occasions. Just set a date on the app and subscribe to our list, all without stepping foot in a store.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Choose a gift that will make you memorable',
    subHeading: 'CUSTOMISE CHOICES TODAY!',
    features: [
        {
            title: 'Annual Gift List ',
            description: 'Never forget a special occasion by signing up for the recurring gifts list.',
            icon: 'to-do-list'
        },
        {
            title: 'One Stop Shop',
            description: 'Find gifts for every occasion at your fingertips.',
            icon: 'gift-giving'
        },
        {
            title: 'Reminder Alert',
            description: 'The app will remind you to make a purchase 4 weeks prior to the special occasion. ',
            icon: 'add-reminder'
        },
        {
            title: 'Unique Options ',
            description: 'Tailor your choices to fit what your loved ones will appreciate receiving.',
            icon: 'gift-opened'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Someone might mean the world to you, but they won’t know it if unless you send a gift on their special day. ',
        'GiftCrafted retains the joyous essence of gift-giving and removes the stressful part of finding the perfect item for that special someone. Gift-giving can be a chore when remembered at the eleventh hour; the pain is in taking out the time or remembering that you have to give something at the 11th hour. Whether it’s your boss, your significant other, your best friend, or Christmas, GiftCrafted has got you covered (... or should we say got you wrapped!)'
    ],
}

export const benefitsContent = {
    heading: 'Set it and Forget it!',
    text: 'No gesture speaks volumes than one that is always on time. With GiftCrafted you will always be appreciated for your thoughtfulness and attention to detail, never missing a special occasion.',
    benefits: [
        {
            title: 'Buy all gifts in one place ',
            description: 'Why browse store by store when you have a one-stop shop solution.',
            icon: 'gift-giving'
        },
        {
            title: 'No Last Minute Fee',
            description: 'You do not want to deal with florists on Valentines day; we help you pick and book a bouquet and/or a present days in advance.',
            icon: 'last-minute'
        },
        {
            title: 'Create a Pattern',
            description: 'You can set the gift to recurring every year or make adjustments as you please.',
            icon: 'gifts'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'How does the payment model work?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Is this app compatible with iOS or Android?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'What do I do if I incur a problem with the app?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'A thoughtful gift on time is a GiftCrafted',
    text: 'Download GiftCrafted today and subscribe to our list!'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Sign up',
    whyUsBtn: `Why ${siteName}?`,
    ctaBtn: 'Download App',
    accent: 'Get Started'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
