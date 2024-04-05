"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6649],{86250:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=t(85893),a=t(11151);const s={title:"What's New in AutoGen?",authors:"sonichi",tags:["news","summary","roadmap"]},o=void 0,r={permalink:"/autogen/blog/2024/03/03/AutoGen-Update",source:"@site/blog/2024-03-03-AutoGen-Update/index.mdx",title:"What's New in AutoGen?",description:"autogen is loved",date:"2024-03-03T00:00:00.000Z",formattedDate:"March 3, 2024",tags:[{label:"news",permalink:"/autogen/blog/tags/news"},{label:"summary",permalink:"/autogen/blog/tags/summary"},{label:"roadmap",permalink:"/autogen/blog/tags/roadmap"}],readingTime:10.31,hasTruncateMarker:!1,authors:[{name:"Chi Wang",title:"Principal Researcher at Microsoft Research",url:"https://www.linkedin.com/in/chi-wang-49b15b16/",imageURL:"https://github.com/sonichi.png",key:"sonichi"}],frontMatter:{title:"What's New in AutoGen?",authors:"sonichi",tags:["news","summary","roadmap"]},unlisted:!1,prevItem:{title:"AutoDefense - Defend against jailbreak attacks with AutoGen",permalink:"/autogen/blog/2024/03/11/AutoDefense/Defending LLMs Against Jailbreak Attacks with AutoDefense"},nextItem:{title:"StateFlow - Build LLM Workflows with Customized State-Oriented Transition Function in GroupChat",permalink:"/autogen/blog/2024/02/29/StateFlow"}},l={authorsImageUrls:[void 0]},h=[{value:"Background",id:"background",level:2},{value:"Feedback",id:"feedback",level:2},{value:"Milestones",id:"milestones",level:2},{value:"Open Questions",id:"open-questions",level:2},{value:"New Features &amp; Ongoing Research",id:"new-features--ongoing-research",level:2},{value:"Evaluation",id:"evaluation",level:3},{value:"Interface",id:"interface",level:3},{value:"Learning/Optimization/Teaching",id:"learningoptimizationteaching",level:3},{value:"Integration",id:"integration",level:3},{value:"Call for Help",id:"call-for-help",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"autogen is loved",src:t(23764).Z+"",width:"300",height:"300"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TL;DR"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"AutoGen has received tremendous interest and recognition."})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"AutoGen has many exciting new features and ongoing research."})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Five months have passed since the initial spinoff of AutoGen from ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/FLAML",children:"FLAML"}),". What have we learned since then? What are the milestones achieved? What's next?"]}),"\n",(0,i.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,i.jsx)(n.p,{children:"AutoGen was motivated by two big questions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"What are future AI applications like?"}),"\n",(0,i.jsx)(n.li,{children:"How do we empower every developer to build them?"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Last year, I worked with my colleagues and collaborators from Penn State University and University of Washington, on a new multi-agent framework, to enable the next generation of applications powered by large language models.\nWe have been building AutoGen, as a programming framework for agentic AI, just like PyTorch for deep learning.\nWe developed AutoGen in an open source project ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/FLAML",children:"FLAML"}),": a fast library for AutoML and tuning. After a few studies like ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2303.04673v1",children:"EcoOptiGen"})," and ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2306.01337",children:"MathChat"}),", in August, we published a ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2308.08155v1",children:"technical report"})," about the multi-agent framework.\nIn October, we moved AutoGen from FLAML to a standalone repo on GitHub, and published an ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2308.08155",children:"updated technical report"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"feedback",children:"Feedback"}),"\n",(0,i.jsx)(n.p,{children:"Since then, we've got new feedback every day, everywhere. Users have shown really high recognition of the new levels of capability enabled by AutoGen. For example, there are many comments like the following on X (Twitter) or YouTube."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Autogen gave me the same a-ha moment that I haven't felt since trying out GPT-3\nfor the first time."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"I have never been this surprised since ChatGPT."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Many users have deep understanding of the value in different dimensions, such as the modularity, flexibility and simplicity."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The same reason autogen is significant is the same reason OOP is a good idea. Autogen packages up all that complexity into an agent I can create in one line, or modify with another."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Over time, more and more users share their experiences in using or contributing to autogen."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In our Data Science department Autogen is helping us develop a production ready\nmulti-agents framework."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Sam Khalil, VP Data Insights & FounData, Novo Nordisk"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"When I built an interactive learning tool for students, I looked for a tool that\ncould streamline the logistics but also give enough flexibility so I could use\ncustomized tools. AutoGen has both. It simplified the work. Thanks to Chi and his\nteam for sharing such a wonderful tool with the community."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Yongsheng Lian, Professor at the University of Louisville, Mechanical Engineering"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Exciting news: the latest AutoGen release now features my contribution\u2026\nThis experience has been a wonderful blend of learning and contributing,\ndemonstrating the dynamic and collaborative spirit of the tech community."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Davor Runje, Cofounder @ airt / President of the board @ CISEx"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"With the support of a grant through the Data Intensive Studies Center at Tufts\nUniversity, our group is hoping to solve some of the challenges students face when\ntransitioning from undergraduate to graduate-level courses, particularly in Tufts'\nDoctor of Physical Therapy program in the School of Medicine. We're experimenting\nwith Autogen to create tailored assessments, individualized study guides, and focused\ntutoring. This approach has led to significantly better results than those we\nachieved using standard chatbots. With the help of Chi and his group at Microsoft,\nour current experiments include using multiple agents in sequential chat, teachable\nagents, and round-robin style debate formats. These methods have proven more\neffective in generating assessments and feedback compared to other large language\nmodels (LLMs) we've explored. I've also used OpenAI Assistant agents through Autogen\nin my Primary Care class to facilitate student engagement in patient interviews\nthrough digital simulations. The agent retrieved information from a real patient\nfeatured in a published case study, allowing students to practice their interview\nskills with realistic information."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Benjamin D Stern, MS, DPT, Assistant Professor, Doctor of Physical Therapy Program,\nTufts University School of Medicine"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Autogen has been a game changer for how we analyze companies and products! Through\ncollaborative discourse between AI Agents we are able to shave days off our research\nand analysis process."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Justin Trugman, Cofounder & Head of Technology at BetterFutureLabs"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"These are just a small fraction of examples. We have seen big enterprise customers\u2019 interest from pretty much every vertical industry: Accounting, Airlines, Biotech, Consulting, Consumer Packaged Goods, Electronics, Entertainment, Finance, Fintech, Government, Healthcare, Manufacturer, Metals, Pharmacy, Research, Retailer, Social Media, Software, Supply Chain, Technology, Telecom\u2026"}),"\n",(0,i.jsx)(n.p,{children:"AutoGen is used or contributed by companies, organizations, universities from A to Z, in all over the world. We have seen hundreds of example applications. Some organization uses AutoGen as the backbone to build their agent platform. Others use AutoGen for diverse scenarios, including research and investment to novel and creative applications of multiple agents."}),"\n",(0,i.jsx)(n.h2,{id:"milestones",children:"Milestones"}),"\n",(0,i.jsx)(n.p,{children:"AutoGen has a large and active community of developers, researchers and AI practitioners."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["22K+ stars on ",(0,i.jsx)(n.a,{href:"https://aka.ms/autogen-gh",children:"GitHub"}),", 3K+ forks"]}),"\n",(0,i.jsxs)(n.li,{children:["14K+ members on ",(0,i.jsx)(n.a,{href:"https://aka.ms/autogen-dc",children:"Discord"})]}),"\n",(0,i.jsx)(n.li,{children:"100K+ downloads per months"}),"\n",(0,i.jsx)(n.li,{children:"3M+ views on Youtube (400+ community-generated videos)"}),"\n",(0,i.jsxs)(n.li,{children:["100+ citations on ",(0,i.jsx)(n.a,{href:"https://scholar.google.com/citations?view_op=view_citation&hl=en&user=IiSNwnAAAAAJ&citation_for_view=IiSNwnAAAAAJ:zCpYd49hD24C",children:"Google Scholar"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"I am so amazed by their creativity and passion.\nI also appreciate the recognition and awards AutoGen has received, such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Selected by ",(0,i.jsx)(n.a,{href:"https://thesequence.substack.com/p/my-five-favorite-ai-papers-of-2023",children:"TheSequence: My Five Favorite AI Papers of 2023"})]}),"\n",(0,i.jsx)(n.li,{children:"Top trending repo on GitHub in Oct'23"}),"\n",(0,i.jsxs)(n.li,{children:["Selected into ",(0,i.jsx)(n.a,{href:"https://www.benchcouncil.org/evaluation/opencs/annual.html",children:"Open100: Top 100 Open Source achievements"})," only 35 days after spinoff"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["On March 1, the initial AutoGen multi-agent experiment on the challenging ",(0,i.jsx)(n.a,{href:"https://huggingface.co/spaces/gaia-benchmark/leaderboard",children:"GAIA"})," benchmark turned out to achieve the No. 1 accuracy with a big leap, in all the three levels."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"gaia",src:t(86697).Z+"",width:"3604",height:"1585"})}),"\n",(0,i.jsx)(n.p,{children:"That shows the big potential of using AutoGen in solving complex tasks.\nAnd it's just the beginning of the community's effort to answering a few hard open questions."}),"\n",(0,i.jsx)(n.h2,{id:"open-questions",children:"Open Questions"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2308.08155",children:"AutoGen technical report"}),", we laid out a number of challenging research questions:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"How to design optimal multi-agent workflows?"}),"\n",(0,i.jsx)(n.li,{children:"How to create highly capable agents?"}),"\n",(0,i.jsx)(n.li,{children:"How to enable scale, safety and human agency?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The community has been working hard to address them in several dimensions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Evaluation. Convenient and insightful evaluation is the foundation of making solid progress."}),"\n",(0,i.jsx)(n.li,{children:"Interface. An intuitive, expressive and standardized interface is the prerequisite of fast experimentation and optimization."}),"\n",(0,i.jsx)(n.li,{children:"Optimization. Both the multi-agent interaction design (e.g., decomposition) and the individual agent capability need to be optimized to satisfy specific application needs."}),"\n",(0,i.jsx)(n.li,{children:"Integration. Integration with new technologies is an effective way to enhance agent capability."}),"\n",(0,i.jsx)(n.li,{children:"Learning/Teaching. Agentic learning and teaching are intuitive approaches for agents to optimize their performance, enable human agency and enhance safety."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"new-features--ongoing-research",children:"New Features & Ongoing Research"}),"\n",(0,i.jsx)(n.h3,{id:"evaluation",children:"Evaluation"}),"\n",(0,i.jsx)(n.p,{children:"We are working on agent-based evaluation tools and benchmarking tools. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/11/20/AgentEval",children:"AgentEval"}),". Our ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2402.09015",children:"research"})," finds that LLM agents built with AutoGen can be used to automatically identify evaluation criteria and assess the performance from task descriptions and execution logs. It is demonstrated as a ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agenteval_cq_math.ipynb",children:"notebook example"}),". Feedback and help are welcome for building it into the library."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2024/01/25/AutoGenBench",children:"AutoGenBench"}),". AutoGenBench is a commandline tool for downloading, configuring, running an agentic benchmark, and reporting results. It is designed to allow repetition, isolation and instrumentation, leveraging the new ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_logging",children:"runtime logging"})," feature."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["These tools have been used for improving the AutoGen library as well as applications. For example, the new state-of-the-art performance achieved by a multi-agent solution to the ",(0,i.jsx)(n.a,{href:"https://huggingface.co/spaces/gaia-benchmark/leaderboard",children:"GAIA"})," benchmark has benefited from these evaluation tools."]}),"\n",(0,i.jsx)(n.h3,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(n.p,{children:"We are making rapid progress in further improving the interface to make it even easier to build agent applications. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/11/26/Agent-AutoBuild",children:"AutoBuild"}),". AutoBuild is an ongoing area of research to automatically create or select a group of agents for a given task and objective. If successful, it will greatly reduce the effort from users or developers when using the multi-agent technology. It also paves the way for agentic decomposition to handle complex tasks. It is available as an experimental feature and demonstrated in two modes: free-form ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/autobuild_basic.ipynb",children:"creation"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/autobuild_agent_library.ipynb",children:"selection"})," from a library."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/12/01/AutoGenStudio",children:"AutoGen Studio"}),". AutoGen Studio is a no-code UI for fast experimentation with the multi-agent conversations. It lowers the barrier of entrance to the AutoGen technology. Models, agents, and workflows can all be configured without writing code. And chatting with multiple agents in a playground is immediately available after the configuration. Although only a subset of ",(0,i.jsx)(n.code,{children:"pyautogen"})," features are available in this sample app, it demonstrates a promising experience. It has generated tremendous excitement in the community."]}),"\n",(0,i.jsxs)(n.li,{children:["Conversation Programming+. The ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2308.08155",children:"AutoGen paper"})," introduced a key concept of ",(0,i.jsx)(n.em,{children:"Conversation Programming"}),", which can be used to program diverse conversation patterns such as 1-1 chat, group chat, hierarchical chat, nested chat etc. While we offered dynamic group chat as an example of high-level orchestration, it made other patterns relatively less discoverable. Therefore, we have added more convenient conversation programming features which enables easier definition of other types of complex workflow, such as ",(0,i.jsx)(n.a,{href:"/blog/2024/02/11/FSM-GroupChat",children:"finite state machine based group chat"}),", ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchats_sequential_chats",children:"sequential chats"}),", and ",(0,i.jsx)(n.a,{href:"/docs/notebooks/agentchat_nestedchat",children:"nested chats"}),". Many users have found them useful in implementing specific patterns, which have been always possible but more obvious with the added features. I will write another blog post for a deep dive."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"learningoptimizationteaching",children:"Learning/Optimization/Teaching"}),"\n",(0,i.jsx)(n.p,{children:"The features in this category allow agents to remember teachings from users or other agents long term, or improve over iterations. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/12/23/AgentOptimizer",children:"AgentOptimizer"}),". This ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2402.11359",children:"research"})," finds an approach of training LLM agents without modifying the model. As a case study, this technique optimizes a set of Python functions for agents to use in solving a set of training tasks. It is planned to be available as an experimental feature."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/11/09/EcoAssistant",children:"EcoAssistant"}),". This ",(0,i.jsx)(n.a,{href:"https://arxiv.org/abs/2310.03046",children:"research"})," finds a multi-agent teaching approach when using agents with different capacities powered by different LLMs. For example, a GPT-4 agent can teach a GPT-3.5 agent by demonstration. With this approach, one only needs 1/3 or 1/2 of GPT-4's cost, while getting 10-20% higher success rate than GPT-4 on coding-based QA. No finetuning is needed. All you need is a GPT-4 endpoint and a GPT-3.5-turbo endpoint. Help is appreciated to offer this technique as a feature in the AutoGen library."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/10/26/TeachableAgent",children:"Teachability"}),". Every LLM agent in AutoGen can be made teachable, i.e., remember facts, preferences, skills etc. from interacting with other agents. For example, a user behind a user proxy agent can teach an assistant agent instructions in solving a difficult math problem. After teaching once, the problem solving rate for the assistant agent can have a dramatic improvement (e.g., 37% -> 95% for gpt-4-0613).\n",(0,i.jsx)(n.img,{alt:"teach",src:t(58959).Z+"",width:"3721",height:"1502"}),"\nThis feature works for GPTAssistantAgent (using OpenAI's assistant API) and group chat as well. One interesting use case of teachability + FSM group chat: ",(0,i.jsx)(n.a,{href:"https://www.linkedin.com/pulse/combatting-ai-naivete-teaching-resilience-emotional-leah-bonser-jdhrc",children:"teaching resilience"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(n.p,{children:"The extensible design of AutoGen makes it easy to integrate with new technologies. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2024/01/26/Custom-Models",children:"Custom models and clients"})," can be used as backends of an agent, such as Huggingface models and inference APIs."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/11/13/OAI-assistants",children:"OpenAI assistant"})," can be used as the backend of an agent (GPTAssistantAgent). It will be nice to reimplement it as a custom client to increase the compatibility with ConversableAgent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/blog/2023/11/06/LMM-Agent",children:"Multimodality"}),". LMM models like GPT-4V can be used to provide vision to an agent, and accomplish interesting multimodal tasks by conversing with other agents, including advanced image analysis, figure generation, and automatic iterative improvement in image generation."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"multimodal",src:t(48472).Z+"",width:"3146",height:"2014"})}),"\n",(0,i.jsx)(n.p,{children:"The above only covers a subset of new features and roadmap. There are many other interesting new features, integration examples or sample apps:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["new features like stateful code execution, ",(0,i.jsx)(n.a,{href:"/docs/Use-Cases/agent_chat#tool-calling",children:"tool decorators"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_capability_long_context_handling.ipynb",children:"long context handling"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_surfer.ipynb",children:"web agents"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["integration examples like using ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_guidance.ipynb",children:"guidance"})," to generate structured response."]}),"\n",(0,i.jsxs)(n.li,{children:["sample apps like ",(0,i.jsx)(n.a,{href:"/blog/2024/02/02/AutoAnny",children:"AutoAnny"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"call-for-help",children:"Call for Help"}),"\n",(0,i.jsx)(n.p,{children:"I appreciate the huge support from more than 14K members in the Discord community.\nDespite all the exciting progress, there are tons of open problems, issues and feature requests awaiting to be solved.\nWe need more help to tackle the challenging problems and accelerate the development.\nYou're all welcome to join our community and define the future of AI agents together."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Do you find this update helpful? Would you like to join force? Please join our ",(0,i.jsx)(n.a,{href:"https://aka.ms/autogen-dc",children:"Discord"})," server for discussion."]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"contributors",src:t(80912).Z+"",width:"404",height:"572"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},80912:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/contributors-0e352b46ca57d6dca3cef431d22ce64d.png"},48472:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/dalle_gpt4v-627805c9f25aa886377ac86216900e4a.png"},86697:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/gaia-be5cf1e2098456a9f67814d0b9681777.png"},23764:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/love-ec54b2666729d3e9d93f91773d1a77cf.png"},58959:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/teach-62a59108640435ad2b8bc396a45fe6cf.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(67294);const a={},s=i.createContext(a);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);