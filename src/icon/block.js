import './editor.scss';

const { registerBlockType, source } = wp.blocks;
const { PlainText, RichText, URLInput  } = wp.editor;
const { SelectControl } = wp.components;

registerBlockType( 'sm/icon', {
    title: 'Customisable Icon',
    icon: 'admin-post',
    category: 'layout',
    description: 'A custom icon',
    attributes: {
        content: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { content, isSelected } = attributes;

        function onChangeContent( newContent ) {
            setAttributes( { content: newContent } );
        }


        return (
					<div>
          <img src={ content || '/wp-content/themes/rockpool-2018/img/icon-chart.svg'} class="icon"></img>
          <SelectControl
            value={ content || '/wp-content/themes/rockpool-2018/img/icon-chart.svg' }
            onChange={ onChangeContent }
            options={ [
              { value: '/wp-content/themes/rockpool-2018/img/icon-chart.svg', label: 'Chart' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-lending.svg', label: 'Lending' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-portfolio.svg', label: 'Portfolio' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-coins.svg', label: 'Coins' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-login.svg', label: 'Login' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-advisors.svg', label: 'Advisors' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-arrow.svg', label: 'Arrow' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-arrows.svg', label: 'Arrows' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-percentage.svg', label: 'Percentage' },
              { value: '/wp-content/themes/rockpool-2018/img/icon-institution.svg', label: 'Institution' },
            ] }
          />
					</div>
        );
    },

    save( { attributes, className } ) {
        const { content } = attributes;
        return <img src={ content || "/wp-content/themes/rockpool-2018/img/icon-chart.svg"} class="icon"></img>;
    },
} );
