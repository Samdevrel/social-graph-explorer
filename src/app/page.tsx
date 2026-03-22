'use client';

import { useState } from 'react';

interface Profile {
  id: string;
  handle: string;
  displayName: string;
  bio: string;
  followerCount: number;
  followingCount: number;
  nft: string;
  tokenBalance: number;
  ownedNFTs: number;
  lensProfile?: string;
  verified: boolean;
}

interface Follow {
  from: string;
  to: string;
  timestamp: Date;
  verified: boolean;
}

interface Post {
  id: string;
  profileId: string;
  content: string;
  likeCount: number;
  mirrorCount: number;
  collectCount: number;
  verified: boolean;
}

const profiles: Profile[] = [
  {
    id: 'P-001',
    handle: '0xlens.eth',
    displayName: 'Alex Creative',
    bio: 'Digital artist | NFT collector | Building on Lens Protocol',
    followerCount: 12500,
    followingCount: 423,
    nft: '0x7a...9f2e',
    tokenBalance: 2500,
    ownedNFTs: 87,
    lensProfile: '0x3c...1d4a',
    verified: true,
  },
  {
    id: 'P-002',
    handle: 'crypto_woman',
    displayName: 'Sarah Tech',
    bio: 'DeFi researcher | YouTuber | Web3 advocate',
    followerCount: 34800,
    followingCount: 892,
    nft: '0x1b...3c5d',
    tokenBalance: 8900,
    ownedNFTs: 156,
    lensProfile: '0x5f...7a8b',
    verified: true,
  },
  {
    id: 'P-003',
    handle: 'lensbuilder',
    displayName: 'Developer Dave',
    bio: 'Building the future of social | Open source contributor',
    followerCount: 8900,
    followingCount: 567,
    nft: '0x3d...4e6f',
    tokenBalance: 1200,
    ownedNFTs: 34,
    lensProfile: '0x2a...9c1d',
    verified: true,
  },
  {
    id: 'P-004',
    handle: 'nft_collector',
    displayName: 'Mike Art',
    bio: 'Passionate about digital art and NFTs',
    followerCount: 23400,
    followingCount: 445,
    nft: '0x9f...0b1c',
    tokenBalance: 5600,
    ownedNFTs: 203,
    lensProfile: '0x6d...3e8f',
    verified: true,
  },
  {
    id: 'P-005',
    handle: 'web3_enthusiast',
    displayName: 'Emma Chain',
    bio: 'Crypto native | Building on multiple chains | DeFi',
    followerCount: 17800,
    followingCount: 678,
    nft: '0x4a...5b7c',
    tokenBalance: 3200,
    ownedNFTs: 91,
    lensProfile: '0x8e...2d9f',
    verified: true,
  },
];

const posts: Post[] = [
  {
    id: 'POST-001',
    profileId: 'P-001',
    content: 'Just launched my new NFT collection! Check it out and mint now. 🚀 #NFTDrop #LensProtocol',
    likeCount: 234,
    mirrorCount: 45,
    collectCount: 78,
    verified: true,
  },
  {
    id: 'POST-002',
    profileId: 'P-002',
    content: 'Exploring the new DeFi opportunities on Arbitrum today. The yield farming is insane! 📈',
    likeCount: 567,
    mirrorCount: 89,
    collectCount: 123,
    verified: true,
  },
  {
    id: 'POST-003',
    profileId: 'P-003',
    content: 'Working on an Open Action that lets people earn LENS tokens by creating content. The future of social is here! 🤖',
    likeCount: 892,
    mirrorCount: 156,
    collectCount: 234,
    verified: true,
  },
  {
    id: 'POST-004',
    profileId: 'P-004',
    content: 'Why I believe NFTs will replace traditional social media profiles. The data portability is game-changing. 💬',
    likeCount: 1234,
    mirrorCount: 234,
    collectCount: 345,
    verified: true,
  },
];

const follows: Follow[] = [
  {
    from: '0xlens.eth',
    to: 'crypto_woman',
    timestamp: new Date('2026-03-15T14:32:00'),
    verified: true,
  },
  {
    from: 'lensbuilder',
    to: '0xlens.eth',
    timestamp: new Date('2026-03-15T12:15:00'),
    verified: true,
  },
  {
    from: 'nft_collector',
    to: '0xlens.eth',
    timestamp: new Date('2026-03-14T09:45:00'),
    verified: true,
  },
];

