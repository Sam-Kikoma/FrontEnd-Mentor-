async function getData() {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
}
