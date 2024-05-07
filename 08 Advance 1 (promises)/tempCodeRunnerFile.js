fetch('https://api.github.com/users/vedicamrudul')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

  // this is the best code format where error is handled in then() also ig kab server tak pohoche but data nai mila ya sm