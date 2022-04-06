function char_random(str) {
	var elem = str.split("");
	var exit_str = "";
	var colors = new Array("00", "11", "22", "33", "44", "55",
	"66", "77", "88", "99", "AA", "BB", "CC", "DD", "EE", "FF");

	for (var n=0;n<=(elem.length-1);n++) {
		if (elem[n]==" ") exit_str += " ";
		if (elem[n]!=" ") {
			var col1 = Math.round(Math.random()*(colors.length-1));
			var col2 = Math.round(Math.random()*(colors.length-1));
			var col3 = Math.round(Math.random()*(colors.length-1));
			exit_str += "<font color=\"#" + colors[col1] + colors[col2] + colors[col3] +
			"\">" + elem[n] + "</font>";
		}
	}
	document.write(exit_str);
}