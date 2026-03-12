const list_flag = "_list";

export async function load_json(json_file, nodes)
{
    const response = await fetch(json_file);
    const data = await response.json();
	for (const node of nodes)
	{
		if (Array.isArray(data[node])) 
		{
			if (node.includes(list_flag)) //Array of separate items [True Array]
			{
				const list = document.getElementById(node);
				for (const item_text of data[node])
				{
					const item = document.createElement('li');
    				item.textContent = item_text;
    				list.appendChild(item);
				}
				continue;
			}
			const text = data[node].join(" "); //Array of text for better readability in .json [Decorative Array]
			document.getElementById(node).innerText = text;
			continue;
		}
		document.getElementById(node).innerText = data[node];		
	}
}