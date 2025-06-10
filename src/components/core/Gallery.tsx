'use client'

import { useState } from 'react';
import { Eye, Heart, Share2, Search } from 'lucide-react';
import NFTModal from './NFTModal';

interface NFT {
	id: string;
	title: string;
	creator: string;
	type: 'memory' | 'dream';
	image: string;
	price: string;
	likes: number;
	views: number;
	description: string;
}

const Gallery = () => {
	const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
	const [filter, setFilter] = useState('all');
	const [searchTerm, setSearchTerm] = useState('');
	
	// Sample NFT data
	const nfts: NFT[] = [
		{
			id: '1',
			title: 'Childhood Summer',
			creator: 'dreamweaver_92',
			type: 'memory',
			image: 'https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg?auto=compress&cs=tinysrgb&w=500',
			price: '2.5 ETH',
			likes: 234,
			views: 1205,
			description: 'A vivid memory of running through sunflower fields during a magical summer afternoon.'
		},
		{
			id: '2',
			title: 'Flying Dreams',
			creator: 'skybound_soul',
			type: 'dream',
			image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=500',
			price: '1.8 ETH',
			likes: 189,
			views: 892,
			description: 'Recurring dreams of soaring above clouds, feeling weightless and free.'
		},
		{
			id: '3',
			title: 'Grandmother\'s Kitchen',
			creator: 'memory_keeper',
			type: 'memory',
			image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=500',
			price: '3.2 ETH',
			likes: 445,
			views: 2105,
			description: 'The warmth and love felt in my grandmother\'s kitchen, filled with the aroma of fresh bread.'
		},
		{
			id: '4',
			title: 'Underwater Ballet',
			creator: 'deep_dreamer',
			type: 'dream',
			image: 'https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=500',
			price: '4.1 ETH',
			likes: 312,
			views: 1456,
			description: 'A surreal dream of dancing gracefully underwater with bioluminescent creatures.'
		},
		{
			id: '5',
			title: 'First Love',
			creator: 'heart_strings',
			type: 'memory',
			image: 'https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=500',
			price: '2.9 ETH',
			likes: 567,
			views: 3205,
			description: 'The butterfly feelings and nervous excitement of a first romantic encounter.'
		},
		{
			id: '6',
			title: 'Cosmic Journey',
			creator: 'star_voyager',
			type: 'dream',
			image: 'https://images.pexels.com/photos/1205301/pexels-photo-1205301.jpeg?auto=compress&cs=tinysrgb&w=500',
			price: '5.7 ETH',
			likes: 789,
			views: 4321,
			description: 'Traveling through galaxies and discovering new worlds in vivid space dreams.'
		}
	];
	
	const filteredNFTs = nfts.filter(nft => {
		const matchesFilter = filter === 'all' || nft.type === filter;
		const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			nft.creator.toLowerCase().includes(searchTerm.toLowerCase());
		return matchesFilter && matchesSearch;
	});
	
	return (
		<>
			<section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
							Dream Gallery
						</h2>
						<p className="text-gray-300 text-lg">
							Explore the most beautiful memories and dreams from our community
						</p>
					</div>
					
					{/* Filters and Search */}
					<div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
						<div className="flex items-center space-x-4">
							<button
								onClick={() => setFilter('all')}
								className={`px-4 py-2 rounded-lg transition-all duration-200 ${
									filter === 'all'
										? 'bg-purple-500/20 text-purple-200 border border-purple-400'
										: 'bg-white/5 text-gray-300 border border-white/20 hover:border-white/30'
								}`}
							>
								All
							</button>
							<button
								onClick={() => setFilter('memory')}
								className={`px-4 py-2 rounded-lg transition-all duration-200 ${
									filter === 'memory'
										? 'bg-purple-500/20 text-purple-200 border border-purple-400'
										: 'bg-white/5 text-gray-300 border border-white/20 hover:border-white/30'
								}`}
							>
								Memories
							</button>
							<button
								onClick={() => setFilter('dream')}
								className={`px-4 py-2 rounded-lg transition-all duration-200 ${
									filter === 'dream'
										? 'bg-blue-500/20 text-blue-200 border border-blue-400'
										: 'bg-white/5 text-gray-300 border border-white/20 hover:border-white/30'
								}`}
							>
								Dreams
							</button>
						</div>
						
						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
							<input
								type="text"
								placeholder="Search NFTs..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="pl-10 pr-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-200"
							/>
						</div>
					</div>
					
					{/* NFT Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredNFTs.map((nft) => (
							<div
								key={nft.id}
								className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 cursor-pointer"
								onClick={() => setSelectedNFT(nft)}
							>
								<div className="relative overflow-hidden">
									<img
										src={nft.image}
										alt={nft.title}
										className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
									<div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
	                    nft.type === 'memory'
		                    ? 'bg-purple-500/20 text-purple-200 border border-purple-400'
		                    : 'bg-blue-500/20 text-blue-200 border border-blue-400'
                    }`}>
                      {nft.type}
                    </span>
									</div>
									<div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors duration-200">
											<Heart className="w-4 h-4 text-white" />
										</button>
										<button className="p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors duration-200">
											<Share2 className="w-4 h-4 text-white" />
										</button>
									</div>
								</div>
								
								<div className="p-6">
									<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-200">
										{nft.title}
									</h3>
									<p className="text-gray-400 text-sm mb-3">by {nft.creator}</p>
									
									<div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {nft.price}
                    </span>
										<div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
	                      {nft.likes}
                      </span>
											<span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
												{nft.views}
                      </span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			
			{selectedNFT && (
				<NFTModal nft={selectedNFT} onClose={() => setSelectedNFT(null)} />
			)}
		</>
	);
};

export default Gallery;
