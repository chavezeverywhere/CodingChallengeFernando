import axios from "axios";

const APIurl = "https://applefacilities.review.blueriver.com/index.cfm/_api/json/v1/scv/building/?andOpenGrouping&locationCode%5B0%5D=sqo&or&locationCode%5B2%5D=nwr&or&locationCode%5B4%5D=scv&or&locationCode%5B6%5D=sfo&closeGrouping&fields=buildingname,buildingabbr,lat,lng,black,buildingZone&active=1&cachedwithin=600";

export const requestToAPI = async() => {
  try {
    const result = await axios.get(APIurl);
    return result.data.data;
  } 
  catch (e) {
    throw e;
  }
};
