import { getAppyedCart } from "./utilities/fakedb";

async function fetchingData() {
  const res = await fetch("feature.json");
  const data = await res.json();
  return data;
}

// Match Data for displaying Job details
async function LoadDetailData(id) {
  const datas = await fetchingData(); // Await the result of fetchingData
  const findData = datas.find((d) => d.id === id);
  return findData;
}

async function gettingDataFromDb() {
  const applyedData = [];
  const data = await fetchingData(); // Await the result of fetchingData
  const DbData = getAppyedCart();
  for (let id in DbData) {
    const findingData = data.find((d) => d.id === id);
    applyedData.push(findingData);
  }
  return applyedData;
}

export { LoadDetailData, gettingDataFromDb };
