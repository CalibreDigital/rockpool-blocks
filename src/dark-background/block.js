import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
// const { Button } = wp.components;

registerBlockType( 'sm/dark-background', {
    title: 'Dark background',
    icon: 'align-center',
    category: 'layout',
    description: 'A full-width section with a coloured background',
    attributes: {
        headline: {
          source: 'text',
          selector: 'div.blackback h2'
        },
        content: {
          type: 'array',
          source: 'children',
          selector: 'div.blackback div.content p'
        },
        href: {
          type: 'string',
          selector: 'a',
          attribute: 'href',
        },
        buttonText: {
          type: 'string',
          source: 'children',
          selector: 'div.blackback a'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { headline, content, href, buttonText} = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }
        function onChangeHeadline( newHeadline ) {
            setAttributes( { headline: newHeadline } );
        }
        function onChangeButtonText( newButtonText ) {
            setAttributes( { buttonText: newButtonText } );
        }
        function onChangeHref( newHref ) {
            setAttributes( { href: newHref } );
        }

        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="coloured-background">
            <aside>
  	            <PlainText
  	              onChange={ onChangeHeadline }
  	              value={ headline }
                  placeholder="Headline"
  	            />
                <RichText
                  tagName="p"
                  onChange={ onChangeContent }
                  value={ content }
                  placeholder="Content"
                  style={ contentStyle }
  	            />
                <div class="btn">
    	            <PlainText
    	              onChange={ onChangeButtonText }
    							  value={ buttonText }
                    placeholder="Button text"
    	            />
    						</div>
    						<URLInput
    							onChange={ onChangeHref }
    							value={ href }
    						/>
            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { headline, content, href, buttonText} = attributes;

        return(
          <div class="blackback break-out">
              <div class="container padded padded-80 text-center">
                <div class="animate fadein-wait">
                <h2>{headline || ''}</h2>
                <div class="content"><p>{content || ''}</p></div>
                  <a href={ href || '' } class="btn white hvr-sweep-to-right">{ buttonText || '' }</a>
                </div>
              </div>
          </div>
        );
    },
} );
