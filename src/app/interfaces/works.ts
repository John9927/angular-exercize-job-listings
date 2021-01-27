  export interface Flags {
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
    flags: Flags;
    description: Description;
    tags: string[];
  }

  export interface Work {
  }


