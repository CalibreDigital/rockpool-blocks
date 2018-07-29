import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
const { SelectControl } = wp.components;

registerBlockType( 'sm/details', {
    title: 'Details',
    icon: 'schedule',
    category: 'layout',
    attributes: {
        headline: {
          source: 'text',
          selector: 'div.ltgreyback .text-center h1'
        },
        stat1: {
          source: 'text',
          selector: 'div.ltgreyback #one h3'
        },
        stat1Caption: {
          type: 'array',
          source: 'children',
          selector: 'div.ltgreyback #one p'
        },
        stat1Icon: {
          source: 'attribute',
          selector: '#icon1',
          attribute: 'src'
        },
        stat2: {
          source: 'text',
          selector: 'div.ltgreyback #two h3'
        },
        stat2Caption: {
          type: 'array',
          source: 'children',
          selector: 'div.ltgreyback #two p'
        },
        stat2Icon: {
          source: 'attribute',
          selector: '#icon2',
          attribute: 'src'
        },
        stat3: {
          source: 'text',
          selector: 'div.ltgreyback #three h3'
        },
        stat3Caption: {
          type: 'array',
          source: 'children',
          selector: 'div.ltgreyback #three p'
        },
        stat3Icon: {
          source: 'attribute',
          selector: '#icon3',
          attribute: 'src'
        },
        stat4: {
          source: 'text',
          selector: 'div.ltgreyback #four h3'
        },
        stat4Caption: {
          type: 'array',
          source: 'children',
          selector: 'div.ltgreyback #four p'
        },
        stat4Icon: {
          source: 'attribute',
          selector: '#icon4',
          attribute: 'src'
        },
        stat5: {
          source: 'text',
          selector: 'div.ltgreyback #five h3'
        },
        stat5Caption: {
          type: 'array',
          source: 'children',
          selector: 'div.ltgreyback #five p'
        },
        stat5Icon: {
          source: 'attribute',
          selector: '#icon5',
          attribute: 'src'
        },
        stat1Href: {
          selector: 'div.ltgreyback #one a',
          attribute: 'href'
        },
        stat2Href: {
          selector: 'div.ltgreyback #two a',
          attribute: 'href'
        },
        stat3Href: {
          selector: 'div.ltgreyback #three a',
          attribute: 'href'
        },
        stat4Href: {
          selector: 'div.ltgreyback #four a',
          attribute: 'href'
        },
        stat5Href: {
          selector: 'div.ltgreyback #five a',
          attribute: 'href'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { headline, stat1, stat1Caption, stat1Icon, stat2, stat2Caption, stat2Icon, stat3, stat3Caption, stat3Icon, stat4, stat4Caption, stat4Icon, stat5, stat5Caption, stat5Icon, stat1Href, stat2Href, stat3Href, stat4Href, stat5Href } = attributes;

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
        function onChangeStat5( newValue ) {
            setAttributes( { stat5: newValue } );
        }
        function onChangeStat5Caption( newValue ) {
            setAttributes( { stat5Caption: newValue } );
        }
        function onChangeStat1Href( newValue ) {
            setAttributes( { stat1Href: newValue } );
        }
        function onChangeStat2Href( newValue ) {
            setAttributes( { stat2Href: newValue } );
        }
        function onChangeStat3Href( newValue ) {
            setAttributes( { stat3Href: newValue } );
        }
        function onChangeStat4Href( newValue ) {
            setAttributes( { stat4Href: newValue } );
        }
        function onChangeStat5Href( newValue ) {
            setAttributes( { stat5Href: newValue } );
        }
        function onChangeStat1Icon( newValue ) {
            setAttributes( { stat1Icon: newValue } );
        }
        function onChangeStat2Icon( newValue ) {
            setAttributes( { stat2Icon: newValue } );
        }
        function onChangeStat3Icon( newValue ) {
            setAttributes( { stat3Icon: newValue } );
        }
        function onChangeStat4Icon( newValue ) {
            setAttributes( { stat4Icon: newValue } );
        }
        function onChangeStat5Icon( newValue ) {
            setAttributes( { stat5Icon: newValue } );
        }

        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="detail-section">
            <aside>
              <div class="centred">
  	            <PlainText
  	              onChange={ onChangeHeadline }
  	              value={ headline }
                  placeholder="Headline"
  	            />
              </div>

            <section class="columns">
              <div class="box">
                <SelectControl

              	  value={ stat1Icon }
              		onChange={ onChangeStat1Icon }
              		options={ [
                    { value: undefined, label: 'No icon' },
{ value: '/wp-content/themes/rockpool-2018/img/icon-chart.svg', label: 'Chart' },
              			{ value: '/wp-content/themes/rockpool-2018/img/icon-lending.svg', label: 'Lending' },
              			{ value: '/wp-content/themes/rockpool-2018/img/icon-portfolio.svg', label: 'Portfolio' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-coins.svg', label: 'Coins' },
              			{ value: '/wp-content/themes/rockpool-2018/img/icon-login.svg', label: 'Login' },
              			{ value: '/wp-content/themes/rockpool-2018/img/icon-advisors.svg', label: 'Advisors' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrow.svg', label: 'Arrow' },
              			{ value: '/wp-content/themes/rockpool-2018/img/icon-arrows.svg', label: 'Arrows' },
              		] }
              	/>
                <PlainText
                  onChange={ onChangeStat1 }
                  value={ stat1 }
                  placeholder="Section"
                />
                <RichText
                  tagName="p"
  	              onChange={ onChangeStat1Caption }
  	              value={ stat1Caption }
                  placeholder="Content"
  	            />
                <URLInput
    							onChange={ onChangeStat1Href }
    							value={ stat1Href }
    						/>
              </div>
              <div class="box">
                <SelectControl

                  value={ stat2Icon }
                  onChange={ onChangeStat2Icon }
                  options={ [
                    { value: undefined, label: 'No icon' },
{ value: '/wp-content/themes/rockpool-2018/img/icon-chart.svg', label: 'Chart' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-lending.svg', label: 'Lending' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-portfolio.svg', label: 'Portfolio' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-coins.svg', label: 'Coins' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-login.svg', label: 'Login' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-advisors.svg', label: 'Advisors' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrow.svg', label: 'Arrow' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrows.svg', label: 'Arrows' },
                  ] }
                />
                <PlainText
                  onChange={ onChangeStat2 }
                  value={ stat2 }
                  placeholder="Section"
                />
                <RichText
                  tagName="p"
  	              onChange={ onChangeStat2Caption }
  	              value={ stat2Caption }
                  placeholder="Content"
  	            />
                <URLInput
    							onChange={ onChangeStat2Href }
    							value={ stat2Href }
    						/>
              </div>
            </section>
            <section class="columns">
              <div class="box">
                <SelectControl

                  value={ stat3Icon }
                  onChange={ onChangeStat3Icon }
                  options={ [
                    { value: undefined, label: 'No icon' },
{ value: '/wp-content/themes/rockpool-2018/img/icon-chart.svg', label: 'Chart' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-lending.svg', label: 'Lending' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-portfolio.svg', label: 'Portfolio' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-coins.svg', label: 'Coins' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-login.svg', label: 'Login' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-advisors.svg', label: 'Advisors' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrow.svg', label: 'Arrow' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrows.svg', label: 'Arrows' },
                  ] }
                />
                <PlainText
                  onChange={ onChangeStat3 }
                  value={ stat3 }
                  placeholder="Section"
                />
                <RichText
                  tagName="p"
  	              onChange={ onChangeStat3Caption }
  	              value={ stat3Caption }
                  placeholder="Content"
  	            />
                <URLInput
    							onChange={ onChangeStat3Href }
    							value={ stat3Href }
    						/>
              </div>
              <div class="box">
                <SelectControl

                  value={ stat4Icon }
                  onChange={ onChangeStat4Icon }
                  options={ [
                    { value: undefined, label: 'No icon' },
{ value: '/wp-content/themes/rockpool-2018/img/icon-chart.svg', label: 'Chart' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-lending.svg', label: 'Lending' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-portfolio.svg', label: 'Portfolio' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-coins.svg', label: 'Coins' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-login.svg', label: 'Login' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-advisors.svg', label: 'Advisors' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrow.svg', label: 'Arrow' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrows.svg', label: 'Arrows' },
                  ] }
                />
                <PlainText
                  onChange={ onChangeStat4 }
                  value={ stat4 }
                  placeholder="Section"
                />
                <RichText
                  tagName="p"
  	              onChange={ onChangeStat4Caption }
  	              value={ stat4Caption }
                  placeholder="Content"
  	            />
                <URLInput
    							onChange={ onChangeStat4Href }
    							value={ stat4Href }
    						/>
              </div>
              <div class="box">
                <SelectControl

                  value={ stat5Icon }
                  onChange={ onChangeStat5Icon }
                  options={ [
                    { value: undefined, label: 'No icon' },
{ value: '/wp-content/themes/rockpool-2018/img/icon-chart.svg', label: 'Chart' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-lending.svg', label: 'Lending' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-portfolio.svg', label: 'Portfolio' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-coins.svg', label: 'Coins' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-login.svg', label: 'Login' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-advisors.svg', label: 'Advisors' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrow.svg', label: 'Arrow' },
                    { value: '/wp-content/themes/rockpool-2018/img/icon-arrows.svg', label: 'Arrows' },
                  ] }
                />
                <PlainText
                  onChange={ onChangeStat5 }
                  value={ stat5 }
                  placeholder="Section"
                />
                <RichText
                  tagName="p"
  	              onChange={ onChangeStat5Caption }
  	              value={ stat5Caption }
                  placeholder="Content"
  	            />
                <URLInput
                  onChange={ onChangeStat5Href }
                  value={ stat5Href }
                />
              </div>
            </section>

            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
        const { headline, stat1, stat1Caption, stat1Icon, stat2, stat2Caption, stat2Icon, stat3, stat3Caption, stat3Icon, stat4, stat4Caption, stat4Icon, stat5, stat5Caption, stat5Icon, stat1Href, stat2Href, stat3Href, stat4Href, stat5Href} = attributes;

        let svgStyle = {
          display: 'block',
          margin: '60px auto 40px'
        }

        return(
          <div class="ltgreyback padded padded-80t padded-80b break-out">
            <div class="container">
              <div class="animate fadein-wait">
                <div class="text-center">
                  <h1>{headline || ""}</h1>
                  <svg enableBackground="new 0 0 100 41.9" viewBox="0 0 100 41.9" class="divider-icon red"><path d="m79.2 1c-5 0-9.7 1.9-13.2 5-2.1 1.5-4 3.3-5.9 5.4-2.8 3.1-6.5 4.9-10.4 5.3-3.9-0.4-7.6-2.2-10.4-5.3-0.9-1.1-1.9-2.1-2.9-3-3.7-4.5-9.3-7.4-15.6-7.4-11.1 0-20.1 9-20.1 20.1s9 20.1 20.1 20.1c5.6 0 10.6-2.3 14.3-5.9 1-0.9 2-1.8 3-2.9 3.2-3.6 7-5.6 11.7-6.1 4.7 0.5 8.4 2.5 11.7 6.1 2.5 2.8 5.2 4.8 7.9 6.2 2.9 1.7 6.3 2.6 9.9 2.6 11.1 0 20.1-9 20.1-20.1-0.1-11.1-9.1-20.1-20.2-20.1z"></path></svg>
                </div>
                <br/><br/><br/>
                <div class="row">
                  <div class="col-md-6" id="one">
                    <img src={ stat1Icon || ""} class="icon" id="icon1"/>
                    <h3>{stat1 || ""}</h3>
                    <p>{stat1Caption || ""}</p>
                    <a href={stat1Href || ""} class="textlink">Learn More →</a>
                  </div>
                  <div class="col-md-6" id="two">
                    <img src={ stat2Icon || ""} class="icon" id="icon2"></img>
                    <h3>{stat2 || ""}</h3>
                    <p>{stat2Caption || ""}</p>
                    <a href={stat2Href || ""} class="textlink">Learn More →</a>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4" id="three">
                    <img src={ stat3Icon || ""} class="icon"  id="icon3"></img>
                    <h3>{stat3 || ""}</h3>
                    <p>{stat3Caption || ""}</p>
                    <a href={stat3Href || ""} class="textlink">Learn More →</a>
                  </div>
                  <div class="col-md-4" id="four">
                    <img src={ stat4Icon || ""} class="icon"  id="icon4"></img>
                    <h3>{stat4 || ""}</h3>
                    <p>{stat4Caption || ""}</p>
                    <a href={stat4Href || ""} class="textlink">Learn More →</a>
                  </div>
                  <div class="col-md-4" id="five">
                    <img src={ stat5Icon || ""} class="icon"  id="icon5"></img>
                    <h3>{stat5 || ""}</h3>
                    <p>{stat5Caption || ""}</p>
                    <a href={stat5Href || ""} class="textlink">Learn More →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    },
} );
