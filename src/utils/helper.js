export const filterData = (searchText, allRestaurant) => {
  // console.log("searchText " + searchText);
  return allRestaurant.filter((res) =>
    res?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
};
