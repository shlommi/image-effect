async function init() {
  let rustApp = null;
  try {
    rustApp = await import('../pkg');
  } catch (e) {
    console.log(e);
    return;
  }

  console.log(rustApp);
  const inputEl = document.getElementById('upload');
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ''
    );
    let image_data_url = rustApp.grayscale(base64);
    document.getElementById('new-img').setAttribute('src', image_data_url);
  };

  inputEl.addEventListener('change', () => {
    fileReader.readAsDataURL(inputEl.files[0]);
  });
}

init();
