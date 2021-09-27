import {Main} from '@/components/main/Main';
import {Header} from '@/components/header/Header';
import {Canvas} from '@/components/canvas/Canvas';
import '@/scss/index.scss';

const main = new Main('#root', {
  components: [Header, Canvas]
});

main.render();
