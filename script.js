const interviewData = {
  "transcript": {
    "Barack": [
      "Okay. You ready?",
      "Let's get started. Awesome. So today's case is a fun one, and I decided that I wanted to localize it for you. So the case is called Texas Unemployment Bump, and I’ll read you out the intro right now. Our client is the great state of Texas, the only state in the US that has its own state-shaped waffle makers. Texas is the second largest state in the US by population, with 29 million residents in 2019. Moreover, despite the traditionally high growth rates of job availability in Texas, the state did not escape the COVID effect on unemployment. After a peak of 13.5% unemployment, which was how many of the workforce filed for unemployment in April 2020, the rate remained still high in September 2020 at 8.5%. So with this, dare I say it, unprecedented spike in unemployment rates, there has been a similar increase in unemployment insurance fraud, which occurs when people mislead or lie when filing a claim to ensure they have a higher level of benefits than they would otherwise be entitled to. The Texas Workforce Commission has hired us to look to reduce fraud instances and improve fraud capture. How would you think about it, and what would you recommend?",
      "Okay. So we're looking in my neck of the woods here. I’m going to go ahead and replay what I heard just to make sure that I captured the important details. So our client is the state of Texas, more specifically the Texas Workforce Commission. The state has 29 million residents.\n We have this situation where job availability peaked at 13.5% unemployment in April, and it still remains pretty high in September at 8.5%. What this has led to is increasing unemployment insurance fraud. Unemployment insurance fraud is where folks are asking for higher benefits or claiming higher benefits than they're actually entitled to. Our client has asked us to do two things: to reduce the number of fraud instances and also to increase the rate at which we identify fraud. Did I get all of that correctly?",
      "8.5.",
      "Okay, perfect. All right. Well, yeah, this definitely sounds like something non-traditional. I’d love to ask some questions to orient myself and get some context here.",
      "All right. So the first thing I’d like to know is a little bit more about what unemployment insurance is and how it works. You know, I can make a surface-level guess that it's money paid out to folks who don't have a job, but I’d love to understand a little bit more about just how it works.",
      "Yeah, we'll explore that I think a little bit more inside the case, but just what would you think about, what would be the normal process that you would expect?",
      "Sounds good.",
      "Yeah.\n I guess if I could ask one more thing. I’d like to know if there's any specific quantified objective we want to attach. So when we say increase fraud capture, do we want to attach a specific number to that? What would you think it would be?",
      "Makes sense. And so yeah, we have this fraud capture percentage, which is a percentage of the claims that are fraudulent. But we also obviously have this burden on the system that's augmented by the fact that our unemployment claims are also higher, right? So the compounding of the two of them is difficult. But the one that we have the most control over is reducing the fraud capture rates.",
      "Yeah. We might go into it in the case, but I don't have it now for you.",
      "Okay. Well, if I could have a few moments, I’d love to just structure my thoughts.",
      "All right.\n Okay. So I have a bit of a rough sketch of how I’m thinking about this. I think it's going to need to be filled in a little bit later as I uncover more because there's a lot of uncertainty about how we would solve something like this. But to start off with, I’m kind of thinking about three broad categories of things I want to look at. First is what's going on on the side of people who commit fraud. What I would love to know, just as an example of data that might fall under this, is can we segment out the type of fraud in terms of what happens most frequently, what happens to a medium level of frequency, and low-level frequency. So in short, looking at people who commit fraud and whether we can segment it by frequency.",
      "Yeah, that's a good question. The frauds. Okay. The second question, or not question, the second kind of domain I want to explore is our client's side of things. When I think about the client side of the problem, it comes down to financials, right? They're losing money. In this bucket, I would actually want to separate it by low, medium, high in terms of spend. So how much money is being lost to false claims, and segment it out by the dollar amounts per claim.",
      "So I definitely want to keep that in mind, but at the moment don’t have any specific details to put under that just yet.",
      "And so do you think this is a fixable problem?",
      "All right, well where would you want to start?",
      "So types of fraud. I suppose there are two broad categories that come to mind. They could lie about how long they’ve been unemployed and whether they've been unemployed. The second category can include things like even naming a fake company or claiming to have worked somewhere where they never worked. So kind of making—doing it like a quantity and quality kind of structure.",
      "Right. Okay. And there was one other thing under there.",
      "Yeah, I think so. I don’t know what bucket that was though. What was it?",
      "Great. I’m going to ask you a question about these because this is kind of interesting. How would you verify whether these things were true or not? You are the Texas Workforce Commission, and you want to catch somebody. You want to do the fraud capture piece of this.",
      "Absolutely. And so doing that employer verification process, when would you do it? Like chronologically when—when I would do it—I think I—",
      "Oh, okay. So yeah, I guess like a claim comes in and then at that point, it would be reviewed. So I imagine it would take place pretty early in the process. It would be one of the first things that I’d want to do to make sure. Because otherwise, you’re just wasting all this time reviewing an application that’s bogus.\n Okay. So a claim comes in, walk me through all the steps.",
      "And how do people send a claim? What do you think?",
      "Okay. Okay, awesome. So whether it arrives digitally or on hard paper, the reviewer would kind of look at the big details, the unemployment dates, the employer, dollar amounts.",
      "Oh, okay. So perhaps there’s a box where the filer would input their claim income then. That would be another detail that would get reviewed.",
      "And you’re saying that that would be done manually?\n Okay. So what would you have done in an automated way, and what would you have done by a person?",
      "Oh, in this whole review process?",
      "How many claims do you think there were in April of 2020?",
      "Manually, oh, yeah. That’s a good question too. I guess if it’s submitted electronically, it would be easier to automate such a process. If it’s submitted via mail, it can still be automated, but you would have to have some good technology in place to scan that information and enter it in. But then when it comes to the step where you’re actually contacting the employer, I imagine you have to have a human being doing that. Why? Because, I mean, as an employer, I don’t know that I would trust giving secure information out to an automated, you know, voice call asking for private data about my employee.",
      "Even higher, usually.",
      "Okay. 10% of the population, or 10% of the—is there anything different?",
      "That’s of the workforce.",
      "Yeah. How much do you think the workforce would be?",
      "And then—",
      "Why might it be overestimated?",
      "Yeah, that’s true. There also are folks who are in their 20s who are still in school.",
      "Yeah, it’s actually a little bit lower than that. So it ends up being about 11 million of the 29 million in Texas are employed.\n Okay. Are in the workforce. Okay. So and then 10% that we earlier stated would be unemployed and filing these claims. So 10% of that 11 million would be about 1.1 million. That’s right. Yeah, okay. And so in fact, I do have a little bit of data for you. You asked about the claimants, so there are about 1.2 million unemployed claimants right now in the state of Texas. Out of those claimants, the typical fraud rate is 9%. Of the fraud cases, you mentioned one type, which was, or one type that I would kind of associate from it. 29% misclassified the reason that they are unemployed. For example, they’ll say that they were laid off, but in fact, they were fired, right. So the one is for the hardship of the business, the other is for the hardship of the employee, or the, you know, attitude of the employer, or something related. But there are two other types of unemployment fraud that we haven’t covered yet. And so I want you to think about if you were running the Texas Workforce Commission, what would you want to put in place to ensure that this was not a system that people gamed, or a system that was intentionally designed to support the truly unemployed, not the, for example, optionally unemployed, or something else. What are some of the things that you would put into place, the requirements or requests that you would add to the process?",
      "So one of the types of fraud is that they say something that is untrue about their, you know, ending of their former employment.",
      "Got you.",
      "Okay. Okay. Explain – explain that a bit.",
      "Oh, gotcha.",
      "Let me – let me give you a hint. Yeah. What about – you can commit fraud when you are getting unemployment, or you can commit fraud to not get off of unemployment. What are some of the reasons why people might extend unemployment, and – and what are some of the loopholes that you would have to safeguard against people collecting unemployment past when it is due to them because something in their status changes.",
      "Right. So usually full-time work would flag the system. What kind of work wouldn’t flag it?",
      "Exactly. So one of the questions that you are asked as you continue to receive benefits is whether or not you have income.\n And so underreporting side income is a portion of unemployment insurance fraud.",
      "Wow, that’s pretty high. Okay. So we still have another kind. So there’s another requirement when you are collecting unemployment.",
      "These are, these are ways that they file fraudulently. Like the actual tactics that they use to commit fraud.",
      "Tell me where you’re going with that.",
      "Totally. Absolutely.\n You could, but hopefully our systems would catch that. If it’s as human as you say it is, it’s possible that that could be an issue. But, but that would probably be more of an honest mistake, like I haven’t received my unemployment yet so I file a second time. Not necessarily like a fraud attempt to try to duplicate. So, so I don’t know that that’s something that would necessarily be a common instance of fraud.",
      "How – how as in like how do I -",
      "Well, frequent communication is where I would start.",
      "About what?",
      "Okay. What else would you want to remind them about? What do you want them to do to get off of unemployment?",
      "Let’s see. So I have the ways, you gave me a 9% fraud rate earlier. Can I apply that 9% to all three ways that we just talked about?",
      "Okay. We don’t know enough to know if it’s different between them right now. So we have those ways, rate, the absolute number of claimants. I, I think an important piece I’d like to add to this puzzle is converting this into a dollar amount loss for our client so we can understand the real impact. And, and so do we have any financials to attach to this data?",
      "And so you do not have to do that. You can just give me raw numbers here.\n Okay. Well, if that’s the case then I think I have enough information to calculate the total number of people.",
      "Okay, let’s see. Payments, waste, fraud rate. Would approval rate be a factor in this?",
      "Yeah. The, the we, this is actually, we assume that we do approve it, and that we discover it later. So, you know, anything that we don’t approve wouldn’t be – wouldn’t be included necessarily.",
      "But usually, again, we consider most of those not fraudulent solely, it would be like a paperwork issue. They forgot something.",
      "Okay. The 1.2 are the ones, the ones that are drawing, let’s say that.",
      "Correct. But I’m missing a number?\n I guess, I guess that’s where I’m stuck because I feel like I have enough information. So I said that the typical fraud rate is 9%.",
      "Yep. So actually in the prompt of the case I mentioned that in COVID, we’ve actually seen an increase in fraud. And so our COVID fraud rates have increased by 140%.",
      "All right, sounds good. Walk me through your numbers.",
      "And then I’m trying to think of whether I should do the ways and the 30% first. I think I’ll apply that 13% first.",
      "So I’ll take 13% of the 1.2 million payments, so let’s see. This is kind of like multiplying 12×13. So 12×12 is 144, and then we add a 13 to 12 is 156. So that is 156,000 people total are – they are committing, committing this fraud in COVID times. So 156,000 people commit fraud, and then I’m going to break that up into the ways in which they commit fraud.",
      "So first, I’ll take this 40% who don’t report their new jobs or income. And so I’ll pick 40 times 156. I think I’ll just adjust this number to 160,000 for now, and I can dial it down a little bit later. So if I treated as a 160,000, then it’s just a matter multiplying 4×16, which is 64. So 40% of 160,000 is 64,000 people. Okay. And then let’s see.",
      "So 64,000 subtracted from the 160 is roughly 100,000 people, and because the other two remaining ways are an even split almost, 29% which is 31%, I’m going to justify this number by two to get 50,000 each. But I have to keep in mind that I rounded up a little bit earlier, so I’m going to round down a little bit now.",
      "Oh, okay. So what I would target first would be the most bang for my buck. What do I think will hit the most people, and also be the most cost-effective. So what would reach the most people would be that second bucket of folks who don’t report their side income, or don’t report it when they get a new job. Now thinking about what is most cost-effective, that would be what would probably require the least amount of labor/effort to do identify as fraud. So if I can just take a moment, I’m going to read through these – these ways one more time, and just kind of think about what would be cheapest to capture. Okay, so I would say that the first reason where they – they can, you know, lie about – or sorry, not reason, the first method in which they can lie about the reason their unemployed might be the most easy to, to verify. And so on the cost side of things, that would be the best choice. On the benefit side of things, the second option is the best place because of these people.\n So I would try to get one of those two.",
      "Okay. If I could take a few moments, I’m just going to brainstorm a short list. Okay, so here’s how I’m thinking about it. Going back to the whole carrot/stick framework. So on the reward side of things, perhaps we can create some kind of incentive for updating your status. As far as how to do that on an actual execution level, it’s something that I’d have to think about for a bit. But this is broadly speaking. Create some kind of incentive for keeping your information up-to-date and accurate.",
      "What kind? Be really specific here. I know you say you want to do specifics later. I want them now.",
      "You are saying basically we pay people more if they’re honest.\n Yeah. So if, if they’ve already been paid out some claim money, maybe we can add a small, small percentage bonus if they do things like file on time, or give information that we verify is correct.",
      "Oh, got it. Okay, so I guess we're going to tweak this, like when, like when, when do we pay them out? When are we sure that they told the truth, essentially?",
      "So if they give us hard proof that they’re not making side income...",
      "Yeah. So when it comes to penalties, I’m kind of thinking about it in two ways. One is that we can increase the penalties to make the consequences harsher, and two is we can just increase the messaging, the marketing of existing penalties. So on in that first bucket, you know, whatever the penalty is, if there is one right now in place, let's make it a little bit harsher. You know, it's X dollars right now, let's make it X+5 dollars for lying on a claim. And then on the marketing side, we can include in those earlier email blasts or text message blasts that we talked about, to encourage kind of encourage people to update their info and to find a job. We could perhaps occasionally include a message as well about just warning against the, the consequences of fraudulent claims. So incorporating that into our marketing schema can increase the message reach, and hopefully, hopefully prevent people from wanting to commit fraud.",
      "Well, Johnny, we are out of time. So do you mind just closing up the case for us? Telling us what we've discovered and identifying any next steps that you would like to take.",
      "Just dive right in, actually.",
      "Yeah. So very out of the water there. It’s a really hard question, and one that, you know, I wanted to write a case that I felt was timely and appropriate, but also applying the frameworks and the skills that we think about in a very different environment. And I had a lot of fun doing the research for this as I discovered the archaic processes that a lot of organizations use. So Deloitte Consulting has actually done a case for New Mexico that they share about on their website, which might be interesting to read about. And the talk about these kinds of systems and processes, etc. So, overall Johnny, you know, you, you prevailed. You got through the case. You maintained a great attitude, a good focus, and I liked you a lot. And honestly, in a first round, I would’ve really felt like we were going to get there. I felt like you had all of the attitude and confidence. But there were some second-round things that I felt like were gaps, and I want to point them out so that if you’re going into interviews, or preparing for things specifically, I want to make sure that you know what those are. You asked me for blind spots; I found a few.\n First of all, in the beginning, I just thought you nailed the initial recap. First of all, it was super clear, and also you demonstrated a real interest in the case and an enthusiasm, even though I could feel you taking this very deep breath like oh gosh, what have I gotten myself into. I volunteered for this, what the heck, right?",
      "I think that some of your initial questions could’ve been more incisive. You took three minutes to ask me a couple of the questions about, you know, identifying what an employment insurance is, what the current methods of fraud capture are, and then the measurement rates.",
      "Like when you say this, here’s what I think, just make it a little crisper in the delivery so that it’s easier to respond to. Because what you were doing was inviting me into a conversation that I actually didn’t necessarily want to have at that part of the case, but I felt beholden to do it because you are so nice about it. But it took us collectively longer to get through that than I thought it was worth for the value that it added to your structure. So I would just ask those questions more directly, in a more punchy way so that you get to them a little bit more clearly.",
      "But as far as I could tell, you gave me two categories with one bullet point each inside them. Granted, the bullet points were valid and very good, but I would have definitely wanted more data. More data inside your bullet. So the commit fraud categories, right? You said the type of fraud by frequency, which is actually exactly what we ended up looking at inside the case.",
      "But, but then, you know, some of the other things that we ended up doing, mapping out the claim process to try to understand where the greatest cost buckets are, the inefficiencies, where the most likely questions are, potentially the way that they are simply worded is inciting people to commit fraud. You know, what kind of, what number of triggers are there toward honesty. If there were just a lot of ways that you could have potentially gone into that, and I wouldn’t have cared which ones you went to, I just would have wanted to see more in your initial category.",
      "So like, you know, in, in California we have 22 people that process our claims. So if you apply the rates to Texas times another 125% of the population, 22 people have been attempting to file and get through, you know, 1.5 million claims, right? That’s just like a massive amount of information that an archaic system is broken and unable to handle. And so some of that kind of very early insight around, you know, what are the number of claims that we are processing per week.",
      "And then I want to go through what I think the biggest take away for me was as we went to the case. I don’t know if anybody’s ever told you that they felt like you were unstructured, but I think that there is, like you were very creative and very conversational, but I did feel like we lost structure as I kind of took you on this tangent, and took you on that tangent, and took you on this tangent. What I do not want is for you to anchor yourself back to your initial structure. What I do what is that you are mini-structuring as you’re going through it. And I actually couldn’t see you writing notes, so this could be just simply an optics thing. You might just want to move your camera back a little bit so people can see it. I don’t know if you were doing notes digitally for like on an electronic pad or doing them in some other way.\n But it felt like you weren’t writing anything down and were just kind of like this over here, and that over there. And then so when I’m, you know, looking for, for example, the anchor back to the rates of increase in COVID, or we should think about punishment and incentives, I didn’t feel like there were reference points that we could tie into as you are coming up with good ideas throughout the case. So can you just tell me a little bit about what you were doing from the notetaking side so that I can maybe help with that particularly?",
      "You might want to at least announce that to your, to the folks that you’re working with, but I wouldn’t necessarily assume that they’re going to be okay with it because I was kind of like, I feel like he’s not writing anything down which, so apparently you weren’t, but I think that what writing would give you is a more fluid capture of some of the things that we were talking about. So as you are brainstorming, it’s actually easier to write than it is to type. Like typing and writing at the same time is a little bit more tricky. So just separating out those two functions and writing it down might have been able to give you more capture. So maybe at the beginning you do it that way, or maybe in the math you would do it that way, but you know, if you’re using Excel, I’m kind of like why are we doing estimation math. Although I’ll talk about the math in a second. I thought you did pretty well on that. But yeah, I just say that might be one of something that you want to run by people because it did seem like you weren’t writing anything down and I felt like you were maybe like notepad sketching it or something. And so just letting them know that you are taking notes, but you’re taking them digitally, are they okay with you taking notes digitally. If they say no you need to have practiced enough cases for - to move over to a pen and paper. But it also just might be worth it to practice a couple of on pen and paper because I did feel like when I came up with a couple of ideas, you like, except for the time that you asked for time, every other thing that I wanted was that kind of structure, but you never gave it to me except for that one time when you asked for the time to do the creative structure. So in some of these cases where you’re kind of brainstorming as we go, I would like for you to be capturing more in a structured way, so that the brainstorming becomes a little bit more evident so that what we are missing maybe becomes a little bit more clear. And so I would say that that was kind of one of my big takeaways. The same ended up being true actually in the final recap. It just came across as though the structure was like wide but not deep, and that was just my general perspective was that you were like full of lots of wide ideas, but we weren’t necessarily able to complete any of the full pictures of a lot of the other pieces.\n And then the final thing that I’ll just talk about was the math. Overall you did a really good job with that. At the second level, at the second round for an MBA, I would prefer for you to tell me insights before you do calcs. I think you could have said them here. So I think you could have, for example, either done a calculation or a quick, you know, in your head calculation of which of the segments was going to be the largest from the beginning and told me like I’m looking for two things. I’m looking for the largest segment because that’s probably going to be a good proxy without having the cost per claim, or the cost per overrun for the ones that are, you know, likely fraud and what our savings could be. But also, I would be interested in knowing which ones would be easiest to capture. And so I think if you had given me that right at the very beginning, that would’ve afforded you a little bit more leeway as you were going through the math to verify it. Or potentially in a second round, I would just be like, you don’t even have to do the math, honey. That was exactly what I was looking for. Which is a big win for you if you’re able to get there. So other than that, I think that’s my primary feedback. Overall it took us the full 40 minutes to complete the case, and again, I think if you had been a little bit more clear about the note-taking each time I was asking you a kind of follow-on creative question, and we had kind of wrapped those up a little faster, I think we would’ve been able to move through the case a bit more quickly. So I really kind of let you have a ton of leeway in this case to see what you would do with it because that’s one thing right now, more than ever, I’m looking for as an interviewer. You’re going to be potentially sitting in your, you know, bedroom working for 8 to 12 hours a day by yourself. Maybe meeting with me once or meeting with a team once, but for the most part by yourself. And so I need to know with you having the, the completely way to do anything what you’re going to do with it. Yeah, make sense.",
      "For the framework part, I do recognize that I had a very sparse framework. My thinking was I recall reading somewhere, it might actually have been one of your materials, where you said how the longer you take, the more it is expected of your framework. Because I couldn’t come up with anything, I thought okay, I’m just, I’m gonna just deliver what I have and hopefully get some points back from doing it quickly. That’s kind of my thought process.",
      "I just - And after we worked through the case, go back now and rebuild it, and see what other metrics you could think about. I think that in a government-focused case, or any organization, if you’re – if you can’t figure out how to lean on the measurement of success, figure out how to lean on what it cost them, right? So like if you can’t figure out what the benefit is going to be, dive into how many staff members do we have, how many claims do we process. How long per claim does it take to process them.",
      "So I really do want to just encourage you that I was looking for a little bit more, but not necessarily any specific thing. I was just looking for more of that measurement inside your structure.\n Got you. Cool. Another question I have is learning your feedback about, you know, creating a mini structure during creative questions. That’s something that I, I thought that I did throughout the case, and whether it was saying quantity and quality for types of fraud, or a carrot and stick for solutions. I’d be curious to know like what would be an example of that. Perhaps I – I missed.",
      "Part of it is that like you didn’t pause to recap as you were pushing onto the next thing. So you kind of kept pushing, kept pushing, kept looking for the next thing, and I felt like there was no organization of what you had already done. So I would just maybe recommend that, you know, once you’ve got something down, say okay great. So here’s where I am with my structure, and I know that there might be gaps, but let me just recap what I’ve done. I have three ways that people could create fraud through quality, and that I have one way that they create, could create fraud through duration. And so, you know, I have these two categories and I can walk through that.",
      "Yeah.",
      "Yeah. I think there are three, and it’s worth it to do a case that’s hard with all three to figure out maybe which one might be good for you. They are actually standard frameworks, it’s just applying them in a different way. So the first one is the profit framework. Like thinking through an organization like this and thinking how do they make their revenue. Where does it come from. In this case they come from employers. The employers are the one of the stakeholders here, right? And we have an employer rate per employee to employee, and that number kind of, you know, comes back to the whole party, to the whole system. And then, the volume. So we have the volume of, of the employed versus the volume of the unemployed, right?\n And then the – and so like just in terms of getting ideas for metrics, and then the cost, right? We have a fixed cost to operate, so we have probably some salaried individuals and some maybe tech. Like what are we spending money on can kind of point to some of the things that we’re going to measure, right?",
      "I would also, by the way, put that up into the great clarifying questions to ask. Business model questions can be really good because if you, instead of asking me like what is unemployment insurance and how does it work, just like, you know, what does an unemployment insurance agency spend their money on, here’s what I would think. Like just get that out of the way in your clarifying time so that when you’re going into your structure you can already have some of the numbers, or some of the categories down essentially.",
      "And then I actually really do like the market study framework, the, you know, the customer, company, competitor, and product framework because in this situation, right, who is our customer. Our customer is the unemployed. Who is our –",
      "And then what is the thing that we are, you know, how are we operating, what is our company.",
      "And then renaming them I think could be effective in all those situations."
    ],
    "Joe": [
      "Yeah, let's do it.",
      "Okay, just getting down to this last detail.",
      "Yes. The only thing I just want to make sure I clarify is the percentage that you said for the September unemployment rate. What did you say again?",
      "8.5, yep.",
      "Sounds good.",
      "Yeah.\nRecruiter: So unemployment insurance is the benefit that is received. It's kind of, you know, most insurance you pay for and then you receive the benefit as a claim. This is the same type of thing except you personally aren't necessarily paying unemployment; it's your employer that's paying on your behalf. When someone gets unemployed, the benefits that they receive, the financial benefits, the checks that they get are the unemployment insurance claims. The claims go through to basically get you into the qualification process, and then the insurance payouts are the ones that you would receive.",
      "Interesting. Okay. So my next question then is we want to reduce part of this increased fraud capture. My question is, how is that being done currently? What systems are in place to capture fraud and prevent it?",
      "So yeah, this is really tricky. Some kind of due diligence would have to be involved. I guess kind of tracing the paperwork trail can be one way in which you can prevent it, as well as increase the capture. But yeah, I’m not sure what else, and I think I’ll have to dig into that later when I draw my structure.",
      "Cool, okay. And let's see. I just want to check if there's anything else I want to ask before I go into my planning.",
      "I think if we could get it to the levels that it was pre-COVID, that would be nice. I imagine that would be, you know, the norm.",
      "Okay. And do we have a specific number that we're trying to target?",
      "Got it.",
      "Sounds good.",
      "Johnny, can I ask you a question? Is that segment the people or segment the fraud? I just want to be really clear.",
      "What kind of insights?\nRecruiter: For instance, perhaps, you know, a certain county in Texas, maybe like rural over urban, is committing more fraud in high dollar amounts versus the low. If that’s the case, we should probably form our strategy around the rural areas. So kind of just, yeah, creating segments to see what patterns emerge.",
      "Okay. So yeah, that’s the second domain. And then the last area I’d like to look at are solutions. This is where I admittedly don’t have anything populated yet. I want to fill that in as we uncover more because just off the top of my head, I’m not really sure how insurance fraud is handled in the real world.",
      "Awesome. Okay. Great.",
      "That’s a really good question. Yeah, I mean I want to say yes because I feel like there are few problems that are truly unfixable, and there is always a way. And so yeah, I want to say it’s feasible.",
      "So I guess reviewing my structure, even though I talk about the claimant’s side first, I think I’d actually examine the client’s financials first. I think that makes the most sense because that gives us a more direct look into how specifically they're hurting and where. So let me switch up the first and second tokens that I named and start with the client financials.\nRecruiter: So yeah, I’d love to know if you have any data on where they’re losing the most money based on the fraud types.",
      "Yeah. So let’s do a little bit of brainstorming here. What do you think the types of fraud would be? What would people lie about when going through the unemployment claims process?",
      "Gotcha. So the date of unemployment they are overstating, you’re saying, and the other one is they’re claiming to work somewhere that they didn’t work.",
      "Under the quality bucket?",
      "I was talking about what kind of employers, and yeah, I’m not sure what specifically, but I think just the nature of their employment.\nRecruiter: Maybe they didn’t work full-time, but they worked part-time for a temp job and now they want to claim that they worked full-time to reap larger benefits.",
      "Okay.",
      "Yeah. So I think that where I would start if I were enforcing this is to actually just contact the employers. That’s probably the most direct and easiest route. Can you confirm that so-and-so worked at this place in this role from January to March?",
      "Basically walk me through the process of what you think happens to a claim. Let’s see if there are any insights there.",
      "Okay. A claim comes in and whoever’s reviewing it will just look at the application, look at how much it’s asking for.",
      "Oh, either digitally or by mail. I don’t know if the phone is an option, but I think digital or by mail would be the two dominant options.",
      "I don’t know if the people who filed a claim asked for a dollar amount or if that’s something that the insurance company decides, but dollar amount if it’s the former. It’s usually a percentage that’s set by the, you know, if it’s running in an unemployment system by the state, it’s a percentage of your rate. So, you know, you get 70% of what your former compensation was, or something like that.",
      "And then so after all that is looked at, I suppose a reviewer could do just a sanity check before proceeding just to see if this kind of makes sense based on their experience. And then afterward, go ahead and get in touch with that employer.",
      "Sorry, to clarify that question? Yeah. What would you have done automated, and what would you have done by a person?",
      "So yeah, to the extent that’s possible, I would love to scan all the input data, like all the fields, and get that in our database in an automatic fashion. And then actually moving the human side of due diligence, reaching out to the employers, that I would keep human-run. And then, oh, I guess I should also, as I progressed to the chronology of this process, once a review was done, you know, eventually someone will have to sign off on it if they’re going to issue out the funds. And you definitely want a human there to double-check things. You don’t want to, you know, sign off on all this money and have it done by a robot and there’s no accountability if something goes wrong.",
      "Just run some quick math for me.",
      "Okay.\nRecruiter: Oh, okay. So you said earlier that unemployment was at 13.5% in April, and so I guess it would be a matter of trying to estimate what percent of unemployment reported also translates into insurance claims.",
      "I’m going to guess that it’s something high because I don’t see any reason to not seek free money, so I’m going to guess it’s 80%.",
      "Yeah. Okay. So 80% of that 13.5, 10×8 is 80, 3×8 is 24. So probably about 10% of the population is filing these claims.",
      "Oh, okay. So I guess I actually should ask for verification. When you said 13.5% unemployed, is that of the population or of the workforce?",
      "Oh, okay. In that case, I’ll refine my earlier comment and say 10% approximately of the workforce would have filed for this unemployment.",
      "Okay. So we know that Texas's population is 29 million residents.\nRecruiter: I’m going to assume that population, that age is evenly distributed in Texas, so there are as many 70-year-olds as 50-year-olds as 12-year-olds. So if I assume that, and if I assume that life expectancy is roughly 80 years, and there probably won’t be people in the workforce below the age of 20 because they’re all either children or mostly students, so it would probably be safe to rule those out.",
      "Probably rule out 70 to 80 because they’re mostly retired. So if you’re looking at just 20 to 60, and that would be 5/8 of the population. So 5/8 of 29 million residents, I’ll round that to 30. So I’ll multiply 30 x 5 first for 150, divide that by eight is roughly 1 – I can round that up a little bit more so it’s 160. Divide that by eight is a little under 20 million. Yeah, so 20 million would be in the workforce.",
      "And that’s overestimated.",
      "Yeah. So this would be assuming everyone in those age demographics is in the workforce. But not all of them are. There are all kinds of things like stay-at-home parents, folks who choose not to work. Students.",
      "So yeah, I imagine would a 0.7 multiplier be reasonable to kind of weed out those who are not part of the workforce?",
      "So I guess I would categorize possible ways to prevent this into the carrot and the stick, so reward and punishment. So on the reward side, well I guess the reward side’s already there because if they file a claim, they get money. So maybe I’ll look more on the punishment side of things.\nRecruiter: Awesome. Now that’s answering a different question than the one that I asked, but I want you to hold onto that because I am going to ask that in a little bit. The question that I asked is what type of fraud people could be committing, which is a different question.",
      "And so when it comes to consequences, perhaps there need to be harsher penalties on the fraudulent claims. Maybe that’s part of the reason why so many folks are doing this and think they can get away with it is that there just aren’t any tangible consequences.",
      "Oh, got it. My question was, what, how do, you know, what are some of the other ways that people could game the system and what kind of safeguards would you want to put into place if you’re in the Workforce Commission?",
      "Okay. So other forms of fraud would – well, I guess we are revisiting my original structure. I guess I would want to add the duration of employment to that list.",
      "There are – there are two other things that are not related to your former employment, is what I’m saying.",
      "Okay. So would identity be one? And where I’m thinking is do spouses ever do anything tricky with claiming to be their spouse, or like new family members that are claimed to be their family members.\nRecruiter: Is identity? That is one. So the – the actual name that I have for the category that I’ve already given you is misclassifying the reason that they are unemployed. So that would fall under there. Any kind of identity theft, including spousal identity theft.",
      "Okay. Apart from reason.",
      "Okay. So if they found work, it would still be claiming and so that would be another reason under this bucket.",
      "Oh, like part-time work and temp work. Just anything that’s not full-time.",
      "And that underreporting side income is actually 40% of the fraud.",
      "Okay. So then this just a high level here, we’re talking – we’re trying to figure out reasons that people file fraudulently?",
      "The tactics, okay. Let’s see. Could – I’m kind of stuck here, so I’m just gonna throw this out. Double filing maybe. I don’t know. Just –",
      "Could, could someone just file more than once somehow? You know, how like in this local climate people are afraid of, you know, voter fraud with double voting.",
      "So let me go back to the other question from before, which is you’re the head of the Workforce Commission. You want to pay out as few claims as are possible. The ones that are legal are fine, but no other ones. And so how do you phase people out of unemployment?",
      "Yeah, you know, even if they collect early, you want to get them off of it as fast as you can. How do you – how do you either encourage – you know, how do you encourage them to get off of the unemployment system?",
      "So having an SMS system set up with reminders.",
      "Reminders to update your information.",
      "Oh, right. Of course you want them to find a job.\nRecruiter: So I suppose you could – yeah, send out, you know, regular email blasts with job opportunities, try to connect them to work. One of the – so the remaining type of fraud, 31% of fraud instances are related to overreporting job-seeking. One of the requirements to maintain unemployment insurance is that you have to demonstrate that you’re actively looking for a job. Otherwise you actually fall out of the numbers entirely. So if you no longer actively look, then, you know, if you decide hey, I’m just going to stay at home with my children, or I’m going to do something different than what I expected originally, then you would no longer qualify for unemployment insurance.",
      "Okay. So I think we’ve got the numbers now. Is there anything else that you need to calculate fraud claim numbers for each suspected type of fraud?",
      "That’s fair.",
      "I do like that, we should do that, I don’t have them.",
      "I think you might be missing one piece of information.",
      "So 9% commit fraud, but we don’t necessarily approve all 9%.",
      "But I know what you mean. There are some that may be like would be a part of that.",
      "So, so we can just assume that out of the 1.2, the 9% is fraud and there some other number that is just those that are in process.",
      "And so I’m trying to find the number of people who commit fraud?",
      "Oh, okay. I guess I didn’t catch that. So the current fraud rate must be different based on that little hint you just dropped.",
      "Okay. Okay, interesting. All right. So I think I have everything now. I’m going to go ahead and try to calculate this.",
      "Okay. So we have 1.2 million claimants. I think what I’d like to do first is actually convert, convert the fraud rate into the current right. So I’m going to – I’m going to just take 9% and do 140% of it.\nRecruiter: And so nine is very close to 10, so that would be like – that would, that would translate to a fraud rate of 14% if it were 10, but because it’s a little bit less than 10 I’m going to call it roughly 13%. So 13% would be the converted fraud rate for COVID times.",
      "Okay. All right.",
      "Okay.",
      "Right.",
      "Okay.",
      "Got it.\nRecruiter: So I’m going to say it’s a little bit under 50%, maybe 48,000 people for the first reason, and the third reason. All right. So 48,000, 64,000 and 48,000 people for each of these three ways that we described. Okay. What do you think about that?",
      "Yeah, this is a lot of people, and I, you know, I think we definitely need to do something about this. Again, my mind is still kind of on financials because I’m just kind of wondering, you know, even though 48,000 people might commit one way of fraud versus 48,000 in another way, perhaps one way just generates a lot more loss because there’s more dollars attached to it. So I’m still kind of curious about financials which we have none. So since I don’t have that, and again, I don’t disagree that it would be good to have it, I just don’t have it. I’m interested in trying to figure out which one of these you would target first. Which of the methods of fraud would you go after dealing with?",
      "Okay, sounds good. Well then, my final question is one of the things that we are interested in exploring are ways not just to improve the capture, but ways to encourage people not to commit fraud in the first place. And so can you brainstorm with me some ideas that you would have about how you could, you know, trigger or encourage people not to commit fraud to reduce the overall fraud weights - rates from the beginning?",
      "And then on the stick side -",
      "Financial incentives. I didn’t - what I – what I’m just not sure of is where we would get the money, or how we would justify that. I think we would have to make it, you know, make it pretty pitched, make it pretty convincing. But yeah, if we can get our client to say -",
      "When? When? As, as early as possible because the earlier we do that the sooner we stop paying them claim money. Money. So yeah. So but, but I guess what I’m trying to figure out is we’re incentivizing them to tell the truth, but how are we telling that they are telling the truth and not telling a lie?",
      "Yeah, I wonder whether we could incentivize their actual methods, rather than the outcomes. So the outcome is something that, as you mentioned, we can’t necessarily verify. We can’t verify whether or not people make side income. So what if we, instead incentivize the method of reporting.",
      "But I don’t know. It’s tricky because how do you prove that something doesn’t exist. You know, like proving the negative is really tricky. And I think that makes this problem difficult to solve.\nRecruiter: So yeah, I'd like to move on to the stick bucket then because I think I have some better incentives on that.",
      "Okay, sounds good.",
      "Sounds great.",
      "Okay. Can I take a few moments to gather my thoughts?",
      "Oh dive right in? Okay, sure. I'd like to recommend that we, we target folks who have lied about the reason they're unemployed, and folks who don't report new employment as the segments for, you know, who should we try to prevent fraud coming from.\nRecruiter: And the reasoning being that this is where the most fraud is taking place, and also that this is where I feel we have the most cost-effective ways and solutions to address the fraud. As far as what those specific solutions I recommend are, one is to create incentive structures for folks who provide verifiable information that, you know, they make it easier on our client to check, and we can give them a small reward for doing so. The other is to, on the penalty side of things, both increase the penalty for fraudulent claims, as well as increase the messaging about the consequences of fraudulent things. And by implementing all of this, the ultimate outcome that we aim for is to reduce the instances of fraudulent claims and to prevent them from happening.",
      "Okay, awesome. Are you glad to be done with that case?",
      "You know, so a minute and eight seconds for your initial recap. You did great for that.",
      "And I like what you kind of did, but just should have done a little bit more aggressively, and a little bit more punchly is you were kind of like here’s what I might think it is, you know, but I don’t want to - take a stand.",
      "When you came out of your structure, you gave me very little confidence that you had done a thorough structure by saying I developed a rough sketch that I’m going to build on throughout the case. I, you know, I don’t really care how crappy you think the structure is, first of all, you only took a minute and a half to build it. And so you could have taken longer to build a better structure, and if you haven’t gone back recently to just put a timer on, I, my guess is that you might be abbreviating your structuring period a little too much, and not giving yourself the amount of time that it would take.",
      "And the same with the client. I felt like, you know, basically what you were saying is that we have this like volume issue, and that we have a cost issue on the client side. We have to staff this up.",
      "What are the kinds of industries that we’re processing claims for. You kind of went into some of the segmentation of the data, but I didn’t feel like you had written it down clearly to the point where you that were then reporting it back to me. So I just thought a lot more data in that part would have been great.",
      "So I, I was just typing notes on my computer. I like to use Excel during these virtual times because the cells create this natural division that helps me segment my thoughts.",
      "So anyhow, yeah. Any, any questions for me about the feedback or about the case?\nRecruiter: Yeah, let me kind of go down the line as far as the feedback you gave to see if I have questions. I think that what you said about taking the stand with the verifying questions delivery is really good.",
      "I, I’ve been trying to work on hedging less when I case because communicating uncertainty is not what you want a client to see. I’ve got a rough sketch here, I’ve got, I’ve got some ideas but I’ll fill it out as we go. Like don’t say that, right? Here’s, here’s what I came up with. Just own it a little bit more.",
      "But you’re totally right. I mean, I ideally would have liked to fill it in with more, with more bullets per bucket.",
      "Like if you had given me only three bullet points per category, I would’ve felt like that was sufficient.",
      "So, for example, this I think has to tie back to the notetaking question, so I asked you the type of fraud question, and then you said there are two kinds. There is like a quality one and then there is a how long one. And you kind of built them out, but there wasn’t ever a time when you are like so let me recap. I have two categories, and then on the one side I have three things under the quality. I have whether or not they are unemployed, claiming to work somewhere that they didn’t work, or that they didn’t work full-time or part-time.",
      "So like you were walking through it forward to the end verbally, but it all came across as one giant list rather than any kind of categories because you never recapped back for me. And I think that you, like as you’re going through it you weren’t like here’s the first thing, here’s the second thing. So in a virtual environment, even if you were writing it down, you have to assume that I’m not capturing what you’re writing down so you’re almost using that verbal time to go double check that I got the three things that you said.\nRecruiter: Versus just maybe, maybe idea A and B blended together for me, so you’re distinguishing between those by kind of going back and recapping and saying hey, here’s what I came up with. And I know that there might be something else.",
      "For sure, for sure. Yeah, that makes a lot of sense. I guess one more kind of overarching question I’d like to ask. I think a big piece of, of why I felt I was stumbling throughout the case was just uncertainty about how this industry and process worked. I think even – even at this point still really unsure.",
      "And so I guess a general question I have is when a candidate encounters a subject matter that’s nontraditional, so we can’t just draw, you know, like CCC framework or something, how, how do they, what’s like a, not a go-to framework, but a go-to way of thinking that they can kind of latch onto to kind of escape that in the moment panic of like oh, I don’t know what to do here because it’s so unfamiliar.",
      "Yeah. So using the standard profit framework, you’re not necessarily, you’re going to rename it. You’re going to say like a volume of claims rather than volume of customers, right? And you’re going to say, you know, staffing instead of fixed costs. But like your, as you’re thinking about just kind of the business model, I think that’s really helpful.",
      "The second one is just cost benefit, which is basically the same thing but for nontraditional cases can be better, right? What would be the cost of doing this, of capturing or somehow reducing the fraud through better verification, or something else. Like what would be the cost, how would we measure that, how much more time would it take, for example, how many claims do we have to apply it to. And then what would be the benefit of it. What is the savings per claim that is not fraudulent, for example. And so, again, like applying those two things can help you come up with very case specific metrics.",
      "Our, who are our competitors?\nRecruiter: We have none. So we have complete control over the process. So just kind of, again, like using that to really quickly run through and identify what is our – what is the product that we’re offering.",
      "Okay, we’re offering an uninsurance – an uninsurance claim to people. So there’s something that is desirable. There’s a carrot there that they are interested in.",
      "And again, so, you’re not going to use that as your framework that you necessarily call the buckets the same thing, but again, just using those same concepts, figuring out how do we measure each one of those things.",
      "So those – I would recommend just going back and trying one of those three, and in this case feeling which one might have made more sense, and then try that in a future case."
    ]
  },
  "summary": {
    "Introduction": [
      "Barack introduced the case, 'Texas Unemployment Bump,' involving the Texas Workforce Commission (TWC) and the challenge of reducing unemployment insurance fraud. They highlighted Texas's population of 29 million, a peak unemployment rate of 13.5% in April 2020, and a reduced but still high rate of 8.5% in September 2020 due to COVID-19."
    ],
    "Candidate Background and Interests": [
      "Joe accurately recapped the case details, confirming the client's objectives and the context of the problem."
    ],
    "Discussion on AI and Relevant Technologies": [
      "Joe asked about the workings of unemployment insurance and current fraud capture systems.",
      "Barack explained that unemployment insurance is paid by employers, and fraud involves misreporting to receive higher benefits."
    ],
    "Bot Detection Problem Overview": [
      "Joe proposed a structure focusing on three areas: types of fraud, financial impact on the client, and potential solutions.",
      "Barack guided Joe to think about specific types of fraud and how they might be detected."
    ],
    "Features to Investigate for Bot Detection": [
      "Joe identified potential fraud types: misreporting unemployment duration, false employment claims, and underreporting side income.",
      "Barack added that 29% of fraud involved misclassifying unemployment reasons, 40% involved underreporting side income, and 31% involved overreporting job-seeking efforts."
    ],
    "Implementation Approach": [
      "Joe calculated the number of fraudulent claims based on a 13% fraud rate (increased by 140% from the typical 9% due to COVID-19).",
      "The calculations estimated 156,000 fraudulent claims, segmented into 64,000 for underreporting side income and 48,000 each for misclassifying unemployment reasons and overreporting job-seeking efforts."
    ],
    "Data Collection for Training Models": [
      "Joe suggested targeting underreporting side income first due to its higher occurrence and potential cost-effectiveness in detection."
    ],
    "Technical Implementation Details": [
      "Joe proposed a carrot-and-stick approach:",
      "- Financial incentives for accurate and timely reporting.",
      "- Harsher penalties for fraudulent claims and increased messaging about consequences."
    ],
    "Closing Discussion": [
      "Joe recommended focusing on the most prevalent and cost-effective fraud types.",
      "Suggested implementing incentives for accurate reporting and increasing penalties and awareness of fraud consequences."
    ],
    "Conclusion": [
      "Barrack praised Joe's attitude and focus but noted areas for improvement:",
      "- More incisive initial questions.",
      "- A more detailed and confident structure.",
      "- Better note-taking and mini-structuring during the case.",
      "- Providing insights before calculations in the math section."
    ]
  },
  "tasks": {
    "Barack": [
      "1: Schedule the next round of interviews and send Joe available dates and times.",
      "2: Assure the Joe that they would receive structured feedback to help them improve in areas such as note-taking, clarity of thought, and industry knowledge.",
      "3: Prepare and send a detailed overview of the next interview stages, including any specific areas of focus."
    ],
    "Joe": [
      "1: Develop and present a detailed analysis or solution based on the case study discussed during the interview.",
      "2: Review the feedback provided by the recruiter and prepare accordingly for the next round of interviews.",
      "- Barack emphasized the importance of structured note-taking during the interview. They noted that Joe appeared to be not taking notes effectively, which affected the flow and organization of their responses.",
      "- Barack pointed out that Joe often failed to recap their thoughts or structure their answers clearly. This led to a perception of ideas being disjointed and lacking a cohesive framework.",
      "- Positive feedback was given regarding Joe's mathematical abilities. However, Barack suggested that insights should be provided before diving into calculations to provide context and clarity."
    ]
  }
}

