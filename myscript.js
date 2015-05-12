function draw () {
	var canvas = document.getElementById("canvas");
	if (canvas.getContext){
		console.log("asdfsadfsdf");
		var ctx = canvas.getContext("2d");
		console.log(ctx);
		ctx.fillStyle = "rgb(200,0,0)";
		console.log(ctx);
		ctx.fillRect = (10, 10, 55, 50);
		console.log(ctx);

		ctx.fillStyle = "rgba(0, 0, 55, 0.5)";
		console.log(ctx);
		ctx.fillRect = (30, 30, 55, 50);
		console.log(ctx);
	}

}	