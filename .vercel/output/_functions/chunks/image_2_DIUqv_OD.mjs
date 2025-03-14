const image_2 = new Proxy({"src":"/_astro/image_2.G4tViTLS.png","width":1920,"height":1080,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/feature_images/image_2.png";
							}
							
							return target[name];
						}
					});

export { image_2 as default };
