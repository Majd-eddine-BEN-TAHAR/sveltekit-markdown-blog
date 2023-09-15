export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["backdrop.jpg","favicon.png","moon.svg","sun.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.a0f7ee3b.js","app":"_app/immutable/entry/app.d335d04c.js","imports":["_app/immutable/entry/start.a0f7ee3b.js","_app/immutable/chunks/scheduler.5ab65ce7.js","_app/immutable/chunks/singletons.57932dda.js","_app/immutable/chunks/index.ecc5831a.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.d335d04c.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.5ab65ce7.js","_app/immutable/chunks/index.a9485c4a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
