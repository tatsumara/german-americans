const container = document.getElementsByClassName('box_container');
for (i = container[0].children.length; i >= 0; i--) {
	container[0].appendChild(container[0].children[Math.random() * i | 0]);
}