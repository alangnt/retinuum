import { Brain, Twitter, Github, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Brand */}
					<div className="md:col-span-1">
						<div className="flex items-center space-x-2 mb-4">
							<div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
								<Brain className="w-6 h-6 text-white" />
							</div>
							<span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Retinuum
              </span>
						</div>
						<p className="text-gray-400 mb-6 leading-relaxed">
							Transform your most precious memories and wildest dreams into unique NFTs that capture the essence of human experience.
						</p>
						<div className="flex space-x-4">
							<a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
								<Twitter className="w-5 h-5 text-gray-300" />
							</a>
							<a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
								<MessageCircle className="w-5 h-5 text-gray-300" />
							</a>
							<a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
								<Github className="w-5 h-5 text-gray-300" />
							</a>
							<a href="#" className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
								<Mail className="w-5 h-5 text-gray-300" />
							</a>
						</div>
					</div>
					
					{/* Create */}
					<div>
						<h3 className="text-white font-semibold mb-4">Create</h3>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Create NFT</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">AI Art Generator</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Memory Templates</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Dream Journal</a></li>
						</ul>
					</div>
					
					{/* Marketplace */}
					<div>
						<h3 className="text-white font-semibold mb-4">Marketplace</h3>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Browse Collection</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Top Sellers</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">New Releases</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Trending</a></li>
						</ul>
					</div>
					
					{/* Support */}
					<div>
						<h3 className="text-white font-semibold mb-4">Support</h3>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Community Guidelines</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
							<li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
						</ul>
					</div>
				</div>
				
				{/* Bottom Bar */}
				<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm mb-4 sm:mb-0">
						© 2025 Retinuum. All rights reserved.
					</p>
					<div className="flex items-center space-x-6 text-sm text-gray-400">
						<span>Built with 💜 for dreamers. Skeleton made with Bolt</span>
						<span>•</span>
						<span>Powered by AI</span>
						<span>•</span>
						<span>Ethereum Network</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
