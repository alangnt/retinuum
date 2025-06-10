"use client"

import { Sparkles, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { useEffect, useState } from "react";
import { User } from "@/types/users";
import {Dream} from "@/types/dreams";

const Hero = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [dreams, setDreams] = useState<Dream[]>([]);
	const [totalVolume, setTotalVolume] = useState<number>(0);
	
	const getUsers = async () => {
		try {
			const response = await fetch("/api/users/getUsers", {
				method: "GET",
				headers: {"Content-Type": "application/json"},
			});
			
			return await response.json();
		} catch (error) {
			console.error(error);
		}
	}
	
	const getDreams = async () => {
		try {
			const response = await fetch("/api/dreams/getDreams", {
				method: "GET",
				headers: {"Content-Type": "application/json"},
			});
			
			return await response.json();
		} catch (error) {
			console.error(error);
		}
	}
	
	useEffect(() => {
		(async () => {
			const usersData = await getUsers();
			const dreamsData = await getDreams();
			
			setUsers(usersData);
			setDreams(dreamsData);
			
			//const totalVolume = dreamsData.reduce((acc: number, dream: Dream) => acc + (dream.price ?? 0), 0);
			//setTotalVolume(totalVolume);
		})();
	}, []);
	
	return (
		<section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
			{/* Background Effects */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>
			
			<div className="relative max-w-7xl mx-auto text-center">
				<div className="flex items-center justify-center mb-6">
					<Sparkles className="w-8 h-8 text-purple-400 mr-3 animate-spin" />
					<span className="text-purple-400 font-medium">Powered by AI Magic</span>
				</div>
				
				<h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
					Transform Your
					<span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Dreams & Memories
          </span>
					Into NFTs
				</h1>
				
				<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
					Share your most precious memories and wildest dreams with the world. Our AI transforms your stories
					into unique digital art pieces that capture the essence of human experience.
				</p>
				
				<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
					<Link href={"#create"}>
						<button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer">
	            <span className="flex items-center">
	              Start Creating
	              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
	            </span>
						</button>
					</Link>
					
					<Link href={"#gallery"}>
						<button className="px-8 py-4 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-200 cursor-pointer">
							Explore Gallery
						</button>
					</Link>
				</div>
				
				{/* Stats */}
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
					<div className="text-center">
						<div className="text-3xl font-bold text-white mb-2">{dreams.length ?? 0}</div>
						<div className="text-gray-400">Dreams Created</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-white mb-2">{users.length ?? 0}</div>
						<div className="text-gray-400">Artists Active</div>
					</div>
					<div className="text-center">
						<div className="text-3xl font-bold text-white mb-2">${totalVolume}</div>
						<div className="text-gray-400">Total Volume</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
