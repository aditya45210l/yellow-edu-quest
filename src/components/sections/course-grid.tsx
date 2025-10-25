import Image from "next/image";
import Link from "next/link";
import { Code } from "lucide-react";

interface Course {
  id: number;
  title: string;
  description: string;
  logoUrl: string;
  link: string;
  tech: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Ethereum Developer",
    description: "Ethereum is an open-source, decentralized blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (DApps).",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/b6ded528-8d9a-45f0-b844-b3ab831e984b-7.webp",
    link: "/course/ethereum-developer",
    tech: "SOLIDITY",
  },
  {
    id: 2,
    title: "Injective Developer",
    description: "Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications. Injective uniquely provides developers with powerful plug-and-play financial infrastructure primitives...",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/d606c3252a6f5ec76452d0fec917aaa2a38c3a6f70f3988fea-2.webp",
    link: "/course/injective-developer",
    tech: "RUST",
  },
  {
    id: 3,
    title: "Greenfield Developer",
    description: "Greenfield is a decentralized storage solution introduced by BNB Chain, designed to enhance data security, user autonomy, and storage efficiency.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/nvq5PWecJwRozsX9X8sPN-3.webp",
    link: "/course/greenfield-developer",
    tech: "SOLIDITY",
  },
  {
    id: 4,
    title: "Arbitrum Developer",
    description: "Arbitrum is the leading layer-2 (L2) that empowers users like you to explore and build in the largest layer-1 (L1) ecosystem, Ethereum.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/7b0e5f9c-21d8-4284-bf66-0de801192d67-4.webp",
    link: "/course/arbitrum-developer",
    tech: "RUST",
  },
  {
    id: 5,
    title: "Solana Developer",
    description: "Built with Rust, Solana is renowned for its scalability and cost-effectiveness. In this...",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/03d780a2-d2a3-48ae-ab91-673a3530c5e9-5.webp",
    link: "/course/solana-developer",
    tech: "RUST",
  },
  {
    id: 6,
    title: "opBNB Developer",
    description: "opBNB is a Layer 2 solution on BNB Smart Chain (BSC) powered by Optimistic Rollup technology...",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/MtZlG0eZ-NOLxGUZfFpqz-6.webp",
    link: "/course/opbnb-developer",
    tech: "SOLIDITY",
  },
  {
    id: 7,
    title: "Mantle Developer",
    description: "Mantle Network, an Ethereum layer-2 (L2) solution, is one of the fastest-growing Ethereum infrastructures.",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/0f394b00-ff5f-4eae-9985-1300c78c4264-8.webp",
    link: "/course/mantle-developer",
    tech: "SOLIDITY",
  },
  {
    id: 8,
    title: "Sui Developer",
    description: "Sui is a high-performance Layer-1 blockchain platform that employs innovative parallel execution and object ownership models...",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/1zhk4W0i_EryqG0IoDbr4-9.webp",
    link: "/course/sui-developer",
    tech: "MOVE",
  },
  {
    id: 9,
    title: "Gaia Developer",
    description: "Gaia is a decentralized open-source platform that allows users to create,and deploy AI agents. Each Gaia node includes language models...",
    logoUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/C-Ntonls2VVKsJUSSOvmw-10.webp",
    link: "/course/gaia-developer",
    tech: "SOLIDITY",
  },
];

const CourseGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((course) => (
        <Link
          href={course.link}
          key={course.id}
          className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:bg-accent"
        >
          <div className="relative size-12 p-2">
            <Image
              src={course.logoUrl}
              alt={course.title}
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <h3 className="mt-4 font-bold text-lg tracking-tight text-foreground line-clamp-1">
            {course.title}
          </h3>
          <p className="mt-2 flex-grow text-sm text-muted-foreground hidden sm:block sm:line-clamp-2">
            {course.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-muted-foreground">
            <Code className="size-4" />
            <span className="text-sm uppercase">{course.tech}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseGrid;