const searchCriteria = [
  {
    id: "abv",
    text: "Search only for beers above 6%",
    search: "&abv_gt=6",
  },
  {
    id: "brewed-before",
    text: "Search for beers brewed before 2010",
    search: "&brewed_before=01-2010",
  },
  // {
  //   id: "colour",
  //   text: "Search for dark beers",
  //   search: "&ebc_gt=30",
  // },
];
export default searchCriteria;
