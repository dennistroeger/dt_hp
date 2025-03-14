const Dennis_Troeger = new Proxy({"src":"/_astro/Dennis Troeger.BVTx0Hhi.png","width":2000,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/Dennis Troeger.png";
							}
							
							return target[name];
						}
					});

export { Dennis_Troeger as default };
