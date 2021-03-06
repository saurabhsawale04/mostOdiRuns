// # Player Team Mat Inn Runs Highest 100s 50s Avg 

// mat : 463, inn : 452, run : 18426, hs : '200*' , cen :  49, hc :  96, avg :  44.8
// mat : 404, inn : 380, run : 14234, hs : '169 ' , cen : 25 , hc : 93 , avg : 41.99 
// mat : 375, inn : 365, run : 13704, hs : '164 ' , cen : 30 , hc : 82 , avg : 42.04 
// mat : 445, inn : 433, run : 13430, hs : '189 ' , cen : 28 , hc : 68 , avg : 32.36 
// mat : 448, inn : 418, run : 12650, hs : '144 ' , cen : 19 , hc : 77 , avg : 33.38 
// mat : 254, inn : 245, run : 12169, hs : '183 ' , cen : 43 , hc : 62 , avg : 59.07 
// mat : 378, inn : 350, run : 11739, hs : '137*' , cen :  10, hc :  83, avg :  39.53 
// mat : 328, inn : 314, run : 11579, hs : '139 ' , cen : 17 , hc : 86 , avg : 44.36 
// mat : 311, inn : 300, run : 11363, hs : '183 ' , cen : 22 , hc : 72 , avg : 41.02 
// mat : 344, inn : 318, run : 10889, hs : '153 ' , cen : 12 , hc : 83 , avg : 39.17 
// import React from 'react'; 

const Stats = [

    {
        link: 'https://resize4.indiatvnews.com/en/resize/newbucket/715_-/2021/02/tendulkar-gwalior-1614144457.jpg',
        rank: 1,
        name: 'S R Tendulkar',
        ctry: 'India',
        mat: 463, inn: 452, run: 18426, hs: '200*', cen: 49, hc: 96, avg: 44.8,
        more: 'https://en.wikipedia.org/wiki/Sachin_Tendulkar'
    },
    {
        link: 'https://s.ndtvimg.com/images/content/2015/mar/806/kumar-sangakkara-vs-scotland.jpg?output-quality=60&output-format=webp&downsize=555:*',
        rank: 2,
        name: 'K C Sangakkara',
        ctry: 'S Lanka',
        mat: 404, inn: 380, run: 14234, hs: '169 ', cen: 25, hc: 93, avg: 41.99,
        more: 'https://en.wikipedia.org/wiki/Kumar_Sangakkara'
    },
    {
        link: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/RTX5UCB7_0.jpeg?BQYxZaV.yAPY7hGIRrrW3BwQr0NPGlB1&size=770:433',
        rank: 3,
        name: 'R T Ponting',
        ctry: 'Australia',
        mat: 375, inn: 365, run: 13704, hs: '164 ', cen: 30, hc: 82, avg: 42.04,
        more: 'https://en.wikipedia.org/wiki/Ricky_Ponting'
    },
    {
        link: 'https://www.telegraph.co.uk/content/dam/cricket/2018/10/15/TELEMMGLPICT000002423411_trans_NvBQzQNjv4Bq4k9pB6mVv575RZMUuuHUNh6o2FGPrr2W61lmnXWHC7M.jpeg?imwidth=1400',
        rank: 4,
        name: 'S T Jayasuriya',
        ctry: 'S Lanka',
        mat: 445, inn: 433, run: 13430, hs: '189 ', cen: 28, hc: 68, avg: 32.36,
        more: 'https://en.wikipedia.org/wiki/Sanath_Jayasuriya'
    },
    {
        link: 'https://img.theweek.in/content/dam/week/news/sports/images/2020/1/8/jayawardene-file-rsgopan.jpg',
        rank: 5,
        name: 'D P M D Jayawardene',
        ctry: 'S Lanka',
        mat: 448, inn: 418, run: 12650, hs: '144 ', cen: 19, hc: 77, avg: 33.38,
        more: 'https://en.wikipedia.org/wiki/Mahela_Jayawardene'
    },
    {
        link: 'https://www.iwmbuzz.com/wp-content/uploads/2020/02/virat-kohli-the-worlds-number-one-batsman-920x518.jpg',
        rank: 6,
        name: 'V Kohli',
        ctry: 'India',
        mat: 254, inn: 245, run: 12169, hs: '183 ', cen: 43, hc: 62, avg: 59.07,
        more: 'https://en.wikipedia.org/wiki/Virat_Kohli'
    },
    {
        link: 'https://images.newindianexpress.com/uploads/user/imagelibrary/2020/4/20/w900X450/Inzamam-ul-Haq_AP.jpg',
        rank: 7,
        name: 'Inzamam ul Haq',
        ctry: 'Pakistan',
        mat: 378, inn: 350, run: 11739, hs: '137*', cen: 10, hc: 83, avg: 39.53,
        more: 'https://en.wikipedia.org/wiki/Inzamam-ul-Haq'
    },
    {
        link: 'https://images.news18.com/ibnlive/uploads/924x616/jpg/2019/05/Jacques-Kallis.jpg?impolicy=website&width=924&height=616',
        rank: 8,
        name: 'J H Kallis',
        ctry: 'S Africa',
        mat: 328, inn: 314, run: 11579, hs: '139 ', cen: 17, hc: 86, avg: 44.36,
        more: 'https://en.wikipedia.org/wiki/Jacques_Kallis'
    },
    {
        link: 'https://www.youngisthan.in/wp-content/uploads/2018/08/SouravGanguly-2-970x582.jpg',
        rank: 9,
        name: 'S C Ganguly',
        ctry: 'India',
        mat: 311, inn: 300, run: 11363, hs: '183 ', cen: 22, hc: 72, avg: 41.02,
        more: 'https://en.wikipedia.org/wiki/Sourav_Ganguly'
    },
    {
        link: 'https://img.thetruthone.com/2020/01/Happy-Birthday-Rahul-Dravid-11.jpg',
        rank: 10,
        name: 'R Dravid',
        ctry: 'India',
        mat: 344, inn: 318, run: 10889, hs: '153 ', cen: 12, hc: 83, avg: 39.17,
        more: 'https://en.wikipedia.org/wiki/Rahul_Dravid'
    },
    {
        link: 'https://images.firstpost.com/wp-content/uploads/2020/04/ms_opt.jpg',
        rank: 11,
        name: 'M S Dhoni',
        ctry: 'India',
        mat: 350, inn: 297, run: 10737, hs: '183* ', cen: 10, hc: 73, avg: 50.57,
        more: 'https://en.wikipedia.org/wiki/MS_Dhoni'
    },
    {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS6qyiD3QZMk9VCqap10KLiHoS3H6-NcMbbQ&usqp=CAU',
        rank: 12,
        name: 'Chris Gayle',
        ctry: 'W Indies',
        mat: 301, inn: 294, run: 10480, hs: '215 ', cen: 25, hc: 54, avg: 37.83,
        more: 'https://en.wikipedia.org/wiki/Chris_Gayle'
    }
]

export default Stats;