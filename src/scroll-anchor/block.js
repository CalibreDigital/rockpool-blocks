import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText  } = wp.editor;

registerBlockType( 'sm/scroll-anchor', {
    title: 'Scroll anchor',
    icon: 'admin-links',
    category: 'layout',
    description: 'Scroll to this',
    attributes: {
        content: {
            type: 'string',
            selector: 'div.anchor',
            attribute: 'id'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { content } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }

        return (
					<div>
						<div className="anchor">
	            <PlainText
	              onChange={ onChangeContent }
	              value={ content }
	            />
						</div>
            <small>Put this same ID in a button or link to scroll to it.</small>
					</div>
        );
    },

    save( { attributes } ) {
        const { content } = attributes;
        return <div className="anchor" id={ content }></div>;
    },
} );
