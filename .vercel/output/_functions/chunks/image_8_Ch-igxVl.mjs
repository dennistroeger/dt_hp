const image_8 = new Proxy({"src":"/_astro/image_8.BbH8QKE9.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/feature_images/image_8.png";
							}
							
							return target[name];
						}
					});

export { image_8 as default };
