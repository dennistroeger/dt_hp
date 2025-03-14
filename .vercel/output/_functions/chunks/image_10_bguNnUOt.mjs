const image_10 = new Proxy({"src":"/_astro/image_10.CfL1updq.png","width":1280,"height":720,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/dennistroeger/cursor-apps/dt_hp/src/assets/images/feature_images/image_10.png";
							}
							
							return target[name];
						}
					});

export { image_10 as default };
