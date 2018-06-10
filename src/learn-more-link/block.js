import './editor.scss';

const { registerBlockType, PlainText, source, UrlInput } = wp.blocks;

registerBlockType( 'sm/learn-more-link', {
    title: 'Learn More Link',
    icon: 'link',
    category: 'layout',
    description: 'A red, underlined link',
    attributes: {
				href: {
					type: 'string',
					selector: 'a',
					attribute: 'href',
				}
    },

    edit( { attributes, className, setAttributes } ) {
        const { isSelected, href } = attributes;

				function onChangeHref( newHref ) {
            setAttributes( { href: newHref } );
        }

        return (
					<div>
						<div class="learn-more">
	            <span>Learn More  →</span>
						</div>
						<UrlInput
							onChange={ onChangeHref }
							value={ href }
						/>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { href } = attributes;
        return <a href={ href || "" } className="textlink learn-more">Learn More →</a>;
    },
} );
