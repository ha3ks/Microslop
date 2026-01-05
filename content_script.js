walk(document.body);

function walk(node) 
{
	var child, next;

	// Skip certain elements entirely
	if (node.nodeType === 1) {
		const tagName = node.tagName.toLowerCase();

		// Skip form fields
		if (tagName === 'input' || tagName === 'textarea') {
			return;
		}

		// Skip script & style tags (CRITICAL FIX)
		if (tagName === 'script' || tagName === 'style' || tagName === 'noscript') {
			return;
		}

		// Skip speculation rules explicitly (extra safety)
		if (tagName === 'script' && node.type === 'speculationrules') {
			return;
		}

		// Skip code editors
		if (node.classList && node.classList.contains('ace_editor')) {
			return;
		}
	}

	switch (node.nodeType)  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMicrosoft\b/g, "Microslop");
	v = v.replace(/\bWindows\b/g, "Winslop");
	v = v.replace(/\b11\b/g, " AI Version Pro Max");

	textNode.nodeValue = v;
}
