const result = document.querySelector(".result");

const fetchData = async () => {
  //console.log("fetch data called");
  try {
    // const { data } = await axios.get("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/1-hello");
    //console.log(data);
    result.textContent = data;
    // result.innerHTML = data;
  } catch (error) {
    console.log(error.response);
  }
};
fetchData();
