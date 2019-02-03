SendLink = { };

SendLink.InitContextMenu = function()
{
	browser.contextMenus.create(
	{
		id: "send-link-parent",
		type: "normal",
		title: "send-link",
		contexts: ["link"]
	});

	var storageItem = browser.storage.sync.get("config");
	storageItem.then((res) =>
	{
		var config = res.config || "";
		config = config.split("\n");

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
					onclick: (e) => SendLink.ExecuteSendLink(e.linkUrl, itemLink)
				});
			});
		}
	});
}

SendLink.ExecuteSendLink = function(link, destinationUrl)
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
					//TODO: Notification
					console.log("send-link XHR success");
				}
				else
				{
					//TODO: Notification
					console.log("send-link XHR error");
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
		//TODO: Notification
		console.log("send-link Unsupported protocol");
	}
}

SendLink.InitContextMenu();
