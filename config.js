
export const DOMAIN = 'http://localhost:3000';
// export const DOMAIN = 'https://www.whomademeaprincess.in.net';

export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>Who Made Me a Princess</u></a> follows Athanasia, a young girl who reincarnates as a princess in a tragic romance novel where she is fated to be executed by her father, the emperor. Determined to avoid her doomed fate, Athanasia uses her knowledge of the novel to navigate palace politics, win her father's affection, and change her destiny. The story blends elements of fantasy, drama, and romance as Athanasia strives to rewrite her fate and secure her place in the royal family.`


export const MANGA_NAME = 'Who Made Me a Princess';
export const MANGA_AUTHOR = 'Plutus';
export const MANGA_RELEASE = '2016';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Spoon';
export const MANGA_STUDIO = 'Colored Pencil Animations';
export const MANGA_GENRE = 'Comedy, Romance, Reincarnation, Isekai, Fantasy, Drama';

export const CHAPTER_PREFIX = 'who-made-me-a-princess-chapter';
export const IMAGE_PREFIX = 'images/who-made-me-a-princess';
export const NEXT_PREVIOUS_PREFIX = 'manga/who-made-me-a-princess-chapter';
export const URL_PREFIX = 'manga/who-made-me-a-princess-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/who-made-me-a-princess-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://wallpaper.forfun.com/fetch/b2/b20dad2a7af69002f63235c7a4ef6373.jpeg";


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[155px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'Who Made Me a Princess';
export const NavbarName = "Who Made Me a Princess";

export const APP_DESCRIPTION = `Read ${MANGA_NAME} manga online at ${DOMAIN}. The story follows Athanasia, a young girl who reincarnates as a princess in a tragic romance novel where she is fated to be executed by her father, the emperor. Determined to avoid her doomed fate, Athanasia uses her knowledge of the novel to navigate palace politics, win her father's affection, and change her destiny. The story blends elements of fantasy, drama, and romance as Athanasia strives to rewrite her fate and secure her place in the royal family.`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "Who Made Me a Princess is a fantasy romance manga that tells the story of a modern-day woman who suddenly finds herself reincarnated as Athanasia de Alger Obelia, a princess in a tragic romance novel. In the novel, Athanasia is destined to be executed by her cold and ruthless father, Emperor Claude de Alger Obelia. Determined to avoid this grim fate, Athanasia uses her knowledge of the story to navigate her dangerous new world and change her destiny."
    },
    {
        id: 2,
        content: "As Athanasia grows up in the royal palace, she realizes that her father, who was depicted as heartless in the novel, might have a more complex and troubled past. Despite her initial fear of Claude, she works hard to win his affection and protect herself from the palace's political intrigues. Her charm, intelligence, and kindness gradually thaw Claude's icy exterior, and she starts to build a genuine relationship with him."
    },
    {
        id: 3,
        content: "The story also introduces various other characters, including Lucas, a powerful magician who becomes Athanasia's friend and protector, and Ijekiel and Jennette, other key figures in the original novel's plot. Athanasia must carefully balance her relationships with these characters to ensure her survival and happiness."
    },
    {
        id: 4,
        content: "As Athanasia changes the course of events, she uncovers secrets about her family's past, the true nature of her father's behavior, and her own magical abilities. The manga explores themes of family, love, identity, and the struggle to change one's fate. With its blend of drama, fantasy, and romance, Who Made Me a Princess captivates readers with its rich storytelling and complex character dynamics."
    },
];




export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];



export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran Manga',
        link: 'https://www.frierenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man Manga',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen Manga',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man Manga',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei Manga',
        link: 'https://www.mushokutenseimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-piece.webp`,
        title: 'One Piece Manga',
        link: 'https://www.onepiecemanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jinx.webp`,
        title: 'Jinx Manga',
        link: 'https://www.jinxmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/boruto.webp`,
        title: 'Boruto Manga',
        link: 'https://www.borutomanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/demon-slayer.webp`,
        title: 'Demon Slayer Manga',
        link: 'https://www.demonslayermanga.in.net',
    },

    /*
    {
        imageUrl: `${DOMAIN}/related/my-dress-up-darling.webp`,
        title: 'My Dress Up Darling Manga',
        link: 'https://www.mydressupdarlingmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/blue-lock.webp`,
        title: 'Blue Lock Manga',
        link: 'https://www.bluelockmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/solo-leveling.webp`,
        title: 'Solo Leveling Manga',
        link: 'https://www.sololevelingimanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/my-hero-academia.webp`,
        title: 'My Hero Academia Manga',
        link: 'https://www.myheroacademiamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga Manga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover Manga',
        link: 'https://www.blackclovermanga.in.net',
    },
*/

];





