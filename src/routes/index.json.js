
export function post(req, res) {
	// index.svelteのpreloadから呼ばれる（postもok!）
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	req.session.index_loaded = true; // sessionの更新ができる！
	res.end(JSON.stringify({ message: "post ok." }));
}