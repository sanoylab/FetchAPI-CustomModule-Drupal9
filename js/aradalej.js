const dom = document.querySelector("#render-ad");

const getAd = async () => {
  const response = await fetch("https://kuralio.herokuapp.com/api/v1/ads");
  const data = await response.json();
  console.log(response);
  let adData = `<div class="row">`;
  data.forEach((ad) => {
    adData += `<div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src=${ad.pictures[0].url} width="100%" />
      <div class="card-body">
        <h5>${ad.title}</h5>
       

      </div>
    </div>
  </div>`;
  });
  dom.innerHTML = adData + "</div>";
};

getAd();
