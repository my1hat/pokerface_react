import { useEffect } from 'react';
import './VKWidget.scss';

function VKWidget() {
  useEffect(() => {
    window.VK.Widgets.Group(
      'vk_groups',
      {
        mode: 4,
        width: 320,
        height: 619,
        wide: 0,
        no_cover: 0,
        color1: 'FFFFFF',
        color2: '191919',
        // color3: 'd32f2f',
      },
      188579243
    );
  }, []);

  return <div id="vk_groups"></div>;
}

export default VKWidget;
