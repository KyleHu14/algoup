interface Section {
    title: string
    content: (TextContent | BulletPointContent)[]
}

interface TextContent {
    type: "text"
    value: string
}

interface BulletPointContent {
    type: "bulletPoints"
    value: string[]
}

export const LAST_UPDATED = "12/23/2024"

export const PRIVACY_POLICY_INFO: Section[] = [
    {
        title: "Introduction",
        content: [
            {
                type: "text",
                value: "Algoup Inc. (“Algoup,” “we,” “our,” and/or “us”) values the privacy of individuals who use our website, including https://www.algoup.ai (our “Website”). This privacy policy (the “Privacy Policy”) explains how we collect, use, and disclose personal information from users of our Website (“you” or “your”). By using our Website, you agree to the collection, use, disclosure, and procedures described in this Privacy Policy.",
            },
        ],
    },
    {
        title: "Personal Information We Collect",
        content: [
            {
                type: "text",
                value: "We may collect a variety of personal information from or about you or your devices from various sources, as described below.",
            },
        ],
    },
    {
        title: "A. Personal Information You Provide to Us",
        content: [
            {
                type: "text",
                value: "Communications. If you contact us directly, we may receive personal information about you. For example, when you contact us for more information about Algoup, we may receive your name, email address, the contents of a message or attachments that you may send to us, and other information you choose to provide. If you subscribe to our newsletter, then we will collect certain information from you, such as your email address.",
            },
            {
                type: "text",
                value: "Careers. If you decide that you wish to apply for a job with us, you may submit your contact information and your resume online. We will collect the information you choose to provide on your resume, such as your education and employment experience. You may also apply through LinkedIn. If you do so, we will collect the information you make available to us on LinkedIn.",
            },
        ],
    },
    {
        title: "B. Personal Information We Collect When You Use Our Website",
        content: [
            {
                type: "text",
                value: "Location Information. When you use our Website, we infer your general location information, for example, by using your internet protocol (IP) address.",
            },
            {
                type: "text",
                value: "Device Information. We receive information about the device and software you use to access our Website, including IP address, web browser type, and operating system version.",
            },
            {
                type: "text",
                value: "Usage Information. To help us understand how you use our Website and to help us improve it, we automatically receive information about your interactions with our Website, like the pages or other content you view and the dates and times of your visits.",
            },
            {
                type: "text",
                value: "Information from Cookies and Similar Technologies. We and our third-party partners collect personal information using cookies, pixel tags, or similar technologies. Our third-party partners may use these technologies to collect information about your online activities over time and across different services. Cookies are small text files containing a string of alphanumeric characters. We may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to our Website.",
            },
            {
                type: "text",
                value: "Please review your web browser’s “Help” file to learn how you may modify your cookie settings. Please note that if you delete or choose not to accept cookies from our Website, you may not be able to utilize the features of our Website to their fullest potential.",
            },
        ],
    },
    {
        title: "How We Use the Personal Information We Collect",
        content: [
            {
                type: "text",
                value: "We use the personal information we collect:",
            },
            {
                type: "bulletPoints",
                value: [
                    "To provide, maintain, improve, and enhance our Website;",
                    "To understand and analyze how you use our Website and develop new products, services, features, and functionality;",
                    "To receive, evaluate, and process job applications, verify your information and conduct background checks, as permitted by law, communicate with you about the recruitment process and your application, schedule interviews, and improve the recruitment process;",
                    "To communicate with you, provide you with updates and other information relating to our Website, provide information that you request, respond to comments and questions, and otherwise provide customer support;",
                    "For marketing and advertising purposes, such as developing and providing promotional and advertising materials that may be relevant, valuable or otherwise of interest to you;",
                    "To generate deidentified or aggregated data for any lawful purpose;",
                    "For compliance purposes, including enforcing our legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency; and",
                    "For other purposes for which we provide specific notice at the time the information is collected.",
                ],
            },
        ],
    },
    {
        title: "How We Disclose the Personal Information We Collect",
        content: [
            {
                type: "text",
                value: "Partners and Affiliates: We may disclose any information we receive to our partners, corporate affiliates, parents, or subsidiaries for any of the purposes described in this Privacy Policy.",
            },
            {
                type: "text",
                value: "Vendors and Service Providers: We may disclose any information we receive to vendors and service providers retained in connection with the provision of our Website.",
            },
            {
                type: "text",
                value: "Analytics Partners: We use analytics services such as Google Analytics to collect and process certain analytics data. These services may also collect information about your use of other websites, apps, and online resources.",
            },
            {
                type: "text",
                value: "As Required By Law and Similar Disclosures: We may access, preserve, and disclose your personal information if we believe doing so is required or appropriate to comply with law enforcement requests and legal processes or to protect rights and safety.",
            },
            {
                type: "text",
                value: "Merger, Sale, or Other Asset Transfers: We may transfer your personal information to service providers, advisors, potential transactional partners, or other third parties in connection with corporate transactions.",
            },
            {
                type: "text",
                value: "Consent: We may also disclose your personal information with your permission.",
            },
        ],
    },

    {
        title: "Your Choices",
        content: [
            {
                type: "text",
                value: "Marketing Communications: You can unsubscribe from our promotional emails via the link provided in the emails. Even if you opt-out of receiving promotional messages, you will continue to receive administrative messages.",
            },
            {
                type: "text",
                value: "Do Not Track: There is no accepted standard on how to respond to Do Not Track signals, and we do not respond to such signals.",
            },
            {
                type: "text",
                value: "If you choose not to provide us with personal information we collect, some features of our Website may not work as intended.",
            },
        ],
    },

    {
        title: "Third Parties",
        content: [
            {
                type: "text",
                value: "Our Website may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the privacy practices of these third parties. Please read their privacy policies before providing any information to them.",
            },
        ],
    },
    {
        title: "Security",
        content: [
            {
                type: "text",
                value: "We make reasonable efforts to protect your personal information using physical and electronic safeguards. However, no electronic transmission or storage of information can be entirely secure.",
            },
        ],
    },
    {
        title: "Children’s Privacy",
        content: [
            {
                type: "text",
                value: "We do not knowingly collect, maintain, or use personal information from children under 13 years of age. If you learn that a child has provided us with personal information, you may alert us at info@algoup.ai.",
            },
        ],
    },
    {
        title: "International Visitors",
        content: [
            {
                type: "text",
                value: "Our Website is hosted in the United States and intended for visitors located within the U.S. If you use our Website from other regions, you consent to transferring, storing, and processing your information in the U.S.",
            },
        ],
    },
    {
        title: "Changes to this Privacy Policy",
        content: [
            {
                type: "text",
                value: "We will post any adjustments to the Privacy Policy on this page. If we materially change how we use or disclose your information, we will notify you through our Website or other communication.",
            },
        ],
    },
    {
        title: "Contact Information",
        content: [
            {
                type: "text",
                value: "If you have any questions, comments, or concerns, please email us at info@algoup.ai or write to us at: Algoup Inc., 5608 17th Ave NW, Seattle, Washington 98107.",
            },
        ],
    },
]
