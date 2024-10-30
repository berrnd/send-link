function InitContextMenu()
{
	browser.contextMenus.create(
		{
			id: "send-link-parent",
			type: "normal",
			title: "Send Link",
			contexts: ["link"]
		});

	browser.storage.sync.get("config").then((res) =>
	{
		var config = (res.config || "").split("\n");

		if (config.length === 0 || (config.length === 1 && config[0].length === 0))
		{
			browser.contextMenus.create(
				{
					id: "send-link-invalid",
					parentId: "send-link-parent",
					type: "normal",
					title: "Invalid or no config, please check settings"
				});
		}
		else
		{
			config.forEach(function(item)
			{
				var itemTitle = item;
				var itemLink = item;

				if (item.indexOf("|") !== -1)
				{
					var itemParts = item.split("|");
					itemTitle = itemParts[0];
					itemLink = itemParts[1];
				}

				browser.contextMenus.create(
					{
						parentId: "send-link-parent",
						type: "normal",
						title: itemTitle,
						onclick: (e) => ExecuteSendLink(e.linkUrl, itemLink)
					});
			});
		}
	});
}

function ExecuteSendLink(link, destinationUrl)
{
	var url = destinationUrl.replace("%%u", encodeURIComponent(link));

	if (destinationUrl.toUpperCase().startsWith("HTTP"))
	{
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function()
		{
			if (xhr.readyState === XMLHttpRequest.DONE)
			{
				if (xhr.status >= 200 && xhr.status < 300)
				{
					// Success
				}
				else
				{
					browser.tabs.create({ url: "error.html" }).then(() =>
					{
						browser.tabs.executeScript({
							"code": `document.body.innerHTML = "An error happened while executing a GET request to ${url}<br><br>Status: ${xhr.status}<br><br>Response: ${xhr.responseText}";`
						});
					});
				}
			}
		};

		xhr.open("GET", url, true);
		xhr.send();
	}
	else if (destinationUrl.toUpperCase().startsWith("MAILTO"))
	{
		location.href = url;
	}
	else
	{
		browser.tabs.create({ url: "error.html" }).then(() =>
		{
			browser.tabs.executeScript({
				"code": `document.body.innerHTML = "Unsupported protocol, check your configuration<br><br> URL was: ${url}";`
			});
		});
	}
}

InitContextMenu();
