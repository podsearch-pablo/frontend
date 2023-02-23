import ImageResult from "../Result/ImageResult";
import Title from "../Result/Title";
import Date from "../Result/Date";
import { useState, useEffect } from "react";
import ResultList from "../Result/ResultList";

/**
 * Main Search Component- Dynamically searches- SPA
 */
const DynamicSearch = () => {


    const [searchTerm, setSearchTerm] = useState("");
    const [dict, setDict] = useState([]);
    const [listItems, setListItems] = useState([]);
    const [searched, setSearched] = useState(false);
    const [display, setDisplay] = useState(false);
    const [results, setResults] = useState(true);

    useEffect(() => {
        const searchDict = ['The business of filming your daily life (ur mom ashley interview)', 'How Dream Hacked YouTube (and broke the internet)', 'How Hasan Minhaj escaped the YouTube Algorithm', "We Toured Rhett and Link's Wildly Efficient Studio", '1 Million Subscribers', 'Why Jarvis Johnson Analyzes The Internet', "How Rhett & Link Failed their way to YouTube's most successful show", 'How Cody Ko & Noel Miller Turned a Joke into a Multi-Million Dollar Business', 'The Nearly Impossible Job of Managing MrBeast', 'YouTubers ask us tough questions', 'TommyInnit on his Biggest Failures, YouTube Secrets, and friendship with Dream', 'How KSI became an unlikely superstar', 'How Ryan Trahan changed YouTube with $0.01', 'Why Michelle Khare is the Most Badass Human on YouTube', "How YouTube's Worst Inventor Built a Successful Product Design Company", 'How ZHC Gained 13 Million Subscribers In A Year', "Why he's the only honest man left in News.", 'The Most Popular Kids in New York', 'A Very Honest Conversation with Yes Theory', 'YouTuber Merch: Winners and Losers pt. 4', 'The Untold Story of Binging with Babish', 'Why Emma Chamberlain Quit YouTube, Again.', "Van Neistat's Wildly Hand-Made Studio", 'Can true art survive on YouTube?', 'Why Drake wants to be on Chicken Shop Date (not Hot Ones)', 'How Ludwig Became The Biggest Twitch Streamer…Then Left For Youtube', 'What you missed in Kanye\'s "Jeen-Yuhs"', "Why Wordle Won't Go Away", 'How Andrew Schulz took over YouTube', 'How TikTok took down the Super Bowl', "Why Ryan's World is the Richest kid on YouTube", 'Why Liza Koshy Disappeared', 'How MrBeast could make even MORE money', 'Logan Paul and KSI: an unlikely love story', "Inside MKBHD's $1,000,000 Studio", 'Why MKBHD will be the oldest YouTuber ever', 'The Story of Jeff Wittek', 'Why Lilly Singh Left YouTube (and then came back)', 'How MrBeast “Stole” Squid Game', 'YouTuber Merch: Winners and Losers pt. 3', 'The Metaverse has problems', "Dude Perfect's YouTube Struggle", 'Billion Dollar CEO talks about his biggest mistake', 'The Story of Karl', 'Life after burnout', 'How Squid Game Revived Netflix and Took over the World.', 'The Silent Genius of Khaby Lame', "The Dark Side of the D'Amelios", 'The Full Story of MrBeast', 'How MrBeast spends $48,000,000 a year on videos', "Dear Emma Chamberlain, You've Changed.", 'How Jake Paul broke the boxing industry', 'The Wildly Lucrative World of Ice Cream TikTok', 'Why everyone leaves the Hype House', 'He sold his company to Amazon for $970,000,000 ft @Justin Kan\u200b', 'How Tai Verdes Made It', 'The Full Story of Victoria Paris', "Alex Cooper's $60,000,000 Deal with Spotify", 'How college athletes went from $0 to $1 million overnight', "The High Price of Airrack's Success", 'How Much Money Airrack Makes (1.6M Subscribers)', 'The Disney-fication of the Nelk Boys', 'Why Indians Are Taking Over YouTube', 'Who Really Won Logan Paul vs Floyd Mayweather?', 'Roblox, Explained (for Beginners)', "Bo Burnham's Complicated Relationship with Himself", 'Why Ryan Trahan is the Next MrBeast', 'Is Addison Rae Making Real Music?', "Jeff Wittek's $2.4 Million Dollar Mistake", 'Influencers are over. ft @Shelby Church', 'Every Way We Make Money', "How Dixie D'Amelio Murdered Late Night", 'How We Sold an NFT for $___', 'How Much YouTube Paid Us Since The Beginning (14M Views)', 'Why Emma Chamberlain is the New Casey Neistat', 'Why Nas Daily Left A $120,000 Job at Venmo to Make Videos (ft @Nas Daily)', 'The Problem with Buying Stock in Logan Paul (BitClout)', 'How MrBeast Spends More Money Than He Makes', 'How Lil Nas X sold his soul to break the internet', 'Meet the girls saving social media', 'David Dobrik: A Lesson for Creators', 'Charli D’Amelio is selling out (of cold brew)', 'How this NFT sold for $69 Million (Beeple)', 'The Full Story of MKBHD', "How Logan Paul Made Millions Selling Air (NFT's)", 'YouTuber Merch: Winners and Losers pt. 2', 'How Much Money YouTube Paid Us in 2020', 'Surprising Our First Subscribers with Gifts', 'The Story of Coolman Coffeedan', 'Creator of the Year Goes to...', "How it started, How it's going", 'How to make better YouTube Thumbnails', 'Making Merch that actually sells ft Amanda Rach Lee', 'When To Quit Your Job ft Jake Roper (Vsauce3)', 'YouTuber Merch: Winners and Losers pt. 1', 'We quit YouTube.', 'How Watching YouTube Changes You.', 'Our $20,000 YouTube Studio Transformation', '$200,000 Education VS $200 Education', 'The best (and worst) election ads of 2020', 'How Airrack Grew 0 to 1 Million Subscribers and Risked Everything', 'The Future of Phones', 'We Stayed in a $7 Million Dollar Vacation Home', "We bought Cardi B's OnlyFans so you don't have to", 'Why David Dobrik Gives Away Teslas', 'The TikTok Ban, Explained', 'How Much Money YouTube Pays Us (125k Subscribers)', "Why MrBeast will be YouTube's first Billionaire", 'How much money can you make on TikTok?', "TikTok's Takeover, Explained.", 'The Disappearance of David Dobrik', 'Why Video Games are the Future of Concerts', '24 Hrs in Quarantine', '$560,000 Dollar Air Jordans, Explained', "John Krasinski's Some Good News, Honest Thoughts", 'A Tiger King Analysis Video', 'Is this The End of Late Night?', 'How Minimalism Became Mainstream', 'Our Perspective on The New Normal', 'Why "Dude with Sign" is the Best Account on Instagram.', 'Our Secret Project with Samsung', 'Why Hot Ones is the Best Show on the Internet', 'Why David Dobrik Loves Science So Much', 'Why Emma Chamberlain Drinks So Much Coffee', 'Logan Paul KSI 2, Explained.', 'The Curious Case of Lil Miquela', 'Why does Cam Newton have a YouTube Channel?', 'Why Indians are taking over Hollywood', "Apple's Complex Relationship with Memes", 'Why David Dobrik Laughs So Much', 'Finding the Solution to Traffic', 'Why MrBeast is the next PewDiePie', 'Why YouTubers are charging for content now.', "Why YouTube won't talk about this Indian rapper.", 'The Power of Lil Nas X and Logan Paul', "F*ck it, let's just get jobs.", "Hey, we're back 👋🏼👋🏾", 'How to Fix INSTAGRAM', 'NOT a Samsung Galaxy Fold Review', 'Why NBC Chose a YouTuber for Late Night', 'Chasing my childhood dream of becoming a Rockstar', 'Yes Theory gave us ONE WEEK to make a MOVIE', 'My Lowest Moment as an Entrepreneur', 'The Story of Colin and Samir', 'Surprising Yes Theory with a Gift', 'Why we left BuzzFeed', "Hey it's been a while 👋🏼👋🏾", 'Stop Hating on Tik Tok Cringe', 'Trying the Best Burgers in Los Angeles', "Why Politicians don't use YouTube", 'WTF is a VPN?', 'Shane Dawson changed everything.', 'What is Will Smith doing to YouTube?', 'YouTube is Changing: Article 13 Explained', 'What We Do Here', "What's Wrong with Apple?", 'Day in the Life of Colin and Samir feat. Yes Theory', 'Not Your Average PewDiePie vs T-Series Video', 'Dear Casey Neistat Wanabees', 'The Effect of Moment Lenses', "I Didn't Go to Film School", "New Yorker Tries LA's Best Pizza", 'What Happens When you Turn 30', 'Who is Cody Wanner?', 'Lil Miquela Robots are taking over Social Media', 'How to Conquer Your Fears: A Skydiving Story', 'Searching for a Great Documentary Story', 'Reacting to Instagram TV (IGTV)', 'A Week in the Life of Colin and Samir', 'The Making of a Viral Book', "Where We've Been", 'How to Grow an Audience', 'Why Trick Shots STILL Break the Internet', 'Why does every YouTuber have a podcast?', "Colin and Samir's Filmmaking Everyday Carry", "Colin and Samir's 5 Rules of Filmmaking (on the internet)", 'How a Blind YouTuber Makes Videos', 'A little more about us', '24 Hours in Utah', 'Answering Subscriber Questions on the Street', 'Life Through Our Lenses', 'Behind the Scenes with Mango Street', 'Twitch vs YouTube ft. Sam Sheffer and Justin Odisho', 'A Crash Course in Twitch', 'They Invited Us to Dinner (YES THEORY)', 'Putting yourself on camera (VLOG)', 'Your most IMPORTANT video', 'A Goal of Ours', '$16 Coffee: Is it Worth it???', 'How to Get 50,000 Subscribers', 'KICK DOWN THE DOOR', 'How Collabs Happen: Mary Spender', 'How Should YouTube Communicate?', "Jack Coyne's ONE tip for YouTubers...wait til the end", 'Jack Coyne Is Trending', '100,000 Subscribers in 3 DAYS', 'What Happened to our Beme Show?', 'Why does Will Smith have a YouTube channel?', '24 Hours to Meet YES THEORY', 'Censorship on YouTube: A Solution', 'Rylo 360 Camera Unboxing and Test', '4 Reasons YouTube will DOMINATE in 2018', 'Mic Comparison: Shure SM7B vs Rode NT1A', 'Beme News: A Comprehensive Review', 'iPhone X vs  iPhone 8 Explained', "Colin's 6000 mile surprise", 'First Haircut in 4 Years', 'Skateboarding in Death Valley | Now Boarding ep 3', "World's Shortest Train Route", 'How to be Productive', 'Is this too much?', 'Our vlog camera', 'The Perfect Skateboard Box | NOW BOARDING ep 2', 'Starting a Cruiser Skateboard Company | NOW BOARDING ep 1', 'Felix Gray Glasses Unboxing', 'Paul Rabil Bones Shirt Collab', 'CLEANING UP OUR STUDIO', 'LA FREEWAYS FROM ABOVE', "BEST VLOG CAMERA YOU CAN'T BUY", 'Branding a Building', 'About Our Skateboards', 'Letter from Mumbai', 'Friends at the Studio', 'How I got my start in graphic design', 'How to Start Filmmaking: An Exercise', 'Should you go to film school?', 'Unboxing Our New Stickers', 'San Diego Travel Vlog Day 2', 'Should we get this camera? Sony a5100', 'Helicopter Flight Over New York City', 'A DAY IN THE LIFE OF COLIN', 'A DAY IN THE LIFE OF SAMIR', 'Big in Japan', "We Took Over Casey Neistat's Vlog", 'Los Angeles Drone Flight', 'Snapchat Spectacles Review', 'Spending A Year Homeless | Old Man SAXON', 'How to Quit Your Job and Travel', 'Send Us A Story', 'Home Away from Home', 'Home to India', 'November 8th, 2016', 'State of the Channel | November 3rd, 2016', 'Our Favorite Place in Los Angeles', 'A DAY IN THE LIFE OF COLIN AND SAMIR', 'Portland Travel Guide', 'How to Launch a Startup', 'This is Fairfax: Streetwear + Community'];
        const uploadDict = { 'The business of filming your daily life (ur mom ashley interview)': '2022-11-07', 'How Dream Hacked YouTube (and broke the internet)': '2022-10-24', 'How Hasan Minhaj escaped the YouTube Algorithm': '2022-10-10', "We Toured Rhett and Link's Wildly Efficient Studio": '2022-10-06', '1 Million Subscribers': '2022-10-03', 'Why Jarvis Johnson Analyzes The Internet': '2022-09-19', "How Rhett & Link Failed their way to YouTube's most successful show": '2022-09-05', 'How Cody Ko & Noel Miller Turned a Joke into a Multi-Million Dollar Business': '2022-08-24', 'The Nearly Impossible Job of Managing MrBeast': '2022-08-15', 'YouTubers ask us tough questions': '2022-07-27', 'TommyInnit on his Biggest Failures, YouTube Secrets, and friendship with Dream': '2022-07-20', 'How KSI became an unlikely superstar': '2022-06-27', 'How Ryan Trahan changed YouTube with $0.01': '2022-06-06', 'Why Michelle Khare is the Most Badass Human on YouTube': '2022-05-31', "How YouTube's Worst Inventor Built a Successful Product Design Company": '2022-05-23', 'How ZHC Gained 13 Million Subscribers In A Year': '2022-05-16', "Why he's the only honest man left in News.": '2022-05-03', 'The Most Popular Kids in New York': '2022-04-26', 'A Very Honest Conversation with Yes Theory': '2022-04-18', 'YouTuber Merch: Winners and Losers pt. 4': '2022-04-06', 'The Untold Story of Binging with Babish': '2022-03-28', 'Why Emma Chamberlain Quit YouTube, Again.': '2022-03-21', "Van Neistat's Wildly Hand-Made Studio": '2022-03-17', 'Can true art survive on YouTube?': '2022-03-14', 'Why Drake wants to be on Chicken Shop Date (not Hot Ones)': '2022-03-07', 'How Ludwig Became The Biggest Twitch Streamer…Then Left For Youtube': '2022-02-28', 'What you missed in Kanye\'s "Jeen-Yuhs"': '2022-02-21', "Why Wordle Won't Go Away": '2022-02-18', 'How Andrew Schulz took over YouTube': '2022-02-14', 'How TikTok took down the Super Bowl': '2022-02-11', "Why Ryan's World is the Richest kid on YouTube": '2022-02-07', 'Why Liza Koshy Disappeared': '2022-01-31', 'How MrBeast could make even MORE money': '2022-01-24', 'Logan Paul and KSI: an unlikely love story': '2022-01-17', "Inside MKBHD's $1,000,000 Studio": '2022-01-13', 'Why MKBHD will be the oldest YouTuber ever': '2022-01-10', 'The Story of Jeff Wittek': '2021-12-20', 'Why Lilly Singh Left YouTube (and then came back)': '2021-12-13', 'How MrBeast “Stole” Squid Game': '2021-12-06', 'YouTuber Merch: Winners and Losers pt. 3': '2021-11-29', 'The Metaverse has problems': '2021-11-22', "Dude Perfect's YouTube Struggle": '2021-11-16', 'Billion Dollar CEO talks about his biggest mistake': '2021-11-08', 'The Story of Karl': '2021-11-01', 'Life after burnout': '2021-10-25', 'How Squid Game Revived Netflix and Took over the World.': '2021-10-18', 'The Silent Genius of Khaby Lame': '2021-10-11', "The Dark Side of the D'Amelios": '2021-09-27', 'The Full Story of MrBeast': '2021-09-20', 'How MrBeast spends $48,000,000 a year on videos': '2021-09-15', "Dear Emma Chamberlain, You've Changed.": '2021-09-07', 'How Jake Paul broke the boxing industry': '2021-08-29', 'The Wildly Lucrative World of Ice Cream TikTok': '2021-08-23', 'Why everyone leaves the Hype House': '2021-08-09', 'He sold his company to Amazon for $970,000,000 ft @Justin Kan\u200b': '2021-08-02', 'How Tai Verdes Made It': '2021-07-26', 'The Full Story of Victoria Paris': '2021-07-19', "Alex Cooper's $60,000,000 Deal with Spotify": '2021-07-14', 'How college athletes went from $0 to $1 million overnight': '2021-07-12', "The High Price of Airrack's Success": '2021-07-05', 'How Much Money Airrack Makes (1.6M Subscribers)': '2021-06-28', 'The Disney-fication of the Nelk Boys': '2021-06-21', 'Why Indians Are Taking Over YouTube': '2021-06-14', 'Who Really Won Logan Paul vs Floyd Mayweather?': '2021-06-09', 'Roblox, Explained (for Beginners)': '2021-06-07', "Bo Burnham's Complicated Relationship with Himself": '2021-06-04', 'Why Ryan Trahan is the Next MrBeast': '2021-06-01', 'Is Addison Rae Making Real Music?': '2021-05-24', "Jeff Wittek's $2.4 Million Dollar Mistake": '2021-05-19', 'Influencers are over. ft @Shelby Church': '2021-05-17', 'Every Way We Make Money': '2021-05-13', "How Dixie D'Amelio Murdered Late Night": '2021-05-10', 'How We Sold an NFT for $___': '2021-05-03', 'How Much YouTube Paid Us Since The Beginning (14M Views)': '2021-04-26', 'Why Emma Chamberlain is the New Casey Neistat': '2021-04-19', 'Why Nas Daily Left A $120,000 Job at Venmo to Make Videos (ft @Nas Daily)': '2021-04-12', 'The Problem with Buying Stock in Logan Paul (BitClout)': '2021-04-07', 'How MrBeast Spends More Money Than He Makes': '2021-04-05', 'How Lil Nas X sold his soul to break the internet': '2021-03-31', 'Meet the girls saving social media': '2021-03-29', 'David Dobrik: A Lesson for Creators': '2021-03-24', 'Charli D’Amelio is selling out (of cold brew)': '2021-03-22', 'How this NFT sold for $69 Million (Beeple)': '2021-03-15', 'The Full Story of MKBHD': '2021-03-08', "How Logan Paul Made Millions Selling Air (NFT's)": '2021-03-01', 'YouTuber Merch: Winners and Losers pt. 2': '2021-02-22', 'How Much Money YouTube Paid Us in 2020': '2021-02-01', 'Surprising Our First Subscribers with Gifts': '2020-12-23', 'The Story of Coolman Coffeedan': '2020-12-20', 'Creator of the Year Goes to...': '2020-12-19', "How it started, How it's going": '2020-12-16', 'How to make better YouTube Thumbnails': '2020-12-15', 'Making Merch that actually sells ft Amanda Rach Lee': '2020-12-13', 'When To Quit Your Job ft Jake Roper (Vsauce3)': '2020-12-06', 'YouTuber Merch: Winners and Losers pt. 1': '2020-11-29', 'We quit YouTube.': '2020-11-22', 'How Watching YouTube Changes You.': '2020-11-19', 'Our $20,000 YouTube Studio Transformation': '2020-11-17', '$200,000 Education VS $200 Education': '2020-11-01', 'The best (and worst) election ads of 2020': '2020-10-20', 'How Airrack Grew 0 to 1 Million Subscribers and Risked Everything': '2020-09-30', 'The Future of Phones': '2020-09-27', 'We Stayed in a $7 Million Dollar Vacation Home': '2020-09-23', "We bought Cardi B's OnlyFans so you don't have to": '2020-08-23', 'Why David Dobrik Gives Away Teslas': '2020-08-12', 'The TikTok Ban, Explained': '2020-08-05', 'How Much Money YouTube Pays Us (125k Subscribers)': '2020-07-15', "Why MrBeast will be YouTube's first Billionaire": '2020-07-07', 'How much money can you make on TikTok?': '2020-06-28', "TikTok's Takeover, Explained.": '2020-06-14', 'The Disappearance of David Dobrik': '2020-05-24', 'Why Video Games are the Future of Concerts': '2020-05-17', '24 Hrs in Quarantine': '2020-05-03', '$560,000 Dollar Air Jordans, Explained': '2020-04-26', "John Krasinski's Some Good News, Honest Thoughts": '2020-04-19', 'A Tiger King Analysis Video': '2020-04-05', 'Is this The End of Late Night?': '2020-03-29', 'How Minimalism Became Mainstream': '2020-03-22', 'Our Perspective on The New Normal': '2020-03-21', 'Why "Dude with Sign" is the Best Account on Instagram.': '2020-03-08', 'Our Secret Project with Samsung': '2020-02-23', 'Why Hot Ones is the Best Show on the Internet': '2020-02-07', 'Why David Dobrik Loves Science So Much': '2020-01-29', 'Why Emma Chamberlain Drinks So Much Coffee': '2020-01-15', 'Logan Paul KSI 2, Explained.': '2019-11-18', 'The Curious Case of Lil Miquela': '2019-11-13', 'Why does Cam Newton have a YouTube Channel?': '2019-10-06', 'Why Indians are taking over Hollywood': '2019-09-24', "Apple's Complex Relationship with Memes": '2019-09-15', 'Why David Dobrik Laughs So Much': '2019-09-08', 'Finding the Solution to Traffic': '2019-09-01', 'Why MrBeast is the next PewDiePie': '2019-08-25', 'Why YouTubers are charging for content now.': '2019-08-18', "Why YouTube won't talk about this Indian rapper.": '2019-08-04', 'The Power of Lil Nas X and Logan Paul': '2019-07-28', "F*ck it, let's just get jobs.": '2019-07-21', "Hey, we're back 👋🏼👋🏾": '2019-07-14', 'How to Fix INSTAGRAM': '2019-04-28', 'NOT a Samsung Galaxy Fold Review': '2019-04-21', 'Why NBC Chose a YouTuber for Late Night': '2019-04-02', 'Chasing my childhood dream of becoming a Rockstar': '2019-03-20', 'Yes Theory gave us ONE WEEK to make a MOVIE': '2019-03-10', 'My Lowest Moment as an Entrepreneur': '2019-02-27', 'The Story of Colin and Samir': '2019-02-10', 'Surprising Yes Theory with a Gift': '2018-12-20', 'Why we left BuzzFeed': '2018-12-09', "Hey it's been a while 👋🏼👋🏾": '2018-11-30', 'Stop Hating on Tik Tok Cringe': '2018-11-11', 'Trying the Best Burgers in Los Angeles': '2018-11-04', "Why Politicians don't use YouTube": '2018-10-22', 'WTF is a VPN?': '2018-10-16', 'Shane Dawson changed everything.': '2018-10-07', 'What is Will Smith doing to YouTube?': '2018-09-30', 'YouTube is Changing: Article 13 Explained': '2018-09-23', 'What We Do Here': '2018-09-21', "What's Wrong with Apple?": '2018-09-16', 'Day in the Life of Colin and Samir feat. Yes Theory': '2018-09-14', 'Not Your Average PewDiePie vs T-Series Video': '2018-09-09', 'Dear Casey Neistat Wanabees': '2018-08-30', 'The Effect of Moment Lenses': '2018-08-30', "I Didn't Go to Film School": '2018-08-15', "New Yorker Tries LA's Best Pizza": '2018-08-12', 'What Happens When you Turn 30': '2018-08-09', 'Who is Cody Wanner?': '2018-08-02', 'Lil Miquela Robots are taking over Social Media': '2018-07-16', 'How to Conquer Your Fears: A Skydiving Story': '2018-07-14', 'Searching for a Great Documentary Story': '2018-06-28', 'Reacting to Instagram TV (IGTV)': '2018-06-27', 'A Week in the Life of Colin and Samir': '2018-06-22', 'The Making of a Viral Book': '2018-06-15', "Where We've Been": '2018-06-04', 'How to Grow an Audience': '2018-05-29', 'Why Trick Shots STILL Break the Internet': '2018-05-16', 'Why does every YouTuber have a podcast?': '2018-05-08', "Colin and Samir's Filmmaking Everyday Carry": '2018-05-04', "Colin and Samir's 5 Rules of Filmmaking (on the internet)": '2018-05-02', 'How a Blind YouTuber Makes Videos': '2018-04-29', 'A little more about us': '2018-04-28', '24 Hours in Utah': '2018-04-26', 'Answering Subscriber Questions on the Street': '2018-04-25', 'Life Through Our Lenses': '2018-04-19', 'Behind the Scenes with Mango Street': '2018-04-13', 'Twitch vs YouTube ft. Sam Sheffer and Justin Odisho': '2018-04-09', 'A Crash Course in Twitch': '2018-04-07', 'They Invited Us to Dinner (YES THEORY)': '2018-04-05', 'Putting yourself on camera (VLOG)': '2018-03-30', 'Your most IMPORTANT video': '2018-03-23', 'A Goal of Ours': '2018-03-16', '$16 Coffee: Is it Worth it???': '2018-03-13', 'How to Get 50,000 Subscribers': '2018-03-09', 'KICK DOWN THE DOOR': '2018-03-05', 'How Collabs Happen: Mary Spender': '2018-03-04', 'How Should YouTube Communicate?': '2018-02-21', "Jack Coyne's ONE tip for YouTubers...wait til the end": '2018-02-16', 'Jack Coyne Is Trending': '2018-02-14', '100,000 Subscribers in 3 DAYS': '2018-02-11', 'What Happened to our Beme Show?': '2018-02-10', 'Why does Will Smith have a YouTube channel?': '2018-02-03', '24 Hours to Meet YES THEORY': '2018-01-27', 'Censorship on YouTube: A Solution': '2018-01-13', 'Rylo 360 Camera Unboxing and Test': '2018-01-08', '4 Reasons YouTube will DOMINATE in 2018': '2018-01-01', 'Mic Comparison: Shure SM7B vs Rode NT1A': '2017-12-13', 'Beme News: A Comprehensive Review': '2017-12-02', 'iPhone X vs  iPhone 8 Explained': '2017-09-14', "Colin's 6000 mile surprise": '2017-09-10', 'First Haircut in 4 Years': '2017-09-04', 'Skateboarding in Death Valley | Now Boarding ep 3': '2017-09-02', "World's Shortest Train Route": '2017-09-01', 'How to be Productive': '2017-08-31', 'Is this too much?': '2017-08-29', 'Our vlog camera': '2017-08-27', 'The Perfect Skateboard Box | NOW BOARDING ep 2': '2017-08-06', 'Starting a Cruiser Skateboard Company | NOW BOARDING ep 1': '2017-07-29', 'Felix Gray Glasses Unboxing': '2017-06-09', 'Paul Rabil Bones Shirt Collab': '2017-05-24', 'CLEANING UP OUR STUDIO': '2017-05-22', 'LA FREEWAYS FROM ABOVE': '2017-05-21', "BEST VLOG CAMERA YOU CAN'T BUY": '2017-05-20', 'Branding a Building': '2017-05-19', 'About Our Skateboards': '2017-05-18', 'Letter from Mumbai': '2017-05-16', 'Friends at the Studio': '2017-05-16', 'How I got my start in graphic design': '2017-05-14', 'How to Start Filmmaking: An Exercise': '2017-05-13', 'Should you go to film school?': '2017-05-11', 'Unboxing Our New Stickers': '2017-05-04', 'San Diego Travel Vlog Day 2': '2017-04-26', 'Should we get this camera? Sony a5100': '2017-04-25', 'Helicopter Flight Over New York City': '2017-04-24', 'A DAY IN THE LIFE OF COLIN': '2017-04-21', 'A DAY IN THE LIFE OF SAMIR': '2017-04-21', 'Big in Japan': '2017-04-11', "We Took Over Casey Neistat's Vlog": '2017-04-07', 'Los Angeles Drone Flight': '2017-02-09', 'Snapchat Spectacles Review': '2017-02-03', 'Spending A Year Homeless | Old Man SAXON': '2017-01-05', 'How to Quit Your Job and Travel': '2016-12-17', 'Send Us A Story': '2016-12-09', 'Home Away from Home': '2016-11-26', 'Home to India': '2016-11-17', 'November 8th, 2016': '2016-11-10', 'State of the Channel | November 3rd, 2016': '2016-11-03', 'Our Favorite Place in Los Angeles': '2016-10-28', 'A DAY IN THE LIFE OF COLIN AND SAMIR': '2016-10-20', 'Portland Travel Guide': '2016-10-13', 'How to Launch a Startup': '2016-10-06', 'This is Fairfax: Streetwear + Community': '2016-09-29' };


        let ans = [];

        for (let a = 0; a < listItems.length; a++) {

            ans.push(
                <div className="col-span-4 pt-16">
                    <div className="flex justify-center">
                        <ImageResult id={String(searchDict.indexOf(listItems[a + 2]))} />
                    </div>
                </div>);

            ans.push(< div className="item2 pt-16 col-span-5" >
                {listItems[a]}
                {listItems[a + 1]}
            </div >
            );
            ans.push(<div className="item2 col-span-2" >
                <div className="pr-20">
                    <Date date={uploadDict[listItems[a + 2]]} />
                </div>
            </div >);
            a += 2;

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

                if (data.length === 0) {
                    setListItems([]);
                }
                else {
                    setDict(data);
                    setSearched(true);
                    let lst = []

                    if (dict.length === 0) {
                        setResults(false);
                        console.log("FALSE");
                    }
                    else {
                        console.log("SEARCHED");
                        setResults(true);
                    }

                    for (let x = 0; x < dict.length; x++) {
                        console.log(dict[x]['Clips']);


                        lst.push(
                            <Title input={dict[x]['Name']} />
                        );

                        lst.push(
                            <ResultList search={searchTerm} dictionary={dict[x]['Clips']} />

                        )

                        lst.push((dict[x]['Name']));

                    }
                    setListItems([]);
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







            {results ? <div>{searched ? display : <div>  </div>}  </div> : <div className="pt-10 text-white block font-bold text-2xl text-center"> No results...</div>}


        </>

    );
}

export default DynamicSearch;