function createTable(users, msg, time){
	for (var i =0; i <4;i++){
		var row = createRow(users, msg, time, i);
		document.getElementById('test').appendChild(row);
	}

}

function createRow(users,msg, time, p){
	// users are the names need
	//
	var userArray = users.split("/");
	var msgArray = msg.split("/");
	var timeArray = time.split("/");


	// constructing row
	var row = document.createElement("tr");
	row.value = "priority" + p;

	// start constructing pC
	var priorityCell = document.createElement("td");
	priorityCell.innerHTML = p;
		// end construcing pC

	/*
	      	 	row
	   pC 	 sC    mC  tC
		   selector 
		   option(4)
	*/

	// strat constructing sC
	var selectorCell = document.createElement("td");
	selectorCell.id = "users";
	var selector = document.createElement("select");
	selector.setAttribute("id", p);
	selector.setAttribute("onchange", "selectorTrigger(this.value, this.id)");

	selectorCell.appendChild(selector);


	for (var i = 0; i < userArray.length; i++){ 

		var option = document.createElement("option");
		option.value = msgArray[i] + "/" + timeArray[i];
		option.appendChild(document.createTextNode(userArray[i]));
		selector.appendChild(option);
	}
	// end constructing sC

	// start constructing mC
	var msgCell = document.createElement("td");
	msgCell.setAttribute("id", "message" + p);
	//end constructing mC

	// start constructing tC
	var timeCell = document.createElement("td");
	timeCell.setAttribute("id", "time" + p);
	// end constructing tC

	row.appendChild(priorityCell);
	row.appendChild(selectorCell);
	row.appendChild(msgCell);
	row.appendChild(timeCell);

	return row;
}

function selectorTrigger(value, p) {
	// body...
	var tam = value.split("/");

	var msg = tam[0];
	var time = tam[1]; 

	var message = document.getElementById('message' + p);
	message.innerHTML = msg;
	var timeCell = document.getElementById('time' + p);
	timeCell.innerHTML = time;
}