export default function Home() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-pink-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">Social Graph Explorer</h1>
          <p className="text-gray-400 mt-2">Lens Protocol & Farcaster social graphs on-chain</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-pink-400 p-4 text-center">
            <div className="text-3xl font-black text-pink-400">5</div>
            <div className="text-sm text-gray-400">Profiles</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">1,243</div>
            <div className="text-sm text-gray-400">Total Followers</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">4</div>
            <div className="text-sm text-gray-400">Posts</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">LENS</div>
            <div className="text-sm text-gray-400">Protocol</div>
          </div>
        </section>

        {/* Profile List */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Profiles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {profiles.map((profile) => (
              <div
                key={profile.id}
                onClick={() => setSelectedProfile(profile)}
                className={`p-4 border-4 cursor-pointer transition-all ${
                  selectedProfile?.id === profile.id
                    ? 'bg-pink-900/30 border-pink-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-pink-400">@{profile.handle}</h3>
                    <p className="text-sm text-gray-400">{profile.displayName}</p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-bold ${
                    profile.verified ? 'bg-pink-900 text-pink-400' : 'bg-gray-700'
                  }`}>
                    VERIFIED
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3">{profile.bio}</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <div className="text-gray-400">Followers</div>
                    <div className="font-bold">{profile.followerCount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Following</div>
                    <div className="font-bold">{profile.followingCount}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">NFTs</div>
                    <div className="font-bold">{profile.ownedNFTs}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500 font-mono">
                  {profile.lensProfile}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Profile */}
        {selectedProfile && (
          <section className="bg-gray-900 border-4 border-pink-400 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-black text-pink-400">@{selectedProfile.handle}</h2>
                <p className="text-sm text-gray-400">{selectedProfile.displayName}</p>
              </div>
              <button
                onClick={() => setSelectedProfile(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Bio</div>
                <div>{selectedProfile.bio}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Followers</div>
                  <div className="text-2xl font-bold text-pink-400">
                    {selectedProfile.followerCount.toLocaleString()}
                  </div>
                </div>
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Following</div>
                  <div className="text-2xl font-bold">{selectedProfile.followingCount}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">LENS Profile</div>
                  <div className="font-mono text-sm break-all">{selectedProfile.lensProfile}</div>
                </div>
                <div className="p-3 bg-gray-800 border border-gray-700">
                  <div className="text-sm text-gray-400">Token Balance</div>
                  <div className="text-2xl font-bold">{selectedProfile.tokenBalance.toLocaleString()} LENS</div>
                </div>
              </div>
              <div className="p-3 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">NFT Holder</div>
                <div className="font-mono text-sm break-all">{selectedProfile.nft}</div>
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Recent Posts</h2>
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className={`p-4 border-4 cursor-pointer transition-all ${
                  selectedPost?.id === post.id
                    ? 'bg-pink-900/30 border-pink-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-bold text-pink-400">@{profiles.find(p => p.id === post.profileId)?.handle}</span>
                    {post.verified && <span className="ml-2 text-xs font-bold bg-pink-900 text-pink-400">VERIFIED</span>}
                  </div>
                  <div className="text-xs text-gray-400">
                    Mar 2026
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-2">{post.content}</p>
                <div className="flex gap-4 text-xs text-gray-400">
                  <span>❤️ {post.likeCount}</span>
                  <span>🔄 {post.mirrorCount}</span>
                  <span>🔥 {post.collectCount}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Follows */}
        <section className="bg-gray-900 border-4 border-purple-400 p-6">
          <h2 className="text-xl font-black text-purple-400 mb-4">Recent Follows</h2>
          <div className="space-y-2">
            {follows.map((follow) => (
              <div
                key={`${follow.from}-${follow.to}`}
                className="p-3 bg-gray-800 border border-gray-700 flex items-center justify-between"
              >
                <div>
                  <span className="font-bold text-purple-400">{follow.from}</span>
                  <span className="text-gray-400 mx-2">followed</span>
                  <span className="font-bold">{follow.to}</span>
                </div>
                <span className="text-xs text-gray-400">
                  {follow.timestamp ? follow.timestamp.toLocaleDateString() : ''}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How Social Graphs Work</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-pink-400 mb-2">Profile NFT</h3>
              <p className="text-xs text-gray-400">Profile managed as NFT on-chain</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Follow Actions</h3>
              <p className="text-xs text-gray-400">Follow/following stored as events</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Open Actions</h3>
              <p className="text-xs text-gray-400">Monetizable actions in posts</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Composable</h3>
              <p className="text-xs text-gray-400">Any app can build on graph</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-pink-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
