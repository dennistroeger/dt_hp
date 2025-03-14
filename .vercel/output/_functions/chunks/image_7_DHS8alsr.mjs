const image_7 = new Proxy({"src":"/_astro/image_7.MBPb8HYF.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/feature_images/image_7.png";
							}
							
							return target[name];
						}
					});

export { image_7 as default };
