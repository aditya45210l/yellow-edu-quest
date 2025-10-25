export interface Unit {
  id: string;
  number: number;
  title: string;
  duration: string;
  isLocked: boolean;
  isCompleted: boolean;
  content: string;
  quiz?: {
    questions: Array<{
      question: string;
      options: string[];
      correctAnswer: number;
    }>;
  };
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  description: string;
  units: Unit[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  logo: string;
  techStack: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  studentCount: number;
  phases: Phase[];
}

export const courses: Course[] = [
  {
    id: '1',
    slug: 'ethereum-developer',
    title: 'Ethereum Developer',
    description: 'Ethereum is an open-source, decentralized blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (DApps).',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/b6ded528-8d9a-45f0-b844-b3ab831e984b-7.webp',
    techStack: 'SOLIDITY',
    difficulty: 'Beginner',
    duration: '10 hours',
    studentCount: 56789,
    phases: [
      {
        id: 'phase-1-1',
        number: 1,
        title: 'Introduction to Ethereum and Solidity',
        description: 'Learn the fundamentals of Ethereum blockchain and Solidity programming language',
        units: [
          {
            id: 'unit-1-1-1',
            number: 1,
            title: 'What is Ethereum?',
            duration: '30 mins',
            isCompleted: true,
            isLocked: false,
            content: `# What is Ethereum?

Ethereum is a decentralized, open-source blockchain platform that enables developers to build and deploy smart contracts and decentralized applications (DApps). Proposed by programmer Vitalik Buterin in 2013 and officially launched in 2015, Ethereum has become the second-largest cryptocurrency platform by market capitalization.

## Key Features

**Smart Contracts**: Self-executing contracts with the terms directly written into code. They automatically execute when predetermined conditions are met.

**Decentralized Applications (DApps)**: Applications that run on a peer-to-peer network rather than on centralized servers.

**Ether (ETH)**: The native cryptocurrency of the Ethereum platform, used to pay for transaction fees and computational services.

## Ethereum Virtual Machine (EVM)

The EVM is a decentralized computing environment that executes smart contracts. It ensures that programs run exactly as coded without any possibility of downtime, censorship, fraud, or third-party interference.

## Why Ethereum?

- **Programmable blockchain**: Unlike Bitcoin which is primarily for transactions, Ethereum allows complex programmable operations
- **Large developer community**: Extensive resources, tools, and support
- **Proven security**: Battle-tested over years with billions in value secured
- **Continuous innovation**: Regular upgrades and improvements to the network`,
            quiz: {
              questions: [
                {
                  question: 'What is the primary purpose of Ethereum?',
                  options: [
                    'Only cryptocurrency transactions',
                    'Building and deploying smart contracts and DApps',
                    'Mining Bitcoin',
                    'Storing files'
                  ],
                  correctAnswer: 1
                },
                {
                  question: 'What is Ether (ETH) used for?',
                  options: [
                    'Only as an investment',
                    'Paying for transaction fees and computational services',
                    'Creating new blockchains',
                    'None of the above'
                  ],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: 'unit-1-1-2',
            number: 2,
            title: 'Solidity Fundamentals',
            duration: '1.5 hours',
            isCompleted: true,
            isLocked: false,
            content: `# Solidity Fundamentals

Solidity is a high-level, statically-typed programming language designed for developing smart contracts that run on the Ethereum Virtual Machine (EVM).

## Basic Syntax

Solidity syntax is similar to JavaScript and C++. Here's a simple example:

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public message = "Hello, World!";
    
    function updateMessage(string memory newMessage) public {
        message = newMessage;
    }
}
\`\`\`

## Data Types

**Value Types:**
- \`bool\`: Boolean values (true/false)
- \`int\` / \`uint\`: Signed and unsigned integers
- \`address\`: Ethereum addresses
- \`bytes\`: Fixed and dynamic byte arrays

**Reference Types:**
- \`arrays\`: Dynamic and fixed-size arrays
- \`structs\`: Custom defined structures
- \`mapping\`: Hash tables

## Functions

Functions are the executable units of code within a contract:

\`\`\`solidity
function functionName(parameters) visibility modifier returns (returnTypes) {
    // function body
}
\`\`\`

## Visibility Modifiers

- \`public\`: Accessible from anywhere
- \`private\`: Only within the contract
- \`internal\`: Within contract and derived contracts
- \`external\`: Only from outside the contract`,
            quiz: {
              questions: [
                {
                  question: 'What is Solidity?',
                  options: [
                    'A cryptocurrency',
                    'A programming language for smart contracts',
                    'A blockchain network',
                    'A wallet application'
                  ],
                  correctAnswer: 1
                }
              ]
            }
          },
          {
            id: 'unit-1-1-3',
            number: 3,
            title: 'Your First Smart Contract',
            duration: '2 hours',
            isCompleted: false,
            isLocked: false,
            content: `# Your First Smart Contract

Let's build a simple storage contract that allows you to store and retrieve a number.

## The Contract

\`\`\`solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedNumber;
    
    event NumberUpdated(uint256 oldNumber, uint256 newNumber);
    
    function store(uint256 newNumber) public {
        uint256 oldNumber = storedNumber;
        storedNumber = newNumber;
        emit NumberUpdated(oldNumber, newNumber);
    }
    
    function retrieve() public view returns (uint256) {
        return storedNumber;
    }
}
\`\`\`

## Key Concepts

**State Variables**: Variables that permanently store data on the blockchain (\`storedNumber\`)

**Events**: Allow logging of activities on the blockchain (\`NumberUpdated\`)

**View Functions**: Functions that don't modify state (\`retrieve\`)

**Public Functions**: Functions that can be called internally and externally (\`store\`)

## Testing Your Contract

You can test this contract using Remix IDE (remix.ethereum.org):
1. Create a new file with .sol extension
2. Copy the contract code
3. Compile the contract
4. Deploy to a test network
5. Interact with the store and retrieve functions`,
            quiz: {
              questions: [
                {
                  question: 'What is a state variable in Solidity?',
                  options: [
                    'A temporary variable',
                    'A variable that permanently stores data on the blockchain',
                    'A function parameter',
                    'A local variable'
                  ],
                  correctAnswer: 1
                }
              ]
            }
          }
        ]
      },
      {
        id: 'phase-1-2',
        number: 2,
        title: 'Building DApps',
        description: 'Learn how to build decentralized applications with Ethereum',
        units: [
          {
            id: 'unit-1-2-1',
            number: 4,
            title: 'Using Hardhat and Ethers.js',
            duration: '3 hours',
            isCompleted: false,
            isLocked: true,
            content: `# Using Hardhat and Ethers.js

Learn how to set up a professional development environment for Ethereum smart contracts.

## Coming Soon

Complete the previous units to unlock this content.`,
          },
          {
            id: 'unit-1-2-2',
            number: 5,
            title: 'Final Project: A Simple DApp',
            duration: '3 hours',
            isCompleted: false,
            isLocked: true,
            content: `# Final Project: A Simple DApp

Build your first complete decentralized application.

## Coming Soon

Complete the previous units to unlock this content.`,
          }
        ]
      }
    ]
  },
  {
    id: '2',
    slug: 'injective-developer',
    title: 'Injective Developer',
    description: 'Injective is a lightning fast interoperable layer one blockchain optimized for building the premier Web3 finance applications.',
    logo: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/d606c3252a6f5ec76452d0fec917aaa2a38c3a6f70f3988fea-2.webp',
    techStack: 'RUST',
    difficulty: 'Intermediate',
    duration: '12 hours',
    studentCount: 15234,
    phases: [
      {
        id: 'phase-2-1',
        number: 1,
        title: 'Introduction to Injective',
        description: 'Get started with Injective blockchain development',
        units: [
          { id: 'unit-2-1-1', number: 1, title: 'What is Injective?', duration: '15 mins', isCompleted: true, isLocked: false, content: 'Content coming soon...' },
          { id: 'unit-2-1-2', number: 2, title: 'Setting up Your Development Environment', duration: '45 mins', isCompleted: true, isLocked: false, content: 'Content coming soon...' },
        ],
      },
      {
        id: 'phase-2-2',
        number: 2,
        title: 'CosmWasm Smart Contracts',
        description: 'Learn to write smart contracts using CosmWasm',
        units: [
          { id: 'unit-2-2-1', number: 3, title: 'Writing Your First Contract', duration: '1 hour', isCompleted: false, isLocked: false, content: 'Content coming soon...' },
          { id: 'unit-2-2-2', number: 4, title: 'Interacting with Contracts', duration: '1 hour', isCompleted: false, isLocked: true, content: 'Content coming soon...' },
        ],
      }
    ]
  },
  {
    id: '3',
    slug: 'greenfield-developer',
    title: 'Greenfield Developer',
    description:
      'Greenfield is a decentralized storage solution introduced by BNB Chain, designed to enhance data security, user autonomy, and storage efficiency.',
    logo:
      'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/8dd84046-4efe-4378-b903-45f8931367b0-hackquest-io/assets/images/nvq5PWecJwRozsX9X8sPN-3.webp',
    techStack: 'SOLIDITY',
    difficulty: 'Beginner',
    duration: '8 hours',
    studentCount: 9876,
    phases: [
      {
        id: 'phase-3-1',
        number: 1,
        title: 'Introduction to Greenfield',
        description: 'Learn about decentralized storage and Greenfield architecture.',
        units: [
          {
            id: 'unit-3-1-1',
            number: 1,
            title: 'What is Decentralized Storage?',
            duration: '30 mins',
            isCompleted: false,
            isLocked: false,
            content: `# Decentralized Storage

Decentralized storage distributes data across multiple nodes in a network rather than storing it on a single centralized server. It enhances **security**, **privacy**, and **availability**.

## Benefits
- **No single point of failure**
- **Data ownership** remains with the user
- **Censorship resistance**

Examples include IPFS, Arweave, and BNB Greenfield.`,
            quiz: {
              questions: [
                {
                  question: 'What is the main advantage of decentralized storage?',
                  options: [
                    'Centralized control',
                    'Censorship resistance and data ownership',
                    'Cheaper server costs',
                    'Requires less bandwidth',
                  ],
                  correctAnswer: 1,
                },
              ],
            },
          },
          {
            id: 'unit-3-1-2',
            number: 2,
            title: 'Greenfield Architecture',
            duration: '40 mins',
            isCompleted: false,
            isLocked: false,
            content: `# Greenfield Architecture

BNB Greenfield consists of three core components:

1. **Users** — interact through wallets or APIs.
2. **Storage Providers (SPs)** — store encrypted data.
3. **BNB Smart Chain (BSC)** — handles metadata, permissions, and payments.

Developers can build DApps where users control their data and monetize it securely.`,
          },
        ],
      },
      {
        id: 'phase-3-2',
        number: 2,
        title: 'Building on Greenfield',
        description: 'Learn to integrate storage with smart contracts.',
        units: [
          {
            id: 'unit-3-2-1',
            number: 3,
            title: 'Connecting Greenfield with BSC',
            duration: '2 hours',
            isCompleted: false,
            isLocked: true,
            content: `# Connecting Greenfield with Smart Contracts

You can interact with Greenfield using Solidity contracts that communicate with metadata on BSC. The SDK allows uploads, permission checks, and verifications.`,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    slug: 'arbitrum-developer',
    title: 'Arbitrum Developer',
    description: 'Arbitrum is the leading layer-2 (L2) that empowers users like you to explore and build in the largest layer-1 (L1) ecosystem, Ethereum. In this learning track, we will introduce the ecosystem and architecture of Arbitrum, learn Rust syntax and the Stylus library, and build classic projects.',
    logo: '/logos/arbitrum.svg',
    techStack: 'RUST',
    difficulty: 'Intermediate',
    duration: '15 hours',
    studentCount: 21098,
    phases: [
      {
        id: 'phase-4-1',
        number: 1,
        title: 'Arbitrum Fundamentals',
        chapters: [
          { id: 'ch-4-1-1', number: 1, title: 'L2 Scaling Solutions', duration: '30 mins', isCompleted: true, isLocked: false },
          { id: 'ch-4-1-2', number: 2, title: 'Introduction to Arbitrum Stylus', duration: '1 hour', isCompleted: true, isLocked: false },
        ],
      },
      {
        id: 'phase-4-2',
        number: 2,
        title: 'Developing with Stylus',
        chapters: [
          { id: 'ch-4-2-1', number: 3, title: 'Your First Stylus Program', duration: '2 hours', isCompleted: false, isLocked: false },
          { id: 'ch-4-2-2', number: 4, title: 'Building a Bulls and Cows Game', duration: '4 hours', isCompleted: false, isLocked: true },
        ],
      },
       {
        id: 'phase-4-3',
        number: 3,
        title: 'Advanced Projects',
        chapters: [
          { id: 'ch-4-3-1', number: 5, title: 'Creating a Token and NFT', duration: '3 hours', isCompleted: false, isLocked: true },
          { id: 'ch-4-3-2', number: 6, title: 'Building a DeFi Smart Vault', duration: '4.5 hours', isCompleted: false, isLocked: true },
        ],
      },
    ],
  },
  {
    id: '5',
    slug: 'solana-developer',
    title: 'Solana Developer',
    description: 'Built with Rust, Solana is renowned for its scalability and cost-effectiveness. In this ecosystem, we will learn the basic concept of Solana, smart contract development with Rust, and the Anchor framework. We will also learn to develop NFT contracts and build a game on Solana.',
    logo: '/logos/solana.svg',
    techStack: 'RUST',
    difficulty: 'Advanced',
    duration: '20 hours',
    studentCount: 34567,
    phases: [
      {
        id: 'phase-5-1',
        number: 1,
        title: 'Solana Core Concepts',
        chapters: [
          { id: 'ch-5-1-1', number: 1, title: "Understanding Solana's Architecture", duration: '1 hour', isCompleted: false, isLocked: false },
          { id: 'ch-5-1-2', number: 2, title: 'Setting up for Solana Development', duration: '1 hour', isCompleted: false, isLocked: false },
        ],
      },
      {
        id: 'phase-5-2',
        number: 2,
        title: 'Smart Contracts with Anchor',
        chapters: [
          { id: 'ch-5-2-1', number: 3, title: 'Introduction to the Anchor Framework', duration: '2 hours', isCompleted: false, isLocked: true },
          { id: 'ch-5-2-2', number: 4, title: 'Developing NFT Contracts', duration: '6 hours', isCompleted: false, isLocked: true },
        ],
      },
       {
        id: 'phase-5-3',
        number: 3,
        title: 'Building a Game on Solana',
        chapters: [
          { id: 'ch-5-3-1', number: 5, title: 'Game Logic and State Management', duration: '5 hours', isCompleted: false, isLocked: true },
          { id: 'ch-5-3-2', number: 6, title: 'Final Project: On-Chain Game', duration: '5 hours', isCompleted: false, isLocked: true },
        ],
      },
    ],
  },
  {
    id: '6',
    slug: 'sui-developer',
    title: 'Sui Developer',
    description: 'Sui is a high-performance Layer-1 blockchain platform that employs innovative parallel execution and object ownership models. Sui supports smart contract development using the Move programming language, with a strong focus on security and asset ownership.',
    logo: '/logos/sui.svg',
    techStack: 'MOVE',
    difficulty: 'Intermediate',
    duration: '14 hours',
    studentCount: 7890,
    phases: [
      {
        id: 'phase-6-1',
        number: 1,
        title: 'Introduction to Sui and Move',
        chapters: [
          { id: 'ch-6-1-1', number: 1, title: 'The Sui Object Model', duration: '1 hour', isCompleted: false, isLocked: false },
          { id: 'ch-6-1-2', number: 2, title: 'Move Language Basics', duration: '2 hours', isCompleted: false, isLocked: false },
        ],
      },
      {
        id: 'phase-6-2',
        number: 2,
        title: 'Developing on Sui',
        chapters: [
          { id: 'ch-6-2-1', number: 3, title: 'Creating and Managing Objects', duration: '3 hours', isCompleted: false, isLocked: true },
          { id: 'ch-6-2-2', number: 4, title: 'Testing and Deploying Contracts', duration: '3 hours', isCompleted: false, isLocked: true },
        ],
      },
      {
        id: 'phase-6-3',
        number: 3,
        title: 'Practical Project',
        chapters: [
          { id: 'ch-6-3-1', number: 5, title: 'Building a Dynamic NFT', duration: '5 hours', isCompleted: false, isLocked: true },
        ],
      },
    ],
  }
];