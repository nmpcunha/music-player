import { html, TemplateResult } from 'lit';
import '../src/music-player.js';

export default {
  title: 'MusicPlayer',
  component: 'music-player',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <music-player style="--music-player-background-color: ${backgroundColor}" .title=${title}></music-player>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
