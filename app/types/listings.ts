export default interface Listing {
    Id: number;
    ThumbnailURL: string;
    Title: string;
    Location: string;
    Bedrooms: number;
    Bathrooms: number;
    Parking: number;
    "Sale Price": number;
    DateListed: string;
    Description: string;
    PictureURL: string;
    Sqft: number;
    YearBuilt: number;
  }