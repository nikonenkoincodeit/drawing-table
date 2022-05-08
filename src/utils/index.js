export const renderImage = (file) => {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      res(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};