export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 11
    },
    {
        "chapterNumber": "2",
        "numImages": 17
    },
    {
        "chapterNumber": "3",
        "numImages": 15
    },
    {
        "chapterNumber": "4",
        "numImages": 16
    },
    {
        "chapterNumber": "5",
        "numImages": 17
    },
    {
        "chapterNumber": "6",
        "numImages": 18
    },
    {
        "chapterNumber": "7",
        "numImages": 21
    },
    {
        "chapterNumber": "8",
        "numImages": 15
    },
    {
        "chapterNumber": "9",
        "numImages": 17
    },
    {
        "chapterNumber": "10",
        "numImages": 16
    },
    {
        "chapterNumber": "11",
        "numImages": 22
    },
    {
        "chapterNumber": "12",
        "numImages": 24
    },
    {
        "chapterNumber": "13",
        "numImages": 22
    },
    {
        "chapterNumber": "14",
        "numImages": 22
    },
    {
        "chapterNumber": "15",
        "numImages": 35
    },
    {
        "chapterNumber": "16",
        "numImages": 38
    },
    {
        "chapterNumber": "17",
        "numImages": 36
    },
    {
        "chapterNumber": "18",
        "numImages": 27
    },
    {
        "chapterNumber": "19",
        "numImages": 31
    },
    {
        "chapterNumber": "20",
        "numImages": 31
    },
    {
        "chapterNumber": "21",
        "numImages": 28
    },
    {
        "chapterNumber": "22",
        "numImages": 29
    },
    {
        "chapterNumber": "23",
        "numImages": 32
    },
    {
        "chapterNumber": "24",
        "numImages": 28
    },
    {
        "chapterNumber": "25",
        "numImages": 13
    },
    {
        "chapterNumber": "26",
        "numImages": 17
    },
    {
        "chapterNumber": "27",
        "numImages": 22
    },
    {
        "chapterNumber": "28",
        "numImages": 19
    },
    {
        "chapterNumber": "29",
        "numImages": 20
    },
    {
        "chapterNumber": "30",
        "numImages": 21
    },
    {
        "chapterNumber": "31",
        "numImages": 24
    },
    {
        "chapterNumber": "32",
        "numImages": 17
    },
    {
        "chapterNumber": "33",
        "numImages": 20
    },
    {
        "chapterNumber": "34",
        "numImages": 18
    },
    {
        "chapterNumber": "35",
        "numImages": 21
    },
    {
        "chapterNumber": "36",
        "numImages": 23
    },
    {
        "chapterNumber": "37",
        "numImages": 20
    },
    {
        "chapterNumber": "38",
        "numImages": 20
    },
    {
        "chapterNumber": "39",
        "numImages": 17
    },
    {
        "chapterNumber": "40",
        "numImages": 22
    },
    {
        "chapterNumber": "41",
        "numImages": 26
    },
    {
        "chapterNumber": "42",
        "numImages": 26
    },
    {
        "chapterNumber": "43",
        "numImages": 25
    },
    {
        "chapterNumber": "44",
        "numImages": 9
    },
    {
        "chapterNumber": "45",
        "numImages": 7
    },
    {
        "chapterNumber": "46",
        "numImages": 7
    },
    {
        "chapterNumber": "47",
        "numImages": 23
    },
    {
        "chapterNumber": "48",
        "numImages": 25
    },
    {
        "chapterNumber": "49",
        "numImages": 24
    },
    {
        "chapterNumber": "50",
        "numImages": 13
    },
    {
        "chapterNumber": "51",
        "numImages": 12
    },
    {
        "chapterNumber": "52",
        "numImages": 22
    },
    {
        "chapterNumber": "53",
        "numImages": 10
    },
    {
        "chapterNumber": "54",
        "numImages": 9
    },
    {
        "chapterNumber": "55",
        "numImages": 10
    },
    {
        "chapterNumber": "56",
        "numImages": 6
    },
    {
        "chapterNumber": "57",
        "numImages": 21
    },
    {
        "chapterNumber": "58",
        "numImages": 19
    },
    {
        "chapterNumber": "59",
        "numImages": 25
    },
    {
        "chapterNumber": "60",
        "numImages": 23
    },
    {
        "chapterNumber": "61",
        "numImages": 21
    },
    {
        "chapterNumber": "62",
        "numImages": 19
    },
    {
        "chapterNumber": "63",
        "numImages": 18
    },
    {
        "chapterNumber": "64",
        "numImages": 8
    },
    {
        "chapterNumber": "65",
        "numImages": 14
    },
    {
        "chapterNumber": "66",
        "numImages": 16
    },
    {
        "chapterNumber": "67",
        "numImages": 17
    },
    {
        "chapterNumber": "68",
        "numImages": 14
    },
    {
        "chapterNumber": "69",
        "numImages": 13
    },
    {
        "chapterNumber": "70",
        "numImages": 19
    },
    {
        "chapterNumber": "70a",
        "numImages": 11
    },
    {
        "chapterNumber": "71",
        "numImages": 13
    },
    {
        "chapterNumber": "72",
        "numImages": 14
    },
    {
        "chapterNumber": "73",
        "numImages": 15
    },
    {
        "chapterNumber": "74",
        "numImages": 16
    },
    {
        "chapterNumber": "75",
        "numImages": 13
    },
    {
        "chapterNumber": "76",
        "numImages": 17
    },
    {
        "chapterNumber": "77",
        "numImages": 13
    },
    {
        "chapterNumber": "78",
        "numImages": 13
    },
    {
        "chapterNumber": "79",
        "numImages": 13
    },
    {
        "chapterNumber": "80",
        "numImages": 9
    },
    {
        "chapterNumber": "81",
        "numImages": 13
    },
    {
        "chapterNumber": "82",
        "numImages": 12
    },
    {
        "chapterNumber": "83",
        "numImages": 13
    },
    {
        "chapterNumber": "84",
        "numImages": 12
    },
    {
        "chapterNumber": "85",
        "numImages": 14
    },
    {
        "chapterNumber": "86",
        "numImages": 12
    },
    {
        "chapterNumber": "87",
        "numImages": 10
    },
    {
        "chapterNumber": "88",
        "numImages": 12
    },
    {
        "chapterNumber": "89",
        "numImages": 13
    },
    {
        "chapterNumber": "90",
        "numImages": 13
    },
    {
        "chapterNumber": "91",
        "numImages": 68
    },
    {
        "chapterNumber": "92",
        "numImages": 26
    },
    {
        "chapterNumber": "93",
        "numImages": 36
    },
    {
        "chapterNumber": "94",
        "numImages": 23
    },
    {
        "chapterNumber": "95",
        "numImages": 21
    },
    {
        "chapterNumber": "96",
        "numImages": 29
    },
    {
        "chapterNumber": "97",
        "numImages": 24
    },
    {
        "chapterNumber": "98",
        "numImages": 20
    },
    {
        "chapterNumber": "99",
        "numImages": 17
    },
    {
        "chapterNumber": "100",
        "numImages": 29
    },
    {
        "chapterNumber": "101",
        "numImages": 18
    },
    {
        "chapterNumber": "102",
        "numImages": 21
    },
    {
        "chapterNumber": "103",
        "numImages": 32
    },
    {
        "chapterNumber": "104",
        "numImages": 32
    },
    {
        "chapterNumber": "105",
        "numImages": 32
    },
    {
        "chapterNumber": "106",
        "numImages": 28
    },
    {
        "chapterNumber": "107",
        "numImages": 39
    },
    {
        "chapterNumber": "108",
        "numImages": 38
    },
    {
        "chapterNumber": "109",
        "numImages": 12
    },
    {
        "chapterNumber": "110",
        "numImages": 11
    },
    {
        "chapterNumber": "111",
        "numImages": 46
    },
    {
        "chapterNumber": "112",
        "numImages": 32
    },
    {
        "chapterNumber": "113",
        "numImages": 31
    },
    {
        "chapterNumber": "114",
        "numImages": 37
    },
    {
        "chapterNumber": "115",
        "numImages": 11
    },
    {
        "chapterNumber": "116",
        "numImages": 31
    },
    {
        "chapterNumber": "117",
        "numImages": 26
    },
    {
        "chapterNumber": "118",
        "numImages": 23
    },
    {
        "chapterNumber": "119",
        "numImages": 34
    },
    {
        "chapterNumber": "120",
        "numImages": 12
    },
    {
        "chapterNumber": "121",
        "numImages": 25
    },
    {
        "chapterNumber": "122",
        "numImages": 26
    },
    {
        "chapterNumber": "123",
        "numImages": 11
    },
    {
        "chapterNumber": "124",
        "numImages": 31
    },
    {
        "chapterNumber": "125",
        "numImages": 72
    }
]