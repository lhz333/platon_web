module.exports = {
    // 头部导航
    headerNav: {
        home: "Home",
        technology: "Technology",
        service: "Services",
        custody:"KeyShard",
        roadmap: "Roadmap",
        team: "Team",
        newsMedia: "News & Media",
        news: "News & Insights",
        pressCenter: "Media & Press",
        case: "Use Cases",
        faq: "FAQ",
        joinUs: "Community",
        developer: "Developer",
        honorPoints: "Honor Points",
        vitu: "Vitu",
        language: "Language",
        en: "English",
        zh: "中文"
    },
    anchors: [{
        title: "Features"
    }, {
        title: "Roadmap"
    }, {
        title: "Founder"
    }, {
        title: "Core Team"
    }, {
        title: "News"
    }, {
        title: "Join Us"
    }],
    // banner
    banner: {
        title: "Let Us Compute",
        subtitle: "A High-Efficiency Trustless Computing Network",
        btn: "Whitepaper"
    },
    keyShard: {
        mainSologan: "Digital Asset Custody Services",
        subSologan: "Beyond  Multi-Signature",
        btn: "Learn more"
    },
    vitu: {
        title: `Data <span style="color: #F1C30F;">Never</span> Lies`,
        descript: `It is also of no exception in the world of <span style="color: #F1C30F;">blockchain</span>.`,
        descriptM: `It is also of no exception <br/>in the world of <span style="color: #F1C30F;">blockchain</span>.`,
        btn: "Get Access Now"
    },
    honorPoints: {
        descript: "Honor Every Contribution to PlatON Ecosystem",
        descriptm: "Honor Every Contribution to PlatON Ecosystem",
        signUp: "SIGN UP"
    },
    // What is PlatON
    partOne: {
        title: "A Peer-to-Peer Trustless Computing Network",
        content: [{
            title: "Verifiable Computing",
            point: [{
                text: "Non-interactive Proof",
            }, {
                text: "Practical Verifiable Computation algorithm",
            }]
        }, {
            title: "Privacy-preserving Computing",
            point: [
                //     {
                //     text:"Use secure multi-party computation (MPC) and full homomorphic encryption (FHE) to preserve privacy of the data and computation function",
                // },
                {
                    text: "Advanced MPC and FHE"
                }, {
                    text: "Preserve privacy of data and computation function"
                }
            ]
        }, {
            title: "Scalable Computing",
            point: [{
                text: "Off-chain computing",
            }, {
                text: "Circuit-based parallel computing"
            }]
        }, {
            title: "Computing Specific Hardware",
            point: [{
                text: "Able to run smart contracts compiled into circuits",
            }, {
                text: "Higher efficiency with lower costs and less power"
            }]
        }]
    },
    //Services
    blockchain: {
        title: "Blockchain Solutions",
        doWhatTitle: "What Can We Do",
        doWhat: [{
            text: "Provide blockchain infrastructure and built-in services for distributed commerce"
        }, {
            text: "Offer alternative consensus mechanisms to meet the needs of different business scenarios"
        }, {
            text: "Provide cryptographic-based privacy preserving computation to support secure data exchange"
        }],
        caseTitle: "Cases",
        cases: [{
            title: "Wanxiang Blockchain Labs",
            content: "PlatON cooperates with Wanxiang Blockchain to develop a next-generation consortium chain for enterprise-level applications.",
            point: [{
                title: "Advanced technology",
                text: "Adopt new technologies to improve the efficiency and security of the blockchain, including CBFT consensus, WASM Contracts, cryptographic algorithms, etc."
            }, {
                title: "Built-in privacy-preserving modules",
                text: "Provide extra protection for privacy of transactions and data while being audited and supervised."
            }, {
                title: "Multiple services and APIs",
                text: "Easy for developers to develop, test and monitor applications on the platform."
            }]
        }, {
            title: "AITOS",
            content: "The marriage between PlatON and atios.io produces comprehensive BoT ( Blockchain of Things ) products and solutions, enabling AIoT cellular devices to release the value of applications and data.",
            point: [{
                title: "aitos.io® BoT Wallet",
                text: "Lightweight wallet designed for cellular AIoT module, enabling IoT device generating decentralized self-sovereign identity for transaction and smart contract on blockchain."
            }, {
                title: "aitos.io® BoT Edge Gateway",
                text: "IoT Edge gateway supporting blockchain node and MPC coordinated crypto, seamlessly connecting IoT device to blockchain through lightweight Cellular AIoT Wallet."
            }, {
                title: "aitos.io® BoT MPC Solution",
                text: "Multi-Party Computation solution based on privacy-preserving cryptography, allowing multiple IoT service providers to share their data without disclosing the data privacy to others."
            }]
        }]
    },
    consulting: {
        title: "Consulting Service",
        doWhat: [{
            text: "Experienced in blockchain technology and privacy preserving cryptography"
        }, {
            text: "Offer timely proposal based on deep understanding of business requirements and related technologies"
        }, {
            text: "Provide cross-platform consulting services to various industries"
        }],
        cases: [{
            name: "irisnetwork",
            title: "IRISnet",
            text: "As part of IRISnet's unique iService framework, PlatON's privacy-preserving computation services can be interoperable by all public chains, consortium chains, and other traditional business systems on IRIS Hub."
        }, {
            name: "realid",
            title: "RealID",
            text: "PlatON helps RealID improve the efficiency and safety of its image recognition and eKYC solutions by equipping RealID's AI technology with PlatON's Proxy Re-Encryption and MPC algorithms. "
        }, {
            name: "hashquark",
            title: "HashQuark",
            text: "PlatON's MPC service helps HashQuark enhance the safety of user's digital assets and transactions on the platform."
        }, {
            name: "keystore",
            title: "KEYSTORE",
            text: "Using PlatON's MPC service, Keystore can provide its customers with more professional and flexible key management solutions."
        }]
    },
    custody: {
        title: "Custody Services",
        mainSlogan: "Digital Asset Custody Services",
        subSlogan: "Beyond  Multi-Signature",
        kmsNavs: [{
            nav: "Challenges"
        }, {
            nav: "Services"
        }, {
            nav: "How it works"
        }],
        doWhatTitle:{
            title:"Challenges",
            subTitle:"The main utility of crypto currency custody solutions lies in the safeguarding of crypto currency assets. <br/> Private keys, which are used to conduct transactions or access crypto holdings, are extremely difficult to remember and can be stolen or hacked. "
        },
        doWhat: [{
            title: "Private Key = Asset",
            text: "Who controls private key controls your asset."
        }, {
            title: "Multi-Signature Nightmare",
            text: "Headache to manage thousands of crypto currencies."
        }],
        provide: {
            title: "Services",
            subTitle: "Provide digital asset custody as a service based on secure multi-party computation. <br/> Enable token funds, family office, brokers and high net worth investors to manage their digital assets more securely and more conveniently.",
            point: [{
                title: "Beyond Multi-Signature",
                textArr:["Theshold signature splits the private key into many shares.","More flexible off-chain approval policy control, no need to deploy smart contract."],
            }, {
                title: "Tailored Services With Bank-Grade Security",
                textArr:["Provide tailored custody services for all our clients, allowing them to focus on their own business.","Remove the headache of institutional investors maintaining complex IT infrastructures."],
            }, {
                title: "Easy To Use For All Crypto Assets",
                textArr:["User-friendly APIs/SDKs to integrate with systems built on different platforms.","Compatible with all crypto currencies."],
            }]
        },
        howWorks: {
            title:"How it works",
            // subTitle:"Offer a multi-currency custody services that supports the most widely used crypto currencies based on secure multi-party computation."
        },
        platformApi: "Platform API on the way"
    },
    // 技术页面
    tecPage: {
        bigTitle: "Technology",
        bigText: "High-Efficiency Trustless Computing",
        positionTitle: "What is PlatON",
        position: {
            title: "What is PlatON",
            subtitle: "PlatON is a cryptographic-based computing network which features in high scalability and privacy.",
        },
        features: [{
            title: "Verifiable Computing",
            subtitle: "VC guarantees the correctness of off-chain computation",
            point: [{
                text: "Verifiable. The correctness of computation can be verified."
            }, {
                text: "Unforgeability. Computational infeasible to a forged result."
            }, {
                text: "Efficiency. Less running time for verification."
            }]
        }, {
            title: "Privacy-Preserving Computing",
            subtitle: "MPC and HE protect privacy of data and computation function",
            point: [{
                text: "Privacy. The raw data cannot be obtained by other parties."
            }, {
                text: "Correctness. The result is consistent with the computation in plaintext."
            }, {
                text: "Trustless Boundary. The entire process under protection while no security boundary exists."
            }]
        }],
        comput: "How it works",
        computSubtitle: "High-Efficiency off-chain computation",
        computProcess: [{
            text: "Users deploy and release Meta Smart Contract which contains algorithm parameters, computation function and economic incentives. "
        }, {
            text: "Users call the smart contract and send transactions."
        }, {
            text: "Complex computations are broken down into sub-tasks in circuit form and distributed to multiple computing nodes."
        }, {
            text: "Computing nodes execute computation and generate the proof."
        }, {
            text: "Computing nodes commit computation results and the proof."
        }, {
            text: "On-chain nodes broadcast computation results and the proof."
        }, {
            text: "Block producers verify the proof."
        }, {
            text: "Verified computation results are returned to the user via smart contract. "
        }, {
            text: "Economic rewards are executed on-chain according to the Value of Computing Contribution."
        }],
        consenTitle: "Decouple Computation from Consensus",
        consensus: [{
            title: "Decouple Computation from Consensus",
            text: "A strategy of on-chain consensus and oﬀ-chain computation which can be upgraded respectively. "
        }, {
            title: "Meta Smart Contract",
            text: "Contain IO logic and computation function, the former is to acquire on-chain data and the latter is compiled into Boolean Circuits to be executed off-chain."
        }, {
            title: "Computation Task",
            text: "Can be divided into multiple sub-circuits then sent to randomly selected computing nodes to be executed in parallel. "
        }, {
            title: "Computing Channel",
            text: "Serve as a computation state machine tracking the state of the computation tasks, and a deterministic program issuing reward or punishment. "
        }]
    },
    // 路线图
    roadmap: {
        title: "Roadmap",
        one: {
            title: "Baleyworld",
            firstPoint: "Implement a complete RELOAD overlay network and blockchain services with support for service discovery, meta smart contracts and VC.",
        },
        two: {
            title: "Trantor",
            firstPoint: "Support a complete MPC, updated VC and Giskard consensus."
        },
        three: {
            title: "Terminus",
            firstPoint: "Enable off-chain parallel computing."
        },
        four: {
            title: "Gaea",
            firstPoint: "Feature the version of software and hardware integration.",
            secondPoint: "Release computing specific hardware."
        }
    },
    // 创始人
    founder: {
        title: "Founder",
        people: [{
            name: "Feng Xiao",
            detail: "Founder of Wanxiang Blockchain Labs<br />Founder and investor of Fenbushi Capital<br />Chairman of Wanxiang Blockchain Inc.",
            education: "Ph.D. in Economics, Nankai University",
            point: [{
                text: "Over 25 years of experience in the financial sector."
            }, {
                text: "The earliest advocate of blockchain technology in China. Leading figure in today's Blockchain industry."
            }, {
                text: "Early sponsor of Ethereum; invested in over 50 leading blockchain projects around the world."
            }]
        }, {
            name: "Lilin Sun",
            detail: "Founder and CEO of JUZIX <br /> Founder of BCOS open source blockchain project",
            education: "Master, Wuhan University <br />Bachelor, Beihang University",
            point: [{
                text: "Served at China UnionPay as the head of strategic development, in charge of payment innovations."
            }, {
                text: "Entered blockchain sector in 2013. Began focusing on cryptography in 2016, have been investing in and supporting academic research and engineering implementation of cryptography ever since."
            }, {
                text: "An advocate and sponsor of computational complexity theories such as ZKP, MPC, FHE and algorithm game theory in China and other areas around the world."
            }]
        }],
    },
    // 核心团队
    team: {
        title: "Core Team",
        people: [{
            name: "Shenglin Li",
            job: "Chief Architect",
            education: "Bachelor/Master, Beihang University",
            detail: "Co-architect of BCOS open source blockchain project <br />Senior System Architecture Specialist in distributed computing for Aspire Digital and China Telecommunications Research Institute",
            point: [{
                text: "One of China's top distributed architects with more than 15 years of experience in the high-speed distributed computing field."
            }, {
                text: "Led the team to implement enterprise-class blockchain platform providing carrier-class services for commercial use."
            }, {
                text: "Jointly launched enterprise-grade BCOS open-source blockchain architecture in 2017."
            }, {
                text: "Independently developed a cutting-edge circuit compiler for MPC."
            }]
        }, {
            name: "Debiao He",
            job: "Chief Cryptography Scientist",
            education: "Ph.D., School of Mathematics and Statistics, Wuhan University",
            detail: "Professor, School of Cyber Science and Engineering, Wuhan University",
            point: [{
                text: "Expert in secure application of cryptography in commercial environments such as mobile Internet and cloud computing."
            }, {
                text: "Involved in the establishment of the standard of SM2 cryptography algorithm."
            }, {
                text: "Owns 8 patents about the secure implement and application of commercial cryptographic algorithm."
            }, {
                text: "Received a First-Class Award from the Ministry of Education's Natural Science Awards."
            }, {
                text: "Serves on the Chinese Association for Cryptographic Research (CAGR) Organizing Committee, CAGR Committee for Young Elite Professionals, and CAGR Security Protocol Expert Committee."
            }, {
                text: "Serves as a standing committee member of CCF Blockchain Professional Committee."
            }]
        }, {
            name: "Ada Xiao",
            job: "Chief Strategy Officer",
            education: "MBA, Columbia Business School <br />Bachelor, Trinity College, Cambridge, UK",
            detail: "Worked at Fenbushi Capital. Responsible for Asia-Pacific blockchain technology investments and partnerships.",
            point: [{
                text: "One of the early employees of Wanxiang Blockchain Laboratory and Fenbushi Capital."
            }, {
                text: "One of the pioneers in blockchain investment within China and around the world with extensive experience in the global blockchain field."
            }, {
                text: "Worked for some well-known investment bank and financial institution in Hong Kong. Familiar with the global capital market and asset management business."
            }]
        }, {
            name: "James Qu",
            job: "Chief Technology Officer",
            education: "Bachelor, Beihang University",
            detail: "Co-founder as well as joint CEO and COO of Shanghai Genus <br />Worked for Morgan-Stanley as ED and UBS Securities as AD",
            point: [{
                text: "Over 30 years of experience with implementation and management of IT architectures for first-rate global financial institutions."
            }, {
                text: "More than 20 years of experience with the development and management of financial system business architectures and technical architectures."
            }, {
                text: "15 years of experience with managing multicultural teams from more than 40 countries."
            }, {
                text: "One of the co-founders of most advanced algorithm trading platform in China."
            }]
        },{
            name: "Jason Qiao",
            job: "Chief Ecosystem Officer",
            education: "M.S., The University of Chicago",
            detail: "Former Executive Director of J.P.Morgan Asset Management. <br/> Head of Portfolio Construction and Quant Strategy for Specialized Strategy Team of Private Bank in NYC, sitting as member of the Investment Committee. ",
            point: [{
                text: "With 12+ years of experience in JPMorgan, had extensive experience in asset management, private wealth management, and Investment. "
            }, {
                text: "Focuses on innovative investment product design, especially with big data, AI, and Blockchain. "
            }]
        },{
            name: "Tom Tang",
            job: "Chief Innovation Officer",
            education: "",
            detail: "Former Alibaba Investment Director, System Architect. <br/> Baidu Mobile Systems Department Architect. <br/> Motorola System Architect. <br/>Tsinghua Tongfang department manager.",
            point: [{
                text: "In Alibaba, invested in artificial intelligence unicorns such as Sensetime and Cambricon."
            }, {
                text: "Own 20 Chinese and US granted technical utility patents. "
            }]
        }, {
            name: "David Zou",
            job: "Chief Economist",
            education: "Peking University，B.A. in Statistics and M.A. in Economics <br />Graduate School of People’s Bank of China (Now PBC School of Finance, Tsinghua University), Ph.D. in Economics <br />Harvard University,  Harvard Kennedy School, Mid-career MPA (Mason program) <br />Associate Research Fellow of People’s Bank of China since 2014",
            detail: "Former Chief Economist of Bitmain <br />Founding Partner of Nanhu Financial Corporation, and Senior Vice President of China Investment Corporation",
            point: [{
                text: "Dr. Zou’s research focuses on the banking sector, fixed income securities, financial investment, risk management, Internet finance/ fintech, and financial regulation. Regarding the blockchain sector, he has published “Bubble and Opportunities: An Economic Analysis of Cryptocurrencies and the Application of Blockchain Technology in the Financial Sector” and “What a Blockchain Can Do and Can’t Do” (Working Paper No. 2018/4 of People’s Bank of China) ."
            }, {
                text: "Dr. Zou won Sun Yefang Prize for Financial Innovation (2015, China’s top prize for economists) and China Soft Science Prize (2015)."
            }]
        }, {
            name: "Xiang Xie",
            job: "Algorithm Scientist",
            education: "Ph.D., Trusted Computing and Information Assurance Laboratory, Institute of Software, Chinese Academy of Sciences",
            detail: "Served at Wireless Security Solutions Design Department in Huawei",
            point: [{
                text: "Specialized in cryptography and protocol design such as lattice theory, Homomorphic Encryption, Zero-Knowledge Proof and Secure Multi-Party Computation."
            }, {
                text: "Published related papers in Eurocrypt, one of the top three international conferences in cryptography, and received best paper reward in SCN 2012."
            }]
        }]
    },
    advisorTitle: "Advisor",
    advisor: [{
        name: "Jonathan Shelon",
        point: [{
            text: "Chief Operating Officer, Kraneshares"
        }, {
            text: "Portfolio Manager, Fidelity Investments"
        }, {
            text: "Chief Investment Officer, Specialized Strategies Team, J.P.Morgan"
        }]
    }, {
        name: "David Johnston",
        point: [{
            text: "Managing Director, Yeoman's Capital"
        }, {
            text: "Founder of Factom"
        }]
    }],
    partner: {
        title: "Partner",
        list: [{
            name: "aitos",
            text: "aitos.io builds trusted identity authentication and privacy-preserving data computation solution for the enterprises of AIoT. ",
            link: "http://www.aitos.io/"
        }, {
            name: "bytom",
            text: "Transfer asset from atomic world to byte world.",
            link: "https://bytom.io"
        }, {
            name: "hashkey",
            text: "HashKey Digital Asset Group is a digital asset fintech company headquartered in Hong Kong, led by executives with expertise in asset management, securities regulation, blockchain, banking, compliance, software and technology development, and research.",
            link: "https://www.hashkey.com/#/"
        }, {
            name: "hashquark",
            text: "HashQuark is a new generation of blockchain mining pool which remains focused on PoS, DPoS, and other consensus mechanisms.",
            link: "https://www.hashquark.io/#/"
        }, {
            name: "irisnetwork",
            text: "Technology foundation to facilitate easy construction of distributed business applications, enable integration and interoperablity of business services offered by heterogeneous blockchains including public chains as well as consortium chains.",
            link: "https://www.irisnetwork.cn/"
        }, {
            name: "keystore",
            text: "Institutional-grade crypto asset solutions. Dedicated to provide secure, professional, efficient crypto asset management services.",
            link: "https://www.keystore.com/#/"
        }, {
            name: "pnpchina",
            text: "One of the biggest tech accelerators globally.",
            link: "http://pnpchina.com/"
        }, {
            name: "realid",
            text: "Powered by blockchain, facial recognition/artificial intelligence and machine learning technologies, Real ID's business eKYC and consumer mobile app solutions allow fast, simple and secure digital identity transaction and verification for everyday service onboarding.",
            link: "https://www.realid.global/"
        }, {
            name: "blockchainlabs",
            text: "Funded by China Wanxiang Holdings, Wanxiang Blockchain Labs is a non-profit research institution focusing on Blockchain technology.",
            link: "https://blockchainlabs.org"
        }, {
            name: "wxblockchain",
            text: "Beginning in 2015, China Wanxiang Holding Co., Ltd. started a strategic layout in the blockchain industry, and was deeply engaged in this field ever since. By now Wanxiang Blockchain has already built anecosystem that is consisted of Wanxiang Blockchain Labs, Wanxiang Blockchain Business ConsultingService, Wanxiang Chainbase Accelerator, and Wancloud.",
            link: "http://www.wxblockchain.com"
        }, {
            name: "youbicapital",
            text: "Youbi Capital is a private equity fund registered in the Cayman Islands. Founded by senior Wall Street professional investors, the world's top BTC mining pool owner, and veteran crypto currency investment experts, Youbi focuse on investing in overseas blockchain projects.Youbi Capital is committed to long-term value investment in the blockchain ecosystem.",
            link: "http://www.youbicapital.com/"
        }]
    },
    // 应用案例
    featuredCases: {
        title: "Featured Cases",
    },
    caseDetails: {
        title: "Use Cases",
        subtitleOne: "Connect multi-source data and heterogeneous network, ",
        subtitleTwo: "Facilitate transactions of data and computing power.",
        overview: [{
            title: "Collaborative Computing",
            content: "Users can establish a new interaction mode with data security and privacy protection according to different business requirements, forming a secure data exchange and collaborative computing platform."
        }, {
            title: "Decentralized Applications",
            content: "Equipped with algorithms, services and interfaces provided by PlatON, users can develop decentralized applications and business systems conveniently."
        }, {
            title: "Real-time Clearing and Settlement",
            content: "Users can customize the business mode of the application chain and pricing mode with a built-in payment settlement tool and pricing module."
        }],
        solutitle: "Solutions",
        solutions: [{
            title: "Computation Requester",
            content: "Institution who has data demands or computing requirements."
        }, {
            title: "Algorithm Provider",
            content: "Data service provider who owns data model."
        }, {
            title: "Data Provider",
            content: "Individual or institution who owns data."
        }, {
            title: "Computing Power Provider",
            content: "Individual or institution who owns computing power."
        }, {
            title: "Computing Collaborator",
            content: "Business operator, usually as well as data provider."
        }],
        advTitle: "Advantages",
        advantages: [{
            title: "Scalability",
            content: "Enhance scalability by decoupling computation from consensus."
        }, {
            title: "Privacy",
            content: "Protect algorithms and data with cryptography."
        }, {
            title: "Verifiability",
            content: "More reliable oﬀ-chain solutions with verifiable computing. "
        }
        ],
        caseTitle: "Use Cases",
        benefits: "Benefits",
        opportunities: "Scenarios",
        cases: [{
            title: "Payment and Settlement",
            content: "PlatON provides service as a super clearing house for value exchange. Individuals and enterprises can build their own payment and settlement system on top of protected data and assets.",
            benefits: [{
                title: "Consumers and Merchants",
                firstPoint: "Efficient settlement and clearing among individuals and enterprises.",
                secondPoint: "Trading parties’ sensitive information and data are protected by cryptographic algorithms."
            }, {
                title: "Developers and Enterprises",
                firstPoint: "Build customized payment and settlement system, define rules for clearing and rewards.",
                secondPoint: "Build and deploy Dapp charging model quickly, with the payment capabilities and APIs."
            }, {
                title: "Payment Service Providers",
                firstPoint: "Quick access to an open payment clearing networks without central nodes’ endorsement or as a bridge.",
                secondPoint: "Open to more clients business, by providing on demand and flexible payment and settlement solutions. "
            }],
            opportunities: [{
                title: "Peer-to-peer Payment",
                firstPoint: "Process payment and settlement peer to peer directly regardless geographic location, time zone, and entity difference.",
                secondPoint: "Support conversion and directed payments between different settlement models."
            }, {
                title: "Distributed Exchange",
                firstPoint: "Decouple digital asset matching and delivery to achieve efficiency and security simultaneously. ",
                secondPoint: "Build settlement channels for different assets and support cross-chain asset transfer and payment."
            }]
        }, {
            title: "AI and IoT",
            content: "Enables establishment of joint data model among AI business alliances through peer-to-peer network and privacy computing. Promotes model iteration and algorithm optimization through evaluation and incentive mechanism.",
            benefits: [{
                title: "Data Providers",
                firstPoint: "Gain profits from data under privacy protection.",
                secondPoint: "Ensure data privacy and sovereignty through secured and controllable data authorization PRE."
            }, {
                title: "Data Users",
                firstPoint: "Better results based on more comprehensive, effective, and secure data analysis.",
                secondPoint: "Lower cost with rich data services."
            }, {
                title: "Algorithm Providers",
                firstPoint: "Enhanced the model trained by richer multi-source data. ",
                secondPoint: "Get profits by providing protected algorithms."
            }, {
                title: "Computing Power Providers",
                firstPoint: "Gain profits by sharing idle computing power.",
                secondPoint: "Participate in computation without knowing algorithms and data."
            }],
            opportunities: [{
                title: "Data Marketplace",
                firstPoint: "More data emerge with reasonable price as a result of integrated multi-source data, algorithms and computing power.",
                secondPoint: "Guarantee data source security, valid computation, and provide real-time clearing and settlement."
            }, {
                title: "Federated Learning",
                firstPoint: "Secure data exchange and hyperparameters sharing between organizations, efficient model training.",
                secondPoint: "Enhanced modeling capabilities as joint alliance of organizations."
            }, {
                title: "Global Scientific Computing",
                firstPoint: "Encourage global idle computing resources to participate. Scientific computing could be done timely with lower cost.",
                secondPoint: "Improve performance with sophisticated hardware pool in parallel."
            }]
        }, {
            title: "Healthcare",
            content: "Promote effective authorization, utilization, and collaborative computation of industry data such as medical history data, pathological data, disease prediction and analysis data.",
            benefits: [{
                title: "Individuals",
                firstPoint: "Authorize data independently, could get profits in return.",
                secondPoint: "Get better medical services by personal data authorization."
            }, {
                title: "Hospitals/Medical Institutions",
                firstPoint: "Legal access to authorized personal data.",
                secondPoint: "Maximize the value of isolated medical data by converting data into assets."
            }, {
                title: "Data Service Providers",
                firstPoint: "Obtain first-hand data source input without infringing the rights of data owners.",
                secondPoint: "Speed up model training with algorithm protected."
            }, {
                title: "Data Users",
                firstPoint: "Expand the width and depth of data analysis and improve product design and service.",
                secondPoint: "Get trusted results from data service providers."
            }],
            opportunities: [{
                title: "Individual Health Account",
                firstPoint: "Build life-long tracking records, monitor personal health status.",
                secondPoint: "Obtain analysis results and have opportunities of pinpoint richer and better medical treatment."
            }, {
                title: "Public Health Analysis",
                firstPoint: "Easy access to global or industry data to promote pharmaceutical R&D.",
                secondPoint: "Timely and effective disease surveillance and monitoring through collaborative analysis."
            }, {
                title: "Insurance",
                firstPoint: "Improve the actuarial model with data.",
                secondPoint: "Lower the risk of fraudulent conduct and double claims through industry collaboration."
            }]
        }, {
            title: "Credit Reporting",
            content: "Reform the traditional credit reporting and evaluation mechanism of big data. Establish a multi-dimension social credit reporting system at lower cost.",
            benefits: [{
                title: "Individuals",
                firstPoint: "Create and manage credit labels and personal privacy data for authorized sharing.",
                secondPoint: "Enjoy better credit reporting services with multi-dimensional credit scores and credit rating data."
            }, {
                title: "Enterprises",
                firstPoint: "Lower the cost of due diligence with a secure and effective access to customer data.",
                secondPoint: "Use personal data with proper users’ authorization, reduce legal risk."
            }, {
                title: "Credit Agencies",
                firstPoint: "Reduce the risk of personal sensitive data collecting for reliable credit models.",
                secondPoint: "Train algorithm with much wider range of data learning. Computation logic is still be protected."
            }],
            opportunities: [{
                title: "Data Wallet",
                firstPoint: "Users independently manage all personal sensitive private data.",
                secondPoint: "Users define data policy and conveniently authorize data transactions."
            }, {
                title: "Credit Reporting Services and Financial Applications",
                firstPoint: "Improve data model and credit data service by getting and matching multi-source data authorized by users.",
                secondPoint: "Provide cross-marketing channels across industries, promoting the innovation of financial services."
            }]
        }, {
            title: "Advertising",
            content: "Advertisers and information service providers are authorized to obtain tags defined by end users to form more accurate customer profile, with which precision marketing can be implemented.",
            benefits: [{
                title: "Individuals",
                firstPoint: "Create digital identities and form digital labels at different latitudes.",
                secondPoint: "Get paid through information authorization and receive accurate pushes that match interests and needs."
            }, {
                title: "Advertisers",
                firstPoint: "Reduce data noise by cross-validating user tags in different data sources.",
                secondPoint: "Access to the latest data efficiently and increase accuracy."
            }, {
                title: "Internet Service Providers",
                firstPoint: "Establish a digital identification system to help build better profile engines.",
                secondPoint: "Improve accurate AD fill rate."
            }],
            opportunities: [{
                title: "Commodity Preference",
                firstPoint: "Identify target customers and relevant products based on massive user behavior tags, without breach user privacy.",
                secondPoint: "Users can subscribe to catalogs or advertisements on demand according to their interest."
            }, {
                title: "Profiling Engine",
                firstPoint: "Associate multiple identities across industries and organizations. Refine labeling and matching rules while keep user privacy.",
                secondPoint: "Provide a powerful but accurate profile engine service with a comprehensive labeling rules and massive user index anonymously."
            }, {
                title: "Advertising Marketplace",
                firstPoint: "Connects customer data supply, AD service and product maker directly.",
                secondPoint: "Provides efficient and stable matching for AD distribution."
            }]
        }, {
            title: "Key Management",
            content: "A breakthrough of key management service based on MPC which safeguards digital asset with top security without sacrificing usability. Private key custody and recovery is no longer a headache.",
            benefits: [{
                title: "Users",
                firstPoint: "A secure and flexible way of private key management.",
                secondPoint: "Avoid the huge pain of asset loss caused by stolen or forgotten of private key."
            }, {
                title: "Key Management Service Providers",
                firstPoint: "Safeguarding key pieces as a secure service based on MPC.",
                secondPoint: "Trusted by users since never touch and cannot disclose the original user key."
            }],
            opportunities: [{
                title: "Key Custody",
                firstPoint: "The custodian and the user keeps different segment of the private key. Both sides have to be online with MPC engine at the same time so as to control the target account.  ",
                secondPoint: "Never expose related parties’ secret pieces."
            }, {
                title: "Multi-signature",
                firstPoint: "Participants take turns to sign, no need to be online simultaneously.",
                secondPoint: "The custodian cannot get access to the key of multi-signature participants."
            }, {
                title: "Key Recovery",
                firstPoint: "The custodian and the user each holds one segment of original private key encrypted by MPC.",
                secondPoint: "Users can recover the private key through MPC."
            }]
        }]
    },
    // 新闻
    news: {
        title: "Insights",
        news: "News",
        events: "Events",
        insights: "Insights",
        more: "More",
        labels: "Labels",
        seemore: "See More",
        learnMore: 'Learn More',
        pressCenter: "Media & Press",
        related: "Recommended Articles",
        search: "search",
        // noNews:"No related news",
        // noEvents:"No related Events",
        // noInsights:"No related Insights",
        // noMedia:"No related Media & Press",
        noNews: "",
        noEvents: "",
        noInsights: "",
        noMedia: "",
        tagged: "TAGGED IN "
    },
    // FAQ
    faq: {
        title: "Frequently Asked Questions",
    },
    // 底部
    footer: {
        about: {
            title: "Overview",
            one: "What is PlatON",
            two: "Features",
            three: "Roadmap",
            four: "Team"
        },
        technology: {
            title: "Technology",
            one: "Position",
            two: "Trustless Computing",
            three: "Computation Process",
            four: "Base Chain"
        },
        cases: {
            title: "Use Cases",
            one: "Solutions",
            two: "Use Cases",
        },
        resources: {
            title: "Resources",
            one: "White Paper",
            two: "News",
            three: "FAQ",
        },
        contactUs: {
            title: "Contact us",
            email: "support@platon.network"
        },
        copyRight: {
            content: "Copyright &copy; 2018 Platon International Limited All rights reserved."
        }
    },
    //加入社区
    joinUs: {
        title: "Community",
        placeholder: "Enter your email for newsletters",
        subscribe: "Subscribe",
        contactUs: "Contact us",
        email: "support@platon.network"
    },
    //弹窗
    model: {
        title: "Thanks for your subscription!",
        send: "We’ll send newsletters to",
        fillInfo: "For more information, please fill out the form:",
        name: "name",
        firstName: "First Name",
        lastName: "Last Name",
        company: "Company",
        identity: "You are…",
        developer: "Developer",
        investor: "Investor",
        mediaInfo: "Media",
        other: "Other",
        returnBtn: "Return",
        submitBtn: "Submit"
    },
    //提示
    tips: {
        inputEmail: "Please enter your email address.",
        invalidEmail: "The email is invalid.",
        repeat: "The email has already been subscribed.",
        infoIsnull: "Please enter your information.",
        SystemError: "System error",
        //      inputInfo:"The form is not completed, are you sure to subscribe?",
        inputInfo: "Please enter your information.",
        success: "Success"
    },
    seo: {
        index: {
            title: "PlatON",
            keywords: "PlatON; Privacy-preserving computing; Trustless computing; A next generation computing framework; Trustless computing network; Blockchain; Public chain; White paper; MPC; Secure Multi-Party Computation; Feng Xiao; Lilin Sun; ",
            description: "PlatON is a high-efficiency trustless computing network, which will serve as a next-generation of computing architecture in the digitalized world. "
        },
        technology: {
            title: "PlatON Technology",
            keywords: "PlatON's position；Decentralized system; Trustless computing; Privacy-preserving computing; Meta smart contract; Computing channel; ",
            description: "Introduction to PlatON technology and trustless computing"
        },
        case: {
            title: "PlatON Use Cases",
            keywords: "PlatON applications; PlatON use cases; Blockchain; Heterogeneous network; Data exchange; Trade of computing power; Collaborative computing; Payment and Settlement; Big data; AI; Internet of things; Healthcare; Credit reporting; Advertisement; Key management; Federated Learning; Data Marketplace; ",
            description: "Applications and Solutions based on PlatON"
        },
        news: {
            title: "PlatON Insights",
            keywords: "PlatON news; PlatON insights; PlatON events",
            description: "news and insights of PlatON"
        }
    }

}