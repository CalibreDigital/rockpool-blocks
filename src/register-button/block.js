import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;

registerBlockType( 'sm/register-button', {
    title: 'Register Button',
    icon: 'button',
    category: 'layout',
    description: 'A button launching the registration form modal',
    attributes: {
        content: {
            type: 'string',
            source: 'children',
            selector: 'a',
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { content, isSelected } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
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
					</div>
        );
    },

    save( { attributes, className } ) {
        const { content } = attributes;
        return <a href="#" class="btn hvr-sweep-to-right" data-toggle="modal" data-target="#registerModal">{ content || "" }</a>;
    },
} );
