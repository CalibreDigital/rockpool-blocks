import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput, MediaUpload  } = wp.editor;
// const { Button } = wp.components;

registerBlockType( 'sm/image-background', {
    title: 'Image background',
    icon: 'align-center',
    category: 'layout',
    description: 'A full-width section with an image background',
    attributes: {
        headline: {
          source: 'text',
          selector: 'div.city h2'
        },
        content: {
          type: 'array',
          source: 'children',
          selector: 'div.city div.content p'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { headline, content, } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }
        function onChangeHeadline( newHeadline ) {
            setAttributes( { headline: newHeadline } );
        }

        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="image-background">
            <aside>
  	            <PlainText
  	              onChange={ onChangeHeadline }
  	              value={ headline }
                  placeholder="Headline"
  	            />
                <RichText
                onChange={ onChangeContent }
                value={ content }
                placeholder="Content"
                style={ contentStyle }
  	            />
            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { headline, content} = attributes;

        return(
          <div class="redback city break-out">
            <div class="container padded padded-80">
                <svg enable-background="new 0 0 100 41.9" viewBox="0 0 100 41.9" class="divider-icon white"><path d="m79.2 1c-5 0-9.7 1.9-13.2 5-2.1 1.5-4 3.3-5.9 5.4-2.8 3.1-6.5 4.9-10.4 5.3-3.9-0.4-7.6-2.2-10.4-5.3-0.9-1.1-1.9-2.1-2.9-3-3.7-4.5-9.3-7.4-15.6-7.4-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c5.6 0 10.6-2.3 14.3-5.9 1-0.9 2-1.8 3-2.9 3.2-3.6 7-5.6 11.7-6.1 4.7 0.5 8.4 2.5 11.7 6.1 2.5 2.8 5.2 4.8 7.9 6.2 2.9 1.7 6.3 2.6 9.9 2.6 11.1 0 20.1-9 20.1-20.1-0.1-11.1-9.1-20.1-20.2-20.1z"></path></svg>
                <h2>{headline || ""}</h2>
                <div class="content"><p>{content || ""}</p></div>
            </div>
          </div>
        );

    },
} );
