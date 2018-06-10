import './editor.scss';

const { registerBlockType, PlainText, source, RichText, MediaUpload, UrlInput  } = wp.blocks;
// const { Button } = wp.components;

registerBlockType( 'sm/image-and-text-button', {
    title: 'Image and text (with button)',
    icon: 'align-right',
    category: 'layout',
    attributes: {
        rightHeadline: {
          source: 'text',
          selector: 'div.blackback h2'
        },
        rightContent: {
          type: 'array',
          source: 'children',
          selector: 'div.blackback div.content p'
        },
        media: {
          selector: 'img',
          attribute: 'src'
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
        const { rightHeadline, rightContent, media, buttonText, href } = attributes;

        function onChangeRightContent( newContent ) {
            setAttributes( { rightContent: newContent } );
        }
        function onChangeRightHeadline( newHeadline ) {
            setAttributes( { rightHeadline: newHeadline } );
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
					<div class="image-and-text-reversed">
            <aside>
              <div class="bg">
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
                <div class="btn">
    	            <PlainText
    	              onChange={ onChangeButtonText }
    							  value={ buttonText }
                    placeholder="Button text"
    	            />
    						</div>
    						<UrlInput
    							onChange={ onChangeHref }
    							value={ href }
    						/>
              </div>
            </aside>
            <aside>
              <div class="bg">
                <MediaUpload
                  onSelect={ ( media ) => setAttributes( { media: media.url } ) }
                  type="image"
                  value={ media }
                  render={ ( { open } ) => (
                    <small onClick={ open }><span class="dashicons dashicons-format-image"></span>{ (media) ? media : 'Click to choose background' }</small>
                  ) }
                />
              </div>
            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { rightHeadline, rightContent, media, href, buttonText } = attributes;

        let bgStyle = {
          backgroundImage: `url(${media || ""})`
        }

        return(
          <div class="row blackback break-out">
            <div class="col-md-6 padded padded-80 padded padded-160s">
              <div class="animate fadein-wait">
                <h2>{rightHeadline || ""}</h2>
                <div class="content"><p>{rightContent || ""}</p></div>
                <a href={href || ""} class="btn white hvr-sweep-to-right">{buttonText || ""}</a>
              </div>
            </div>
            <div class="col-md-6 col-6-image" data-src={media || ""} style={bgStyle}></div>
          </div>
        )

    },
} );
