import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
// const { Button } = wp.components;

registerBlockType( 'sm/four-stats-dark', {
    title: 'Four columns of stats (dark)',
    icon: 'schedule',
    category: 'layout',
    attributes: {
        headline: {
          source: 'text',
          selector: 'div.city h2'
        },
        content: {
          type: 'array',
          source: 'children',
          selector: 'div.city div.content p'
        },
        stat1: {
          source: 'text',
          selector: 'div.city .stat-text#one h1'
        },
        stat1Caption: {
          source: 'text',
          selector: 'div.city .stat-text#one span'
        },
        stat2: {
          source: 'text',
          selector: 'div.city .stat-text#two h1'
        },
        stat2Caption: {
          source: 'text',
          selector: 'div.city .stat-text#two span'
        },
        stat3: {
          source: 'text',
          selector: 'div.city .stat-text#three h1'
        },
        stat3Caption: {
          source: 'text',
          selector: 'div.city .stat-text#three span'
        },
        stat4: {
          source: 'text',
          selector: 'div.city .stat-text#four h1'
        },
        stat4Caption: {
          source: 'text',
          selector: 'div.city .stat-text#four span'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { headline, content, stat1, stat1Caption, stat2, stat2Caption, stat3, stat3Caption, stat4, stat4Caption } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }
        function onChangeHeadline( newHeadline ) {
            setAttributes( { headline: newHeadline } );
        }
        function onChangeStat1( newValue ) {
            setAttributes( { stat1: newValue } );
        }
        function onChangeStat1Caption( newValue ) {
            setAttributes( { stat1Caption: newValue } );
        }
        function onChangeStat2( newValue ) {
            setAttributes( { stat2: newValue } );
        }
        function onChangeStat2Caption( newValue ) {
            setAttributes( { stat2Caption: newValue } );
        }
        function onChangeStat3( newValue ) {
            setAttributes( { stat3: newValue } );
        }
        function onChangeStat3Caption( newValue ) {
            setAttributes( { stat3Caption: newValue } );
        }
        function onChangeStat4( newValue ) {
            setAttributes( { stat4: newValue } );
        }
        function onChangeStat4Caption( newValue ) {
            setAttributes( { stat4Caption: newValue } );
        }


        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="dark-image-background">
            <aside>
              <div class="centred">
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
              </div>

            <section class="columns">
              <div>
                <PlainText
                  onChange={ onChangeStat1 }
                  value={ stat1 }
                  placeholder="Stat"
                />
                <PlainText
  	              onChange={ onChangeStat1Caption }
  	              value={ stat1Caption }
                  placeholder="Caption"
  	            />
              </div>
              <div>
                <PlainText
                  onChange={ onChangeStat2 }
                  value={ stat2 }
                  placeholder="Stat"
                />
                <PlainText
  	              onChange={ onChangeStat2Caption }
  	              value={ stat2Caption }
                  placeholder="Caption"
  	            />
              </div>
              <div>
                <PlainText
                  onChange={ onChangeStat3 }
                  value={ stat3 }
                  placeholder="Stat"
                />
                <PlainText
  	              onChange={ onChangeStat3Caption }
  	              value={ stat3Caption }
                  placeholder="Caption"
  	            />
              </div>
              <div>
                <PlainText
                  onChange={ onChangeStat4 }
                  value={ stat4 }
                  placeholder="Stat"
                />
                <PlainText
  	              onChange={ onChangeStat4Caption }
  	              value={ stat4Caption }
                  placeholder="Caption"
  	            />
              </div>
            </section>

            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { headline, content, stat1, stat1Caption, stat2, stat2Caption, stat3, stat3Caption, stat4, stat4Caption} = attributes;

        return(
          <div class="greyback city break-out">
            <div class="container padded padded-160t padded padded-160b text-center">
              <div class="animate fadein">
                <h2>{headline || ""}</h2>
                <div class="content"><p>{content || ""}</p></div>
                <div class="row padded padded-40t" id="scrollTrigger-stats">
                  <div class="col-sm-6 col-lg-3">
                    <div class="stat-box">
                      <div class="stat-text" id="one">
                        <h1>{stat1 || ""}</h1>
                        <span>{stat1Caption || ""}</span>
                      </div>
                      <svg class="stat-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                        <polyline points="70 2 2 2 2 270 270 270 270 150"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="stat-box">
                      <div class="stat-text" id="two">
                      <h1>{stat2 || ""}</h1>
                      <span>{stat2Caption || ""}</span>
                      </div>
                      <svg class="stat-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                        <polyline points="70 2 2 2 2 270 270 270 270 150"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="stat-box">
                      <div class="stat-text" id="three">
                      <h1>{stat3 || ""}</h1>
                      <span>{stat3Caption || ""}</span>
                      </div>
                      <svg class="stat-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                        <polyline points="70 2 2 2 2 270 270 270 270 150"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div class="col-sm-6 col-lg-3">
                    <div class="stat-box">
                      <div class="stat-text" id="four">
                      <h1>{stat4 || ""}</h1>
                      <span>{stat4Caption || ""}</span>
                      </div>
                      <svg class="stat-square animate draw-wait" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                        <polyline points="70 2 2 2 2 270 270 270 270 150"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      );


    },
} );
