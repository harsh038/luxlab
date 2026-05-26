export type ListingStatus =
  | "Draft"
  | "Pending Approval"
  | "Live"
  | "Pending Edit Approval"
  | "Rejected"
  | "Expired";

export type Listing = {
  slug: string;
  title: string;
  type: string;
  listingType: "For sale" | "For rent";
  price: string;
  city: string;
  country: string;
  area: string;
  beds: number;
  baths: number;
  size: string;
  status: ListingStatus;
  image: string;
  gallery: string[];
  amenities: string[];
  description: string;
  broker: string;
  company: string;
  inquiries: number;
};

export const listings: Listing[] = [
  {
    slug: "sea-facing-villa-goa",
    title: "Sea Facing Villa with Private Pool",
    type: "Villa",
    listingType: "For sale",
    price: "$3,850,000",
    city: "Goa",
    country: "India",
    area: "Assagao",
    beds: 5,
    baths: 6,
    size: "8,200 sqft",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Swimming pool", "Private garden", "Ocean view", "Smart home", "Security"],
    description:
      "A contemporary coastal estate designed for quiet entertaining, with layered courtyards, sea-facing terraces, and a private pool framed by mature palms.",
    broker: "Mira Kapoor",
    company: "Coastal Prime Realty",
    inquiries: 18
  },
  {
    slug: "skyline-penthouse-mumbai",
    title: "Skyline Penthouse above Marine Drive",
    type: "Penthouse",
    listingType: "For sale",
    price: "$8,600,000",
    city: "Mumbai",
    country: "India",
    area: "South Mumbai",
    beds: 4,
    baths: 5,
    size: "6,400 sqft",
    status: "Pending Edit Approval",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Elevator", "Gym", "Home theater", "Concierge", "City view"],
    description:
      "A full-floor penthouse with wraparound views, private lift access, Italian marble finishes, and a formal entertaining lounge overlooking the bay.",
    broker: "Arjun Mehta",
    company: "Metro Luxe Homes",
    inquiries: 31
  },
  {
    slug: "private-farmhouse-ahmedabad",
    title: "Private Weekend Farmhouse Estate",
    type: "Farmhouse",
    listingType: "For rent",
    price: "$22,000 / month",
    city: "Ahmedabad",
    country: "India",
    area: "Sanand",
    beds: 7,
    baths: 8,
    size: "14,500 sqft",
    status: "Pending Approval",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Private garden", "Parking", "Security", "Outdoor kitchen", "Guest house"],
    description:
      "A gated farmhouse retreat built for long weekends, private events, and family stays with generous lawns and a separate guest pavilion.",
    broker: "Dev Shah",
    company: "Western Estates",
    inquiries: 9
  },
  {
    slug: "beach-house-alibaug",
    title: "Minimal Beach House near Mandwa Jetty",
    type: "Beach house",
    listingType: "For sale",
    price: "$2,450,000",
    city: "Alibaug",
    country: "India",
    area: "Mandwa",
    beds: 4,
    baths: 4,
    size: "5,150 sqft",
    status: "Live",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1400&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1200&q=85"
    ],
    amenities: ["Ocean view", "Private deck", "Solar power", "Staff quarters", "Security"],
    description:
      "A low-slung beach home with warm timber interiors, open living spaces, and direct access to a quiet stretch of coastline.",
    broker: "Naina Rao",
    company: "Shoreline Collective",
    inquiries: 22
  }
];

export const brokerMetrics = {
  credits: 186,
  activeListings: 42,
  pendingListings: 11,
  expiredListings: 7,
  totalInquiries: 312,
  revenue: "$12,834"
};

export const journalPosts = [
  {
    title: "Top Luxury Villas in Goa for Coastal Living",
    category: "Coastal Living",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Private courtyards, sea-facing decks, and a slower architectural rhythm define Goa's most desirable homes."
  },
  {
    title: "Best Areas for Luxury Living in Mumbai",
    category: "City Guide",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=85",
    excerpt: "From bay-facing penthouses to quiet heritage addresses, Mumbai's prime pockets reward restraint and rarity."
  },
  {
    title: "Why Luxury Farmhouses Are Rising in Gujarat",
    category: "Market Notes",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85",
    excerpt: "Weekend estates are evolving into private lifestyle compounds shaped around privacy, landscape, and hosting."
  }
];

export const blogPosts = journalPosts.map((post) => post.title);

export const locations = ["Goa", "Mumbai", "Ahmedabad", "Alibaug", "Dubai", "New Delhi"];
export const categories = ["Luxury villas", "Penthouses", "Farmhouses", "Beach houses"];

export const destinations = [
  {
    name: "Goa",
    href: "/luxury-homes/goa",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=85",
    note: "Coastal villas and private retreats"
  },
  {
    name: "Dubai",
    href: "/luxury-homes/dubai",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=85",
    note: "Skyline residences and waterfront estates"
  },
  {
    name: "Mumbai",
    href: "/luxury-homes/mumbai",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=1200&q=85",
    note: "Penthouses above the bay"
  },
  {
    name: "Alibaug",
    href: "/luxury-homes/alibaug",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    note: "Quiet beach houses and weekend homes"
  },
  {
    name: "Ahmedabad",
    href: "/luxury-homes/ahmedabad",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    note: "Private farm estates"
  },
  {
    name: "New Delhi",
    href: "/luxury-homes/new-delhi",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85",
    note: "Grand homes and diplomatic enclaves"
  }
];

export const collections = [
  {
    name: "Beachfront Villas",
    href: "/luxury-villas",
    image:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Sky Penthouses",
    href: "/penthouses",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Private Estates",
    href: "/farmhouses",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=85"
  },
  {
    name: "Modern Retreats",
    href: "/beach-houses",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
  }
];
