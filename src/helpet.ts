export type Option = {
	title: string;
	subtext?: string;
	nextStep: string;
	image?: string; // New optional image property
	price?: number;
	score?: number;
};

type Field = {
	fieldname: string;
	type: "text" | "phone" | "email" | "number" | "textarea" | "select";
	required: boolean;
	options?: string[];
};

type FormStep = {
	question: string;
	options?: Option[];
	fields?: Field[];
	nextStep?: string | null;
};

export type FormSteps = {
	[stepname: string]: FormStep;
};

// export const steps: FormSteps = {
// 	start: {
// 		question: "I’ll get you some great options in a minute. Ready to go?",
// 		fields: [
// 			{ fieldname: "Full Name", type: "text", required: true },
// 			{ fieldname: "Phone Number", type: "phone", required: true },
// 		],
// 		nextStep: "addressStep",
// 	},
// 	addressStep: {
// 		question: "Great to meet you! Where's your home located?",
// 		fields: [
// 			{ fieldname: "Address", type: "text", required: true },
// 			{ fieldname: "City", type: "text", required: true },
// 			{ fieldname: "State", type: "text", required: true },
// 			{ fieldname: "Zip Code", type: "text", required: true },
// 		],
// 		nextStep: "interestedInStep",
// 	},
// 	interestedInStep: {
// 		question: "What kind of system would you like?",
// 		options: [
// 			{
// 				title: "Heating",
// 				image: Heating,
// 				subtext: "I like to stay warm",
// 				nextStep: "approxAreaStep",
// 			},
// 			{
// 				title: "Cooling",
// 				image: Cooling,
// 				subtext: "I like to stay cool",
// 				nextStep: "approxAreaStep",
// 			},
// 			{
// 				title: "Heating + Cooling",
// 				image: HeatingCooling,
// 				subtext: "I like to stay happy",
// 				nextStep: "approxAreaStep",
// 			},
// 		],
// 	},
// 	approxAreaStep: {
// 		question: "Approx. Area Served By This System?",
// 		options: [
// 			{
// 				title: "Small",
// 				subtext: "0-1800 sq. ft.",
// 				nextStep: "indoorUnitLocation",
// 			},
// 			{
// 				title: "Medium",
// 				subtext: "1800-3000 sq. ft.",
// 				nextStep: "indoorUnitLocation",
// 			},
// 			{
// 				title: "Large",
// 				subtext: "3000+ sq. ft.",
// 				nextStep: "indoorUnitLocation",
// 			},
// 		],
// 	},
// 	indoorUnitLocation: {
// 		question: "Where is your indoor unit located?",
// 		options: [
// 			{
// 				title: "Basement",
// 				image: Basement,
// 				nextStep: "contactPreferenceStep",
// 			},
// 			{
// 				title: "Crawlspace",
// 				image: Crawlspace,
// 				nextStep: "contactPreferenceStep",
// 			},
// 			{
// 				title: "Garage",
// 				image: Garage,
// 				nextStep: "contactPreferenceStep",
// 			},
// 			{
// 				title: "Attic",
// 				image: Attic,
// 				nextStep: "contactPreferenceStep",
// 			},
// 			{
// 				title: "Closet",
// 				image: Closet,
// 				nextStep: "contactPreferenceStep",
// 			},
// 			{
// 				title: "Wall Mounted",
// 				image: WallMounted,
// 				nextStep: "contactPreferenceStep",
// 			},
// 			{
// 				title: "Packaged Unit",
// 				image: PackagedUnit,
// 				nextStep: "contactPreferenceStep",
// 			},
// 		],
// 	},
// 	contactPreferenceStep: {
// 		question: "How do you prefer to be contacted?",
// 		options: [
// 			{
// 				title: "Phone",
// 				subtext: "We will call you and let you know your quote",
// 				nextStep: "phoneStep",
// 			},
// 			{
// 				title: "Email",
// 				subtext: "We will email you and let you know your quote",
// 				nextStep: "emailStep",
// 			},
// 		],
// 	},
// 	phoneStep: {
// 		question: "Please enter your phone number",
// 		fields: [{ fieldname: "Phone Number", type: "phone", required: true }],
// 		nextStep: "confirmStep",
// 	},
// 	emailStep: {
// 		question: "Please enter your email address",
// 		fields: [{ fieldname: "Email Address", type: "email", required: true }],
// 		nextStep: "confirmStep",
// 	},
// 	confirmStep: {
// 		question: "Do you want to subscribe to our newsletter?",
// 		options: [
// 			{ title: "Yes", subtext: "Subscribe me", nextStep: "thanksStep" },
// 			{ title: "No", subtext: "No thanks", nextStep: "thanksStep" },
// 		],
// 	},
// 	thanksStep: {
// 		question: "Thank you for completing the form!",
// 	},
// };

