function OnPageLoad()
{
	browser.storage.sync.get("config").then((res) =>
	{
		document.querySelector("#config").value = res.config || "";
	});
}

function OnPageSave(e)
{
	e.preventDefault();

	browser.storage.sync.set({
		"config": document.querySelector("#config").value
	});

	browser.runtime.reload();
}

document.addEventListener("DOMContentLoaded", OnPageLoad);
document.querySelector("form").addEventListener("submit", OnPageSave);
