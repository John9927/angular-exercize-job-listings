export interface ListingFlags {​​​​​
  new: boolean;
  featured: boolean;
}​​​​​
export interface Description {​​​​​
  features: string;
  data: string;
  day: number;
  contract: string;
  location: string;
}​​​​​

export interface Work { ​​​​​
  id?: number;
  img: string;
  tech: string[];
  listingFlags: ListingFlags;
  description: Description;
  tags: string[];
}​​​​​
