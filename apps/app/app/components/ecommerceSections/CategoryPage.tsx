import React, { useState } from "react";
import { Filter, Grid, List, ChevronDown, Star, Heart, ShoppingCart, Search, X, SlidersHorizontal, ArrowUpDown, Eye, Plus, Minus, Check } from "lucide-react";

// Mock product data
const mockProducts = [
	{
		id: 1,
		name: "Premium Wireless Headphones",
		price: 199,
		originalPrice: 249,
		rating: 4.8,
		reviews: 127,
		image: "🎧",
		category: "Electronics",
		brand: "TechSound",
		colors: ["black", "white", "blue"],
		inStock: true,
		isNew: false,
		onSale: true,
	},
	{
		id: 2,
		name: "Organic Cotton T-Shirt",
		price: 35,
		originalPrice: null,
		rating: 4.6,
		reviews: 89,
		image: "👕",
		category: "Clothing",
		brand: "EcoWear",
		colors: ["white", "black", "gray"],
		inStock: true,
		isNew: true,
		onSale: false,
	},
	{
		id: 3,
		name: "Leather Crossbody Bag",
		price: 89,
		originalPrice: 120,
		rating: 4.9,
		reviews: 203,
		image: "👜",
		category: "Accessories",
		brand: "StyleCraft",
		colors: ["brown", "black", "tan"],
		inStock: false,
		isNew: false,
		onSale: true,
	},
	{
		id: 4,
		name: "Smart Fitness Watch",
		price: 299,
		originalPrice: null,
		rating: 4.7,
		reviews: 156,
		image: "⌚",
		category: "Electronics",
		brand: "FitTech",
		colors: ["black", "silver", "rose"],
		inStock: true,
		isNew: true,
		onSale: false,
	},
	{
		id: 5,
		name: "Minimalist Desk Lamp",
		price: 75,
		originalPrice: 95,
		rating: 4.5,
		reviews: 78,
		image: "💡",
		category: "Home",
		brand: "ModernLight",
		colors: ["white", "black"],
		inStock: true,
		isNew: false,
		onSale: true,
	},
	{
		id: 6,
		name: "Running Shoes",
		price: 120,
		originalPrice: null,
		rating: 4.8,
		reviews: 234,
		image: "👟",
		category: "Footwear",
		brand: "SportMax",
		colors: ["white", "black", "red"],
		inStock: true,
		isNew: false,
		onSale: false,
	},
];

