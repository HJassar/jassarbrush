export interface IExhibit {
  title: string;
  month: string;
  city?: string;
  url?: string;
}

const exhibitions: IExhibit[] = [
  {
    title: '"Our Aquatic Planet" Solo Show, Artless Bastard Gallery',
    month: "May 2022",
    city: "Green Bay, WI USA",
  },
  {
    title: "A Year in Review, the Art Garage",
    month: "Dec 2021",
    city: " Green Bay, WI USA",
  },
  {
    title: '"Critters" 4th Annual Juried Show, Artless Bastard Gallery',
    month: "Dec 2021",
    city: "Green Bay, WI USA",
  },
  {
    title: "The December Group Art Show, the Jones Gallery",
    month: "Dec 2021",
    city: "Kansas City, MO USA",
  },
  {
    title: "The Locals, an art exhibition",
    month: "Nov 2021",
    city: "Milwaukee, WI USA",
  },
  {
    title: "Art Fluent: Into The Wild - Online Exhibition",
    month: "Nov 2021",
    city: "Milwaukee, WI USA",
  },
  {
    title: "Las Laguna Art Gallery - Online Exhibition",
    month: "Oct 2021",
  },
  {
    title: "The East Side Art Lot",
    month: "Jun 2021",
    city: "Milwaukee, WI USA",
  },
  {
    title: "ENDANGERED: Art4Apes Fine Art and Photography Exhibition",
    url: "www.art4apes.com",
    month: "Nov 2020",
  },
  {
    title:
      "Focus on Nature XIV, the New York State Museum and the Roger Tory Peterson Institute",
    url: "http://www.nysm.nysed.gov/fon",
    month: "Dec 2016",
    city: "Jamestown, NY USA",
  },
  {
    title: "Atlanta Arab Fest art show",
    month: "Apr 2014",
    city: "Atlanta, GA USA",
  },
];

export default exhibitions;