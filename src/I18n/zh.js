// 注意：一定是 exports，不是 export，否则会报错，报错信息是下列的中的内容不是 string
module.exports = {
    headerNav: {
        home: "首页",
        technology: "技术",
        service: "Services",
        custody:"KeyShard",
        roadmap: "路线图",
        team: "团队",
        newsMedia: "动态",
        news: "新闻和观点",
        pressCenter: "媒体报道",
        case: "案例",
        faq: "FAQ",
        joinUs: "社区",
        developer: "开发者",
        honorPoints: "云图荣誉",
        vitu: "Vitu",
        language: "Language",
        en: "English",
        zh: "中文"
    },
    anchors: [{
        title: "PlatON特性"
    }, {
        title: "路线图"
    }, {
        title: "创始人"
    }, {
        title: "核心团队"
    }, {
        title: "新闻公告"
    }, {
        title: "加入社区"
    }],
    // banner
    banner: {
        title: "一切皆可计算",
        subtitle: "高性能Trustless计算网络",
        btn: "技术白皮书"
    },
    keyShard: {
        mainSologan: "数字资产托管服务",
        subSologan: "超越多重签名",
        btn: "了解更多"
    },
    vitu: {
        title: `数据<span style="color: #F1C30F;">从不</span>说谎`,
        descript: `<span style="color: #F1C30F;">区块链</span>的世界也不例外`,
        descriptM: `<span style="color: #F1C30F;">区块链</span>的世界也不例外`,
        btn: "马上体验"
    },
    honorPoints: {
        descript: "云图荣誉积分计划盛大开启  感恩回馈每位社区贡献者",
        descriptm: "云图荣誉积分计划盛大开启<br />感恩回馈每位社区贡献者",
        signUp: "立即注册"
    },
    // What is PlatON
    partOne: {
        title: "一个点对点的无信任计算网络",
        content: [{
            title: "可验证计算",
            point: [{
                text: "非交互证明方式",
            }, {
                text: "高效可验证计算算法",
            }]
        }, {
            title: "隐私计算",
            point: [
                //     {
                //     text:"使用安全多方计算和全同态加密保证数据和计算逻辑的隐私安全",
                // },
                {
                    text: "使用安全多方计算和全同态加密"
                }, {
                    text: "保证数据和计算逻辑的隐私安全"
                }
            ]
        }, {
            title: "可扩展计算",
            point: [{
                text: "链下计算",
            }, {
                text: "基于电路的并行计算"
            }]
        }, {
            title: "专用计算硬件",
            point: [{
                text: "可直接运行编译为电路的元智能合约",
            }, {
                text: "提高运算效率，降低功耗和成本"
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
        bigTitle: "技术",
        bigText: "可扩展的Trustless计算网络",
        positionTitle: "什么是PlatON",
        position: {
            title: "什么是PlatON",
            subtitle: "PlatON是基于密码学算法构建的可扩展的 Trustless 计算网络，可解决区块链的可扩展性和隐私性问题",
        },
        features: [{
            title: "可验证计算",
            subtitle: "VC算法保证链下计算的正确性",
            point: [{
                text: "可验证性：可验证计算结果的正确性。"
            }, {
                text: "不可伪造性：无法伪造假的证明。"
            }, {
                text: "快速验证性：验证证明的运行时间远低于原始计算。"
            }]
        }, {
            title: "隐私计算",
            subtitle: "MPC和HE算法保护数据和计算逻辑的隐私",
            point: [{
                text: "隐私性：原始数据不离开本地，无法被其他方获取。"
            }, {
                text: "正确性：计算结果与在明文上计算一致。"
            }, {
                text: "无信任边界：保证全流程安全，不存在任何安全边界。"
            }]
        }],
        comput: "PlatON的计算",
        computSubtitle: "高性能链下计算",
        computProcess: [{
            text: "用户发布包含了算法参数、计算任务和激励机制的智能合约",
        }, {
            text: "用户发起交易，调用合约",
        }, {
            text: "计算任务被分解成子任务，分发给多个计算节点",
        }, {
            text: "计算节点执行计算，并生成计算证明",
        }, {
            text: "计算节点提交计算结果和计算证明到链上",
        }, {
            text: "节点在链上广播计算结果和计算证明",
        }, {
            text: "共识节点验证计算证明",
        }, {
            text: "计算结果通过智能合约返回给用户"
        }, {
            text: "计算贡献值写入账本并进行清结算"
        }],
        consenTitle: "共识与计算解耦",
        consensus: [{
            title: "共识与计算解耦",
            text: "链上共识，链下计算，两部分可独立升级。"
        }, {
            title: "元智能合约",
            text: "包括IO逻辑和计算逻辑，IO逻辑读写链上数据，计算逻辑被编译成布尔电路。"
        }, {
            title: "计算任务",
            text: "可分拆为多个并行子任务，随机分发到链下的计算节点进行计算。"
        }, {
            title: "计算通道",
            text: "负责维护计算的状态，同时也是一个计算法庭，对正确的计算进行奖励，对欺诈计算进行惩罚。"
        }]
    },
    // 路线图
    roadmap: {
        title: "路线图",
        one: {
            title: "贝莱世界",
            enTitle: "Baleyworld",
            firstPoint: "实现完整的 RELOAD 覆盖网络和区块链服务，支持服务发现、元智能合约以及 VC算法。",
        },
        two: {
            title: "川陀",
            enTitle: "Trantor",
            firstPoint: "实现多方安全计算、优化的 VC 算法以及 Giskard 共识。",
        },
        three: {
            title: "端点",
            enTitle: "Terminus",
            firstPoint: "实现链下并行计算。"
        },
        four: {
            title: "盖娅",
            enTitle: "Gaea",
            firstPoint: "实现软硬件一体化。",
            secondPoint: "发布专用计算硬件。",
        }
    },
    // 创始人
    founder: {
        title: "创始人",
        people: [{
            name: "肖风",
            detail: "万向区块链实验室创始人<br />分布式资本创始人与投资人<br />万向区块链股份有限公司董事长",
            education: "南开大学 经济学博士",
            point: [{
                text: "超过25年的证券从业经历和资产管理经验"
            }, {
                text: "中国区块链技术最早的布道者和推动者，全球范围内区块链事业的思想家、社区领袖"
            }, {
                text: "在全球范围内孵化、投资了超过50家领先的区块链领域企业，以太坊社区最早期的捐助者"
            }]
        }, {
            name: "孙立林",
            detail: "矩阵元创始人兼CEO <br />区块链开源软件BCOS创始人",
            education: "武汉大学 硕士 <br />北京航空航天大学 学士",
            point: [{
                text: "曾长期服务于中国银联，是其创新支付产品、支付机构管理、生态建设的战略制定者与执行者"
            }, {
                text: "2013年进入区块链技术领域，2016年开始进军密码学及计算复杂性领域，专注于支持理论突破及工程实践领域"
            }, {
                text: "是零知识证明、安全多方计算、全同态加密、算法博弈论等计算复杂性理论在中国乃至全球的布道者及赞助者"
            }]
        }],
    },
    // 核心团队
    team: {
        title: "核心团队",
        people: [{
            name: "李升林",
            job: "首席架构师",
            education: "北京航空航天大学 硕士/学士",
            detail: "区块链开源软件BCOS联席架构师 <br />曾先后任职于卓望数码、中国电信研究院",
            point: [{
                text: "超过15年的架构设计与实施经验，是国内顶尖的分布式架构专家"
            }, {
                text: "率领团队实现了面向商用提供运营级服务的企业级区块链平台"
            }, {
                text: "于2017年联合合作方推出开源区块链架构BCOS"
            }, {
                text: "为安全多方计算独立开发了电路编译器，实现了相关算法，处于全球领先水平"
            }]
        }, {
            name: "何德彪",
            job: "首席密码科学家",
            education: "武汉大学 数学与统计学院 理学博士",
            detail: "武汉大学 国家网络安全学院 教授、博士生导师",
            point: [{
                text: "密码学在移动互联网、云计算等商用环境下的安全实现的专家"
            }, {
                text: "参与了商用密码算法标准SM2的制定"
            }, {
                text: "拥有商用密码算法算法安全实现和应用的专利8项"
            }, {
                text: "获教育部自然科学一等奖"
            }, {
                text: "中国密码学会组织委员会委员、青年工作委员会委员和安全协议专家委员会委员"
            }, {
                text: "CCF区块链专业委员会常务委员"
            }]
        }, {
            name: "肖紫闻",
            job: "首席战略官",
            education: "哥伦比亚大学 商学院 硕士 <br />英国剑桥大学 三一学院 经济学学士",
            detail: "曾任职于分布式资本，负责亚太区区块链技术投资与合作",
            point: [{
                text: "万向区块链实验室和分布式资本的早期创立者"
            }, {
                text: "中国乃至全球区块链投资领域的先行者，在全球区块链领域有深厚的积累与认识"
            }, {
                text: "曾任职于香港某著名投资银行及金融机构，熟谙全球资本市场与资产管理业务"
            }]
        }, {
            name: "曲俊杰",
            job: "首席技术官",
            education: "北京航空航天大学 学士",
            detail: "曾作为联席CEO共同创立上海金纳科技 <br />曾任职于摩根士丹利、UBS证券",
            point: [{
                text: "近30年全球一线金融机构的IT架构、实施与管理经验"
            }, {
                text: "超过20年金融系统业务架构与技术架构研发与运营经验"
            }, {
                text: "15年海外经历，管理来自40多个国家的多元文化团队"
            }, {
                text: "主导搭建了中国最先进的算法交易平台"
            }]
        },{
            name: "乔红涛",
            job: "首席生态官",
            education: "芝加哥大学，金融数学，硕士",
            detail: "前J.P.Morgan 资产管理部执行董事 <br/> 私人银行 资产组合和量化策略团队负责人、投资委员会成员",
            point: [{
                text: "在J.P.Morgan 工作逾12年，在资产管理、私人财富管理和投资等方面有丰富的经验。"
            }, {
                text: "关注创新投资产品设计，尤其是在大数据、AI和区块链等领域。"
            }]
        },{
            name: "唐虹刚",
            job: "首席创新官",
            education: "",
            detail: "前阿里巴巴投资总监、系统架构师 <br/> 百度移动系统部架构师 <br/> 摩托罗拉系统架构师 <br/>清华同方部门经理",
            point: [{
                text: "在阿里巴巴投资过商汤、寒武纪等人工智能独角兽。"
            }, {
                text: "有20项中外授权技术发明专利。"
            }]
        }, {
            name: "邹传伟",
            job: "首席经济学家",
            education: "北京大学 统计学学士、经济学硕士 <br />中国人民银行研究生部（现清华大学五道口金融学院）经济学博士<br />哈佛大学肯尼迪政府学院 公共管理硕士、哈佛梅森学者 <br />中国人民银行 副研究员（2014年授予）",
            detail: "前比特大陆首席经济学家 <br />曾供职于中央汇金公司、中国投资公司和南湖金融服务公司",
            point: [{
                text: "研究领域主要包括商业银行、固定收益证券、金融投资、风险管理、互联网金融/金融科技和金融监管; 在区块链方面的代表性研究包括《泡沫与机遇——数字加密货币和区块链金融的九个经济学问题》和《区块链能做什么、不能做什么》（中国人民银行工作论文2018年第4号）。"
            }, {
                text: "曾荣获首届“孙冶方金融创新奖”和第五届中国软科学奖（前沿探索奖）。"
            }]
        }, {
            name: "谢翔",
            job: "算法科学家",
            education: "中国科学院软件研究所 可信计算与保障实验室 博士 <br />中国科学院软件研究所 信息安全国家重点实验室 硕士",
            detail: "曾任职于华为上海研究所无线安全解决方案设计部",
            point: [{
                text: "格理论、同态加密、零知识证明、安全多方计算等密码学算法和协议设计的专家"
            }, {
                text: "发表论文10余篇，曾在密码学的顶尖学术会议Eurocrypt上发表论文"
            }]
        }]
    },
    advisorTitle: "顾问",
    advisor: [{
        name: "Jonathan Shelon",
        point: [{
            text: "Kraneshares 首席运营官"
        }, {
            text: "Fidelity Investments 基金经理"
        }, {
            text: "J.P.Morgan Specialized Strategies Team 首席投资官"
        }]
    }, {
        name: "David Johnston",
        point: [{
            text: "Yeoman's Capital 董事总经理"
        }, {
            text: "Factom 创始人"
        }]
    }],
    partner: {
        title: "合作伙伴",
        list: [{
            name: "aitos",
            text: "摩联科技(aitos.io)是一家专注于智能蜂窝物联网平台上的可信身份认证和数据隐私保护计算的技术初创公司。",
            link: "http://www.aitos.io/"
        }, {
            name: "bytom",
            text: "让资产从原子世界迁至比特世界。",
            link: "https://bytom.io"
        }, {
            name: "hashkey",
            text: "HashKey Group 是一家专注于区块链和数字资产领域的金融科技公司。HashKey由金融行业和科技领域的资深人士创办，以前瞻性的战略视野，专业的投资理念和深度布局，致力于链接全球生态，推动创新创业，促进行业发展。",
            link: "https://www.hashkey.com/#/"
        }, {
            name: "hashquark",
            text: "HashQuark是专注于POS、DPOS以及其他共识机制公链的新一代区块链矿池。",
            link: "https://www.hashquark.io/#/"
        }, {
            name: "irisnetwork",
            text: "支持公链、联盟链以及传统商业系统的无缝集成，使得数据和复杂计算能够跨异构网络互联互通的跨链服务公链。",
            link: "https://www.irisnetwork.cn/"
        }, {
            name: "keystore",
            text: "企业级加密资产服务商，致力于提供安全、专业、便捷的加密资产管理服务。",
            link: "https://www.keystore.com/#/"
        }, {
            name: "pnpchina",
            text: "全球最大科技加速器。",
            link: "http://pnpchina.com/"
        }, {
            name: "realid",
            text: "基于区块链、人工智能和智能图像等技术，Real ID的eKYC解决方案为各行业提供快速、简单和安全的数字身份认证服务。",
            link: "https://www.realid.global/"
        }, {
            name: "blockchainlabs",
            text: "万向区块链实验室是中国国内首家专注于区块链技术的非盈利性前沿研究机构，由中国万向控股有限公司于2015 年9月出资成立。",
            link: "https://blockchainlabs.org"
        }, {
            name: "wxblockchain",
            text: "2015 年开始, 中国万向控股有限公司在区块链技术领域开始了战略性布局。逐步打造了集万向区块链实验室、万向区块链商业创新咨询、万向新链加速器、万云等业务于一体的区块链生态平台。",
            link: "http://www.wxblockchain.com"
        }, {
            name: "youbicapital",
            text: "优币资本为注册在开曼群岛的私募基金。由资深华尔街专业投资人士，全球排名前列的数字货币矿场负责人，以及资深数字货币投资专家联合成立，专注于海外区块链项目投资。优币资本致力于区块链生态系统的长期价值投资。",
            link: "http://www.youbicapital.com/"
        }]
    },
    // 应用案例
    featuredCases: {
        title: "应用案例",
    },
    caseDetails: {
        title: "应用案例",
        subtitleOne: "链接多源数据与异构网络，",
        subtitleTwo: "促进数据交换和算力交易",
        overview: [{
            title: "数据协同计算",
            content: "可根据不同的商业需求建立满足数据安全和隐私保护的全新交互模式，形成安全的数据交换和协同计算平台。"
        }, {
            title: "去中心化应用",
            content: "可直接开发各类去中心化应用和商业系统，如区块链、分布式人工智能、科学计算等。"
        }, {
            title: "实时清结算",
            content: "内置支付清结算工具和计费模块，赋能用户自定义应用链的商业形态和计费、结算模式。"
        }],
        solutitle: "应用解决方案",
        solutions: [{
            title: "计算发起方",
            content: "有数据请求或计算需求的机构。"
        }, {
            title: "算法提供方",
            content: "拥有数据模型的数据服务提供商。"
        }, {
            title: "数据提供方",
            content: "拥有数据的个人或机构。"
        }, {
            title: "算力提供方",
            content: "拥有算力的个人或机构。"
        }, {
            title: "计算协调方",
            content: "业务运营者，通常也是数据提供方。"
        }],
        advTitle: "优势",
        advantages: [{
            title: "可扩展性",
            content: "通过共识与计算解耦提升可扩展性。"
        }, {
            title: "隐私性",
            content: "通过密码学实现真正的隐私计算，实现对算法和数据的隐私保护。"
        }, {
            title: "可验证性",
            content: "采用可验证计算算法保证链下计算的可靠性。"
        }
        ],
        caseTitle: "应用案例",
        benefits: "优势",
        opportunities: "应用场景",
        cases: [{
            title: "支付清算",
            content: "作为超级清算方为各类服务和应用的价值交换提供运营级支持，任何个人、企业均可建立自己的支付结算体系，通过密码学的集成保护资金安全和信息安全。",
            benefits: [{
                title: "消费者和商户",
                firstPoint: "实现个人、企业间的资金结算和账务清算。",
                secondPoint: "使用密码学算法保证交易主体间的隐私保护和信息安全。"
            }, {
                title: "开发者和企业",
                firstPoint: "可自主建立商业生态的支付结算体系，透明地定义清算和奖励规则。",
                secondPoint: "利用PlatON提供的支付能力和API快速建立Dapp应用内收费模型。"
            }, {
                title: "支付服务机构",
                firstPoint: "快速接入开放式的支付清算网络，无需中心节点背书或转接。",
                secondPoint: "扩展更多用户，按用户需求定义清结算规则。"
            }],
            opportunities: [{
                title: "点对点支付",
                firstPoint: "不受地域、时间、交易实体限制，直接通过客户端完成支付结算。",
                secondPoint: "支持不同体系结算工具间的转换和定向支付。"
            }, {
                title: "分布式交易所",
                firstPoint: "解耦Energon交割和撮合，同时达到中心化的效率和去中心化的安全性。",
                secondPoint: "为不同资产建立结算通道，支持跨链资产转移支付。"
            }]
        }, {
            title: "AI和物联网",
            content: "建立垂直领域的大数据和AI商业联盟，利用隐私计算能力通过点对点连接实现联合模型，通过评估和奖励机制促进模型迭代和算法优化。",
            benefits: [{
                title: "数据提供方",
                firstPoint: "在隐私保护的前提下获得数据带来的收益。",
                secondPoint: "通过PRE进行安全可控的数据授权，保障数据隐私和主权。"
            }, {
                title: "数据使用方",
                firstPoint: "获取更全面、有效、安全的数据分析结果。",
                secondPoint: "低成本地获得丰富的数据服务。"
            }, {
                title: "算法提供方",
                firstPoint: "利用多方的数据进行模型训练，实现模型增长。",
                secondPoint: "在保护算法的前提下，通过提供算法获取收益。"
            }, {
                title: "算力提供方",
                firstPoint: "利用闲置算力分享计算收益。",
                secondPoint: "无需了解算法或数据即可参与计算。"
            }],
            opportunities: [{
                title: "数据集市",
                firstPoint: "整合多源数据、算法和算力，实现数据的合理定价和流动。",
                secondPoint: "保证数据源的安全性、计算的有效性，并提供收益实时清结算。"
            }, {
                title: "联邦学习",
                firstPoint: "安全地进行跨机构间的数据交换和特征处理，高效地进行模型训练和参数交换。",
                secondPoint: "机构间联盟可以联合建立模型，增强各自模型能力。"
            }, {
                title: "全球科学计算",
                firstPoint: "激励并整合全球闲散计算资源帮助科研机构进行更低成本的科学计算。",
                secondPoint: "使用并行计算和专用计算硬件提高计算性能。"
            }]
        }, {
            title: "医疗健康",
            content: "促进医疗行业数据、病理数据、用户病历数据、疾病预测分析数据等行业数据之间有效授权、合理使用和协同计算。",
            benefits: [{
                title: "个人",
                firstPoint: "自定义数据授权范围并获得收益。",
                secondPoint: "通过数据授权分析获得更好的医疗服务。"
            }, {
                title: "医院/体检机构",
                firstPoint: "基于用户授权后的数据安全使用。",
                secondPoint: "通过数据资产化最大化医疗数据价值。"
            }, {
                title: "数据服务机构",
                firstPoint: "获得有效的一手数据源输入，不侵犯数据所有方权利。",
                secondPoint: "快速完成分析算法训练，同时保护算法逻辑。"
            }, {
                title: "数据使用机构",
                firstPoint: "有效扩大行业数据分析范围，完善产品设计和服务。",
                secondPoint: "从数据服务机构处获得可信计算结果。"
            }],
            opportunities: [{
                title: "个人健康账户",
                firstPoint: "形成个人全生命周期医疗健康信息的记录、追踪与整合分析。",
                secondPoint: "获得行业数据分析结果，得到丰富的医疗咨询与服务。"
            }, {
                title: "公共健康分析",
                firstPoint: "方便有效地获得全球或行业垂直数据，推动医药研发。",
                secondPoint: "通过数据协同分析结果，及时有效地进行疾病监控和防治。"
            }, {
                title: "保险",
                firstPoint: "利用数据完善精算模型。",
                secondPoint: "通过行业协同降低用户欺诈和重复理赔风险。"
            }]
        }, {
            title: "征信体系",
            content: "改变传统的大数据收集、清洗、分析模式下的征信分析和评价机制，让个人重新掌控数据所有权，建立社会信用体系，降低社会征信成本。",
            benefits: [{
                title: "个人",
                firstPoint: "自主建立并管理信用标签和个人隐私数据，进行授权分享。",
                secondPoint: "获得多维度的信用评分和信用评价数据，享受更好的信用服务。"
            }, {
                title: "企业",
                firstPoint: "安全、有效的获得客户信用数据，缩减尽调成本。",
                secondPoint: "确认用户授权，合理使用和管理个人隐私数据。"
            }, {
                title: "信用服务机构",
                firstPoint: "减少个人隐私数据收集风险，安全科学地进行信用建模。",
                secondPoint: "通过更大范围的数据学习，在保护算法逻辑前提下快速完成算法训练。"
            }],
            opportunities: [{
                title: "数据钱包",
                firstPoint: "用户可自主管理所有个人核心数据。",
                secondPoint: "用户自主设置隐私保护和数据交易方式，方便地进行授权和数据交易管理。"
            }, {
                title: "信用服务和金融应用",
                firstPoint: "可获取、匹配由用户授权的不同行业数据，优化数据模型和信用数据服务。",
                secondPoint: "为金融机构提供不同行业间的用户交叉营销渠道，推动金融应用创新。"
            }]
        }, {
            title: "广告",
            content: "各类广告商和信息服务商可被授权获取由用户自主建立的标签，从而获得更精准的用户画像，实现精准营销。",
            benefits: [{
                title: "个人",
                firstPoint: "建立数字身份，形成不同纬度的数字标签。",
                secondPoint: "通过信息授权分享广告营销收益，接收符合兴趣和需求的精准推送。"
            }, {
                title: "广告商",
                firstPoint: "形成用户标签在不同数据源的匹配分析渠道，减少无效数据。",
                secondPoint: "高效获取最新数据信息，提高推送转化率。"
            }, {
                title: "互联网服务提供方",
                firstPoint: "建立平台数字身份体系，实现数据源和画像引擎的安全隔离和协同计算。",
                secondPoint: "提高广告位填充率和流量变现效率。"
            }],
            opportunities: [{
                title: "商品优选",
                firstPoint: "利用海量用户行为标签计算用户与商品相关性，快速筛选营销客群。",
                secondPoint: "用户可按需订阅商品目录或广告，获得定制、精准的推送。"
            }, {
                title: "画像引擎",
                firstPoint: "实现跨行业跨机构的多重身份标识关联，细化标签规则和筛选匹配方式。",
                secondPoint: "基于全面的标签规则和海量用户索引，为行业提供提强大的画像引擎服务。"
            }, {
                title: "广告交易平台",
                firstPoint: "实现流量端与多个预算方的对接。",
                secondPoint: "高效稳定地进行流量分发与竞价。"
            }]
        }, {
            title: "密钥管理",
            content: "针对区块链私钥不易保存、无法恢复等痛点，利用安全多方计算和代理重加密技术提供密钥托管、恢复等解决方案。",
            benefits: [{
                title: "用户",
                firstPoint: "更安全、灵活地管理自己的私钥。",
                secondPoint: "规避私钥泄露、遗忘造成的损失。"
            }, {
                title: "密钥管理服务机构",
                firstPoint: "提供安全的密钥管理服务。",
                secondPoint: "无法获取用户的碎片或全局密钥。"
            }],
            opportunities: [{
                title: "密钥托管",
                firstPoint: "托管方与用户分别拥有私钥的一部分，两方同时在线才能使用该账户。",
                secondPoint: "使用过程不暴露任何一方的碎片信息。"
            }, {
                title: "多人密钥传签",
                firstPoint: "参与方无需同时在线，可以进行轮流传签。",
                secondPoint: "密钥管理方无法获取任何一方的碎片和全局密钥。"
            }, {
                title: "密钥恢复",
                firstPoint: "密钥管理方和个人各持部分密钥并利用MPC共同加密保存私钥。",
                secondPoint: "用户将区块链私钥遗失后可通过MPC算法恢复。"
            }]
        }]
    },
    // 新闻
    news: {
        title: "动态",
        news: "新闻",
        events: "活动",
        insights: "观点",
        labels: "标签",
        more: "更多新闻与资讯",
        seemore: "查看更多",
        learnMore: '查看更多',
        pressCenter: "媒体报道",
        related: "相关阅读",
        search: "搜索",
        // noNews:"暂无相关新闻",
        // noEvents:"暂无相关活动",
        // noInsights:"暂无相关动态",
        // noMedia:"暂无相关媒体报道",
        noNews: "",
        noEvents: "",
        noInsights: "",
        noMedia: "",
        tagged: "标签："
    },
    // FAQ
    faq: {
        title: "常见问题",
    },
    // 底部
    footer: {
        about: {
            title: "概览",
            one: "PlatON是什么",
            two: "PlatON特性",
            three: "路线图",
            four: "团队"
        },
        technology: {
            title: "技术",
            one: "定位",
            two: "Trustless计算",
            three: "计算流程",
            four: "主链"
        },
        cases: {
            title: "案例",
            one: "解决方案",
            two: "应用案例",
        },
        resources: {
            title: "资源",
            one: "白皮书",
            two: "新闻",
            three: "FAQ",
        },
        contactUs: {
            title: "联系我们",
            email: "support@platon.network"
        },
        copyRight: {
            content: "Copyright &copy; 2018 Platon International Limited All rights reserved."
        }
    },
    //加入社区
    joinUs: {
        title: "社区",
        placeholder: "输入邮箱以订阅PlatON最新资讯",
        subscribe: "订阅",
        contactUs: "联系我们",
        email: "support@platon.network"
    },
    //弹窗
    model: {
        title: "订阅成功",
        send: "我们会将最新资讯发送到您的",
        fillInfo: "为了获取更精准的推送内容，欢迎您完善以下信息：",
        name: "姓名",
        firstName: "First Name",
        lastName: "Last Name",
        company: "公司名称",
        identity: "您的身份",
        developer: "开发者",
        investor: "投资人",
        mediaInfo: "媒体",
        other: "其他",
        returnBtn: "返回",
        submitBtn: "提交"
    },
    //提示
    tips: {
        inputEmail: "请填写您的邮箱地址",
        invalidEmail: "您填写的邮箱格式不正确",
        repeat: "已订阅，请勿重复订阅",
        infoIsnull: "订阅信息不能为空",
        SystemError: "系统异常",
        inputInfo: "请填写您的信息",
        success: "提交成功"
    },
    seo: {
        index: {
            title: "PlatON",
            keywords: "PlatON；隐私计算；可信计算；新一代计算架构；trustless计算网络；区块链；公链；白皮书；MPC；多方安全计算；肖风；孙立林；",
            description: "PlatON是数据的安全“链”接者，是Trustless Computing时代可扩展、高性能、强隐私保护的“计算市场”。"
        },
        technology: {
            title: "PlatON 技术",
            keywords: "PlatON架构；中心化系统；trustless计算；隐私计算；元智能合约；计算通道；",
            description: "PlatON技术介绍和trustless计算介绍"
        },
        case: {
            title: "PlatON 案例",
            keywords: "PlatON应用；PlatON案例；区块链；异构网络；数据交换；算力交易；数据协同计算；支付清算；大数据；AI；物联网；医疗健康；征信体系；广告；密钥管理； 分布式交易所；数据集市；联合征信；",
            description: "基于PlatON的应用和解决方案介绍"
        },
        news: {
            title: "PlatON 动态",
            keywords: "PlatON新闻、PlatON活动、PlatON动态",
            description: "PlatON新闻动态"
        }
    }
}