// Product Card Component
export function ProductCard({ product, viewMode = "grid" }) {
	const [isWishlisted, setIsWishlisted] = useState(false);

	if (viewMode === "list") {
		return (
			<div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
				<div className="flex gap-4">
					<div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">{product.image}</div>
					<div className="flex-1 min-w-0">
						<div className="flex items-start justify-between">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
								<p className="text-sm text-gray-500">{product.brand}</p>
								<div className="flex items-center mt-1">
									<div className="flex items-center">
										<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
										<span className="text-sm text-gray-700 ml-1">{product.rating}</span>
									</div>
									<span className="text-sm text-gray-500 ml-2">({product.reviews} reviews)</span>
								</div>
							</div>
							<div className="text-right">
								<div className="flex items-center gap-2">
									{product.originalPrice && <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>}
									<span className="text-lg font-bold text-gray-900">${product.price}</span>
								</div>
								<div className="flex items-center gap-2 mt-2">
									<button onClick={() => setIsWishlisted(!isWishlisted)} className={`p-2 rounded-full border transition-colors ${isWishlisted ? "text-red-500 border-red-500" : "text-gray-400 border-gray-300 hover:text-red-500"}`}>
										<Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
									</button>
									<button className={`px-4 py-2 rounded-lg font-medium transition-colors ${product.inStock ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`} disabled={!product.inStock}>
										{product.inStock ? "Add to Cart" : "Out of Stock"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
			<div className="relative">
				<div className="aspect-square bg-gray-100 flex items-center justify-center text-6xl">{product.image}</div>
				{product.isNew && <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-medium rounded">New</span>}
				{product.onSale && <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded">Sale</span>}
				<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity">
					<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<button onClick={() => setIsWishlisted(!isWishlisted)} className={`p-2 rounded-full bg-white shadow-md transition-colors ${isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-500"}`}>
							<Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
						</button>
					</div>
					<div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
						<button className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
							<Eye className="h-4 w-4" />
							Quick View
						</button>
					</div>
				</div>
			</div>

			<div className="p-4">
				<h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
				<p className="text-xs text-gray-500 mb-2">{product.brand}</p>

				<div className="flex items-center mb-2">
					<div className="flex items-center">
						<Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
						<span className="text-xs text-gray-700 ml-1">{product.rating}</span>
					</div>
					<span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-1">
						{product.originalPrice && <span className="text-xs text-gray-500 line-through">${product.originalPrice}</span>}
						<span className="text-sm font-bold text-gray-900">${product.price}</span>
					</div>

					<button className={`p-2 rounded-lg transition-colors ${product.inStock ? "text-blue-600 hover:bg-blue-50" : "text-gray-400 cursor-not-allowed"}`} disabled={!product.inStock} title={product.inStock ? "Add to cart" : "Out of stock"}>
						<ShoppingCart className="h-4 w-4" />
					</button>
				</div>
			</div>
		</div>
	);
}

// Filter Sidebar Component
export function FilterSidebar({ isOpen, onClose }) {
	const [priceRange, setPriceRange] = useState([0, 500]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const [selectedColors, setSelectedColors] = useState([]);

	const brands = ["TechSound", "EcoWear", "StyleCraft", "FitTech", "ModernLight", "SportMax"];
	const colors = [
		{ name: "Black", value: "black", class: "bg-black" },
		{ name: "White", value: "white", class: "bg-white border border-gray-300" },
		{ name: "Gray", value: "gray", class: "bg-gray-500" },
		{ name: "Blue", value: "blue", class: "bg-blue-500" },
		{ name: "Red", value: "red", class: "bg-red-500" },
		{ name: "Brown", value: "brown", class: "bg-amber-700" },
	];

	const toggleBrand = (brand) => {
		setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]));
	};

	const toggleColor = (color) => {
		setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
	};

	return (
		<>
			{/* Mobile overlay */}
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

			{/* Sidebar */}
			<div className={`fixed lg:static inset-y-0 left-0 w-80 bg-white border-r transform transition-transform z-50 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
				<div className="p-6">
					<div className="flex items-center justify-between mb-6 lg:hidden">
						<h2 className="text-lg font-semibold">Filters</h2>
						<button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
							<X className="h-5 w-5" />
						</button>
					</div>

					<div className="space-y-6">
						{/* Price Range */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
							<div className="space-y-2">
								<div className="flex items-center justify-between text-sm text-gray-600">
									<span>${priceRange[0]}</span>
									<span>${priceRange[1]}</span>
								</div>
								<input type="range" min="0" max="500" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
							</div>
						</div>

						{/* Brands */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Brand</h3>
							<div className="space-y-2">
								{brands.map((brand) => (
									<label key={brand} className="flex items-center">
										<input type="checkbox" checked={selectedBrands.includes(brand)} onChange={() => toggleBrand(brand)} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
										<span className="ml-2 text-sm text-gray-700">{brand}</span>
									</label>
								))}
							</div>
						</div>

						{/* Colors */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
							<div className="flex flex-wrap gap-2">
								{colors.map((color) => (
									<button
										key={color.value}
										onClick={() => toggleColor(color.value)}
										className={`w-8 h-8 rounded-full ${color.class} ${selectedColors.includes(color.value) ? "ring-2 ring-offset-2 ring-blue-500" : "hover:scale-110"} transition-transform`}
										title={color.name}
									/>
								))}
							</div>
						</div>

						{/* Rating */}
						<div>
							<h3 className="text-sm font-medium text-gray-900 mb-3">Rating</h3>
							<div className="space-y-2">
								{[4, 3, 2, 1].map((rating) => (
									<label key={rating} className="flex items-center">
										<input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
										<div className="ml-2 flex items-center">
											{[...Array(5)].map((_, i) => (
												<Star key={i} className={`h-3 w-3 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
											))}
											<span className="text-sm text-gray-600 ml-1">& up</span>
										</div>
									</label>
								))}
							</div>
						</div>

						{/* Clear Filters */}
						<button className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Clear All Filters</button>
					</div>
				</div>
			</div>
		</>
	);
}

