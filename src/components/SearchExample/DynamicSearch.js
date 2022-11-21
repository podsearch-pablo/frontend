import ImageResult2 from "../Result/ImageResult2";

import Title2 from "../Result/Title2";
import Date from "../Result/Date";
import Scrunch2 from "../Result/Scrunch2";
import Scrunch from "../Result/Scrunch";
import { useState } from "react";
import { useEffect } from "react";
import ReactDOMServer from 'react-dom/server';
import { list } from "postcss";



//Main Search Component- Dynamically searches- SPA
const DynamicSearch = () => {

    const [searchDict, setSearchDict] = useState(['The business of filming your daily life (ur mom ashley interview)', 'How Dream Hacked YouTube (and broke the internet)', 'How Hasan Minhaj escaped the YouTube Algorithm', "We Toured Rhett and Link's Wildly Efficient Studio", '1 Million Subscribers', 'Why Jarvis Johnson Analyzes The Internet', "How Rhett & Link Failed their way to YouTube's most successful show", 'How Cody Ko & Noel Miller Turned a Joke into a Multi-Million Dollar Business', 'The Nearly Impossible Job of Managing MrBeast', 'YouTubers ask us tough questions', 'TommyInnit on his Biggest Failures, YouTube Secrets, and friendship with Dream', 'How KSI became an unlikely superstar', 'How Ryan Trahan changed YouTube with $0.01', 'Why Michelle Khare is the Most Badass Human on YouTube', "How YouTube's Worst Inventor Built a Successful Product Design Company", 'How ZHC Gained 13 Million Subscribers In A Year', "Why he's the only honest man left in News.", 'The Most Popular Kids in New York', 'A Very Honest Conversation with Yes Theory', 'YouTuber Merch: Winners and Losers pt. 4', 'The Untold Story of Binging with Babish', 'Why Emma Chamberlain Quit YouTube, Again.', "Van Neistat's Wildly Hand-Made Studio", 'Can true art survive on YouTube?', 'Why Drake wants to be on Chicken Shop Date (not Hot Ones)', 'How Ludwig Became The Biggest Twitch Streamer…Then Left For Youtube', 'What you missed in Kanye\'s "Jeen-Yuhs"', "Why Wordle Won't Go Away", 'How Andrew Schulz took over YouTube', 'How TikTok took down the Super Bowl', "Why Ryan's World is the Richest kid on YouTube", 'Why Liza Koshy Disappeared', 'How MrBeast could make even MORE money', 'Logan Paul and KSI: an unlikely love story', "Inside MKBHD's $1,000,000 Studio", 'Why MKBHD will be the oldest YouTuber ever', 'The Story of Jeff Wittek', 'Why Lilly Singh Left YouTube (and then came back)', 'How MrBeast “Stole” Squid Game', 'YouTuber Merch: Winners and Losers pt. 3', 'The Metaverse has problems', "Dude Perfect's YouTube Struggle", 'Billion Dollar CEO talks about his biggest mistake', 'The Story of Karl', 'Life after burnout', 'How Squid Game Revived Netflix and Took over the World.', 'The Silent Genius of Khaby Lame', "The Dark Side of the D'Amelios", 'The Full Story of MrBeast', 'How MrBeast spends $48,000,000 a year on videos', "Dear Emma Chamberlain, You've Changed.", 'How Jake Paul broke the boxing industry', 'The Wildly Lucrative World of Ice Cream TikTok', 'Why everyone leaves the Hype House', 'He sold his company to Amazon for $970,000,000 ft @Justin Kan\u200b', 'How Tai Verdes Made It', 'The Full Story of Victoria Paris', "Alex Cooper's $60,000,000 Deal with Spotify", 'How college athletes went from $0 to $1 million overnight', "The High Price of Airrack's Success", 'How Much Money Airrack Makes (1.6M Subscribers)', 'The Disney-fication of the Nelk Boys', 'Why Indians Are Taking Over YouTube', 'Who Really Won Logan Paul vs Floyd Mayweather?', 'Roblox, Explained (for Beginners)', "Bo Burnham's Complicated Relationship with Himself", 'Why Ryan Trahan is the Next MrBeast', 'Is Addison Rae Making Real Music?', "Jeff Wittek's $2.4 Million Dollar Mistake", 'Influencers are over. ft @Shelby Church', 'Every Way We Make Money', "How Dixie D'Amelio Murdered Late Night", 'How We Sold an NFT for $___', 'How Much YouTube Paid Us Since The Beginning (14M Views)', 'Why Emma Chamberlain is the New Casey Neistat', 'Why Nas Daily Left A $120,000 Job at Venmo to Make Videos (ft @Nas Daily)', 'The Problem with Buying Stock in Logan Paul (BitClout)', 'How MrBeast Spends More Money Than He Makes', 'How Lil Nas X sold his soul to break the internet', 'Meet the girls saving social media', 'David Dobrik: A Lesson for Creators', 'Charli D’Amelio is selling out (of cold brew)', 'How this NFT sold for $69 Million (Beeple)', 'The Full Story of MKBHD', "How Logan Paul Made Millions Selling Air (NFT's)", 'YouTuber Merch: Winners and Losers pt. 2', 'How Much Money YouTube Paid Us in 2020', 'Surprising Our First Subscribers with Gifts', 'The Story of Coolman Coffeedan', 'Creator of the Year Goes to...', "How it started, How it's going", 'How to make better YouTube Thumbnails', 'Making Merch that actually sells ft Amanda Rach Lee', 'When To Quit Your Job ft Jake Roper (Vsauce3)', 'YouTuber Merch: Winners and Losers pt. 1', 'We quit YouTube.', 'How Watching YouTube Changes You.', 'Our $20,000 YouTube Studio Transformation', '$200,000 Education VS $200 Education', 'The best (and worst) election ads of 2020', 'How Airrack Grew 0 to 1 Million Subscribers and Risked Everything', 'The Future of Phones', 'We Stayed in a $7 Million Dollar Vacation Home', "We bought Cardi B's OnlyFans so you don't have to", 'Why David Dobrik Gives Away Teslas', 'The TikTok Ban, Explained', 'How Much Money YouTube Pays Us (125k Subscribers)', "Why MrBeast will be YouTube's first Billionaire", 'How much money can you make on TikTok?', "TikTok's Takeover, Explained.", 'The Disappearance of David Dobrik', 'Why Video Games are the Future of Concerts', '24 Hrs in Quarantine', '$560,000 Dollar Air Jordans, Explained', "John Krasinski's Some Good News, Honest Thoughts", 'A Tiger King Analysis Video', 'Is this The End of Late Night?', 'How Minimalism Became Mainstream', 'Our Perspective on The New Normal', 'Why "Dude with Sign" is the Best Account on Instagram.', 'Our Secret Project with Samsung', 'Why Hot Ones is the Best Show on the Internet', 'Why David Dobrik Loves Science So Much', 'Why Emma Chamberlain Drinks So Much Coffee', 'Logan Paul KSI 2, Explained.', 'The Curious Case of Lil Miquela', 'Why does Cam Newton have a YouTube Channel?', 'Why Indians are taking over Hollywood', "Apple's Complex Relationship with Memes", 'Why David Dobrik Laughs So Much', 'Finding the Solution to Traffic', 'Why MrBeast is the next PewDiePie', 'Why YouTubers are charging for content now.', "Why YouTube won't talk about this Indian rapper.", 'The Power of Lil Nas X and Logan Paul', "F*ck it, let's just get jobs.", "Hey, we're back 👋🏼👋🏾", 'How to Fix INSTAGRAM', 'NOT a Samsung Galaxy Fold Review', 'Why NBC Chose a YouTuber for Late Night', 'Chasing my childhood dream of becoming a Rockstar', 'Yes Theory gave us ONE WEEK to make a MOVIE', 'My Lowest Moment as an Entrepreneur', 'The Story of Colin and Samir', 'Surprising Yes Theory with a Gift', 'Why we left BuzzFeed', "Hey it's been a while 👋🏼👋🏾", 'Stop Hating on Tik Tok Cringe', 'Trying the Best Burgers in Los Angeles', "Why Politicians don't use YouTube", 'WTF is a VPN?', 'Shane Dawson changed everything.', 'What is Will Smith doing to YouTube?', 'YouTube is Changing: Article 13 Explained', 'What We Do Here', "What's Wrong with Apple?", 'Day in the Life of Colin and Samir feat. Yes Theory', 'Not Your Average PewDiePie vs T-Series Video', 'Dear Casey Neistat Wanabees', 'The Effect of Moment Lenses', "I Didn't Go to Film School", "New Yorker Tries LA's Best Pizza", 'What Happens When you Turn 30', 'Who is Cody Wanner?', 'Lil Miquela Robots are taking over Social Media', 'How to Conquer Your Fears: A Skydiving Story', 'Searching for a Great Documentary Story', 'Reacting to Instagram TV (IGTV)', 'A Week in the Life of Colin and Samir', 'The Making of a Viral Book', "Where We've Been", 'How to Grow an Audience', 'Why Trick Shots STILL Break the Internet', 'Why does every YouTuber have a podcast?', "Colin and Samir's Filmmaking Everyday Carry", "Colin and Samir's 5 Rules of Filmmaking (on the internet)", 'How a Blind YouTuber Makes Videos', 'A little more about us', '24 Hours in Utah', 'Answering Subscriber Questions on the Street', 'Life Through Our Lenses', 'Behind the Scenes with Mango Street', 'Twitch vs YouTube ft. Sam Sheffer and Justin Odisho', 'A Crash Course in Twitch', 'They Invited Us to Dinner (YES THEORY)', 'Putting yourself on camera (VLOG)', 'Your most IMPORTANT video', 'A Goal of Ours', '$16 Coffee: Is it Worth it???', 'How to Get 50,000 Subscribers', 'KICK DOWN THE DOOR', 'How Collabs Happen: Mary Spender', 'How Should YouTube Communicate?', "Jack Coyne's ONE tip for YouTubers...wait til the end", 'Jack Coyne Is Trending', '100,000 Subscribers in 3 DAYS', 'What Happened to our Beme Show?', 'Why does Will Smith have a YouTube channel?', '24 Hours to Meet YES THEORY', 'Censorship on YouTube: A Solution', 'Rylo 360 Camera Unboxing and Test', '4 Reasons YouTube will DOMINATE in 2018', 'Mic Comparison: Shure SM7B vs Rode NT1A', 'Beme News: A Comprehensive Review', 'iPhone X vs  iPhone 8 Explained', "Colin's 6000 mile surprise", 'First Haircut in 4 Years', 'Skateboarding in Death Valley | Now Boarding ep 3', "World's Shortest Train Route", 'How to be Productive', 'Is this too much?', 'Our vlog camera', 'The Perfect Skateboard Box | NOW BOARDING ep 2', 'Starting a Cruiser Skateboard Company | NOW BOARDING ep 1', 'Felix Gray Glasses Unboxing', 'Paul Rabil Bones Shirt Collab', 'CLEANING UP OUR STUDIO', 'LA FREEWAYS FROM ABOVE', "BEST VLOG CAMERA YOU CAN'T BUY", 'Branding a Building', 'About Our Skateboards', 'Letter from Mumbai', 'Friends at the Studio', 'How I got my start in graphic design', 'How to Start Filmmaking: An Exercise', 'Should you go to film school?', 'Unboxing Our New Stickers', 'San Diego Travel Vlog Day 2', 'Should we get this camera? Sony a5100', 'Helicopter Flight Over New York City', 'A DAY IN THE LIFE OF COLIN', 'A DAY IN THE LIFE OF SAMIR', 'Big in Japan', "We Took Over Casey Neistat's Vlog", 'Los Angeles Drone Flight', 'Snapchat Spectacles Review', 'Spending A Year Homeless | Old Man SAXON', 'How to Quit Your Job and Travel', 'Send Us A Story', 'Home Away from Home', 'Home to India', 'November 8th, 2016', 'State of the Channel | November 3rd, 2016', 'Our Favorite Place in Los Angeles', 'A DAY IN THE LIFE OF COLIN AND SAMIR', 'Portland Travel Guide', 'How to Launch a Startup', 'This is Fairfax: Streetwear + Community']);

    const [searchTerm, setSearchTerm] = useState("");
    const [dict, setDict] = useState();
    const [listItems, setListItems] = useState([]);
    const [searched, setSearched] = useState(false);
    const [display, setDisplay] = useState(false);

    useEffect(() => {

        console.log("HERE");
        console.log(searchDict.indexOf('How Dream Hacked YouTube (and broke the internet)'));

        let ans = [];

        for (let a = 0; a < listItems.length; a++) {


            ans.push(
                <div className="col-span-4 pt-16">

                    <div className="flex justify-center">
                        <ImageResult2 id={String(listItems[a+2])} />
                    </div>
                </div>);

            ans.push(< div className="item2 pt-16 col-span-5" >
                {listItems[a]}
                {listItems[a + 1]}
            </div >
            );

            ans.push(<div className="item2 col-span-2" >
                <div className="pr-20">
                    <Date date="10/3/2" />
                </div>

            </div >);
            a+=2;

        };


        setDisplay(
            <div>
                <div className="pt-10 grid grid-cols-11">
                    {ans}

                </div>
            </div>


        );

    }, [listItems]);



    const fetchAllData = (event) => {
        event.preventDefault();


        fetch('http://127.0.0.1:5000/details', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                searchterm: searchTerm
            })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                if (data.length == 0) {
                    setListItems([]);
                }
                else {
                    setDict(data);
                    setSearched(true);
                    let lst = []

                    for (let x = 0; x < dict.length; x++) {


                        lst.push(
                            <Title2 input={dict[x]['Name']} />
                        );

                        lst.push(dict[x]['Clips'].map((ad) =>
                            <div className="pl-15 pb-8">
                                <Scrunch2 keyword={searchTerm} m={ad['text']} key={ad['exactTime']} link={ad['link']} time={ad['exactTime']} />
                            </div>)
                        );

                        lst.push(searchDict.indexOf(dict[x]['Name']));

                    }


                    setListItems(lst);
                }

            })

    }




    return (
        <>

            <div className="flex justify-center text-center justify-center align-center ">
                <p className="font-custom1 absolute top-5 left-1/2 transform -translate-x-1/2 text-white pt-9 text-5xl">Search Colin and Samir</p>


                <form onSubmit={fetchAllData} className="bg-blue pt-12 w-1/2  ">
                    <label for="default-search" className="justify-center mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="justify-center relative">
                        <div className="flex absolute inset-y-0  items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input onChange={event => setSearchTerm(event.target.value)}
                            type="search" id="default-search" className="block font-bold text-2xl p-4 pl-10 w-full text-lg text-white bg-[#3730A3] rounded-full focus:ring-blue-500  dark:bg-gray-700  dark:placeholder-white dark:text-white dark:focus:ring-blue-500" placeholder="Search content..." required />
                    </div>
                </form>

            </div>








            {searched ?
                display
                : <div></div>
            }


        </>

    );
}

export default DynamicSearch;