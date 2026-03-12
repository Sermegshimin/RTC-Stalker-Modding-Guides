import { load_json } from './modules/json_parsing.js';
import { add_audio_on_hover } from './modules/audio.js';

//Text parsing from json
const nodes = ["st", "h1", "coding_cat", "u_st_cat", "sp_st_cat"];
load_json("index.json", nodes);

//Audio
const categories = ["coding_cat", "u_st_cat", "sp_st_cat"];
add_audio_on_hover("hover_sound", categories);
