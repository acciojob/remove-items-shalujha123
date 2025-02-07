//your JS code here. If required.
let input = document.querySelector("input")
let colors = document.querySelectorAll("#colorSelect option")

input.addEventListener("click",()=>{
	let selected = document.querySelector("#colorSelect option:checked")
	colors.forEach((color)=>{
		if(color.value === selected.value){
			color.remove()
		}
	})
})







// input.addEventListener("click",()=>{
// 	let list = document.getElementById("colorSelect")
// 	list.remove(list.selectedIndex)
// })