const image_3 = new Proxy({"src":"/_astro/image_3.tC2KjmL0.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/feature_images/image_3.png";
							}
							
							return target[name];
						}
					});

export { image_3 as default };
