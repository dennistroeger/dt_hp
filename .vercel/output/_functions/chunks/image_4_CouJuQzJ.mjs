const image_4 = new Proxy({"src":"/_astro/image_4.OzJfo3RJ.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/feature_images/image_4.png";
							}
							
							return target[name];
						}
					});

export { image_4 as default };
