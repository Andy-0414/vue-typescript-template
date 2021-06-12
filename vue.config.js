module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `@import "@/variables.scss"; @import "@/main.scss";`,
			},
		},
	},
};