export const dfySteps: FormSteps = {
	// 1. INITIAL QUALIFICATION

	initialQualificationStep: {
		question: "What is the purpose of your website project?",
		options: [
			{
				title: "Build a new website",
				price: 0,
				score: 5,
				nextStep: "businessCategoryStep",
			},
			{
				title: "Redesign existing website",
				price: 0,
				score: 7,
				nextStep: "currentUrlStep",
			},
			{
				title: "Add features to existing website",
				price: 0,
				score: 7,
				nextStep: "currentUrlStep",
			},
		],
	},

	currentUrlStep: {
		question: "Please provide your current website URL",
		fields: [{ fieldname: "Website URL", type: "text", required: true }],
		nextStep: "businessCategoryStep",
	},

	businessCategoryStep: {
		question: "What best describes you?",
		options: [
			{
				title: "Local Business",
				price: 0,
				score: 5,
				nextStep: "websiteScopeStep",
			},
			{
				title: "Ecommerce Business",
				price: 0,
				score: 8,
				nextStep: "websiteScopeStep",
			},
			{
				title: "Agency/Marketing Company",
				price: 0,
				score: 10,
				nextStep: "agencyBuildingStep",
			},
			{
				title: "Professional Services",
				price: 0,
				score: 6,
				nextStep: "websiteScopeStep",
			},
			{
				title: "Personal Brand/Portfolio",
				price: 0,
				score: 4,
				nextStep: "websiteScopeStep",
			},
			{
				title: "Other (specify)",
				price: 0,
				score: 3,
				nextStep: "websiteScopeStep",
			},
		],
	},

	agencyBuildingStep: {
		question: "Are you building the site for a client or for your agency?",
		options: [
			{
				title: "Building for client",
				price: 0,
				score: 12,
				nextStep: "websiteScopeStep",
			},
			{
				title: "Building for agency",
				price: 0,
				score: 10,
				nextStep: "websiteScopeStep",
			},
		],
	},

	// 2. WEBSITE SCOPE

	websiteScopeStep: {
		question: "What features do you need?",
		options: [
			{
				title: "Showcase Services/Products",
				price: 0,
				score: 10,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Generate Leads",
				price: 0,
				score: 12,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Sell Products Online",
				price: 500,
				score: 15,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Book Appointments",
				price: 200,
				score: 10,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Blog/Content",
				price: 200,
				score: 8,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Portfolio Gallery",
				price: 400,
				score: 12,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Customer Login Area",
				price: 300,
				score: 10,
				nextStep: "pagesRequiredStep",
			},
			{
				title: "Other (specify)",
				price: 0,
				score: 3,
				nextStep: "pagesRequiredStep",
			},
		],
	},

	pagesRequiredStep: {
		question: "What pages are required?",
		options: [
			{
				title: "Home Page",
				price: 200,
				score: 5,
				nextStep: "additionalPagesStep",
			},
			{
				title: "About Page",
				price: 50,
				score: 3,
				nextStep: "additionalPagesStep",
			},
			{
				title: "Contact Page",
				price: 50,
				score: 3,
				nextStep: "additionalPagesStep",
			},
		],
	},

	additionalPagesStep: {
		question: "Select additional pages based on your needs:",
		options: [
			{
				title: "Number of Service Pages",
				price: 50,
				score: 6,
				nextStep: "leadGenerationFeaturesStep",
			},
			{
				title: "Product Listing Page",
				price: 50,
				score: 6,
				nextStep: "leadGenerationFeaturesStep",
			},
			{
				title: "Portfolio Listing",
				price: 200,
				score: 8,
				nextStep: "leadGenerationFeaturesStep",
			},
			{
				title: "Blog Listing",
				price: 200,
				score: 6,
				nextStep: "leadGenerationFeaturesStep",
			},
		],
	},

	// 3. LEAD GENERATION FEATURES

	leadGenerationFeaturesStep: {
		question: "Select form types needed:",
		options: [
			{
				title: "Contact Form",
				price: 50,
				score: 5,
				nextStep: "leadCaptureToolsStep",
			},
			{
				title: "Quote Request Form",
				price: 100,
				score: 6,
				nextStep: "leadCaptureToolsStep",
			},
			{
				title: "Booking Form",
				price: 150,
				score: 7,
				nextStep: "leadCaptureToolsStep",
			},
			{
				title: "Multi-step Lead Form",
				price: 200,
				score: 8,
				nextStep: "leadCaptureToolsStep",
			},
			{
				title: "Newsletter Signup",
				price: 50,
				score: 4,
				nextStep: "leadCaptureToolsStep",
			},
			{
				title: "Custom Forms",
				price: 150,
				score: 6,
				nextStep: "leadCaptureToolsStep",
			},
		],
	},

	leadCaptureToolsStep: {
		question: "Additional lead tools needed:",
		options: [
			{
				title: "Live Chat",
				price: 100,
				score: 7,
				nextStep: "integrationsStep",
			},
			{
				title: "Callback Request",
				price: 75,
				score: 6,
				nextStep: "integrationsStep",
			},
			{
				title: "Pop-up Forms",
				price: 100,
				score: 7,
				nextStep: "integrationsStep",
			},
			{
				title: "Exit Intent Pop-up",
				price: 150,
				score: 8,
				nextStep: "integrationsStep",
			},
		],
	},

	// 4. INTEGRATIONS

	integrationsStep: {
		question: "Select required integrations:",
		options: [
			{
				title: "Email Marketing Platform",
				price: 100,
				score: 8,
				nextStep: "marketingFeaturesStep",
			},
			{
				title: "CRM System",
				price: 200,
				score: 10,
				nextStep: "marketingFeaturesStep",
			},
			{
				title: "Payment Gateway",
				price: 250,
				score: 12,
				nextStep: "marketingFeaturesStep",
			},
			{
				title: "Booking System",
				price: 300,
				score: 12,
				nextStep: "marketingFeaturesStep",
			},
			{
				title: "Analytics",
				price: 100,
				score: 7,
				nextStep: "marketingFeaturesStep",
			},
			{
				title: "Social Media",
				price: 100,
				score: 6,
				nextStep: "marketingFeaturesStep",
			},
		],
	},

	marketingFeaturesStep: {
		question: "Select marketing tools needed:",
		options: [
			{
				title: "Basic SEO Setup",
				price: 200,
				score: 8,
				nextStep: "seoAdvancedStep",
			},
			{
				title: "Advanced SEO Tools",
				price: 400,
				score: 12,
				nextStep: "seoAdvancedStep",
			},
			{
				title: "Social Media Integration",
				price: 150,
				score: 7,
				nextStep: "seoAdvancedStep",
			},
			{
				title: "Review System",
				price: 200,
				score: 9,
				nextStep: "seoAdvancedStep",
			},
		],
	},

	seoAdvancedStep: {
		question: "Do you need advanced SEO tools or setup?",
		options: [
			{
				title: "Yes",
				price: 400,
				score: 12,
				nextStep: "budgetTimelineStep",
			},
			{
				title: "No",
				price: 0,
				score: 5,
				nextStep: "budgetTimelineStep",
			},
		],
	},

	// 5. BUDGET & TIMELINE

	budgetTimelineStep: {
		question: "Select your budget range and timeline:",
		options: [
			{
				title: "Under $1,000",
				price: 0,
				score: 3,
				nextStep: "contactInformationStep",
			},
			{
				title: "$1,000 - $2,500",
				price: 1000,
				score: 5,
				nextStep: "contactInformationStep",
			},
			{
				title: "$2,500 - $5,000",
				price: 2500,
				score: 8,
				nextStep: "contactInformationStep",
			},
			{
				title: "$5,000 - $10,000",
				price: 5000,
				score: 10,
				nextStep: "contactInformationStep",
			},
			{
				title: "$10,000+",
				price: 10000,
				score: 12,
				nextStep: "contactInformationStep",
			},
		],
	},

	// 6. CONTACT INFORMATION

	contactInformationStep: {
		question: "Please provide your contact information",
		fields: [
			{ fieldname: "Name", type: "text", required: true },
			{ fieldname: "Email", type: "email", required: true },
			{ fieldname: "Phone", type: "phone", required: true },
			{ fieldname: "Company Name", type: "text", required: false },
			{
				fieldname: "Best Time to Contact",
				type: "text",
				required: false,
			},
			{
				fieldname: "How did you hear about us?",
				type: "text",
				required: false,
			},
		],
		nextStep: null,
	},

	thankYouStep: {
		question: "Thank you for completing the form!",
	},
};