// Populate the summary content
const summaryBox = document.querySelector(".summary-box");

for (const section in interviewData.summary) {
  if (Array.isArray(interviewData.summary[section])) { // Ensure the section content is an array
    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = section;
    summaryBox.appendChild(sectionTitle);

    const sectionContent = document.createElement("ul");
    interviewData.summary[section].forEach(point => {
      const listItem = document.createElement("li");
      listItem.textContent = point;
      sectionContent.appendChild(listItem);
    });
    summaryBox.appendChild(sectionContent);
  }
}

// Populate the tasks content dynamically
const tasksBox = document.querySelector(".tasks-box");

// Extract subheadings dynamically
const tasksSubheadings = Object.keys(interviewData.tasks);

tasksSubheadings.forEach(subheading => {
  const tasksTitle = document.createElement("h3");
  tasksTitle.textContent = subheading.charAt(0).toUpperCase() + subheading.slice(1);
  tasksBox.appendChild(tasksTitle);

  const tasksContent = document.createElement("ul");
  interviewData.tasks[subheading].forEach(task => {
    const listItem = document.createElement("li");
    listItem.textContent = task;
    tasksContent.appendChild(listItem);
  });
  tasksBox.appendChild(tasksContent);
});


// Define variables to store recruiter and candidate names
let recruiterName = null;
let candidateName = null;

