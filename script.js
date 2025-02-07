//your JS code here. If required.
let input = document.querySelector("input")
input.addEventListener("click",()=>{
	let list = document.getElementById("colorSelect")
	list.remove(list.selectedIndex)
})