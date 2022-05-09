export const renderImage = (file) => {
  return new Promise((res) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      res(e.target.result);
    };
    reader.readAsDataURL(file);
  });
};

export const getParams = () => {
  //?editor=1
  const url = new URL(location.href);
  let editor = 1;
  if (url.search) {
    editor = url.search.split("=")[1];
  }
  return editor;
};
