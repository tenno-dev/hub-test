<script>
	// @ts-nocheck
	const imghost = {
		'n9e5v4d8.ssl.hwcdn.net': 'hwcdn',
		'content.invisioncic.com': 'invisioncic'
	};
	const imgurl = 'https://img2.tenno.dev';
	export let news;
	// Import Swiper Svelte components
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
	import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper';

	import { onMount } from 'svelte';

	export function getimgurl(url1) {
		const cacheUrl = new URL(url1);
		const file = cacheUrl.pathname.slice(1);
		const hostname = new URL(url1).hostname;
		if (hostname in imghost && hostname != 'content.invisioncic.com') {
			return imgurl + '/' + file + '?host=' + imghost[hostname];
		} else if (hostname == 'content.invisioncic.com' && file.includes('warframe')) {
			return imgurl + '/' + file + '?host=' + imghost[hostname];
		} else {
			return url1;
		}
	}
	import { format, toDate } from 'date-fns';
	//import { _ } from 'svelte-i18n'; // import translation function
</script>

<div class="w-full h-auto border-transparent">
	<div
		v-if="nightwave && nightwave.DailyChallenges"
		class=" pr-4 pt-4 text-2xl font-bold bg-transparent text-primary sm:pr-6"
	>
		<div class="i-mdi-newspaper text-blue-400 text-2xl inline-block  align-middle mb-1" />

		News
	</div>
	<div class="border-transparent text-default">
		{#if !news}
			<div class="text-primary">
				<div class="relative px-4 py-3 text-red-700 border border-red-400 rounded" role="alert">
					<strong class="font-bold">No News today</strong>
				</div>
			</div>
		{:else}
			<Swiper
				modules={[Autoplay, Pagination, A11y]}
				loop={true}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false
				}}
			>
				{#each news as item}
					<SwiperSlide>
						<div class="slide  min-w-full">
							<div
								class="mx-auto min-w-sm shadow-xl bg-contain h-80 cursor-pointer  bg-center bg-no-repeat "
								style="background-image: url({getimgurl(item.imageLink)})"
							>
								<div
									class="bg-black bg-opacity-60 inset-x-0 bottom-0 absolute  h-1/3 px-10 flex flex-wrap  hover:bg-opacity-75 transform duration-300"
								>
									<div class="pb-20">
										<h1 class="text-white text-xl ">
											<a href={item.link}> {item.message}</a>
										</h1>
										<p class="text-white text-1xl">
											<a href={item.link}>
												posted: {format(new Date(item.date), 'dd.MMMM.yyyy HH:mm')}
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		{/if}
	</div>
</div>
