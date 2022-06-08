import adapter from '@sveltejs/adapter-cloudflare';
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetTagify from '@unocss/preset-tagify'

import { presetUno, presetAttributify } from 'unocss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				Unocss({
					presets: [
						presetAttributify({ /* preset options */ }),
						presetUno(),
						presetTagify({ /* options */ }),
						presetIcons({
							extraProperties: {
								'display': 'inline-block',
								'vertical-align': 'middle',
								'position': 'relative',

								// ...
							}
						})
						// ...custom presets
					]
				})
			]

		}
	}
};

export default config;
