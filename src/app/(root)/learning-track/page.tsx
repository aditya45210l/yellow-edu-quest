import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Code, Gift, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Learning Track - HackQuest',
  description: 'Deep dive into leading ecosystems and become a certified developer',
};

const courses = [
  {
    slug: 'Injective',
    title: 'Injective Developer',
    description: 'Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications. Injective uniquely provides developers with powerful plug-and-play financial infrastructure primitives, such as a high performance on-chain decentralized exchange infrastruc...',
    logoUrl: 'https://storage.googleapis.com/hackquest-prod-asia-northeast1-private-storage/ecosystem/d606c3252a6f5ec76452d0fec917aaa2a38c3a6f70f3988feacd7e8cb5799ada.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=hackquest-api-sa-prod-run%40hquest-467309.iam.gserviceaccount.com%2F20251024%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251024T031234Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=0419986ce1fad5b671f7aab76711d1c87c0457c212546d118d44541e457cdac5ff6c026117e17fb28856502519979294ce9088d58b8177eb859ba8eb905ee159b74f42f8b0e453e7ba4460baef0dc3a987a489928c86200d0aebf5118e8fd983c38316bfd6b8fed783a648b4042155193b093086c6ea8660caec6635be44bf6075ec7894d83c76d3c204d9b92f71167d39b76eb3d9c2ab690bcb1a25394af278305d07991aabd2a69005eef425498eba732c7629d9f4716db873343eb346ff605ffb7213adee454481187979fc389f1e159deb851073559d120a9b5007ddfa989218ab3908f80d6fec3400f54ad55479daed8b57215032532f8d2198b7bef1b9',
    language: 'RUST'
  },
  {
    slug: 'Greenfield',
    title: 'Greenfield Developer',
    description: 'Greenfield is a decentralized storage solution introduced by BNB Chain, designed to enhance data security, user autonomy, and storage efficiency. Leveraging blockchain technology, it enables users to manage, authorize, and trade data access rights seamlessly. With deep integration into BNB Smart Chain, Greenfield serves as a key infrastructure for DeFi and dApp ecosystems, playing a crucial role in advancing the Web3 landscape.',
    logoUrl: 'https://storage.googleapis.com/hackquest-prod-asia-northeast1-private-storage/ecosystem/171e7446-5ed5-8178-9023-cdf539dd0056/nvq5PWecJwRozsX9X8sPN.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=hackquest-api-sa-prod-run%40hquest-467309.iam.gserviceaccount.com%2F20251024%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20251024T031234Z&X-Goog-Expires=3600&X-Goog-SignedHeaders=host&X-Goog-Signature=9f60804599a5102087c26d73c811945d05608773b26804778c0eb49298371cac4b3752eb32872d2e2c337d6803d396cfc7671d4387e1a8fe6226485704d8ffd63cb64a2945c5016efaa7c81ef3b86be5710a1bd0ecd31c62139779bee0a09c50aac4ce53929715ce88ad8efe34ce26af64ed62f5526c592ae5878eca60fb05778b4ae6923b4631d9b906c4dd7717b554479b3eb96a46de1671b802acb9855776852dba7c2d53345ff298f4eb980636831be85bcffd30a081b4ca783a99341229dae0d67bc31fe496a0551579738010630b352f8d02f14d93b5415a6089e5230500f7f25715c73986e9c2f29536f383a7004f59633d325bebb655bcd53da99ffe',
    language: 'SOLIDITY'
  },
  { slug: 'Arbitrum', title: 'Arbitrum Developer', description: 'Arbitrum is the leading layer-2 (L2) that empowers users like you to explore and build in the largest layer-1 (L1) ecosystem, Ethereum...', logoUrl: null, language: 'RUST' },
  { slug: 'Solana', title: 'Solana Developer', description: 'Built with Rust, Solana is renowned for its scalability and cost-effectiveness. In this ecosystem, we will learn the basic concept of Solana...', logoUrl: null, language: 'RUST' },
  { slug: 'opBNB', title: 'opBNB Developer', description: 'opBNB is a Layer 2 solution on BNB Smart Chain (BSC) powered by Optimistic Rollup technology. It aims to address the challenges...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'Ethereum', title: 'Ethereum Developer', description: 'Ethereum is an open-source, decentralized blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (DApps)...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'Mantle', title: 'Mantle Developer', description: 'Mantle Network, an Ethereum layer-2 (L2) solution, is one of the fastest-growing Ethereum infrastructures...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'Sui', title: 'Sui Developer', description: 'Sui is a high-performance Layer-1 blockchain platform that employs innovative parallel execution and object ownership models...', logoUrl: null, language: 'MOVE' },
  { slug: 'Gaia', title: 'Gaia Developer', description: 'Gaia is a decentralized open-source platform that allows users to create,and deploy AI agents...', logoUrl: null, language: null },
  { slug: 'Monad', title: 'Monad Developer', description: 'Monad is a high-performance, Ethereum-compatible Layer 1 blockchain designed to maximize throughput and minimize transaction costs...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'Telos', title: 'Telos Developer', description: 'Telos is a high-performance, scalable Layer-1 blockchain using Delegated Proof of Stake (DPoS) consensus...', logoUrl: null, language: 'SOLIDITY' },
  { slug: '0G', title: '0G Developer', description: '0G (Zero Gravity) is a decentralized Layer 1 blockchain purpose-built for AI, offering modular and infinitely scalable data availability...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'Linea', title: 'Linea Developer', description: 'Linea Network, an Ethereum layer-2 (L2) solution, is one of the most promising advancements in Ethereum\'s scalability landscape...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'Vara', title: 'Vara Developer', description: 'Vara Network is an independent layer1 decentralized network built and running on Gear Protocol...', logoUrl: null, language: 'RUST' },
  { slug: 'OCID', title: 'OCID Concepts', description: 'OCID (Open Campus ID) is a decentralized identity solution at the heart of the Open Campus ecosystem...', logoUrl: null, language: null },
  { slug: 'Eclipse', title: 'Eclipse Developer', description: 'Eclipse is an innovative Ethereum Layer 2 that focuses on enhancing transaction speed and scalability while maintaining Ethereum\'s security...', logoUrl: null, language: 'RUST' },
  { slug: 'Wormhole', title: 'Wormhole Developer', description: 'Wormhole is a multi-chain communication protocol designed to facilitate asset transfers and data exchange across multiple blockchain networks...', logoUrl: null, language: null },
  { slug: 'XION', title: 'XION Developer', description: 'XION is the only layer-1 blockchain specifically built for consumer adoption, with the mission of making Web3 technology more accessible...', logoUrl: null, language: 'RUST' },
  { slug: 'Sonic', title: 'Sonic Developer', description: 'Sonic is a high-performance network evolved from Fantom, aiming to address the blockchain “trilemma” of decentralization, security, and scalability...', logoUrl: null, language: 'SOLIDITY' },
  { slug: 'EDU-Chain', title: 'EDU Chain Developer', description: 'Open Campus is an innovative decentralized education ecosystem that leverages blockchain technology to connect learners, educators, content creators...', logoUrl: null, language: 'SOLIDITY' },
];

export default function LearningTrackPage() {
  return (
    <main className="relative w-full flex-1 overflow-y-auto scroll-smooth pt-6 pb-8 sm:pt-8">
      <div className="-mt-6 sm:-mt-8 relative flex flex-col items-center justify-between gap-y-4 border-b border-border bg-[linear-gradient(270deg,#FFF_0%,#FFF099_100%)] py-6 px-6 sm:flex-row sm:py-4 sm:pr-20">
        <button aria-label="Close" className="sm:-translate-y-1/2 absolute top-4 right-4 flex size-6 items-center justify-center sm:top-1/2 sm:right-6">
          <X className="size-5 text-muted-foreground" />
        </button>
        <div className="flex items-center gap-x-6">
          <Image alt="Credit Card" width="106" height="76" className="hidden sm:block" src="/images/rewards/credit_card.png" />
          <div className="flex flex-col">
            <div className="flex flex-col-reverse gap-x-4 gap-y-2 sm:flex-row sm:items-center">
              <h2 className="font-bold text-lg text-foreground">Welcome back! Claim your UR reward</h2>
              <div className="flex items-center gap-x-1 self-start rounded-md bg-[#FFE5B4] px-2.5 py-0.5 sm:self-center">
                <Image alt="Gift" width="12" height="12" src="/images/rewards/gift.svg" />
                <span className="text-xs font-semibold uppercase text-secondary-foreground">Limited-time offer</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Open UR Card · Supports Apple Pay / Google Pay / WeChat Pay / Alipay
              <br className="hidden sm:block" />
              Register in 3 minutes, get $5 instantly
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-y-4 sm:w-auto">
          <button className="inline-flex active:scale-95 items-center justify-center whitespace-nowrap font-bold transition-colors duration-300 outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:text-neutral-500 px-4 text-base rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted h-10 w-full sm:w-52">
            Sign in to claim
          </button>
          <div className="flex items-center gap-x-5">
            <Image alt="Apple Pay" width="36" height="16" src="/images/rewards/apple_pay.svg" />
            <Image alt="Google Pay" width="36" height="16" src="/images/rewards/google_pay.svg" />
            <Image alt="Wechat" width="18" height="16" src="/images/rewards/wechat.svg" />
            <Image alt="Alipay" width="16" height="16" src="/images/rewards/alipay.svg" />
          </div>
        </div>
      </div>

      <div className="container max-sm:px-6">
        <div className="flex w-full justify-between gap-8 max-sm:pb-6 sm:py-8">
          <div className="flex flex-1 flex-shrink-0 flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Certified Learning Track</h1>
            <p className="text-base text-muted-foreground">Deep dive into leading ecosystems and become a certified developer</p>
          </div>
          <div className="relative hidden w-[352px] h-[196px] sm:block">
            {/* Placeholder for illustration */}
          </div>
        </div>

        <div className="grid grid-cols-2 items-center gap-4 sm:flex">
          <button className="group text-sm font-semibold inline-flex h-9 items-center justify-between gap-2 rounded-lg bg-muted px-3 py-2 outline-none transition-colors duration-200 hover:bg-accent sm:max-w-[15.625rem]">
            <span className="truncate whitespace-nowrap">Language</span>
            <ChevronDown className="size-4 shrink-0 transition-transform" />
          </button>
        </div>

        <hr className="bg-border h-px w-full mt-4 mb-6 sm:mb-8" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Link href={`/learning-track/${course.slug}`} key={course.slug} className="group">
              <div className="rounded-2xl border border-border bg-card transition-colors duration-300 group-hover:bg-accent h-full">
                <div className="p-6">
                  <div className="relative size-12 p-2">
                    {course.logoUrl ? (
                      <Image 
                        alt={course.title} 
                        src={course.logoUrl} 
                        fill 
                        sizes="48px"
                        className="object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                        <span className="text-lg font-bold">{course.title.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-bold text-lg tracking-tight mt-4 line-clamp-1 text-foreground">{course.title}</h3>
                  <p className="text-sm mt-2 hidden text-muted-foreground sm:line-clamp-2">{course.description}</p>
                  {course.language && (
                    <div className="mt-4 flex items-center gap-5 text-neutral-600">
                      <div className="flex items-center gap-2">
                        <Code className="size-4" />
                        <span className="text-sm">{course.language}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}