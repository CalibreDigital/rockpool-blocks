import './editor.scss';

const { registerBlockType, PlainText, source, RichText } = wp.blocks;
// const { Button } = wp.components;

registerBlockType( 'sm/half-and-half', {
	title: 'Half and half',
	icon: 'columns',
	category: 'layout',
	description:
		'Two columns of text with coloured image backgrounds, ideal for explaining the benefits of a product or offering',
	attributes: {
		leftHeadline: {
			source: 'text',
			selector: 'div.row div.redback h2',
		},
		rightHeadline: {
			source: 'text',
			selector: 'div.row div.greyback h2',
		},
		leftContent: {
			type: 'array',
			source: 'children',
			selector: 'div.row div.redback div.content p',
		},
		rightContent: {
			type: 'array',
			source: 'children',
			selector: 'div.row div.greyback div.content p',
		},
	},

	edit( { attributes, className, setAttributes } ) {
		const {
			leftHeadline,
			leftContent,
			rightHeadline,
			rightContent,
		} = attributes;

		function onChangeLeftContent( newContent ) {
			setAttributes( { leftContent: newContent } );
		}
		function onChangeRightContent( newContent ) {
			setAttributes( { rightContent: newContent } );
		}
		function onChangeLeftHeadline( newHeadline ) {
			setAttributes( { leftHeadline: newHeadline } );
		}
		function onChangeRightHeadline( newHeadline ) {
			setAttributes( { rightHeadline: newHeadline } );
		}

		const contentStyle = {
			fontFamily: 'Gidole, sans-serif',
		};

		return (
			<div className="half-and-half">
				<aside>
					<div className="bg">
						<PlainText
							onChange={ onChangeLeftHeadline }
							value={ leftHeadline }
							placeholder="Headline"
						/>
						<RichText
							onChange={ onChangeLeftContent }
							value={ leftContent }
							placeholder="Content"
							style={ contentStyle }
						/>
					</div>
				</aside>
				<aside>
					<div className="bg">
						<PlainText
							onChange={ onChangeRightHeadline }
							value={ rightHeadline }
							placeholder="Headline"
						/>
						<RichText
							onChange={ onChangeRightContent }
							value={ rightContent }
							placeholder="Content"
							style={ contentStyle }
						/>
					</div>
				</aside>
			</div>
		);
	},

	save( { attributes, className } ) {
		const {
			leftHeadline,
			leftContent,
			rightHeadline,
			rightContent,
		} = attributes;

		return(
			<div class="row break-out">
				<div class="col-md-6 padded padded-80 redback city">
					<svg enableBackground="new 0 0 140 110.4" version="1.1" viewBox="0 0 140 110.4" xmlns="http://www.w3.org/2000/svg" class="icon white" style="margin-bottom:-20px"><path d="m87.1 74.8c-4-2.9-8.3-5.2-12.8-6.9-0.3-0.1-0.5-0.2-0.8-0.3s-0.6-0.2-0.9-0.3c0.3-0.2 0.5-0.3 0.8-0.5s0.5-0.4 0.7-0.5c8-5.9 13.3-15.5 13.3-26.2 0-17.9-14.6-32.5-32.5-32.5s-32.7 14.5-32.7 32.4c0 10.8 5.3 20.3 13.4 26.3 0.2 0.2 0.5 0.4 0.8 0.5 0.3 0.2 0.5 0.3 0.8 0.5-0.3 0.1-0.6 0.2-0.9 0.3s-0.6 0.2-0.8 0.3c-17.9 6.8-31.2 22.5-34.6 41.8h8.2c3.9-19.2 19.1-33.3 37.4-36.7 0.7-0.1 1.3-0.2 2-0.3l3-0.3c2.2-0.2 4.4-0.2 6.6 0 1 0.1 2 0.2 3.1 0.3 0.7 0.1 1.3 0.2 2 0.3 0.1 0 0.2 0 0.4 0.1 18.8 3.5 33.3 17.9 37.1 36.6h8.2c-2.5-14.1-10.2-26.5-21.8-34.9zm-24.9-11.5c-0.7 0.2-1.3 0.4-2 0.5-1.2 0.3-2.4 0.4-3.6 0.5-0.6 0-1.2 0.1-1.7 0.1s-1 0-1.6-0.1c-1.3-0.1-2.5-0.3-3.7-0.5-0.7-0.1-1.3-0.3-2-0.5-10-3-17.2-12.3-17.2-23.3 0-13.5 11-24.5 24.4-24.5 6.6 0 12.8 2.6 17.4 7.3 4.6 4.6 7.1 10.7 7.1 17.2-0.1 10.9-7.2 20.2-17.1 23.3z"/><path d="m103.6 61l-1.3-0.5 1.1-0.8c7-5.1 11.7-12.6 13.1-21.1 1.4-8.6-0.6-17.2-5.7-24.2-9-12.5-25.3-16.9-39.2-10.9 3.3 1.5 6.2 3.5 8.8 5.7 1.2-0.2 2.6-0.3 4.1-0.3 13.5 0 24.5 11 24.5 24.4 0 9.1-5.2 17.5-13.4 21.6-0.6 3.5-1.6 7.1-3 10.8 0.1 0.1 0.1 0.3 0.2 0.4 0 0.1 0.1 0.2 0.1 0.3 21.1 3.9 37.1 21.9 38.3 43.3h8.1c-1.2-21.9-15.1-41-35.7-48.7z"/></svg>
					<h2>{ leftHeadline || '' }</h2>
					<div class="content"><p>{ leftContent || '' }</p></div>
				</div>
				<div class="col-md-6 padded padded-80 greyback city">
					<svg enableBackground="new 0 0 141.7 141.7" version="1.1" viewBox="0 0 141.7 141.7" xmlns="http://www.w3.org/2000/svg" class="icon white" style="margin-bottom:-20px"><polygon points="28.7 74.6 25.7 74.6 25.7 141.4 28.7 141.4 31.9 141.4 34.9 141.4 34.9 74.6 31.9 74.6"/><polygon points="70.2 35.9 67.2 35.9 67.2 141.4 70.2 141.4 73.4 141.4 76.4 141.4 76.4 35.9 73.4 35.9"/><polygon points="114.9 2 111.7 2 108.7 2 108.7 141.4 111.7 141.4 114.9 141.4 117.9 141.4 117.9 2"/></svg>
					<h2>{ rightHeadline || '' }</h2>
					<div class="content"><p>{ rightContent || '' }</p></div>
				</div>
			</div>
		)


	},
} );
