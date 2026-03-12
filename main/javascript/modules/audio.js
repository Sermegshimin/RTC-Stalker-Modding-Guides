export function add_audio_on_hover(sound_name, elements_list)
{
	const hover_targets = [];
	for (const element of elements_list)
	{
		hover_targets.push(document.getElementById(element));
	}
	
	const sound_on_hover = document.getElementById(sound_name);
	
	for (const hover_target of hover_targets)
	{	
		hover_target.addEventListener("mouseover", play_sound_on_hover.bind(null, sound_on_hover));
		hover_target.addEventListener("mouseout", stop_sound_on_no_hover.bind(null, sound_on_hover));
	}
}

function play_sound_on_hover(sound, hover)
{
	sound.play(); 
}

function stop_sound_on_no_hover(sound, hover)
{
	sound.pause();         
	sound.currentTime = 0; 
}