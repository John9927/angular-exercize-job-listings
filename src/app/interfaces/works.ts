  export interface ListingFlags {
      new: boolean;
      featured: boolean;
  }

  export interface Description {
    features: string;
    data: string;
    contract: string;
    location: string;
  }

  export interface Datum {
    id: number;
    img: string;
    tech: string[];
    listingFlags: ListingFlags;
    description: Description;
    tags: string[];
  }

  export interface Work {
    data: Datum[];
  }