// Populate the transcript content dynamically
const transcriptBox = document.querySelector(".transcript-box");

// Initialize indices to track current line for each speaker
let recruiterIndex = 0;
let candidateIndex = 0;

// Extract subheadings dynamically
const transcriptSubheadings = Object.keys(interviewData.transcript);

// Determine recruiter and candidate names dynamically
transcriptSubheadings.forEach(subheading => {
  if (!recruiterName && subheading.toLowerCase().includes("barack")) {
    recruiterName = subheading;
  } else if (!candidateName && subheading.toLowerCase().includes("joe")) {
    candidateName = subheading;
  }
});

// Ensure recruiterName and candidateName are set
if (recruiterName && candidateName) {
  // Alternate lines until both recruiters and candidates run out
  while (recruiterIndex < interviewData.transcript[recruiterName].length ||
    candidateIndex < interviewData.transcript[candidateName].length) {
    if (recruiterIndex < interviewData.transcript[recruiterName].length) {
      const recruiterLine = interviewData.transcript[recruiterName][recruiterIndex];
      const recruiterLineElement = document.createElement("p");
      recruiterLineElement.classList.add("recruiter", "bold");
      recruiterLineElement.textContent = `${recruiterName}: ${recruiterLine}`;
      transcriptBox.appendChild(recruiterLineElement);
      recruiterIndex++;
    }

    if (candidateIndex < interviewData.transcript[candidateName].length) {
      const candidateLine = interviewData.transcript[candidateName][candidateIndex];
      const candidateLineElement = document.createElement("p");
      candidateLineElement.classList.add("candidate", "bold");
      candidateLineElement.textContent = `${candidateName}: ${candidateLine}`;
      transcriptBox.appendChild(candidateLineElement);
      candidateIndex++;
    }
  }

  // Now you can use recruiterName and candidateName for further processing
  console.log("Recruiter:", recruiterName);
  console.log("Candidate:", candidateName);
} else {
  console.error("Recruiter or candidate name not found in transcript data.");
}