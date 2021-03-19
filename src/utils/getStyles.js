export default getStyles = (data = [], title) => {
  let index;

  for (let i = 0; i < data.length; i++) {
    index = data[i].data.find((sd) => sd.title === title);

    if (index) {
      if (data[i].data.length === 1) {
        return "single";
      } else if (index.id === 0) {
        return "first";
      } else if (data[i].data[data[i].data.length - 1].id === index.id) {
        return "last";
      } else {
        return "middle";
      }
    }
  }
};
