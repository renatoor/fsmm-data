function generateChart(querySelector, dataVelocity, dataPerception) {
	c3.generate({
		bindto: querySelector,
		data: {
			x: 'x',
			columns: [
				['x', 0.5, 1.0, 1.5, 2.0, 2.5, 3.0],
				['v1', ...dataVelocity[0]],
				['v2', ...dataVelocity[1]],
				['v3', ...dataVelocity[2]],
				['p1', ...dataPerception[0]],
				['p2', ...dataPerception[1]],
				['p3', ...dataPerception[2]],
			],
			axes: {
				v1: 'y',
				v2: 'y',
				v3: 'y',
				p1: 'y2',
				p2: 'y2',
				p3: 'y2',
			},
			types: {
				p1: 'scatter',
				p2: 'scatter',
				p3: 'scatter',
			},
			names: {
				v1: 'Tempo 1',
				v2: 'Tempo 2',
				v3: 'Tempo 3',
				p1: 'Percepção 1',
				p2: 'Perceção 2',
				p3: 'Percepção 3',
			},
			labels: true,
		},
		axis: {
			x: {
				label: {
					text: 'distância (m)',
					position: 'outer-center',
				},
			},
			y: {
				label: {
					text: 'tempo (s)',
					position: 'outer-middle',
				},
			},
			y2: {
				label: {
					text: 'percepção',
					position: 'outer-middle'
				},
				tick: {
					format: (d) => {
						switch(d) {
							case 1: return 'Muito fraco';
							case 2: return 'Fraco';
							case 3: return 'Médio';
							case 4: return 'Forte';
							case 5: return 'Muito forte';
							default: return '';
						}
					},
				},
				show: true,
				max: 5,
				min: 1,
			},
		},
	});
}

generateChart(
	'#renato-chart0',
	[
		[2.6, 3.77, 4.33, 5.73, 6.74, 7.84],
		[1.7, 2.37, 2.86, 3.69, 4.32, 4.81],
		[1.2, 1.7, 2.19, 2.71, 3.0, 3.23],
	],
	[
		[4, 3, 3, 2, 1, 1],
		[5, 4, 4, 3, 2, 1],
		[5, 5, 5, 4, 3, 2],
	]
);

generateChart(
	'#renato-chart1',
	[
		[2.53, 3.81, 4.98, 5.87, 6.3, 8.6],
		[1.74, 2.73, 3.12, 3.72, 4.2, 4.93],
		[1.19, 1.87, 2.48, 2.65, 3.08, 3.57],
	],
	[
		[5, 4, 3, 3, 2, 1],
		[5, 4, 4, 3, 3, 2],
		[5, 5, 5, 4, 4, 2],
	]
);

generateChart(
	'#luciana-chart',
	[
		[1.92, 2.80, 3.69, 4.40, 4.53, 5.27],
		[1.85, 2.82, 2.97, 3.45, 3.90, 4.00],
		[1.47, 2.35, 2.42, 2.96, 3.16, 3.50],
	],
	[
		[2, 3, 1, 1, 1, 1],
		[3, 4, 3, 3, 2, 1],
		[5, 5, 3, 4, 4, 3],
	]
);

generateChart(
	'#iran-chart',
	[
		[1.63, 1.75, 2.30, 2.84, 3.50, 3.89],
		[1.82, 1.92, 2.03, 2.16, 2.66, 2.74],
		[1.25, 1.36, 1.44, 1.78, 1.81, 1.94],
	],
	[
		[3, 3, 2, 2, 2, 1],
		[4, 4, 3, 2, 2, 2],
		[5, 5, 4, 4, 3, 3],
	]
);
