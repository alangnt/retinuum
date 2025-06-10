import React from 'react';
import { Brain, Wallet, User, Menu } from 'lucide-react';

const Header = () => {
	return (
		<header className="fixed z-50 bg-black/20 backdrop-blur-md border-b border-white/10 w-full">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex items-center space-x-2">
						<div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
							<Brain className="w-6 h-6 text-white"/>
						</div>
						<span
							className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Retinuum
            </span>
					</div>
					
					{/* Navigation */}
					<nav className="hidden md:flex items-center space-x-8">
						<a href="#create" className="text-gray-300 hover:text-white transition-colors duration-200">
							Create
						</a>
						<a href="#gallery" className="text-gray-300 hover:text-white transition-colors duration-200">
							Gallery
						</a>
						<a href="#marketplace" className="text-gray-300 hover:text-white transition-colors duration-200">
							Marketplace
						</a>
						<a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
							About
						</a>
					</nav>
					
					{/* Actions */}
					<div className="flex items-center space-x-4">
						<button
							className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
							<Wallet className="w-4 h-4 text-gray-300"/>
							<span className="text-gray-300">Connect</span>
						</button>
						<button
							className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
							<User className="w-5 h-5 text-gray-300"/>
						</button>
						<button
							className="md:hidden p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
							<Menu className="w-5 h-5 text-gray-300"/>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
