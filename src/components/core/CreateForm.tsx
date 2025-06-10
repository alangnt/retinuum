'use client'

import { useState, FormEvent, useEffect } from 'react';
import { Brain, Wand2 } from 'lucide-react';
import Image from "next/image";

const CreateForm = () => {
	const [formData, setFormData] = useState({
		title: '',
		description: '',
		type: 'memory',
		style: 'dreamy',
		privacy: 'public'
	});
	
	const [image, setImage] = useState('');
	const [isGenerating, setIsGenerating] = useState(false);
	
	async function handleGenerate(e: FormEvent) {
		e.preventDefault();
		setIsGenerating(true);
		setImage('');
		
		try {
			const res = await fetch('/api/generate-image', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt: `${formData.description}. Style: ${formData.style}` }),
			});
			const data = await res.json();
			const imageUrl = data.image?.[0]?.url;
			setImage(imageUrl);
		} catch (err) {
			console.error(err);
			alert("Something went wrong. Please try again.");
		} finally {
			setIsGenerating(false);
		}
	}
	
	useEffect(() => {
		console.log(image);
	}, [image]);
	
	return (
		<section id="create" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Create Your Dream NFT
					</h2>
					<p className="text-gray-300 text-lg">
						Share your story and watch AI transform it into beautiful digital art
					</p>
				</div>
				
				<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
					<form onSubmit={handleGenerate} className="space-y-6">
						{/* Type Selection */}
						<div>
							<label className="block text-white font-medium mb-3">What are you creating?</label>
							<div className="grid grid-cols-2 gap-4">
								<button
									type="button"
									onClick={() => setFormData({...formData, type: 'memory'})}
									className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
										formData.type === 'memory'
											? 'border-purple-400 bg-purple-500/20 text-purple-200'
											: 'border-white/20 bg-white/5 text-gray-300 hover:border-white/30'
									}`}
								>
									<Brain className="w-6 h-6 mx-auto mb-2" />
									<div className="font-medium">Memory</div>
									<div className="text-sm opacity-75">A cherished moment</div>
								</button>
								<button
									type="button"
									onClick={() => setFormData({...formData, type: 'dream'})}
									className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
										formData.type === 'dream'
											? 'border-blue-400 bg-blue-500/20 text-blue-200'
											: 'border-white/20 bg-white/5 text-gray-300 hover:border-white/30'
									}`}
								>
									<Wand2 className="w-6 h-6 mx-auto mb-2" />
									<div className="font-medium">Dream</div>
									<div className="text-sm opacity-75">An imagined vision</div>
								</button>
							</div>
						</div>
						
						{/* Title */}
						<div>
							<label className="block text-white font-medium mb-2">Title</label>
							<input
								type="text"
								value={formData.title}
								onChange={(e) => setFormData({...formData, title: e.target.value})}
								placeholder="Give your creation a name..."
								className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-200"
								required
							/>
						</div>
						
						{/* Description */}
						<div>
							<label className="block text-white font-medium mb-2">
								Your Story
							</label>
							<textarea
								value={formData.description}
								onChange={(e) => setFormData({...formData, description: e.target.value})}
								placeholder="Describe your memory or dream in detail. The more vivid your description, the more beautiful your NFT will be..."
								rows={6}
								className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors duration-200 resize-none"
								required
							/>
						</div>
						
						{/* Style Selection */}
						<div>
							<label className="block text-white font-medium mb-3">Art Style</label>
							<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
								{['dreamy', 'abstract', 'realistic', 'surreal'].map((style) => (
									<button
										key={style}
										type="button"
										onClick={() => setFormData({...formData, style})}
										className={`p-3 rounded-lg border text-center transition-all duration-200 capitalize cursor-pointer ${
											formData.style === style
												? 'border-purple-400 bg-purple-500/20 text-purple-200'
												: 'border-white/20 bg-white/5 text-gray-300 hover:border-white/30'
										}`}
									>
										{style}
									</button>
								))}
							</div>
						</div>
						
						{/* Privacy */}
						<div>
							<label className="block text-white font-medium mb-3">Privacy</label>
							<div className="flex space-x-4">
								<label className="flex items-center">
									<input
										type="radio"
										value="public"
										checked={formData.privacy === 'public'}
										onChange={(e) => setFormData({...formData, privacy: e.target.value})}
										className="mr-2 text-purple-500"
									/>
									<span className="text-gray-300">Public - Available in marketplace</span>
								</label>
								<label className="flex items-center">
									<input
										type="radio"
										value="private"
										checked={formData.privacy === 'private'}
										onChange={(e) => setFormData({...formData, privacy: e.target.value})}
										className="mr-2 text-purple-500"
									/>
									<span className="text-gray-300">Private - Personal collection only</span>
								</label>
							</div>
						</div>
						
						{/* Submit Button */}
						<button
							type="submit"
							disabled={isGenerating}
							className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:from-purple-500 disabled:hover:to-pink-500 cursor-pointer"
						>
							{isGenerating ? (
								<span className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Generating Your NFT...
                </span>
							) : (
								<span className="flex items-center justify-center">
                  <Wand2 className="w-5 h-5 mr-2" />
                  Generate NFT
                </span>
							)}
						</button>
					</form>
				</div>
			</div>
			
			{isGenerating && (
				<div className="w-full h-96 bg-white/10 rounded-lg animate-pulse mt-6"></div>
			)}
			
			{image && !isGenerating && (
				<div className={"flex flex-col items-center"}>
					<Image src={image} alt="Generated visual" className="mt-6 mb-4 max-w-full rounded-xl shadow-xl place-self-center" width={512} height={512} />
					<button
						className="w-fit bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none disabled:hover:from-purple-500 disabled:hover:to-pink-500 cursor-pointer"
					>Feels like you ? Save your {formData.type}</button>
				</div>
			)}
		</section>
	);
};

export default CreateForm;
