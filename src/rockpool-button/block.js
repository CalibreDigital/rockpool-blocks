import './editor.scss';

const { registerBlockType, PlainText, source, UrlInput } = wp.blocks;

registerBlockType( 'sm/rockpool-button', {
    title: 'Rockpool Button',
    icon: 'button',
    category: 'layout',
    description: 'A button, linking to another page on this site or the web',
    attributes: {
        content: {
            type: 'string',
            source: 'children',
            selector: 'a',
        },
				href: {
					type: 'string',
					selector: 'a',
					attribute: 'href',
				}
    },

    edit( { attributes, className, setAttributes } ) {
        const { content, isSelected, href } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }
				function onChangeHref( newHref ) {
            setAttributes( { href: newHref } );
        }

        return (
					<div>
						<div class="btn">
	            <PlainText
	              onChange={ onChangeContent }
	              value={ content }
	              isSelected={ isSelected }
	            />
						</div>
						<UrlInput
							onChange={ onChangeHref }
							value={ href }
						/>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { content, href } = attributes;
        return <a href={ href || "" } className="btn hvr-sweep-to-right">{ content || "" }</a>;
    },
} );
