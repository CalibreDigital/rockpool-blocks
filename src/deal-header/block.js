import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput, MediaUpload  } = wp.editor;
const { SelectControl } = wp.components;

registerBlockType( 'sm/deal-header', {
    title: 'Deal header',
    icon: 'align-left',
    category: 'layout',
    description: 'Two columns of text with coloured image backgrounds, ideal for explaining the benefits of a product or offering',
    attributes: {
        rightHeadline: {
          source: 'text',
          selector: 'div.deal-header h1'
        },
        caption: {
          type: 'array',
          source: 'children',
          selector: 'div.deal-header p'
        },
        rightContent: {
          type: 'array',
          source: 'children',
          selector: 'div.deal-header h3'
        },
        media: {
          selector: 'img',
          attribute: 'src'
        },

        buttonText: {
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
        const { rightHeadline, rightContent, media, caption, buttonText, href, newTab } = attributes;

        function onChangeRightContent( newContent ) {
            setAttributes( { rightContent: newContent } );
        }
        function onChangeCaption( newContent ) {
            setAttributes( { caption: newContent } );
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
        function onChangeNewTab( newNewTab ) {
            setAttributes( { newTab: newNewTab } );
        }


        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="image-and-text">
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

                <div>
      						<div class="btn">
      	            <PlainText
      	              onChange={ onChangeButtonText }
      	              value={ buttonText }
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
                      { value: 'blank', label: 'Open in new tab' },
                      { value: 'self', label: 'Open in current tab' },
                    ] }
                  />
      					</div>

                <RichText
  	              onChange={ onChangeCaption }
  	              value={ caption }
                  placeholder="Caption"
                  class="caption"
  	            />
              </div>
            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { rightHeadline, rightContent, media, caption, buttonText, newTab, href } = attributes;

        let bgStyle = {
          backgroundImage: `url(${media || ""})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        };

        return(
          <div class="row break-out deal-header" style={bgStyle}>
            <div class="col-md-6 animate fadein">
            </div>
            <div class="col-md-6 padded padded-80 padded-160t blackback" id="hero-text">
                <h1 class="animate fadein">{rightHeadline || ""}</h1>
                <svg enable-background="new 0 0 100 41.9" viewBox="0 0 100 41.9" className="divider-icon white"><path d="m79.2 1c-5 0-9.7 1.9-13.2 5-2.1 1.5-4 3.3-5.9 5.4-2.8 3.1-6.5 4.9-10.4 5.3-3.9-0.4-7.6-2.2-10.4-5.3-0.9-1.1-1.9-2.1-2.9-3-3.7-4.5-9.3-7.4-15.6-7.4-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c5.6 0 10.6-2.3 14.3-5.9 1-0.9 2-1.8 3-2.9 3.2-3.6 7-5.6 11.7-6.1 4.7 0.5 8.4 2.5 11.7 6.1 2.5 2.8 5.2 4.8 7.9 6.2 2.9 1.7 6.3 2.6 9.9 2.6 11.1 0 20.1-9 20.1-20.1-0.1-11.1-9.1-20.1-20.2-20.1z"></path></svg>
                <h3 class="animate fadein" id="rotateHeroText">{rightContent || ""}</h3>

                {(buttonText && href)?
                  <a
                    href={ href || "" }
                    target={newTab}
                    className="btn hvr-sweep-to-right white"
                    >{ buttonText || "" }
                  </a>
                : null }

                <p class="caption">{caption || ""}</p>
            </div>
          </div>
        )
    },
} );
