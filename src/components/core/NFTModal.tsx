import { FC } from 'react';
import { X, Heart, Share2, ShoppingCart, Eye, Clock, User } from 'lucide-react';

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

interface NFTModalProps {
	nft: NFT;
	onClose: () => void;
}

const NFTModal: FC<NFTModalProps> = ({ nft, onClose }) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
			<div className="relative bg-gray-900/90 backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-black/70 transition-colors duration-200"
				>
					<X className="w-5 h-5 text-white" />
				</button>
				
				<div className="grid md:grid-cols-2 gap-0 max-h-[90vh] overflow-y-auto">
					{/* Image Section */}
					<div className="relative">
						<img
							src={nft.image}
							alt={nft.title}
							className="w-full h-64 md:h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
						<div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
	              nft.type === 'memory'
		              ? 'bg-purple-500/20 text-purple-200 border border-purple-400'
		              : 'bg-blue-500/20 text-blue-200 border border-blue-400'
              }`}>
                {nft.type}
              </span>
						</div>
					</div>
					
					{/* Content Section */}
					<div className="p-8 flex flex-col">
						<div className="flex-1">
							<h2 className="text-2xl font-bold text-white mb-2">{nft.title}</h2>
							
							{/* Creator */}
							<div className="flex items-center mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
									<User className="w-4 h-4 text-white" />
								</div>
								<div>
									<p className="text-gray-400 text-sm">Created by</p>
									<p className="text-white font-medium">{nft.creator}</p>
								</div>
							</div>
							
							{/* Stats */}
							<div className="flex items-center space-x-6 mb-6 text-gray-400 text-sm">
                <span className="flex items-center">
                  <Heart className="w-4 h-4 mr-1" />
	                {nft.likes} likes
                </span>
								<span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
									{nft.views} views
                </span>
								<span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  2 days ago
                </span>
							</div>
							
							{/* Description */}
							<div className="mb-8">
								<h3 className="text-white font-semibold mb-3">Story</h3>
								<p className="text-gray-300 leading-relaxed">{nft.description}</p>
							</div>
							
							{/* Metadata */}
							<div className="mb-8">
								<h3 className="text-white font-semibold mb-3">Details</h3>
								<div className="space-y-2 text-sm">
									<div className="flex justify-between">
										<span className="text-gray-400">Contract Address</span>
										<span className="text-white font-mono">0x742d...35b4</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-400">Token ID</span>
										<span className="text-white">{nft.id}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-400">Blockchain</span>
										<span className="text-white">Ethereum</span>
									</div>
								</div>
							</div>
						</div>
						
						{/* Price and Actions */}
						<div className="border-t border-white/10 pt-6">
							<div className="flex items-center justify-between mb-4">
								<div>
									<p className="text-gray-400 text-sm">Current Price</p>
									<p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
										{nft.price}
									</p>
								</div>
								<div className="flex space-x-2">
									<button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
										<Heart className="w-5 h-5 text-gray-300" />
									</button>
									<button className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
										<Share2 className="w-5 h-5 text-gray-300" />
									</button>
								</div>
							</div>
							
							<div className="flex space-x-3">
								<button className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
                  <span className="flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </span>
								</button>
								<button className="px-6 py-3 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200">
									Make Offer
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NFTModal;
