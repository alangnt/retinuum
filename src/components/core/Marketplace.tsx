'use client'

import { useState } from 'react';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const Marketplace = () => {
	const [activeTab, setActiveTab] = useState('trending');
	
	const marketplaceData = {
		trending: [
			{ name: 'Ethereal Memories', volume: '245.7 ETH', change: '+12.4%', items: '1,234' },
			{ name: 'Dream Weavers', volume: '189.3 ETH', change: '+8.7%', items: '892' },
			{ name: 'Nostalgic Visions', volume: '156.2 ETH', change: '+15.1%', items: '567' },
			{ name: 'Lucid Landscapes', volume: '134.8 ETH', change: '+6.9%', items: '445' },
			{ name: 'Memory Palace', volume: '98.4 ETH', change: '+21.3%', items: '321' }
		],
		recent: [
			{ title: 'Summer Rain Dance', price: '3.2 ETH', time: '2 mins ago', type: 'memory' },
			{ title: 'Flying Over Mountains', price: '2.8 ETH', time: '5 mins ago', type: 'dream' },
			{ title: 'Grandmother\'s Lullaby', price: '4.1 ETH', time: '8 mins ago', type: 'memory' },
			{ title: 'Underwater Symphony', price: '1.9 ETH', time: '12 mins ago', type: 'dream' },
			{ title: 'First Day of School', price: '2.5 ETH', time: '15 mins ago', type: 'memory' }
		]
	};
	
	return (
		<section id="marketplace" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Marketplace
					</h2>
					<p className="text-gray-300 text-lg">
						Discover, buy, and sell the most precious memories and dreams
					</p>
				</div>
				
				{/* Market Stats */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
					<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
								<DollarSign className="w-6 h-6 text-white" />
							</div>
							<span className="text-green-400 text-sm font-medium">+12.4%</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">2,847 ETH</div>
						<div className="text-gray-400 text-sm">Total Volume</div>
					</div>
					
					<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
								<Users className="w-6 h-6 text-white" />
							</div>
							<span className="text-green-400 text-sm font-medium">+8.7%</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">15,234</div>
						<div className="text-gray-400 text-sm">Active Users</div>
					</div>
					
					<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
								<TrendingUp className="w-6 h-6 text-white" />
							</div>
							<span className="text-green-400 text-sm font-medium">+23.1%</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">4.2 ETH</div>
						<div className="text-gray-400 text-sm">Floor Price</div>
					</div>
					
					<div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
						<div className="flex items-center justify-between mb-4">
							<div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
								<Clock className="w-6 h-6 text-white" />
							</div>
							<span className="text-green-400 text-sm font-medium">+5.2%</span>
						</div>
						<div className="text-2xl font-bold text-white mb-1">156</div>
						<div className="text-gray-400 text-sm">Items Sold (24h)</div>
					</div>
				</div>
				
				{/* Tabs */}
				<div className="flex space-x-1 mb-8 bg-white/5 backdrop-blur-lg rounded-xl p-1 border border-white/10 max-w-md mx-auto">
					<button
						onClick={() => setActiveTab('trending')}
						className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
							activeTab === 'trending'
								? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
								: 'text-gray-400 hover:text-white'
						}`}
					>
						Trending
					</button>
					<button
						onClick={() => setActiveTab('recent')}
						className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
							activeTab === 'recent'
								? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
								: 'text-gray-400 hover:text-white'
						}`}
					>
						Recent Sales
					</button>
				</div>
				
				{/* Content */}
				<div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
					{activeTab === 'trending' ? (
						<div className="p-6">
							<h3 className="text-xl font-semibold text-white mb-6">Trending Collections</h3>
							<div className="space-y-4">
								{marketplaceData.trending.map((collection, index) => (
									<div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
										<div className="flex items-center space-x-4">
											<div className="text-gray-400 font-medium w-8">#{index + 1}</div>
											<div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
											<div>
												<div className="text-white font-semibold">{collection.name}</div>
												<div className="text-gray-400 text-sm">{collection.items} items</div>
											</div>
										</div>
										<div className="text-right">
											<div className="text-white font-semibold">{collection.volume}</div>
											<div className="text-green-400 text-sm">{collection.change}</div>
										</div>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="p-6">
							<h3 className="text-xl font-semibold text-white mb-6">Recent Sales</h3>
							<div className="space-y-4">
								{marketplaceData.recent.map((sale, index) => (
									<div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200">
										<div className="flex items-center space-x-4">
											<div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
											<div>
												<div className="text-white font-semibold">{sale.title}</div>
												<div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs ${
	                          sale.type === 'memory'
		                          ? 'bg-purple-500/20 text-purple-200'
		                          : 'bg-blue-500/20 text-blue-200'
                          }`}>
                            {sale.type}
                          </span>
													<span className="text-gray-400 text-sm">{sale.time}</span>
												</div>
											</div>
										</div>
										<div className="text-right">
											<div className="text-white font-semibold">{sale.price}</div>
										</div>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Marketplace;