// Category Header Component
export function CategoryHeader({ title, productCount, viewMode, setViewMode, sortBy, setSortBy, onFilterToggle }) {
	const sortOptions = [
		{ value: "featured", label: "Featured" },
		{ value: "price-low", label: "Price: Low to High" },
		{ value: "price-high", label: "Price: High to Low" },
		{ value: "rating", label: "Highest Rated" },
		{ value: "newest", label: "Newest" },
	];

	return (
		<div className="bg-white border-b">
			<div className="px-6 py-4">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
					<div>
						<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
						<p className="text-sm text-gray-600 mt-1">{productCount} products</p>
					</div>

					<div className="flex items-center gap-4">
						{/* Mobile Filter Button */}
						<button onClick={onFilterToggle} className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
							<SlidersHorizontal className="h-4 w-4" />
							Filters
						</button>

						{/* Sort Dropdown */}
						<div className="relative">
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
							>
								{sortOptions.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</select>
							<ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
						</div>

						{/* View Toggle */}
						<div className="flex border border-gray-300 rounded-lg">
							<button onClick={() => setViewMode("grid")} className={`p-2 ${viewMode === "grid" ? "bg-gray-100" : "hover:bg-gray-50"}`}>
								<Grid className="h-4 w-4" />
							</button>
							<button onClick={() => setViewMode("list")} className={`p-2 border-l border-gray-300 ${viewMode === "list" ? "bg-gray-100" : "hover:bg-gray-50"}`}>
								<List className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Breadcrumb Component
export function Breadcrumb() {
	const items = [
		{ label: "Home", href: "/" },
		{ label: "Categories", href: "/categories" },
		{ label: "Electronics", href: "/categories/electronics" },
	];

	return (
		<nav className="bg-white border-b px-6 py-3">
			<div className="flex items-center space-x-2 text-sm">
				{items.map((item, index) => (
					<div key={item.href} className="flex items-center">
						{index > 0 && <span className="text-gray-400 mx-2">/</span>}
						<a href={item.href} className={`${index === items.length - 1 ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-700"}`}>
							{item.label}
						</a>
					</div>
				))}
			</div>
		</nav>
	);
}

// Main Category Page Component
export function CategoryPage() {
	const [viewMode, setViewMode] = useState("grid");
	const [sortBy, setSortBy] = useState("featured");
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [products] = useState(mockProducts);

	return (
		<div className="min-h-screen bg-gray-50">
			<Breadcrumb />
			<CategoryHeader title="Electronics" productCount={products.length} viewMode={viewMode} setViewMode={setViewMode} sortBy={sortBy} setSortBy={setSortBy} onFilterToggle={() => setIsFilterOpen(!isFilterOpen)} />

			<div className="flex">
				<FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

				<div className="flex-1 p-6">
					<div className={`${viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}`}>
						{products.map((product) => (
							<ProductCard key={product.id} product={product} viewMode={viewMode} />
						))}
					</div>

					{/* Pagination */}
					<div className="mt-12 flex items-center justify-center">
						<div className="flex items-center space-x-2">
							<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-500 hover:bg-gray-50">Previous</button>
							{[1, 2, 3, 4, 5].map((page) => (
								<button key={page} className={`px-3 py-2 rounded-lg text-sm font-medium ${page === 1 ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"}`}>
									{page}
								</button>
							))}
							<button className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">Next</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
