$(function () {
  console.log("ready!");

  $.each(golfGames, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-1">
        <div class="card">
          <h2 class="card-title"> ${golfGames[index].author} </h2>
          <div class="card-body"><h3>Game Name: ${golfGames[index].game}</h3></div>

          <div class="card-footer">
            <a class="btn btn-dark" href="${golfGames[index].url}" target="_blank">
            Go have fun!
            </a>
          </div>

        </div>
      </div>
      `);
  });
});
