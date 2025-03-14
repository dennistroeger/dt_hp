const imageDark = new Proxy({"src":"/_astro/logo_invert.4VmnXVhT.png","width":800,"height":150,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/logo_invert.png";
							}
							
							return target[name];
						}
					});

export { imageDark as default };
