//Text parsing from json
const nodes = ["st", "h1", "coding_cat", "u_st_cat", "sp_st_cat"];
async function load_json()
{
    const response = await fetch("index.json");
    const data = await response.json();
	for (const node of nodes)
	{
		document.getElementById(node).innerText = data[node];
	}
}
load_json();


//Audio
const categories = ["coding_cat", "u_st_cat", "sp_st_cat"];
hover_targets = [];
for (const category of categories)
{
	hover_targets.push(document.getElementById(category));
}
const sound_on_hover = document.getElementById("hover_sound");

function play_audio_on_hover() 
{
	sound_on_hover.play();
}
function stop_audio_on_mouseout()
{
	sound_on_hover.pause();         
	sound_on_hover.currentTime = 0;
}
for (const hover_target of hover_targets)
{	
	hover_target.addEventListener("mouseover", play_audio_on_hover, false)
	hover_target.addEventListener("mouseout", stop_audio_on_mouseout, false);
}
