

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.46b7e9ae.js","_app/immutable/chunks/scheduler.5ab65ce7.js","_app/immutable/chunks/index.a9485c4a.js","_app/immutable/chunks/singletons.57932dda.js","_app/immutable/chunks/index.ecc5831a.js"];
export const stylesheets = ["_app/immutable/assets/1.b0be08d8.css"];
export const fonts = [];
