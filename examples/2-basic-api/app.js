const result = document.querySelector(".result");

const fetchData = async () => {
  //console.log("fetch data called");
  try {
    // const { data } = await axios.get("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/2-basics-api");
    //console.log(data);

    const Products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;
        return ` <article class="product">
              <img
                src=${url}
                alt="utopia sofa"
              />
              <div class="info">
                <h5>${name}</h5>
                <h5 class="price">${price}</h5>
              </div>
            </article>`;
      })
      .join("");
    result.innerHTML = Products;
    //result.textContent = "Success";
  } catch (error) {
    //console.log(error.response);
    result.textContent = "Error happened";
  }
};
fetchData();
