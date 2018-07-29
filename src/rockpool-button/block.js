import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
const { SelectControl } = wp.components;

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
				},
        newTab: {
          type: 'string',
          selector: 'a',
          attribute: 'target',
          default: 'true'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { content, isSelected, href, newTab} = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }
				function onChangeHref( newHref ) {
            setAttributes( { href: newHref } );
        }
        function onChangeNewTab( newNewTab ) {
            setAttributes( { newTab: newNewTab } );
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
						<URLInput
							onChange={ onChangeHref }
							value={ href }
						/>

            <SelectControl
              value={ newTab || 'blank' }
              onChange={ onChangeNewTab }
              options={ [
                { value: '_blank', label: 'Open in new tab' },
                { value: '_self', label: 'Open in current tab' },
              ] }
            />

					</div>
        );
    },

    save( { attributes, className } ) {
        const { content, href, newTab } = attributes;
        return <a href={ href || "" } target={newTab} className="btn hvr-sweep-to-right">{ content || "" }</a>;
    },
} );
