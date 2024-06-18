/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						// You can add SVGR options here if needed
					}
				},
				"url-loader"
			]
		})

		return config
	}
}

export default nextConfig
