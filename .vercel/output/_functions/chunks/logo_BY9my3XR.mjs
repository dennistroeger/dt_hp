const image = new Proxy({"src":"/_astro/logo.pQt6hJil.png","width":800,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/logo.png";
							}
							
							return target[name];
						}
					});

export { image as default };
