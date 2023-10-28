const main = document.querySelector('main');
const [topEl, rightEl, bottomEl, leftEl, conEl] = main.children;
const btn = document.querySelector('button');
const speed = 500;

btn.addEventListener('click', () => {
	new Anime(
		topEl,
		{ width: '100%' },
		{
			duration: speed,
			callback: () => {
				new Anime(
					rightEl,
					{ height: '100%' },
					{
						duration: speed,
						callback: () => {
							new Anime(
								bottomEl,
								{ width: '100%' },
								{
									duration: speed,
									callback: () => {
										new Anime(
											leftEl,
											{ height: '100%' },
											{
												duration: speed,
												callback: () => {
													//new Anime(conEl, { opacity: 1 }, { duration: speed });
													conEl.classList.add('on');
												},
											}
										);
									},
								}
							);
						},
					}
				);
			},
		}
	);
});
