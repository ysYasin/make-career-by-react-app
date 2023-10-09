const LoadDetailData = (id) => {
  let loadedData = [];
  fetch("feature.json")
    .then((res) => res.json())
    .then((data) => {
      const findData = data.find((d) => d.id === id);
      loadedData.push(findData);
    });

  return loadedData;
};

export default LoadDetailData;
