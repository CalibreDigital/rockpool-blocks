import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
// const { Button } = wp.components;

registerBlockType( 'sm/three-values', {
    title: 'Three values (dark background)',
    icon: 'editor-insertmore',
    category: 'layout',
    attributes: {
        headline: {
          source: 'text',
          selector: 'div.blackback h1.text-center'
        },
        stat1: {
          source: 'text',
          selector: 'div.blackback #one h2'
        },
        stat1Caption: {
          source: 'text',
          selector: 'div.blackback #one p'
        },
        stat2: {
          source: 'text',
          selector: 'div.blackback #two h2'
        },
        stat2Caption: {
          source: 'text',
          selector: 'div.blackback #two p'
        },
        stat3: {
          source: 'text',
          selector: 'div.blackback #three h2'
        },
        stat3Caption: {
          source: 'text',
          selector: 'div.blackback #three p'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { headline, stat1, stat1Caption, stat2, stat2Caption, stat3, stat3Caption} = attributes;

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


        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="value-background">
            <aside>
              <div class="centred">
  	            <PlainText
  	              onChange={ onChangeHeadline }
  	              value={ headline }
                  placeholder="Headline"
  	            />
              </div>

            <section class="columns">
              <div>
                <PlainText
                  onChange={ onChangeStat1 }
                  value={ stat1 }
                  placeholder="Value"
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
                  placeholder="Value"
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
                  placeholder="Value"
                />
                <PlainText
  	              onChange={ onChangeStat3Caption }
  	              value={ stat3Caption }
                  placeholder="Caption"
  	            />
              </div>
            </section>

            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { headline, stat1, stat1Caption, stat2, stat2Caption, stat3, stat3Caption} = attributes;

        return(
          <div class="blackback break-out">
              <div class="container padded padded-160t padded-80b">
                <div class="animate fadein-wait">
                  <h1 class="text-center">{headline || ""}</h1>

                  <div class="row padded padded-80t padded padded-80b" id="scrollTrigger-reasons">
                    <div class="col-lg-4" id="one">
                      <div class="stat-box" >
                        <div class="stat-text">
                          <h2>{stat1 || ""}</h2>
                        </div>
                        <svg class="stat-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                          <polyline points="70 2 2 2 2 270 270 270 270 100"></polyline>
                        </svg>
                      </div>
                      <p>{stat1Caption || ""}</p>
                    </div>
                    <div class="col-lg-4"  id="two">
                      <div class="stat-box">
                        <div class="stat-text">
                          <h2>{stat2 || ""}</h2>
                        </div>
                        <svg class="stat-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                          <polyline points="70 2 2 2 2 270 270 270 270 100"></polyline>
                        </svg>
                      </div>
                      <p>{stat2Caption || ""}</p>
                    </div>
                    <div class="col-lg-4" id="three">
                      <div class="stat-box">
                        <div class="stat-text">
                          <h2>{stat3 || ""}</h2>
                        </div>
                        <svg class="stat-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.83 273.83">
                          <polyline points="70 2 2 2 2 270 270 270 270 100"></polyline>
                        </svg>
                      </div>
                      <p>{stat3Caption || ""}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )


    },
} );
