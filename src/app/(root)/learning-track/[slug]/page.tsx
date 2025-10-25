import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data Structures ---
interface Module {
  title: string;
  description: string;
}

interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  modules: Module[];
}

// --- Utility to slugify titles ---
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

// --- Mock Data ---
// In a real application, this would come from a CMS or database.
const learningTracksRaw: { title: string; longDescription: string }[] = [
    { 
        title: 'Injective Developer', 
        longDescription: `Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications. Injective uniquely provides developers with powerful plug-and-play financial infrastructure primitives, such as a high performance on-chain decentralized exchange infrastructure, decentralized bridges, oracles, and a composable smart contract layer with CosmWasm.\n\nInjective is incubated by Binance and is backed by prominent investors such as Jump Crypto, Pantera and Mark Cuban.`
    },
    { 
        title: 'Greenfield Developer', 
        longDescription: `Greenfield is a decentralized storage solution introduced by BNB Chain, designed to enhance data security, user autonomy, and storage efficiency. Leveraging blockchain technology, it enables users to manage, authorize, and trade data access rights seamlessly. With deep integration into BNB Smart Chain, Greenfield serves as a key infrastructure for DeFi and dApp ecosystems, playing a crucial role in advancing the Web3 landscape.`
    },
    { 
        title: 'Arbitrum Developer', 
        longDescription: `Arbitrum is the leading layer-2 (L2) that empowers users like you to explore and build in the largest layer-1 (L1) ecosystem, Ethereum. In this learning track, we will introduce the ecosystem and architecture of Arbitrum, learn Rust syntax and the Stylus library, and together build some classic projects such as a Bulls and Cows game, a token, an NFT, and DeFi smart vaults.`
    },
     { 
        title: 'Solana Developer', 
        longDescription: `Built with Rust, Solana is renowned for its scalability and cost-effectiveness. In this ecosystem, we will learn the basic concept of Solana, smart contract development with Rust, and the Anchor framework. We will also learn to develop NFT contracts and build a game on Solana.`
    },
      { 
        title: 'opBNB Developer', 
        longDescription: `opBNB is a Layer 2 solution on BNB Smart Chain (BSC) powered by Optimistic Rollup technology. It aims to address the challenges of high transaction costs and network congestion in blockchain field. By handling most transactions on the Layer 2 network and batching them for final verification on the main chain BSC, opBNB delivers enhanced performance, reduced transaction fees, and outstanding scalability. Fully compatible with the Ethereum Virtual Machine (EVM), it allows developers to seamlessly migrate existing decentralized applications (DApps).`
    }
];

const learningTracks: Course[] = learningTracksRaw.map(track => ({
    slug: slugify(track.title),
    title: track.title,
    description: track.longDescription.split('. ')[0] + '.',
    longDescription: track.longDescription,
    modules: [
        { title: `Introduction to ${track.title.replace(' Developer', '')}`, description: 'Learn the basics of the ecosystem, its architecture, and why it is a game-changer in the Web3 space.' },
        { title: 'Setting up Your Development Environment', description: 'A step-by-step guide to installing all the necessary tools and configuring your environment for development.' },
        { title: 'Core Concepts & Smart Contracts', description: 'Dive into the fundamentals of smart contract development specific to this blockchain.' },
        { title: 'Building Your First dApp', description: 'Get hands-on experience by building, testing, and deploying a simple decentralized application from scratch.' },
        { title: 'Advanced Project', description: 'Apply your skills to build a more complex, real-world project like a DeFi protocol or an NFT marketplace.' }
    ]
}));

async function getCourseBySlug(slug: string): Promise<Course | undefined> {
  return learningTracks.find(course => course.slug === slug);
}

// --- Dynamic Metadata Generation ---
export async function generateMetadata({ params }: { params: { slug:string } }): Promise<Metadata> {
  const course = await getCourseBySlug(params.slug);
  if (!course) {
    return { title: 'Course Not Found | HackQuest' };
  }
  return {
    title: `${course.title} | HackQuest`,
    description: course.description,
  };
}

// --- Static Site Generation Params ---
export async function generateStaticParams() {
  return learningTracks.map(course => ({
    slug: course.slug,
  }));
}

// --- Page-Specific Components ---
const CourseHero = ({ course }: { course: Course }) => (
  <section className="flex w-full flex-col lg:flex-row justify-between gap-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
    <div className="flex flex-1 flex-shrink-0 flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{course.title}</h1>
      <p className="text-base text-muted-foreground whitespace-pre-line">{course.longDescription}</p>
      <div className="mt-4">
        <button className="inline-flex group active:scale-95 items-center gap-2 relative justify-center whitespace-nowrap font-bold transition-all duration-300 outline-none focus-visible:outline-none disabled:cursor-not-allowed px-6 py-3 text-base bg-primary text-primary-foreground enabled:hover:bg-primary/90 h-11 rounded-md">
          Start Learning
        </button>
      </div>
    </div>
    <div className="relative hidden xl:flex w-48 h-48 bg-muted rounded-lg flex-shrink-0 items-center justify-center">
      <div className="w-full h-full bg-accent rounded-lg flex items-center justify-center text-muted-foreground text-sm font-semibold">
        Ecosystem Logo
      </div>
    </div>
  </section>
);

const CourseSyllabus = ({ modules }: { modules: Module[] }) => (
  <section className="mt-12">
    <h2 className="text-2xl font-bold text-foreground mb-6">Syllabus</h2>
    <div className="space-y-4">
      {modules.map((module, index) => (
        <div key={index} className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-sm">
          <h3 className="font-bold text-lg text-foreground">Module {index + 1}: {module.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{module.description}</p>
        </div>
      ))}
    </div>
  </section>
);


// --- Main Page Component ---
export default async function LearningTrackPage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="container max-sm:px-6 py-6 sm:py-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link href="/learning-track" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4" />
          Back to Courses
        </Link>
        <nav aria-label="Breadcrumb" className="flex items-center text-sm">
          <Link href="/learning-track" className="text-muted-foreground hover:text-primary transition-colors">
            Explore Course
          </Link>
          <ChevronRight className="h-4 w-4 mx-1.5 text-muted-foreground" />
          <span className="font-semibold text-foreground">{course.title}</span>
        </nav>
      </div>
      
      <CourseHero course={course} />
      <CourseSyllabus modules={course.modules} />
    </main>
  );
}