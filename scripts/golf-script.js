$(function () {
  console.log("ready!");

  $.each(golfGames, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-5 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${golfGames[index].game} </h2>
          <div class="card-body">${golfGames[index].author}</div>
          <div class="card-footer">
            <button class="btn btn-primary">game link</button>
          </div>
        </div>
      </div>
      `);
  });
});
