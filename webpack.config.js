module.exports = {
	entry:['./src/Hello.js'],
	output:{path:'./lib', filename:"bundle.js"},
	module:{loaders:[{test:/\.jsx?$/, exclude: /node_modules/ ,loader:'babel'}]}
};