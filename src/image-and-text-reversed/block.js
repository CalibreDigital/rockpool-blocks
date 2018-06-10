import './editor.scss';

const { registerBlockType, PlainText, source, RichText, MediaUpload } = wp.blocks;
// const { Button } = wp.components;

registerBlockType( 'sm/image-and-text-reversed', {
    title: 'Image and text (reversed)',
    icon: 'align-right',
    category: 'layout',
    description: 'Two columns of text with coloured image backgrounds, ideal for explaining the benefits of a product or offering. Reversed order.',
    attributes: {
        rightHeadline: {
          source: 'text',
          selector: 'div.location h2'
        },
        rightContent: {
          type: 'array',
          source: 'children',
          selector: 'div.location div.content p'
        },
        media: {
          selector: 'img',
          attribute: 'src'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { rightHeadline, rightContent, media } = attributes;

        function onChangeRightContent( newContent ) {
            setAttributes( { rightContent: newContent } );
        }
        function onChangeRightHeadline( newHeadline ) {
            setAttributes( { rightHeadline: newHeadline } );
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
        const { rightHeadline, rightContent, media } = attributes;

        let bgStyle = {
          backgroundImage: `url(${media || ""})`
        }

        return(
          <div class="row redback location break-out">
           <div class="col-md-6 padded padded-80 padded padded-160s greyback contact">
             <div class="animate fadein-wait">
               <h2>{rightHeadline || ""}</h2>
               <svg enableBackground="new 0 0 100 41.9" viewBox="0 0 100 41.9" class="divider-icon white"><path d="m79.2 1c-5 0-9.7 1.9-13.2 5-2.1 1.5-4 3.3-5.9 5.4-2.8 3.1-6.5 4.9-10.4 5.3-3.9-0.4-7.6-2.2-10.4-5.3-0.9-1.1-1.9-2.1-2.9-3-3.7-4.5-9.3-7.4-15.6-7.4-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c5.6 0 10.6-2.3 14.3-5.9 1-0.9 2-1.8 3-2.9 3.2-3.6 7-5.6 11.7-6.1 4.7 0.5 8.4 2.5 11.7 6.1 2.5 2.8 5.2 4.8 7.9 6.2 2.9 1.7 6.3 2.6 9.9 2.6 11.1 0 20.1-9 20.1-20.1-0.1-11.1-9.1-20.1-20.2-20.1z"></path></svg>
               <div class="content"><p>{rightContent || ""}</p></div>
             </div>
           </div>
           <div class="col-md-6" id="case-study-image" data-src={media || ""} style={bgStyle}>
           </div>
         </div>
        )

    },
} );
