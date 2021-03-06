import React from 'react';
import addons from '@storybook/addons';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript.js';
import 'prismjs/components/prism-sass.js';
import 'prismjs/components/prism-scss.js';

import { STORY_CHANGED } from '@storybook/core-events';

//TODO : fix webpack css loader
import '!style-loader!css-loader!prismjs/themes/prism.css';

class Code extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      code: '',
    };
    this.channelName = `soft/code/add_${props.type}`;
    this.onSelectTab = this.onSelectTab.bind(this);
  }

  onSelectTab({ code, type }) {
    const formattedCode =
      type && code && Prism.highlight(code, Prism.languages[type]);
    this.setState({
      code: formattedCode,
    });
  }

  componentDidMount() {
    const { channel, api } = this.props;
    channel.on(this.channelName, this.onSelectTab);

    this.stopListeningOnStory = api.on(STORY_CHANGED, () => {
      this.onSelectTab('');
    });
  }

  render() {
    const { code } = this.state;
    const { type } = this.props;
    const { active } = this.props;

    if (active) {
      return (
        <div>
          {' '}
          {code ? (
            <pre>
              <code>
                <div
                  dangerouslySetInnerHTML={{
                    __html: code,
                  }}
                />{' '}
              </code>{' '}
            </pre>
          ) : (
            <p>
              {' '}
              No {type}
              code Found{' '}
            </p>
          )}{' '}
        </div>
      );
    } else {
      return '';
    }
  }

  componentWillUnmount() {
    if (this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }

    this.unmounted = true;
    const { channel, api } = this.props;
    channel.removeListener(this.channelName, this.onSelectTab);
  }
}

const registerTab = ({ label, type }) => {
  addons.register(`soft/code/add_${type}`, (api) => {
    addons.addPanel(`soft/${type}/panel`, {
      title: label,
      render: ({ active, key }) => (
        <Code
          channel={addons.getChannel()}
          key={key}
          api={api}
          type={type}
          active={active}
        />
      ),
    });
  });
};

export const setTabs = (tabs) => {
  const tabsToRender = [].concat(tabs);
  tabsToRender.forEach((t) => registerTab(t));
};
