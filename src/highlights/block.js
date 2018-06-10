import './editor.scss';

const { registerBlockType, PlainText, source, RichText } = wp.blocks;
// const { Button } = wp.components;

registerBlockType( 'sm/highlights', {
    title: 'Highlights',
    icon: 'editor-insertmore',
    category: 'layout',
    description: 'Show three simple pieces of information, such as key stats about a product',
    attributes: {
        leftStat: {
          source: 'text',
          selector: 'div.info-highlights div:first-of-type div.highlight'
        },
        leftCaption: {
          source: 'text',
          selector: 'div.info-highlights div:first-of-type div.caption'
        },
        centreStat: {
          source: 'text',
          selector: 'div.info-highlights div:nth-of-type(2) div.highlight'
        },
        centreCaption: {
          source: 'text',
          selector: 'div.info-highlights div:nth-of-type(2) div.caption'
        },
        rightStat: {
          source: 'text',
          selector: 'div.info-highlights div:last-of-type div.highlight'
        },
        rightCaption: {
          source: 'text',
          selector: 'div.info-highlights div:last-of-type div.caption'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { leftStat, leftCaption, centreStat, centreCaption, rightStat, rightCaption } = attributes;

        function onChangeLeftStat( newContent ) {
            setAttributes( { leftStat: newContent } );
        }
        function onChangeLeftCaption( newContent ) {
            setAttributes( { leftCaption: newContent } );
        }
        function onChangeCentreStat( newContent ) {
            setAttributes( { centreStat: newContent } );
        }
        function onChangeCentreCaption( newContent ) {
            setAttributes( { centreCaption: newContent } );
        }
        function onChangeRightStat( newContent ) {
            setAttributes( { rightStat: newContent } );
        }
        function onChangeRightCaption( newContent ) {
            setAttributes( { rightCaption: newContent } );
        }

        let contentStyle = {
          fontFamily: "Gidole, sans-serif"
        }

        return (
					<div class="highlights">
            <aside>
	            <PlainText
	              onChange={ onChangeLeftStat }
	              value={ leftStat }
                placeholder="Stat"
                className="stat"
	            />
              <PlainText
	              onChange={ onChangeLeftCaption }
	              value={ leftCaption }
                placeholder="Caption"
                className="caption"
	            />
            </aside>
            <aside>
	            <PlainText
	              onChange={ onChangeCentreStat }
	              value={ centreStat }
                placeholder="Stat"
                className="stat"
	            />
              <PlainText
	              onChange={ onChangeCentreCaption }
	              value={ centreCaption }
                placeholder="Caption"
                className="caption"
	            />
            </aside>
            <aside>
	            <PlainText
	              onChange={ onChangeRightStat }
	              value={ rightStat }
                placeholder="Stat"
                className="stat"
	            />
              <PlainText
	              onChange={ onChangeRightCaption }
	              value={ rightCaption }
                placeholder="Caption"
                className="caption"
	            />
            </aside>
					</div>
        );
    },

    save( { attributes, className } ) {
      const { leftStat, leftCaption, centreStat, centreCaption, rightStat, rightCaption } = attributes;

      return (
        <div class="row info-highlights">
          <div class="col-md-4">
            <div class="highlight">{leftStat || ""}</div>
            <div class="caption">{leftCaption || ""}</div>
          </div>
          <div class="col-md-4">
            <div class="highlight">{centreStat || ""}</div>
            <div class="caption">{centreCaption || ""}</div>
          </div>
          <div class="col-md-4">
            <div class="highlight">{rightStat || ""}</div>
            <div class="caption">{rightCaption || ""}</div>
          </div>
        </div>
      );
    },
} );
