export interface IExhibit {
  title: string;
  month: string;
  city?: string;
  url?: string;
}

const exhibitions: IExhibit[] = [
  {
    title:
      "2023 David Shepherd Wildlife Foundation Wildlife Artist of the Year Exhibition, the Mall Galleries",
    month: "September 2023",
    city: "London, UK",
  },
  {
    title: "Solo Exhibition, Meadowridge Public Library.",
    month: "June - September 2023",
    city: "Madison, WI USA",
  },
  {
    title: '"Hygge: A Pop Up Gallery", group show.',
    month: "November 2022",
    city: "Milwaukee, WI USA",
  },
  {
    title: '"Our Aquatic Planet" Solo Show, The Art Connective',
    month: "May 2022",
    city: "Green Bay, WI USA",
  },
  {
    title: "A Year in Review, the Art Garage",
    month: "December 2021",
    city: " Green Bay, WI USA",
  },
  {
    title: '"Critters" 4th Annual Juried Show, The Art Connective',
    month: "December 2021",
    city: "Green Bay, WI USA",
  },
  {
    title: "The December Group Art Show, the Jones Gallery",
    month: "December 2021",
    city: "Kansas City, MO USA",
  },
  {
    title: "The Locals, an art exhibition",
    month: "November 2021",
    city: "Milwaukee, WI USA",
  },
  {
    title: "Art Fluent: Into The Wild - Online Exhibition",
    month: "November 2021",
    city: "Milwaukee, WI USA",
  },
  {
    title: "Las Laguna Art Gallery - Online Exhibition",
    month: "October 2021",
  },
  {
    title: "The East Side Art Lot",
    month: "June 2021",
    city: "Milwaukee, WI USA",
  },
  {
    title: "ENDANGERED: Art4Apes Fine Art and Photography Exhibition",
    url: "www.art4apes.com",
    month: "November 2020",
  },
  {
    title:
      "Focus on Nature XIV, the New York State Museum and the Roger Tory Peterson Institute",
    url: "http://www.nysm.nysed.gov/fon",
    month: "December 2016",
    city: "Jamestown, NY USA",
  },
  {
    title: "Atlanta Arab Fest art show",
    month: "April 2014",
    city: "Atlanta, GA USA",
  },
];

export default exhibitions;
