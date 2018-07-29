import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
const { CheckboxControl } = wp.components;

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
				},
        newTab: {
          type: 'string',
          selector: 'a',
          attribute: 'data-target'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { isSelected, href , newTab} = attributes;

				function onChangeHref( newHref ) {
            setAttributes( { href: newHref } );
        }
        function onChangeNewTab( newNewTab ) {
            setAttributes( { newTab: newNewTab } );
        }

        return (
					<div>
						<div class="learn-more">
	            <span>Learn More  →</span>
						</div>
						<URLInput
							onChange={ onChangeHref }
							value={ href }
						/>
            <CheckboxControl
              label="New tab?"
              checked={ newTab }
              onChange={ onChangeNewTab }
            />
					</div>
        );
    },

    save( { attributes, className } ) {
        const { href, newTab } = attributes;
        return <a href={ href || "" } target={(newTab) ? "blank"  : ""} data-target={newTab} className="textlink learn-more">
        Learn More →
        </a>;
    },
} );
